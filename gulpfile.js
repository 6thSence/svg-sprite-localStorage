var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');
var svgmin = require('gulp-svgmin');

gulp.task('svgSpriteBuild', () => {
	return gulp.src('./assets/*.svg')
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(svgSprite({
			mode: "symbols",
			preview: false,
			selector: "icon-%f",
			svg: {
				symbols: 'symbol_sprite.html'
			}
		}))
		.pipe(gulp.dest('./'));
});