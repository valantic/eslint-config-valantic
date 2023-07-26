// TODO: when defining multiple types a whitespace is added around pipe (e.g. "string | object").
module.exports = {
  rules: {
    'jsdoc/tag-lines': ['off'], // Is limited to 'always' or 'never'. Decided not to enforce it.
    'jsdoc/require-returns-description': ['off'], // Is covered by description itself.
  },
}
