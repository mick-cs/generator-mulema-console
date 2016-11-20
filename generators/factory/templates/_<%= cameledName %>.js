/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * Factory in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', function () {
        // Public API here
        return {
            meaningOfLife: meaningOfLife
        };
        // Service logic
        // ...
        var meaningOfLife = 42;

    });
