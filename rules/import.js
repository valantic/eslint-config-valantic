module.exports = {
  'rules': {
    'import/no-mutable-exports': 1,
    'import/no-unresolved': [1, {
      'ignore': [
        '.*?\/utils\/.*', // Ember util scripts
        '.*?\/helpers\/.*'  // Ember helper scripts
      ]
    }]
  }
};
