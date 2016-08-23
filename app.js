var app = angular.module('editableItemApp', []);

app.directive('makeEditable', function() {
    return {
        restrict: 'A',
        templateUrl: 'editable-item-template.html'
    };
});
