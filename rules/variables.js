export default {
  rules: {
    // Disallow labels that share a name with a variable.
    // - Force better code style
    'no-label-var': ['error'],

    // Disallow use of undefined when initializing variables.
    // - Force better code style
    'no-undef-init': ['error'],

    // Disallow use of undefined variable.
    // - Force better code style
    'no-undefined': 2
  }
};
