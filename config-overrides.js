const { override, useBabelRc } = require('customize-cra'); // Cu phap import commonjs

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());
