// DOM Document Object Model

// SELECCIÓN DE ELEMENTOS DEL DOM
// Colección de métodos selectores


// Selector de un elemento por su id
let tituloPrincipal = document.getElementById('titulo-principal');
console.log(tituloPrincipal);

// Selector de varios elementos por su etiqueta (poco utilizado)
let buttons = document.getElementsByTagName('button');
console.log(buttons); // Como son varios elementos retorna en Array

// Selector de varios elementos por su clase CSS (poco utilizado)
let parrafosInstrucciones = document.getElementsByClassName('instrucciones');
console.log(parrafosInstrucciones);

// Selector de un elemento solo mediante consulta (muy utilizado)
// en esa consulta se le pasa los mismos selectores que en CSS
let linkDinamico = document.querySelector('a.link-dinamico');
console.log(linkDinamico);

// Selector de varios elementos mediante consulta (muy utilizado)
// idem anterior pero en Array

let jumboItems = document.querySelectorAll('.jumbo li');
console.log(jumboItems);

// MODIFICACIÓN DE ELEMENTOS DEL DOM
// Colección de métodos y propiedades de modificación de elementos

tituloPrincipal.innerHTML = 'Otro título';

buttons[1].disabled = true;

parrafosInstrucciones[0].style.color = 'crimson';

let options = ['Apple','Xioami','Samsung'];

for (i=0; i < jumboItems.length; i++) {
    jumboItems[i].innerHTML = options[i];
}

// CREAR, SUSTITUIR Y ELIMINAR ELEMENTOS DEL DOM

// Crear un elemento y añadirlo

let nuevoItem = document.createElement('li'); // Crea el elemento en JS

nuevoItem.innerHTML = 'Nokia'; // Añadimos contenido

let jumboList = document.querySelector('.jumbo'); // Selecciono al padre

jumboList.appendChild(nuevoItem);

// para eliminar usar removeChild() 
// para sustituir usar replaceChild()

// EVENTOS DEL DOM

// 1er Tipo de implementación de eventos
// mediante eventos de atributo asociados a funciones

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

function toggleModal() {
    if (modal.style.display === 'none') {
        overlay.style.display = 'block';
        modal.style.display = 'block';
    } else {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    }
}

// 2o Tipo de implementación de eventos
// mediante escuchadores

let inputNombre = document.querySelector('.nombre');
let parrafoValidacion = document.querySelector('.validacion');
parrafoValidacion.style.display = 'none';

inputNombre.addEventListener('input', () => {
    if (inputNombre.value.length >= 4) {
        buttons[1].disabled = false;
        parrafoValidacion.style.display = 'none';
    } else {
        buttons[1].disabled = true;
        parrafoValidacion.style.display = 'inline';
    }
})
