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
gulp.task( 'default', [ 'sass', 'html', 'scripts', 'watch' ], function() {
    console.log( 'INSIDE TASK: `default`' );
} );

gulp.task( 'html', function() {
  return gulp.src( 'src/**/*.html' )
    .pipe( gulp.dest( 'dist' ) );
} );

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

gulp.task( 'scripts', function() {
    return gulp.src( PATHS.js.src )
        .pipe( uglify() )
        .pipe( rename( function( path ) {
            path.basename += '.min';
            path.extname = '.js';
        } ) )
        .pipe( gulp.dest( PATHS.js.dest ) );
} );

gulp.task( 'watch', function() {
    console.log( 'INSIDE TASK: `watch`' );

    gulp.watch( 'src/sass/**/*.scss', [ 'sass' ] );
} );
