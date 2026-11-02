//VARIABLES
const listaBotones = document.querySelector("#listaBotones");



//ARRAYS

const arrayImagenes = [
    {
        id: 1,
        src: "assets/viajes-1.jpg",
        alt: "Chica bajo una sombrilla en la playa con palmeras",
        tags: ["chica", "mar", "playa", "sombrilla", "vacaciones", "sol", "palmera" ],
        titulo: "Benditas vacaciones"
    },
    {   
        id: 2,
        src: "assets/viajes-2.jpg",
        alt: "Camino sobre el mar hacia una cabaña",
        tags: ["mar", "playa", "vacaciones", "sol", "cabaña", "descanso", "verano" ],
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
        tags: ["puente", "torre", "sevilla", "calor", "plaza", "sol", "españa", "abanico" ],
        titulo: "Puente de Sevilla"
    },
    {
        id: 6,
        src: "assets/viajes-6.jpg",
        alt: "Carretera junto a la costa",
        tags: ["costa", "mar", "carretera", "destino", "nublado", "playa", "norte" ],
        titulo: "Maravilloso norte"
    },
    {
        id: 7,
        src: "assets/viajes-7.jpg",
        alt: "Castillo en lo alto de un pueblo",
        tags: ["castillo", "fortaleza", "pueblo", "vacaciones", "descanso", "sol", "interior" ],
        titulo: "Fortaleza interior"
    },
];
const arrayCategorias = ["todas", "vacaciones", "playa", "mar", "sol", "sevilla"];

//FUNCIONES

function pintarBotones(arrayCategorias) { //recorremos el array de botones
    arrayCategorias.forEach((categoria) => {
        const li = document.createElement("li"); //creamos LI de lista desordenada
        const boton = document.createElement("button"); //creamos botón
        boton.textContent = categoria; //le añadimos el texto de categoría al botón
        li.append(boton); //metemos los elementos dentro de otro
        listaBotones.append(li);
    }); 
};


//LLAMADAS A LAS FUNCIONES

pintarBotones(arrayCategorias);