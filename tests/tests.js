/**
 * Fake constructor for test scenarios
 *
 * @returns {object}
 *
 * @constructor
 */
function Tests() {
  /**
   * Text max-len
   *
   * @returns {string}
   */
  function testMaxLen() {
    return 'This is a test for maximum length of a single row. This should give a warning because having more thant 130 characters.';
  }

  /**
   * Test quotes
   *
   * @returns {string}
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
   * @return {string}
   */
  function testValidJsdoc2() {
    return 'This function should get an error because JSDOC is using "@return" instead of "@returns".';
  }

  /**
   * Test prefer-rest-params
   *
   * Use ...args over 'arguments'
   *
   * @returns {any}
   */
  function testNoUnusedVars() {
    return arguments[0];
  }

  /**
   * There should be a blank line before each if block
   *
   * @param   {boolean}   foo       A property
   * @param   {boolean}   baa       A property
   * @param   {string}    aString   A property
   *
   * @returns {boolean}
   */
  function testPaddingLineBetweenStatements(foo, baa, aString) {
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
    testMaxLen();
    testQuotes();

    testValidJsdoc1();
    testValidJsdoc2();
    testNoUnusedVars();
    testPaddingLineBetweenStatements();
  }

  return {
    init: init
  };
}

module.exports = Tests;
