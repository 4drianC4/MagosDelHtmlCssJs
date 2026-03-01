const formulario = document.getElementById("formulario");

function validarTexto(texto) {
    if (texto.trim() === "") {
        return {
            valido: false,
            mensaje: "El campo no puede estar vacío"
        };
    }

    if (texto.trim().length < 3) {
        return {
            valido: false,
            mensaje: "El texto debe tener al menos 3 caracteres"
        };
    }

    if (texto.trim().length > 50) {
        return {
            valido: false,
            mensaje: "El texto no puede tener más de 50 caracteres"
        };
    }

    return {
        valido: true,
        mensaje: "Texto válido"
    };
}

function mostrarMensaje(mensaje) {
    mesajeError.textContent = mensaje;

    setTimeout(() => {
        mesajeError.style.opacity = "0";
        setTimeout(() => {
            mesajeError.style.display = "none";
            input1.classList.remove("error");
        }, 500);
    }, 5000);
}

formulario.