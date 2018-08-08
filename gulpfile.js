const gulp = require('gulp'),
  plumber = require('gulp-plumber');

const sass = require('gulp-sass'),
  glob = require('gulp-sass-glob'),
  prefixer = require('gulp-autoprefixer');

const injectSvg = require('gulp-inject-svg'),
  injectSvgOptions = { base: '/dist/' };

const babel = require('gulp-babel');

gulp.task('sass', function () {
  gulp.src('dev/sass/main.scss')
    .pipe(plumber())
    .pipe(glob())
    .pipe(sass())
    .pipe(prefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('babel', function () {
  gulp.src('dev/scripts/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('markup', function () {
  gulp.src('dev/pages/*.html')
    .pipe(plumber())
    .pipe(injectSvg(injectSvgOptions))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function () {
  gulp.src('dev/images/*')
    .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function () {
  gulp.src(['dev/fonts/**/*', '!dev/fonts/*.sass'])
    .pipe(gulp.dest('dist/fonts'))
});


gulp.task('watch', function () {
  gulp.watch('dev/sass/**/*.s[a|c]ss', ['sass']);
  // gulp.watch('dev/scripts/*.js', ['babel']);
  gulp.watch('dev/pages/*.html', ['markup']);
  // gulp.watch('dev/images/*', ['images']);
  gulp.watch('dev/fonts/**/*', ['fonts']);
});