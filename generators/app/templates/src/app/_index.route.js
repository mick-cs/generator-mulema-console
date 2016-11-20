(function () {
    'use strict';

    angular
        .module('console')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/app/dashboard');
    }

})();