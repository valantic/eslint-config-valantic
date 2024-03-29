/**
 * Fake constructor for test scenarios.
 *
 * @returns {object} - This should give an error about invalid type casing.
 *
 * @constructor
 */
function Tests() {
  /**
   * This factory does not return an Object, as intended, but 'undefined'.
   */
  const invalidObjectFactory1 = () => {};

  /**
   * @see https://eslint.org/docs/rules/no-constant-binary-expression
   */
  const nullishnessConstant = a + b ?? c;

  /**
   * Should throw an error about 'unsave use of optional chaining'.
   */
  let { someValue } = window.foo?.someValue;

  /**
   * Should throw an error because of unsafe arithmetic operation.
   */
  someValue += window.foo?.someValue;

  /**
   * Test max-len. This comment does also not meet comment pattern because of missing full stop
   *
   * @returns - This should give an error because of missing type.
   */
  function testMaxLen() {
    return 'This is a test for maximum length of a single row. This should give a warning because having more thant 130 characters.';
  }

  /**
   * test quotes. This comment does also not meet comment pattern because of small letter at beginning.
   *
   * @returns {String}
   */
  function testQuotes() {
    return "This should give an error because of invalid double quotes";
  }

  function testValidJsdoc1() {
    return 'This function should get a warning because of missing JSDOC';
  }

  /**
   * Test valid-jsdoc (invalid return)
   *
   * @return {String}
   */
  function testValidJsdoc2() {
    return 'This function should get an error because JSDOC is using "@return" instead of "@returns".';
  }

  /**
   * Test prefer-rest-params
   *
   * Use ...args over 'arguments'
   *
   * @returns {*}
   */
  function testNoUnusedVars() {
    return arguments[0];
  }

  /**
   * Test prefer-rest-params
   *
   * Use ...args over 'arguments'
   *
   * @returns {null} 'null' is always written small because there is no 'Null' in JS.
   */
  function testNull() {
    return null;
  }

  /**
   * This demonstrates a bug in ESLint 4.19.1 in combination with valid-jsdoc.preferType.
   *
   * @param {object} mandatory1 - This line gives an error about lowercase 'object'
   * @param {object|object[]} mandatory2 - This line gives two errors about lowercase 'object'
   * @param {object} [optional1] - This line gives an error about lowercase 'object'.
   * @param {object|object[]} [optional2] - This line gives no error about lowercase 'object'.
   *
   * @returns {Object}
   */
  function optionalParams(mandatory1, mandatory2, optional1, optional2) {
    return {};
  }

  /**
   * There should be a blank line before each if block
   *
   * @param   {Boolean}   foo       A property.
   * @param   {Boolean}   baa       This property should also trigger an error, because it is not mandatory but not last in order.
   * @param   {String}    aString
   *
   * @returns {Boolean|array}
   */
  function testPaddingLineBetweenStatements(foo, baa = true, aString) {
    if (foo) { // This is ok
      return true;
    }
    if (baa) { // This is not ok
      return false;
    }

    switch (aString) {
      case 'case1':
        return true;
      case 'case2':
        return false;

      case 'case3': // This is ok
        return true;

      case 'case4':
        // falls through

      case 'case5': // This is ok
        return true;
      default:
        return false;
    }
  }

  /**
   * A caller for all tests to make it look like valid code
   */
  function init() {
    // The following lines should warn about loosing precision of number value.
    const value1 = 9007199254740993;
    const value2 = 5123000000000000000000000000001;
    const value3 = 1230000000000000000000000.0;
    const value4 = .1230000000000000000000000;
    const value5 = 0X20000000000001;

    testMaxLen(); // this comment should throw an error because of small cap at beginning.
    testQuotes();

    testValidJsdoc1();
    testValidJsdoc2();
    testNoUnusedVars();
    testPaddingLineBetweenStatements(invalidObjectFactory1);

    return [value1, value2, value3, value4, value5, nullishnessConstant];
  }

  return {
    init: init,
    someValue,
  };
}

module.exports = Tests;
