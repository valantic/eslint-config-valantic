/**
 * Fake constructor for test scenarios.
 *
 * @returns {object} - This should give an error about invalid type casing.
 *
 * @constructor
 */
function Tests() {
  /**
   * Test return type any
   *
   * This test does not give an error, as we disabled require-jsdoc for the typescript plugin
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function testReturnTypeAny(): any {
    return 'This Return type is invalid as it returns any';
  }

  /**
   * Test enum type does not give a no-shadow error
   * Comment out the rule 'no-shadow': 'off' in the plugins/typescript to see the error
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enum myEnum {
    item1 = 'item 1',
    item2 = 'item 1',
    item3 = 'item 1',
  }
}

module.exports = Tests;
