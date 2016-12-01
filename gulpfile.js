/* IMPORT MODULES */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


/* DECLARE VARS */
var PATHS = {
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

    return gulp.src( 'src/sass/styles.scss' )
        .pipe( sass(
            {
                outputStyle: 'expanded',
                includePaths: [
                    'node_modules/normalize.css',
                    'node_modules/bourbon/app/assets/stylesheets',
                    'node_modules/susy/sass'
                ]
            }).on( 'error', sass.logError )
        )
        .pipe( gulp.dest( 'dist/css/' ) ); 
} );


/**
 * Task minifies and renames all `*.js` files in `src/`
 * directory. Resulting files are saved to `dist/` directory
 */
gulp.task( 'scripts', function() {
    return gulp.src( PATHS.js.src )
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

    gulp.watch( 'src/sass/**/*.scss', [ 'sass' ] );
} );
