 /* eslint strict:0, no-console:0 */
'use strict';

const gulp = require('gulp');
const fs = require('fs');
global.__package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const asset = require('build-asset');
const bundle = require('build-bundle');
const style = require('build-style');
const transform = require('build-transform');

asset.registerTasks({
  glob: '**/*',
  inputDir: 'src/public/',
  outputDir: 'dist/',
  version: __package.version,
  name: 'public'
});

asset.registerTasks({
  glob: '*.*',
  inputDir: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/',
  outputDir: 'dist/',
  version: __package.version,
  name: 'styles/fonts/bootstrap',
  tasksPrefix: 'bootstrap',
  tasksDependencies: ['style']
});

asset.registerTasks({
  glob: '*.*',
  inputDir: 'node_modules/font-awesome/fonts/',
  outputDir: 'dist/',
  version: __package.version,
  name: 'styles/fonts/font-awesome',
  tasksPrefix: 'fontAwesome',
  tasksDependencies: ['style']
});

bundle.registerTasks({
  inputDir: 'lib/apps/',
  outputDir: 'dist/',
  version: __package.version,
  tasksDependencies: ['transform']
});

style.registerTasks({
  glob: '**/*.scss',
  inputDir: 'src/styles/',
  outputDir: 'dist/',
  version: __package.version,
  name: 'styles'
});

transform.registerTasks({
  glob: ['**/*.[tj]s', '!styles/**/*', '!public/**/*'],
  inputDir: 'src/',
  outputDir: 'lib/'
});

/*
 * Build the application.
 */
gulp.task('build', ['bootstrap-asset', 'fontAwesome-asset', 'asset', 'bundle', 'style', 'transform'], function () {
});

/*
 * Fast build the application (only bundle apps).
 */
gulp.task('build-fast', ['asset', 'bundleApps', 'transform'], function () {
});

if (process.env.NODE_ENV !== 'production') {
  const lint = require('build-lint');
  const test = require('build-test');

  lint.registerTasks({
    glob: ['src/**/*.js', '!src/public/**/*', '!src/styles/**/*', '!src/tests/fixtures/**/*']
  });

  test.registerTasks({
    testGlob: ['lib/tests/**/*.spec.js', '!lib/tests/fixtures/**/*', '!lib/tests/setup.js'],
    codeGlob: ['lib/**/*.js', '!lib/tests/**/*.js', '!lib/**/package.js'],
    thresholds: {
      global: { lines: 75 }
    },
    outputDir: 'testResults/',
    tasksDependencies: ['transform'],
    require: './lib/tests/setup'
  });

  /*
   * Test the application.
   */
  gulp.task('test', ['lint', 'test-with-coverage'], function () {
  });

  /*
   * Watch for changes to files.
   */
  gulp.task('watch', ['watch-asset', 'watch-lint', 'watch-style', 'watch-transform'], function () {
    console.log('Watch is running.');
    console.log('Type ^C to stop the watch process.');
  });
}
