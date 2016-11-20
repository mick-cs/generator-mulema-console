/**
 * @ngdoc function
 * @name <%= scriptAppName %>.<%= cameledName %> directive
 * @description
 * # <%= cameledName %> directive
 */

angular.module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', function () {
        return {
            restrict: 'AE',
            scope: {},
            template: '<span></span>',
            link: function (scope, elem, attr) {
            }
        }
    });
