// TEST
// console.log("Sim Sim Salabim");
// USER CONTROLLER ==============================================
angular.module('MyUsers', []).directive('ngmyusers', function(){
  return{
    controllerAs: 'userController',
    controller: ['$http', function UserCtrl($http){

      this.$http = $http;
      var self = this;

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
        console.log('... validating user ...');
        if (Cookies.get('loggedinId') != null){
          self.$http.get('/user/' + Cookies.get('loggedinId')).then(function success(res){
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
          self.login = false;
          self.register = false;
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
        Cookies.remove('loggedinId');
        self.getUser;
        self.currentUser = [{}];
        // self.loggedin = false;
        console.log(Cookies);
      };

    }] // end of controller
  }; // end of return
}); // end of angular.module

// MOVIE CONTROLLER ==============================================
angular.module('MyMovies', []).directive('ngmymovies', function(){
  return{
    controllerAs: 'movieController',
    controller: ['$http', function MovieCtrl($http){

      this.$http = $http;
      var self = this;

      self.movies = [];
      self.totalMovies = 0;

      // ALL MOVIES
      // ALL MOVIES, GET
      // CREATE MOVIE, POST
      // DELETE MOVIE

    }] // end of controller
  }; // end of return
}); // end of angular.module

// TEMP ==============================================

angular.module('MyGoals', []).directive('ngmygoals', function(){
  return{
    controllerAs: 'goalController',
    controller: ['$http', function GoalCtrl($http){

      this.$http = $http;
      var self = this;

    // GOAL CONTROLLER (AND STEP?)
    // ================================================
      self.goals = [];
      self.totalGoals = 0;

      // ALL GOALS
      this.totalGoals = function() {
        return self.goals.length
      };

      // ALL GOALS, GET
      this.getGoals = function(){
        console.log('Searching for all goals...');
        self.$http.get('/goals').then(function(res){
          // TEST
          console.log(res);

          self.goals = res.data;
        });
        return self.goals;
      }; // end of GOAL GET
      this.getGoals();

      // CREATE GOAL, POST
      this.addGoal = function(){
        self.$http.post('/goals', {goalTitle: this.formGoalTitle}).then(function success(res){
          // TEST
          console.log(res.data);

          self.goals.push(res.data);
          self.formGoalTitle = '';
        }, function error(){
          console.log("D'OH...CREATE ERROR...")
        });
      }; // end of USER.GOAL POST

      // EDIT GOAL
        this.populateGoalForm = function(goal){
          self.formGoalId = goal._id;
          self.formGoalTitle = goal.goalTitle;
          // self.formGoalStep = goal.step;
        };

        this.editGoal = function(){
          var id = this.formGoalId;
          self.$http.put('/goals/' + id, {
            goalTitle: this.formGoalTitle,
            // steps: this.formGoalStep
          }).then(function success(res){
            // TEST
            console.log(res);

            self.getGoals();
            self.formGoalId = '';
            self.formGoalTitle = '';
          }, function error(){
            console.log("D'OH...EDIT ERROR...")
          });
        }; // end of GOAL PUT

      // DELETE GOAL
      this.deleteGoal = function(goal){
        var id = goal._id;
        self.$http.delete('/goals/' + id).then(function success(res){
          // TEST
          console.log(res);

          self.getGoals();
        }, function error(){
          console.log("D'OH...DELETE ERROR...");
        });
      }; // end of GOAL DELETE

    }] // end of controller
  }; // end of return
}); // end of angular.module
