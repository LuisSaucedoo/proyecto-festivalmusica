
// Extraer dependencias:
const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass")); // No es sintaxis de gulp, sino de nodejs

// 3 pasos para realizar para compilar sass
function css( done ) {
    // 1. Identificar el archivo .SCSS a compilar
    src("src/scss/app.scss")
        .pipe( sass() ) // 2. Compilarlo
        .pipe( dest("build/css") ) // 3. Almacenarla    

    done();
}

exports.css = css;