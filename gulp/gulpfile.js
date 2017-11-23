var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();  //插件合集
var uglify = plugins.uglify;   //压缩
var concat = plugins.concat;	//合并文件
var less = plugins.less;		//less解析
var jshint = require('gulp-jshint');   //js 检查
var minifyHtml =require('gulp-minify-html');    //html压缩
var imagemin = plugins.imagemin;     //图片压缩
var rev = require('gulp-rev');       //文件名加md5后缀
var revCollector = require('gulp-rev-collector');  //路径替换


gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev'));
});

gulp.task('less', function() {
    gulp.src('src/less/*')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist/html'));
});

gulp.task('image', function() {
    gulp.src('src/img/**.*')
        .pipe(imagemin({
            progressive: true
            //use: [pngquant] //使用pngquant来压缩图片
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('rev',function(){
	gulp.src(['rev/*.json','src/*.html'])
	.pipe(revCollector())
	.pipe(gulp.dest('dist/html'));
});


gulp.task('default', ['js', 'less', 'html', 'image','rev'], function() {
    console.log('hi~');

});