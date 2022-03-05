
// Extraer dependencias:
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass")); // No es sintaxis de gulp, sino de nodejs
const plumber = require("gulp-plumber");

// 3 pasos para realizar para compilar sass
function css( done ) {
    // 1. Identificar el archivo .SCSS a compilar
    src("src/scss/**/*.scss")
        .pipe( plumber())
        .pipe( sass() ) // 2. Compilarlo
        .pipe( dest("build/css") ) // 3. Almacenarla    

    done();
}

// Crear un watch
function dev( done ) {
    watch("src/scss/**/*.scss", css)// parametros: 1.A qué archivo le haré watch y 2. Qué función estará asociada
    done();
}

exports.css = css;
exports.dev = dev;