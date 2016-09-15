angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'introCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('addEntry', {
    url: '/addentry',
    templateUrl: 'templates/addEntry.html',
    controller: 'addEntryCtrl'
  })

  .state('editEntry', {
    url: '/calendar/:id/editentry',
    templateUrl: 'templates/editEntry.html',
    controller: 'editEntryCtrl'
  })

  .state('calendar', {
    url: '/calendar',
    templateUrl: 'templates/calendar.html',
    controller: 'calendarCtrl'
  })

  .state('viewEntry', {
    url: '/calendar/:id',
    templateUrl: 'templates/viewEntry.html',
    controller: 'viewEntryCtrl'
  })

$urlRouterProvider.otherwise('/')
})

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]);
