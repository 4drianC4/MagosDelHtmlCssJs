const formulario = document.getElementById("formulario");
const input1 = document.getElementById("input1");

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

    mesajeError.style.display = "block";

    setTimeout(() => {
        mesajeError.style.opacity = "0";
        setTimeout(() => {
            mesajeError.style.display = "none";
            input1.classList.remove("error");
        }, 500);
    }, 5000);
}

formulario.addEventListener('submit', (e) => {
     e.preventDefault();
    const texto = input1.value;
    const validacion = validarTexto(texto);
    
    if (!validacion.valido) {
        mostrarMensaje(validacion.mensaje);
        alert(validacion.mensaje);
        return;
    }
    input1.value = "";

});