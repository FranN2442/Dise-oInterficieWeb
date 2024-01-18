const {src,dest, watch , series, parallel} = require('gulp'); //Constante general de GULP para usar sus funciones.
const limpiarCSS = require('gulp-clean-css');
const scss = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat-css');
const concatJs = require("gulp-concat");
const uglyJS = require("gulp-uglify");


function compilarSCSS(){

    return src("src/sass/*.scss")
    .pipe(scss())
    .pipe(dest('src/css'));
  
}

function watcherSCSS(){

    watch('src/sass/*.scss',compilarSCSS);

}

function minimizarCSS(){

    return src("src/css/*.css") //Cual es el documento
  .pipe(limpiarCSS())
  .pipe(dest("dist/css/")); //Donde lo mandamos

}

function minimizarProduccionCSS(){

    return src("dist/css/*all.css") 
    .pipe(limpiarCSS())
    .pipe(dest("dist/css/")); 

}

function  compilarJS(){

    return src("src/js/*.js")
    .pipe(uglyJS())
    .pipe(dest("dist/js/"));

}

function concatCSS(){

    return src("dist/css/*.css")
    .pipe(concatCss("all.css"))
    .pipe(dest("dist/css"))
}

function concatJS(){

    return src("dist/js/*.js")
    .pipe(concatJs("all.js"))
    .pipe(dest("dist/js"))
}

function clean(cb) {
    // body omitted
    cb();
  }
  

  function build(cb) {
    // body omitted
    cb();
  }
  
  exports.build = build;
  exports.default = series(clean, build);


/*exports.compilarSCSS = compilarSCSS;
exports.watcherSCSS = watcherSCSS;
exports.minimizarCSS = series(compilarSCSS,minimizarCSS);
exports.compilarJS = compilarJS;
exports.concatCSS = concatCSS;
exports.concatJS = concatJS;
*/

exports.kittens = series(compilarSCSS,minimizarCSS,compilarJS,concatCSS,concatJS,minimizarProduccionCSS);

