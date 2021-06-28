const {
  env,
  isPrd,
  ver
} = require('./config');

module.exports = {
  __ENV__: env,
  __IS_PRD__: isPrd,
  __VERSION__: ver,
};
