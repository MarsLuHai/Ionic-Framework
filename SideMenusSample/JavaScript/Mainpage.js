/**
 * Created by Ludovic on 12/01/2017.
 */

/*global angular*/
angular.module('myApp',['ionic'])
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.icon('ion-chevron-left');
    $ionicConfigProvider.backButton.text('');

    $stateProvider
        .state('MonCompte', {
            url: "/MonCompte",
            abstract: true,
            templateUrl: "MonCompte.html"
        })
        .state('MonCompte.Info', {
            url: "/Info",
            views: {
                'MonCompte': {
                    templateUrl: "Info.html",
                    controller: 'InfoCtrl'
                }
            }
        })
        .state('MonCompte.Feedback', {
            url: "/Feedback",
            views: {
                'MonCompte': {
                    templateUrl: "Feedback.html",
                    controller: 'FeedbackCtrl'
                }
            }
        })
        .state('MonCompte.Aide', {
            url: "/Aide",
            views: {
                'MonCompte': {
                    templateUrl: "Aide.html",
                    controller: 'AideCtrl'
                }
            }
        })
        .state('MonCompte.About', {
            url: "/About",
            views: {
                'MonCompte': {
                    templateUrl: "About.html",
                    controller: 'AboutCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise("/MonCompte/Info");
})

    .controller('InfoCtrl', function ($scope) {})
    .controller('FeedbackCtrl', function ($scope) {})
    .controller('AideCtrl', function ($scope) {})
    .controller('AboutCtrl', function ($scope) {})