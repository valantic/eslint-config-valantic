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
   * A caller for all tests to make it look like valid code
   */
  function init() {
    testMaxLen();
    testQuotes();

    testValidJsdoc1();
    testValidJsdoc2();
  }

  return {
    init: init
  };
}

module.exports = Tests;
