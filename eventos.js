document.addEventListener('DOMContentLoaded', function() {
    const divContenedor = document.querySelector('.contenedor');
    const botonClick = divContenedor.querySelector('button');
    
    divContenedor.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    botonClick.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});