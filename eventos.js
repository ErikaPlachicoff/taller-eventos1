document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById('boton')
    boton.style.padding = "5px";
    boton.style.backgroundColor = "green";
    
    boton.addEventListener('click', function() {
        alert("Hola! Soy el div");
    });
    
    });