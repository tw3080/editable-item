var app = angular.module('editableItemApp', []);

app.directive('makeEditable', function() {
    return {
        restrict: 'A',
        templateUrl: 'editable-item-template.html',
        transclude: true,
        scope: true,
        link: function($scope, element, attrs) {
            // Initialize isEditable as false (text cannot be edited)
            $scope.isEditable = false;
            $scope.editContent = function() {
                // Set isEditable to 'true' to enable text editing
                $scope.isEditable = true;
            };
            $scope.saveContent = function() {
                // Set isEditable to 'false' to disable text editing
                $scope.isEditable = false;
            };
        }
    };
});
