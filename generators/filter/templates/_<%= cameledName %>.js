/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * filter in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
    .filter("<%= cameledName %>", function () {
        return function (input) {
            if (typeof(input) == "string") {
                return new Date(input)
            } else {
                return input
            }
        }
    });
