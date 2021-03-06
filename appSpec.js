describe('makeEditable', function() {
    var scope,
        html,
        compiled,
        element;

    beforeEach(module('editableItemApp'));
    beforeEach(module('editable-item-template.html'));
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        someText = 'This is some text';
        html = '<div make-editable><p>' + someText + '</p></div>';
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    it('should render the element', function() {
        expect(element.find('div').length).toBe(1);
        expect(element.find('p').length).toBe(1);
        expect(element.text()).toContain(someText);
    });
});
