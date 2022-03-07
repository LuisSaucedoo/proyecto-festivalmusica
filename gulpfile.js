// Extrayendo dependencias:

// CSS
const { src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass")); // No es sintaxis de gulp, sino de nodejs
const plumber = require("gulp-plumber");

// Imágenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css( done ) {
    src("src/scss/**/*.scss") // 1. Identificar el archivo .SCSS a compilar
        .pipe( plumber() )
        .pipe( sass() ) // 2. Compilarlo
        .pipe( dest("build/css") ) // 3. Almacenarla en el disco duro   

    done();
}

function imagenes( done ) {

    const opciones= {
        optimizationLevel: 3
    }

    src("src/img/**/*.{png,jpg}")
        .pipe( cache(imagemin(opciones)) )
        .pipe( dest("build/img") )

    done();
}

function versionWebp( done ) {

    const opciones= {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}")
        .pipe( webp(opciones) )
        .pipe( dest("build/img") )

    done();
}

function versionAvif( done ) {

    const opciones= {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}")
        .pipe( avif(opciones) )
        .pipe( dest("build/img") )

    done();
}

function javascript( done ) {
    src("src/js/**/*.js")
        .pipe( dest("build/js"))
    
    done();
}

// Crear un watch
function dev( done ) {
    watch("src/scss/**/*.scss", css)// parametros: 1.A qué archivo le haré watch y 2. Qué función estará asociada
    watch("src/js/**/*.js", javascript)
    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);