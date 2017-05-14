const gulp = require('gulp');

const jsFiles = ['*.js', 'src/**/*.js'];

const eslint = require('gulp-eslint');

const wiredep = require('wiredep').stream;

const bowerjson = require('./bower.json');

const options = {
  bowerJson: bowerjson,
  directory: './public/lib'
};

gulp.task('lint', () => {
  gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('inject', () => {
  gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./src/views'));
});

gulp.task('default', ['lint'], () => {
  // This will only run if the lint task is successful...
  console.log('Linting Successful!');
});
