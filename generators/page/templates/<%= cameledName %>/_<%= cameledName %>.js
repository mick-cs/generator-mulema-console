/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * controller in <%= cameledName %>
 */

angular.module('<%= scriptAppName %>')
    .controller('<%= cameledName %>Controller', function() {
        var vm = this;
    })

.config(function($stateProvider) {
    // Application routing
    $stateProvider
        .state('app.<%= cameledName %>', {
            url: '/<%= cameledName %>',
            templateUrl: 'app/pages/<%= cameledName %>/<%= cameledName %>.html',
            controller: '<%= cameledName %>Controller as vm',
            data: {
                pageTitle: '<%= cameledName %>'
            }
        })
});