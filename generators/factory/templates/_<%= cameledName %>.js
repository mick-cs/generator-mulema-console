/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * Factory in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', function() {

        var meaningOfLife = 42;
        return {
            meaningOfLife: meaningOfLife
        };

    });