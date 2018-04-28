var gulp = require('gulp');
// typescript编译插件
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
// 生成js.map文件，便于调试
var sourcemaps = require('gulp-sourcemaps');
// web服务器插件
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');

// 监控文件目录
var tsFiles = 'src/**/*.ts';
var staticFiles = ['src/**/*', '!' + tsFiles];
var npm = 'node_modules/';
var nodeModules = [npm + '@angular/**/bundles/**/*', npm + 'angular-in-memory-web-api/bundles/**/*', npm + 'rxjs/**/*', npm + 'core-js/client/**/*', npm + 'zone.js/dist/**/*', npm + 'systemjs/dist/**/*'
    , npm + 'systemjs-plugin-css/**/*', npm + 'jquery/dist/**/*', npm + 'bootstrap/dist/**/*', npm + 'font-awesome/**/*', npm + 'bootstrap-table/dist/**/*', npm + 'ng2-translate/bundles/*'
    , npm + 'bootbox/bootbox.min.js', npm + '@ng-bootstrap/**/*', npm + 'oeslib/**/*', npm + 'zenap-smart-Table/**/*'
];

// tsc任务，编译ts源代码，并输出到dist目录
gulp.task('tsc', function () {
    gulp.src(tsFiles).pipe(sourcemaps.init()).pipe(tsProject())
        .pipe(sourcemaps.write('maps')).pipe(gulp.dest('dist'));
});

// static任务，拷贝静态文件(除ts之外的html、css等文件)到dist目录
gulp.task('static', function () {
    gulp.src(staticFiles).pipe(gulp.dest('dist'));
});

// modules任务，拷贝node_modules依赖插件文件到dist目录
gulp.task('modules', function () {
    gulp.src(nodeModules, { base: 'node_modules' }).pipe(gulp.dest('dist/plugin'));
});

// watch任务，监视文件变更，重新输出到dist目录
gulp.task('watch-ts', ['tsc'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch-static', ['static'], function (done) {
    browserSync.reload();
    done();
});


// 启动web服务器
gulp.task('server', ['tsc', 'static', 'modules'], function () {
    browserSync.init({
        server: {
            baseDir: "dist",
            middleware: [historyApiFallback()] // 使用angular的html5模式(hash)路由，需要此配置
        }
    });

    gulp.watch(tsFiles, ['watch-ts']);
    gulp.watch(staticFiles, ['watch-static']);
});

// default任务，命令行运行gulp的默认任务
gulp.task('default', ['server'], function () {
    
});