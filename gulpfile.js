/* IMPORT MODULES */
var gulp = require('gulp');
var sass = require('gulp-sass');


/* DECLARE TASKS */
gulp.task( 'default', [ 'sass', 'html', 'watch' ], function() {
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

gulp.task( 'watch', function() {
    console.log( 'INSIDE TASK: `watch`' );

    gulp.watch( 'src/sass/**/*.scss', [ 'sass' ] );
} );
