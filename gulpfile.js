/* IMPORT MODULES */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');


/* DECLARE VARS */
var PATHS = {
    styles: {
        src: 'src/sass/',
        dest: 'dist/css/',
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    }
};


/* DECLARE TASKS */
/**
 * 'Default' Gulp task, executed when `gulp` is run from the
 * command line with *no* arguments.
 *
 * The following tasks are executed *before* the contents of
 * the `default` task.
 * - `sass`
 * - `html`
 * - `scripts`
 * - `watch`
 */
gulp.task( 'default', [ 'sass', 'html', 'scripts', 'watch' ], function() {
    console.log( 'INSIDE TASK: `default`' );
} );


/**
 * Task copies all `*.html` files from the `src/` directory
 * to the `dist/` directory.
 */
gulp.task( 'html', function() {
  return gulp.src( 'src/**/*.html' )
    .pipe( gulp.dest( 'dist' ) );
} );


/**
 * Task converts contents of `styles.scss` file (plus any
 * `*.scss` linked via `@import)` to vanilla CSS.
 * Resulting CSS file is saved to `dist/` directory
 */
gulp.task( 'sass', function() {
    console.log( 'INSIDE TASK: `sass`' );

    return gulp.src( PATHS.styles.src + 'styles.scss' )
        .pipe( sass(
            {
                outputStyle: 'expanded',
                includePaths: [
                    'node_modules/normalize.css',
                    'node_modules/bourbon/app/assets/stylesheets',
                    'node_modules/susy/sass',
                    'node_modules/sfco-sass-utils'
                ]
            }).on( 'error', sass.logError )
        )
        .pipe( gulp.dest( PATHS.styles.dest ) );
} );


/**
 * Task concanenates, minifies and renames all `*.js` files in
 * `src/`directory. Resulting files are saved to `dist/`.
 */
gulp.task( 'scripts', function() {
    return gulp.src( PATHS.js.src )
        .pipe( concat( 'main.js' ) )
        .pipe( uglify() )
        .pipe( rename( function( path ) {
            path.basename += '.min';
            path.extname = '.js';
        } ) )
        .pipe( gulp.dest( PATHS.js.dest ) );
} );


/**
 * Task watches for changes to files in `src/` directory,
 * executes appropriate task.
 */
gulp.task( 'watch', function() {
    console.log( 'INSIDE TASK: `watch`' );

    gulp.watch( PATHS.styles.src + '**/*.scss', [ 'sass' ] );
    gulp.watch( 'src/**/*.html', [ 'html' ] );
} );
