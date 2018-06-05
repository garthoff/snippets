/**

 The third example of a gulpfile.js
 
 **/
 
 var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );

var styleSRC = 'src/scss/style.scss';
var styleDST = './dist/css/';

// Every single folder in the ./src/scss/ folder will be watched
// For every single file with the extension .scss
var styleWatch = 'src/scss/**/*.scss'; 

var jsSRC = 'src/js/script.js';
var jsDST = './dist/js/';

// Every single folder in the ./src/scss/ folder will be watched
// For every single file with the extension .scss
var jsWatch = 'src/js/**/*.js'; 


gulp.task('compile-style', function()
{
	gulp.src( styleSRC )
		.pipe( sourcemaps.init() )
		.pipe( sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( styleDST ) );
});

gulp.taks('js',function(){
	gulp.src( jsSRC )
	.pipe( gulp.dest ( jsDST ) );
});

gulp.task('default', ['compile-style']);

// taks to enable the gulp watcher which will
// run always to see if files have been chnaged and then
// do the gulp tasks again

gulp.task('watch', ['default'], function(){
	gulp.watch(styleWatch, ['style']);
});
