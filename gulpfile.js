/* IMPORT MODULES */
var gulp = require('gulp');
var sass = require('gulp-sass');


/* DECLARE TASKS */
gulp.task( 'default', [ 'sass' ], function() {
    console.log( 'INSIDE TASK: `default`' );
} );

gulp.task( 'sass', function() {
    console.log( 'INSIDE TASK: `sass`' );

    return gulp.src( 'sass/styles.scss' )
        .pipe( sass( { outputStyle: 'expanded' } ) )
        .pipe( gulp.dest( 'css/' ) ); 
} );
