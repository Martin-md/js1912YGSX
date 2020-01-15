
const gulp = require('gulp'); //引入gulp模块
const html = require('gulp-minify-html');//引入gulp下面的gulp-minify-html包
gulp.task('runhtml', function () {
    return gulp.src('src/*.html')
        .pipe(html()) //调用模块或者包
        .pipe(gulp.dest('dist/'));
});
const babel = require('gulp-babel'); //es6转es5主要模块
const bablecore = require('babel-core'); //es6转es5主要模块
const es2015 = require('babel-preset-es2015'); //es6转es5主要模块

const uglifyjs = require('gulp-uglify'); //引入gulp下面的gulp-uglify包
gulp.task('uglifyjs', function () {
    return gulp.src('src/script/*.js')
        .pipe(babel({ //es6转es5
            presets: ['es2015']
        }))
        .pipe(uglifyjs()) //调用模块或者包
        .pipe(gulp.dest('dist/script/'));
});

const css = require('gulp-minify-css'); //引入gulp下面的gulp-minify-css包
// 4.css文件的压缩--gulp-minify-css
gulp.task('runcss', function () {
    return gulp.src('src/stylesheets/*.css')
        .pipe(css()) //调用模块或者包
        .pipe(gulp.dest('dist/css/'));
});

//编译压缩sass,同时生成.map文件。
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件
gulp.task('compilesass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(plugins.sourcemaps.init()) // 初始化 gulp-sourcemaps 插件  生成.map文件初始化  
        .pipe(plugins.sass({ // 调用 sass 插件，编译 sass 文件
            outputStyle: 'compressed' //压缩一行
        }))
        .pipe(plugins.sourcemaps.write('.')) // 生成 sourcemap 生成.map文件 
        .pipe(gulp.dest('dist/css/')); // 目标文件存放路径
});
