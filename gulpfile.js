var gulp = require("gulp"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	plumber = require("gulp-plumber"),
	browserSync = require('browser-sync'),
	useref = require("gulp-useref"),
	gulpif = require("gulp-if"),
	uglify = require("gulp-uglify"),
	cleanCSS = require('gulp-clean-css'),
	imagemin = require("gulp-imagemin"),
	runSequence = require("run-sequence");

gulp.task("css", function() {

	gulp.src("src/scss/main.scss")
		.pipe(plumber())
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ["last 5 version", "IE 9"]
		}))
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
});

gulp.task("server", function() {

	browserSync.init({
		server: "src/"
	});

});

gulp.task("watch", function() {

	gulp.watch("src/scss/**/*.scss", ["css"]);
	gulp.watch(["src/*.html", "src/**/*.js" ], browserSync.reload);

});

gulp.task("default", ["css", "server", "watch"]);


gulp.task("html", function() {

    gulp.src("src/*.html")
        .pipe(useref())
        .pipe(gulpif("*.js", uglify() ) )
        .pipe(gulpif("*.css", cleanCSS() ) )
        .pipe(gulp.dest("./"));
});

gulp.task("copy", function() {

    return gulp.src(["src/*.html", "src/fonts/*"], {
        base: "src"
    })
    .pipe(gulp.dest("./"));

});

gulp.task("images", function() {

    return gulp.src("src/img/**/*", {
            base: "src"
        })
        .pipe(imagemin())
        .pipe(gulp.dest("./"));

});

gulp.task("build", function(cb) {

    runSequence("html", "copy", "images", cb);

});

gulp.task("build-server", ["build"], function() {

    browserSync.init({
        server: "./"
    });

});