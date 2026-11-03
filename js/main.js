//VARIABLES
const listaBotones = document.querySelector("#listaBotones");
const fotoGrande = document.querySelector(".fotoGrande");


//ARRAYS

const arrayImagenes = [
    {
        id: 1,
        src: "assets/viajes-1.jpg",
        alt: "Chica bajo una sombrilla en la playa con palmeras",
        tags: ["chica", "mar", "playa", "sombrilla", "vacaciones", "sol", "palmera"],
        titulo: "Benditas vacaciones"
    },
    {
        id: 2,
        src: "assets/viajes-2.jpg",
        alt: "Camino sobre el mar hacia una cabaña",
        tags: ["mar", "playa", "vacaciones", "sol", "cabaña", "descanso", "verano"],
        titulo: "Camino a la felicidad"
    },
    {
        id: 3,
        src: "assets/viajes-3.jpg",
        alt: "Conjunto de señales de destino con diferentes sitios",
        tags: ["señales", "flechas", "verano", "vacaciones", "ruta", "dirección", "destino"],
        titulo: "Próximo destino"
    },
    {
        id: 4,
        src: "assets/viajes-4.jpg",
        alt: "Vista panorámica de la Plaza España en Sevilla",
        tags: ["sevilla", "plaza", "españa", "calor", "abanico", "flamenco", "turismo"],
        titulo: "Plaza España de Sevilla"
    },
    {
        id: 5,
        src: "assets/viajes-5.jpg",
        alt: "Puente en la Plaza España de Sevilla",
        tags: ["puente", "torre", "sevilla", "calor", "plaza", "sol", "españa", "abanico"],
        titulo: "Puente de Sevilla"
    },
    {
        id: 6,
        src: "assets/viajes-6.jpg",
        alt: "Carretera junto a la costa",
        tags: ["costa", "mar", "carretera", "destino", "nublado", "playa", "norte"],
        titulo: "Maravilloso norte"
    },
    {
        id: 7,
        src: "assets/viajes-7.jpg",
        alt: "Castillo en lo alto de un pueblo",
        tags: ["castillo", "fortaleza", "pueblo", "vacaciones", "descanso", "sol", "interior"],
        titulo: "Fortaleza interior"
    },
];
const arrayCategorias = ["vacaciones", "playa", "mar", "sol", "sevilla", "descanso", "destino"];

//EVENTOS
document.addEventListener("click", (ev) => {
    if (ev.target.matches("#listaBotones button")) {
        const tag = ev.target.id;
        //console.log(tag);
        pintarImagenes(tag);
    };
});



//FUNCIONES

function pintarBotones(arrayCategorias) { //recorremos el array de botones
    arrayCategorias.forEach((categoria) => {
        const li = document.createElement("li"); //creamos LI de lista desordenada
        const boton = document.createElement("button"); //creamos botón
        boton.textContent = categoria.toUpperCase(); //le añadimos el texto de categoría al botón
        boton.id = categoria;
        li.append(boton); //metemos los elementos dentro de otro
        listaBotones.append(li);
    });
};

const filtrarImagenes = (tag) => {       //usar posible filter
    console.log("filtrando imágenes", tag);
    const arrayImagenesFiltradas = arrayImagenes.filter((objetoImagen) => {
        return objetoImagen.tags.includes(tag);
    });
    return arrayImagenesFiltradas
};


function pintarImagenes(tag) {
    fotoGrande.innerHTML = ''
    const arrayImagenesFiltradas = filtrarImagenes(tag)
    console.log(arrayImagenesFiltradas)
    arrayImagenesFiltradas.forEach((imagen) => {
        const tarjeta = document.createElement("article");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        tarjeta.classList.add("tarjetaImagen");
        img.src = imagen.src;
        img.alt = imagen.alt;
        h3.textContent = imagen.titulo;
        tarjeta.append(h3, img);
        fotoGrande.append(tarjeta);
    });
};



//LLAMADAS A LAS FUNCIONES

pintarBotones(arrayCategorias);
