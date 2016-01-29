// // TEST
// console.log("Open Sesame");
// ====================================================
angular.module('MyUsers', []).directive('ngmyusers', function(){
  return{
    controllerAs: 'userController',
    controller: ['$http', function UserCtrl($http){

      this.$http = $http;
      var self = this;

      // USER CONTROLLER
      // ================================================
      self.totalUsers = 0;
      self.currentUser = [{}];
      self.register = false;
      self.login = false;
      self.home = false;
      self.loggedIn = false;

      // ALL USERS
      this.totalUsers = function() {
        return self.users.length;
      };

      // USER, GET
      this.getUser = function(){
        console.log('... searching for ALL users ...');
        if (Cookies.get('loggedinID') != null){
          self.$http.get('/users' + Cookies.get('loggedinID')).then(function success(res){
              // TEST
              console.log(res.data)

              self.loggedIn = true;
              self.register = false;
              self.login = false;
          })
        } else {
          self.loggedIn = false;
        };
      }; // end of USER GET

      // REGISTER USER FORM
      this.registerForm = function(){
        self.register = true;
        self.login = false;
      };

      // CREATE USER, POST
      this.registerSubmit = function(){
        self.$http.post('/users', {username: this.registerUsername, password: this.registerPassword}).then(function success(res){
          // TEST
          console.log(res.data);

          self.registerUsername = '';
          self.registerPassword = '';
          self.loggedIn = true;
          self.register = false;
          self.login = false;
        }, function error(){
          alert("D'OH! Seems like Bart broke it. Please try again...");
        });
      }; // end of USER REGISTER

      // LOGIN USER FORM
      this.loginForm = function(){
        self.login = true;
        self.register = false;
      };

      // LOGIN USER
      this.loginSubmit = function(){
        self.$http.post('/login', {username: this.loginUsername, password: this.loginPassword}).then(function success(res){
          // TEST
          console.log(res);

          self.loggedIn = true;
          // TEST
          console.log(self.loggedIn);
          this.loginUsername = '';
          this.loginPassword = '';
          self.getUser();
        }, function error(){
          alert("D'OH! Seems like the wrong email and/or password. Please try again...");
        });
      }; // end of USER LOGIN

      // LOGOUT USER
      this.logOut = function(){
        cookies.remove('loggedIn');
        self.getUser;
        self.loggedin = false;
        console.log(Cookies);
      };

    }] // end of controller
  }; // end of return
}); // end of angular.module
