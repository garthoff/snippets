/**

Example of a basic gulp file

**/

var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );

var styleSRC = './src/scss/style.scss';
var styleDST = './dist/css/';

gulp.task('compile-style', function()
{
	gulp.src( styleSRC )
		.pipe( sass({
			errorLogToConsole: true,
			outputStyle: 'compresses'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( gulp.dest( styleDST ) );
});
