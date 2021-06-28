const NODE_ENV = process.env.NODE_ENV || 'development';
const isPrd = (NODE_ENV === 'production');

module.exports = {
  env: NODE_ENV,
  isPrd: isPrd,
  ver: process.env.npm_package_version,
  srcDir: process.env.npm_package_config_srcDir,
  serveStartPath: process.env.npm_package_config_serveStartPath,
  destDir: !isPrd
    ? process.env.npm_package_config_buildDir
    : process.env.npm_package_config_resultDir,
};
