const formulario = document.querySelector("#formulario");
const input1 = document.getElementById("input1");
const listaTareas = document.getElementById("lista-tareas");
const mesajeError = document.getElementById("error-message");

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
    mesajeError.style.opacity = "1";

    input1.classList.add("error");

    setTimeout(() => {
        mesajeError.style.opacity = "0";
        setTimeout(() => {
            mesajeError.style.display = "none";
            input1.classList.remove("error");
        }, 500);
    }, 5000);
}

function agregarTexto(texto) {
    const li = document.createElement("li");
    const spanTexto = document.createElement("span");
    const botonEliminar = document.createElement("button");

    spanTexto.textContent = texto;
    botonEliminar.textContent = "Eliminar";
    
    li.setAttribute("data-id", Date.now());

    li.appendChild(spanTexto);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);

    botonEliminar.addEventListener("click", () => {
        listaTareas.removeChild(li);
    });
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = input1.value;
    const validacion = validarTexto(texto);

    if (!validacion.valido) {
        mostrarMensaje(validacion.mensaje);
        console.log(validacion.mensaje);
        return;
    }
    input1.value = "";
    agregarTexto(texto);

});