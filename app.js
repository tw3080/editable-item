var app = angular.module('editableItemApp', []);

app.directive('makeEditable', function() {
    return {
        restrict: 'A',
        templateUrl: 'editable-item-template.html',
        link: function($scope, element, attrs) {
            $scope.isEditable = false;
            $scope.editContent = function() {
                $scope.isEditable = true;
            };
        }
    };
});
