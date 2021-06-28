const {
  extname
} = require('path')
const {
  get,
  run
} = require('node-cmd');

const {
  srcDir,
  destDir,
  serveStartPath
} = require('./config');

module.exports = {
  files: [
    `${destDir}/**/*`,
    {
      match: `${srcDir}/**/*`,
      fn: (event, file) => {
        console.log(`[${event.toUpperCase()}] ${file}`);
        if (!event.search(/^unlink/g)) return;
        let cmd = '';
        switch (extname(file)) {
          case '.pug':
            cmd = `npm run build:pug -- -o ${destDir}`;
            break;
          case '.sass':
          case '.scss':
            cmd = `npx npm-run-all "build:sass -- -o ${destDir}" "postcss -- ${destDir}/**/*.css"`;
            break;
          case '.js':
            cmd = `npm run webpack`;
            break;
          default:
            cmd = `npm run copy -- ${destDir}`;
        }
        return get(
          cmd,
          function(err, data, stderr){
            if (!err) {
               console.log(`\n\u001b[32m=> Running:\u001b[0m ${cmd}`,data)
            } else {
               console.log(`\n\u001b[31m=> Error:\u001b[0m ${cmd}`,err)
            }
          }
        );
        // console.log(`=> Running: ${cmd}`);
        // return run(cmd);
      },
    },
  ],
  startPath: serveStartPath,
  server: destDir,
  open: 'external',
};
