var gulp = require('gulp'); // 载入Gulp模块
var cleanCss = require('gulp-clean-css');  //加载clean模块  压缩css
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require("gulp-sourcemaps");
var tsPath = ["src/**/*.ts", "src/app.ts"]; // 定义ts文件

// 编译
gulp.task("tsCompile", function () {
  return tsProject
    .src(tsPath)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js.pipe(sourcemaps.write()) // 添加sourcemap
    .pipe(gulp.dest("dist")); // 最终输出到dist目录对应的位置
});

//定义一个压缩css代码的任务,定义一个cleanCss任务，自定义任务名
gulp.task('cleanCss', (cb) => {
  console.log('执行压缩!');
  gulp.src('./src/pages/index/*.css')  //找到原始文件
    .pipe(cleanCss())    //压缩css代码
    .pipe(gulp.dest('./src/pages/index/min_after'));  //压缩后的代码储存在这里
  cb();
});

const del = require('del')
var postcss = require('gulp-postcss');
const runSequence = require('run-sequence')
const autoprefixer = require('autoprefixer')
const $ = require('gulp-load-plugins')()

let prod = false

// -------------------- Clean --------------------------

gulp.task('clean', () => {
  return del(['./dist/**'])
})

// -------------------- Lint ---------------------------

gulp.task('eslint', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
})

gulp.task('jsonlint', () => {
  return gulp.src(['./src/**/*.json'])
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter())
    .pipe($.jsonlint.failAfterError())
})

// -------------------- JSON ---------------------------

gulp.task('json', ['jsonlint'], () => {
  return gulp.src('./src/**/*.json')
    .pipe($.if(prod, $.jsonminify()))
    .pipe(gulp.dest('./dist'))
})

gulp.task('json:watch', () => {
  gulp.watch('./src/**/*.json', ['json'])
})

// -------------------- Assets --------------------------

gulp.task('assets', () => {
  return gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('assets:watch', () => {
  gulp.watch('./src/assets/**', ['assets'])
})

// -------------------- WXML -----------------------------

gulp.task('templates', () => {
  return gulp.src('./src/**/*.wxml')
    .pipe($.if(prod, $.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      keepClosingSlash: true
    })))
    .pipe(gulp.dest('./dist'))
})

gulp.task('templates:watch', () => {
  gulp.watch('./src/**/*.wxml', ['templates'])
})

// -------------------- css ------------------------------

gulp.task('styles', () => {
  return gulp.src(['./src/**/*.css', '!./src/styles/**'])
    .pipe($.less())
    .pipe($.postcss([
      autoprefixer([
        'iOS >= 8',
        'Android >= 4.1'
      ])
    ]))
    .pipe($.if(prod, $.cssnano()))
    .pipe($.rename((path) => path.extname = '.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('styles:watch', () => {
  gulp.watch('./src/**/*.css', ['styles'])
})

// -------------------- JS --------------------------------

// gulp.task('scripts', ['eslint'], () => {
//   return gulp.src('./src/**/*.js')
//     .pipe($.babel())
//     .pipe($.if(prod, $.uglify()))
//     .pipe(gulp.dest('./dist'))
// })

// gulp.task('scripts:watch', () => {
//   gulp.watch('./src/**/*.js', ['scripts'])
// })

// ---------------------------------------------------------

gulp.task('build', [
  'json',
  'assets',
  'templates',
  'styles',
  // 'scripts'
])

gulp.task('watch', [
  'json:watch',
  'assets:watch',
  'templates:watch',
  'styles:watch',
  // 'scripts:watch'
])

gulp.task('build:clean', (callback) => {
  runSequence('clean', 'build', callback)
})

gulp.task('watch:clean', (callback) => {
  runSequence('build:clean', 'watch', callback)
})

gulp.task('build:prod', (callback) => {
  prod = true
  runSequence('build:clean', callback)
})

gulp.task('default', ['watch:clean'])