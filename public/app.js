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

      // CREATE USER, POST

      // LOGIN USER FORM

      // LOGIN USER

      // LOGOUT USER

    }] // end of controller
  }; // end of return
}); // end of angular.module
