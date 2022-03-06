// Extrayendo dependencias:

// CSS
const { src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass")); // No es sintaxis de gulp, sino de nodejs
const plumber = require("gulp-plumber");

// Imágenes
const webp = require("gulp-webp");

function css( done ) {
    src("src/scss/**/*.scss") // 1. Identificar el archivo .SCSS a compilar
        .pipe( plumber() )
        .pipe( sass() ) // 2. Compilarlo
        .pipe( dest("build/css") ) // 3. Almacenarla en el disco duro   

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


// Crear un watch
function dev( done ) {
    watch("src/scss/**/*.scss", css)// parametros: 1.A qué archivo le haré watch y 2. Qué función estará asociada
    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);