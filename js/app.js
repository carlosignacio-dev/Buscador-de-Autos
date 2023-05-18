
//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor para los resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}


//Eventoss
document.addEventListener("DOMContentLoaded",() => {
    mostrarAutos(autos);//Muestra los automobiles

    //Llenar las opciones de años
    llenarSelect();
});

//EventListener para los select de busqueda:

//Marca
marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;
    
    filtrarAuto();
});
//Year Select
year.addEventListener("change", (e) => {
    datosBusqueda.year = parseInt( e.target.value );

    filtrarAuto();
});
//Minimo Select
minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
});
//Maximo Select
maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
});
//Puertas Select
puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = e.target.value;
});
//Transmision Select
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
});
//Color Select
color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
});

//Mostrar en el html
function mostrarAutos(autos) {

    limpiarHTML();//Elimina HTML previo

    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `;
        //insertar en HTML
        resultado.appendChild(autoHTML);
    })
}

//Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select:
function llenarSelect() {
    for( let i = max; i > min; i-- ) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega opciones de año al select
    }
}

//Funcion que filtra en base a la busqueda:
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear );

    console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if( year ) {
        return auto.year === year;
    }
    return auto;
}