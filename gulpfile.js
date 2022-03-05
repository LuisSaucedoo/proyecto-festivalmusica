
function tarea( done ) {
    console.log("Desde la primer tarea");

    done();
}
// en done puede ser: callback, fn o done

function tarea2( done ) {
    console.log("Desde la segunda tarea");

    done();
}

exports.tarea = tarea;
exports.tarea2 = tarea2;