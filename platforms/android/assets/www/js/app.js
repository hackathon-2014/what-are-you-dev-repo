// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $window, $state, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if (window.OAuth) {
      window.OAuth.initialize('zSqtPiJoJEQV2c3OeR_PndfTmxE');
    }

    if (!$window.user) {
      $state.go('login');
    }

    $rootScope.$on('Login', function(event, user) {
      $state.go('tab.new');
    })
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('splash', {
      url: '/',
      templateUrl: 'templates/splash.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/user",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.auth', {
      url: '/auth',
      views: {
        'tab-auth': {
          templateUrl: 'templates/tab-auth.html',
          controller: 'AuthCtrl'
        }
      }
    })

    .state('tab.sent', {
      url: '/sent',
      views: {
        'tab-sent': {
          templateUrl: 'templates/tab-sent.html',
          controller: 'SentCtrl'
        }
      }
    })

    .state('tab.received', {
      url: '/received',
      views: {
        'tab-received': {
          templateUrl: 'templates/tab-received.html',
          controller: 'ReceivedCtrl'
        }
      }
    })

    .state('tab.new', {
      url: '/new',
      views: {
        'tab-new': {
          templateUrl: 'templates/tab-new.html',
          controller: 'NewCtrl'
        }
      }
    })

    .state('tab.new-contact', {
      url: '/new/:tweeponId/contact',
      views: {  
        'tab-new': {
          templateUrl: 'templates/new-contact.html',
          controller: 'NewCtrl'
        }
      }
    })

    .state('tab.new-review', {
      url: '/new/:tweeponId/:contactId/review',
      views: {  
        'tab-new': {
          templateUrl: 'templates/new-review.html',
          controller: 'NewCtrl'
        }
      }
    })

    // .state('tab.account', {
    //   url: '/account',
    //   views: {
    //     'tab-account': {
    //       templateUrl: 'templates/tab-account.html',
    //       controller: 'AccountCtrl'
    //     }
    //   }
    // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})
;

