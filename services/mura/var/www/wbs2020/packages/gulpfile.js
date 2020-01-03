var

	/**************************************************************
	* Variables
	**************************************************************/

	/**
	* Configuration
	**/
	config = {

		// Browser reload URL
		url: 							'http://wbs.local/',	//	www.wbs.ac.uk

		// Task-specific
		tasks: {
			autoprefixer: {
	            browsers: 				['last 2 versions', 'ie 11', '> 5% in GB'],
	            cascade: 				false
			},
			mqpacker: {
				sort:					true
			},
			pxtorem: {
				rootValue: 				16,
				replace: 				false,
				selectorBlackList: 		['html', 'body']
			},
			place: {
				preserve: 				false
			}
		},

		// Notifications
		notification: {
			styles: 					"CSS compiled",
			scripts:					"JavaScript compiled",
			fonts: 						"Fonts updated"
		}

	},


	/**
	* Paths | No trailing slash
	**/
	base = {
		src: 							'../media/src',
		dist: 							'../media/dist'
	},
	path = {
		styles: {
			src: 						base.src + '/css',
			dist: 						base.dist + '/css'
		},
		scripts: {
			src: 						base.src + '/js',
			dist: 						base.dist + '/js'
		},
		maps: {
			dist: 						'../../maps/',
		}
	},


	/**************************************************************
	* Dependencies
	**************************************************************/

	// Essential
	gulp 								= require( 'gulp' ), 					// task runner
	postcss 							= require( 'gulp-postcss' ), 			// PostCSS
	cssimport 							= require( 'postcss-easy-import' ), 	// inline @import
	lost 								= require( 'lost' ), 					// grid system | lostgrid.org
	rename 								= require( 'gulp-rename' ), 			// simple file renaming
	plumber 							= require( 'gulp-plumber' ), 			// prevent pipe breaking on error occurences

	// Optimisation
	autoprefixer 						= require( 'autoprefixer' ), 			// autoprefixer
	cssnano 							= require( 'gulp-cssnano' ), 			// minify CSS
	mqcustom							= require( 'postcss-custom-media' ), 	// custom media query helpers
	mqminmax 							= require( 'postcss-media-minmax' ), 	// Use `>=` and `<` operators in media queries
	mqpacker 							= require( 'css-mqpacker' ), 			// pack same CSS media queries into one
	pxtorem 							= require( 'postcss-pxtorem' ), 		// convert PX to Rem with fall-backs
	hexrgba 							= require( 'postcss-hexrgba' ), 		// convert HEX codes to RGBA
	shorthands 							= require( 'postcss-short' ), 			// advanced shorthand properties in CSS
	extend 								= require( 'postcss-extend-rule' ), 	// use the @extend rule in CSS
	responsivetext 						= require( 'postcss-responsive-type' ), // responsive font sizes
	easings 							= require( 'postcss-easings' ), 		// replace easing name from easings.net to cubic-bezier()
	fontpath 							= require( 'postcss-fontpath' ), 		// auto generate src attributes for @font-face
	mixins 								= require( 'postcss-mixins' ), 			// Sass like mixins (must be before 'postcss-simple-vars' and 'postcss-nested')
	simplevars 							= require( 'postcss-simple-vars' ), 	// Sass like varables
	cssnested 							= require( 'postcss-nested' ), 			// Sass like nesting without "&"
	hexrgba 							= require( 'postcss-hexrgba' ), 		// convert HEX codes to RGBA
	cssunits							= require( 'postcss-units' ), 			// Add REM/EM Function
	cssplace							= require( 'postcss-place' ), 			// `place-*` shorthand for flex align and justify

	// JavaScript
	concat 								= require( 'gulp-concat' ), 			// concatenate multiple files
	uglify 								= require( 'gulp-uglify' ), 			// 'Uglify' (minify) JavaScript files

	// Development env
	browserSync 						= require( 'browser-sync' ).create(), 	// live reloading for multiple browsers & devices
	reload 								= browserSync.reload,
	sourcemaps 							= require( 'gulp-sourcemaps' ), 		// generate sourcemaps
	notify 								= require( 'gulp-notify' ) 				// notify developers during/after Gulp tasks

;




/**************************************************************
* Files
**************************************************************/
var fnWatchThemeFiles = function() {

	// Styles
	gulp.watch( path.styles.src + '/**/*.{css,scss,sass}', ['css-theme'] );

	// JavaScript
	gulp.watch( path.scripts.src + '/**/*.js', ['scripts'] );
	gulp.watch( path.scripts.src + '/**/*.js' ).on( 'change', reload );

	// Templates
	gulp.watch( '../**/*.{php,html,twig}' ).on( 'change', reload );

}




/**************************************************************
* Styles
**************************************************************/

/**
* Settings
*/
var aCssProcessors = [
	cssimport,
	cssnested,
	extend,
	easings,
	lost(),
	responsivetext,
	pxtorem( config.tasks.pxtorem ),
	hexrgba,
	fontpath,
	mixins,
	simplevars,
	hexrgba,
	cssunits,
	mqminmax(),
	mqcustom,
	mqpacker( config.tasks.mqpacker ),
	cssplace( config.tasks.place ),
	shorthands,
	autoprefixer( config.tasks.autoprefixer )
];

/**
* Theme
*/
gulp.task( 'css-theme', function() {

	return gulp.src( path.styles.src + '/global.css' )
		.pipe( plumber({
			errorHandler: notify.onError( "Error: <%= error.message %>" )
		}))
		.pipe( sourcemaps.init() )
		.pipe( postcss( aCssProcessors ) )
		.pipe( cssnano() )
		.pipe( rename( 'global.css' ) )
		.pipe( sourcemaps.write( path.maps.dist ) )
		.pipe( gulp.dest( path.styles.dist ) )
		.pipe( notify({
			title: config.notification.styles,
			message: 'Updated <%= file.relative %> sucessfuly.'
		}))
		.pipe( browserSync.stream() );

});






/**************************************************************
* Javascript
**************************************************************/

/**
* Theme
*/
gulp.task( 'scripts', function() {

	// Configuration
	var filename = {
			input:		"global",
			output:		"global.min"
		},
		dir = {
			functions: 	"functions",
			vendors: 	"vendors"
		}
	;

	return gulp.src([
			path.scripts.src + "/" + filename.input + '.js', 					// core global file
			path.scripts.src + "/" + dir.functions + '/**/*.js', 				// individual functions
			path.scripts.src + "/" + dir.vendors + '/**/*.js' 					// third-party vendors
		])
		.pipe( plumber({
			errorHandler: notify.onError( "Error: <%= error.message %>" )
		}))
		.pipe( sourcemaps.init() )
		.pipe( concat( filename.output + '.js' ) )
		.pipe( gulp.dest( path.scripts.dist ) )
		.pipe( uglify() )
		.pipe( sourcemaps.write( path.maps.dist ) )
		.pipe( gulp.dest( path.scripts.dist ) )
		.pipe( notify({
			title: config.notification.scripts,
			message: 'Updated <%= file.relative %> sucessfuly.'
		}))
		.on( 'error', function( error ) {
            console.error( '' + error );
        })

});



/**************************************************************
* Watch files
**************************************************************/
var all_watch_tasks 	= ['css-theme', 'scripts'];

gulp.task( 'default', 	all_watch_tasks, function() { browserSync.init({ server: "../../build" }); fnWatchThemeFiles(); });
gulp.task( 'sync', 		all_watch_tasks, function() { browserSync.init({ proxy: config.url }); fnWatchThemeFiles(); });
gulp.task( 'compile', 	all_watch_tasks );
