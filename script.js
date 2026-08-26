let imagenes = [

    "imagenes/OIP.webp",
    "imagenes/OIP (1).webp",
    "imagenes/Historia-de-la-escuela-para-el-hogar-Marion-G.-Bock-en-Guatemala-3.jpg",
    "imagenes/IMG_20260515_165149.jpg"

];

let posicion = 0;
let imagenCarrusel = document.getElementById("imagenCarrusel");
let botonAnterior = document.getElementById("anterior");
let botonSiguiente = document.getElementById("siguiente");

function mostrarImagen() {

    imagenCarrusel.src = imagenes[posicion];

}


botonAnterior.addEventListener("click", function () {

    posicion--;

    if (posicion < 0) {

        posicion = imagenes.length - 1;

    }

    mostrarImagen();

});

botonSiguiente.addEventListener("click", function () {

    posicion++;

    if (posicion >= imagenes.length) {

        posicion = 0;

    }

    mostrarImagen();

});

setInterval(function () {

    posicion++;

    if (posicion >= imagenes.length) {

        posicion = 0;

    }

    mostrarImagen();

}, 5000);

let botonesAcordeon =
    document.querySelectorAll(".boton-acordeon");


botonesAcordeon.forEach(function (boton) {

    boton.addEventListener("click", function () {

        let panel = this.nextElementSibling;

        if (panel.style.maxHeight) {

            panel.style.maxHeight = null;

        }

        else {

            panel.style.maxHeight =
                panel.scrollHeight + "px";

        }
    });

});

let botonesPlan =
    document.querySelectorAll(".plan-estudios");


botonesPlan.forEach(function (boton) {

    boton.addEventListener("click", function () {

        alert(
            "El plan de estudios de esta carrera estará disponible próximamente."
        );

    });

});

