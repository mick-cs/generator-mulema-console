(function () {
    'use strict';

    angular
        .module('<%= appName %>', [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ngMessages',
            'ngAria',
            'ngResource',
            'ui.router',
            'ui.bootstrap'
        ]);
})();