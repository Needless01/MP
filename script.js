function mostrarMensaje() {
    alert("Te amo");
}

function moverBoton() {
    var button = document.getElementById("noButton");
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
