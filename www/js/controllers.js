angular.module('app.controllers', ['app.services'])

.controller('introCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('loginCtrl', ['$scope', '$http', '$location', 'Auth', '$stateParams',
  function($scope, $http, $location, Auth, $stateParams) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.userLogin = function() {
      $http.post('http://localhost:3000/api/auth', $scope.user).then(function success(res) {
        Auth.saveToken(res.data.token);
        console.log('Token:', res.data.token);
        $location.path('/welcome');   // or use $state.go('intro');
      }, function error(res) {
          console.log(res);
      });
    }
}])

.controller('signupCtrl', ['$scope', '$http', '$location', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $http, $location, $stateParams) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    // sending the user signup data (email and password) to backend controller
    $http.post('http://localhost:3000/api/users', $scope.user).then(function success(res) {
      // redirecting the front end to the root path
      $location.path('/');
    }, function error(res) {
        console.log(res);
    });
  }
}])

.controller('welcomeCtrl', ['$scope', 'Auth', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, Auth, $location) {
  console.log('Token is:', Auth.getToken());
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    console.log('Token removed:', Auth.getToken());
  }

  // user clicks on 'what i'm wearing' button and this calls a function that determines if user is signed in
  $scope.checkIfLoggedIn = function() {
    if (!Auth.currentUser())
      $location.path('/login');
  }

}])

.controller('addEntryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('editEntryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('calendarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('viewEntryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

