'use strict';

angular.module('<%= appName %>')
    .controller('MainController', function () {

    })
    .config(function ($stateProvider) {
        // Application routing
        $stateProvider
            .state('app', {
                abstract: true,
                url: "/app",
                templateUrl: "app/pages/main/main.html"
            });
    });