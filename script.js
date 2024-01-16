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

var contadorNo = 0;

function mostrarMensaje() {
    alert("Te amo");
}

function moverBoton() {
    contadorNo++;

    if (contadorNo < 5) {
        var button = document.getElementById("noButton");
        var newX = Math.random() * (window.innerWidth - button.offsetWidth);
        var newY = Math.random() * (window.innerHeight - button.offsetHeight);

        button.style.left = newX + "px";
        button.style.top = newY + "px";
    } else {
        alert("Sabes que la única opción es el 'Sí'");
    }
}
