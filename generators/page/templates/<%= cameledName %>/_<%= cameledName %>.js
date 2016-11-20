/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * controller in <%= cameledName %>
 */

angular.module('<%= scriptAppName %>')
    .controller('<%= cameledName %>Controller', function ($scope) {

    })

    .config(function ($stateProvider) {
        // Application routing
        $stateProvider
            .state('app.<%= cameledName %>', {
                url: '/<%= cameledName %>',
                templateUrl: 'src/pages/<%= cameledName %>/<%= cameledName %>.html',
                controller: '<%= cameledName %>Controller',
                data: {
                    pageTitle: '<%= cameledName %>'
                }
            })
    });
