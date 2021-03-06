import {assertFailure, assertSuccess} from './testHelper';

describe('use-output-property-decorator', () => {
  it('should fail when "outputs" is used in @Component', () => {
    let source = `
      @Component({
        outputs: [
          'id: foo'
        ]
      })
      class Bar {}
    `;
    assertFailure('use-output-property-decorator', source, {
      message: 'In the "@Component" class decorator of the class "Bar" you are using the "outputs" property, this is considered bad practice. Use "@Output" property decorator instead.',
      startPosition: {
        line: 2,
        character: 8
      },
      endPosition: {
        line: 4,
        character: 9
      }
    });
  });
  it('should succeed when "outputs" is not used', () => {
    let source = `
      @Component({
        selector: 'baz'
      })
      class Bar {}
    `;
    assertSuccess('use-output-property-decorator', source);
  });
  it('should fail when "outputs" is used in @Directive', () => {
    let source = `
      @Directive({
        outputs: [
          'id: foo'
        ]
      })
      class Baz {}
    `;
    assertFailure('use-output-property-decorator', source, {
      message: 'In the "@Directive" class decorator of the class "Baz" you are using the "outputs" property, this is considered bad practice. Use "@Output" property decorator instead.',
      startPosition: {
        line: 2,
        character: 8
      },
      endPosition: {
        line: 4,
        character: 9
      }
    });
  });
});
