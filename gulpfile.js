var gulp = require("gulp"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	plumber = require("gulp-plumber"),
	browserSync = require('browser-sync');

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