'use strict';

angular.module('<%= appName %>')
    .controller('DashboardController', function () {

    })
    .config(function ($stateProvider) {
        // Application routing
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: "app/pages/dashboard/dashboard.html",
                data: {
                    pageTitle: 'dashboard'
                }
            })
    });