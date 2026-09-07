# Proyecto Final: Tu Portafolio Interactivo ⚡

## 1. La Gran Misión

Has recorrido un largo camino: construiste tu portafolio con HTML y CSS en el Día 6, y luego aprendiste las fuerzas de JavaScript. Hoy llega el momento de **unificar todo**: tu portafolio pasará de ser una página estática a un proyecto **interactivo y vivo**.

Tu misión es convertir el portafolio del Día 6 en la **obra maestra** donde demuestres todo lo aprendido: HTML semántico, CSS estilizado y responsive, y JavaScript que modifica el DOM y reacciona a eventos.

> [!IMPORTANT] Entrega
> Este proyecto se presentará y evaluará en el **Día 12**. Tienes todo el día de hoy para construirlo.

## 2. Funcionalidades Obligatorias

Tu portafolio interactivo debe cumplir con estos 4 bloques. Cada uno demuestra una habilidad evaluada.

### Bloque A: Modo Oscuro/Claro 🌙

Agrega un botón que alterne entre modo claro y modo oscuro.

- Aplica estilos CSS preparados para ambos modos (puedes usar **variables CSS** que cambias dinámicamente).
- Usa `classList.toggle()` para alternar una clase en el `<body>`.

```HTML
<button id="toggle-tema">Cambiar Tema</button>
```

```JavaScript
const botonTema = document.getElementById("toggle-tema");
botonTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
});
```

```CSS
/* En tu CSS */
body.modo-oscuro {
    background-color: #1a1a2e;
    color: #eaeaea;
}

body.modo-oscuro .tarjeta {
    background-color: #16213e;
    border-color: #0f3460;
}
```

> [!TIP] Para bonus: guarda la preferencia
> Con `localStorage` puedes recordar si el usuario eligió modo oscuro, para que al recargar la página se mantenga. Busca `localStorage.setItem` y `localStorage.getItem`. Es una función profesional muy valorada.

### Bloque B: Filtro de Proyectos 🗂️

Tus proyectos (del día 6) deben mostrarse en una cuadrícula. Agrega botones que filtren por categoría.

- Ten un arreglo de objetos con tus proyectos (`nombre`, `descripcion`, `categoria`, `link`).
- Renderiza las tarjetas desde ese arreglo con `createElement`/`appendChild` (o `innerHTML` controlado).
- Los botones cambian qué tarjetas se ven.

```JavaScript
const proyectos = [
    { nombre: "Pergamino de Iniciación", categoria: "html", link: "pergamino.html" },
    { nombre: "Registro del Gremio", categoria: "html", link: "registro.html" },
    { nombre: "Tablero de Misiones", categoria: "css", link: "tablero.html" },
    { nombre: "Carta Holográfica", categoria: "css", link: "carta.html" }
];

function mostrarProyectos(categoria) {
    const contenedor = document.getElementById("grilla-proyectos");
    contenedor.innerHTML = ""; // Limpia el contenedor antes de re-renderizar

    const filtrados = categoria === "todos"
        ? proyectos
        : proyectos.filter(p => p.categoria === categoria);

    filtrados.forEach(proyecto => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `<h3>${proyecto.nombre}</h3><a href="${proyecto.link}">Ver</a>`;
        contenedor.appendChild(tarjeta);
    });
}
```

> [!INFO] ¿Qué es `.filter()`?
> Es un método de arreglos que devuelve un **nuevo arreglo** solo con los elementos que cumplen la condición. Lo verás constantemente en proyectos reales.
> ```JavaScript
> const numeros = [1, 2, 3, 4, 5];
> const pares = numeros.filter(n => n % 2 === 0); // [2, 4]
> ```

### Bloque C: Formulario de Contacto Inteligente 📨

Tu formulario de contacto (del Día 2) ahora debe validarse y responder sin recargar la página.

- Usa `preventDefault()` para no recargar.
- Valida que el nombre no esté vacío y el email tenga formato correcto (usa las **RegEx** del Día 10).
- Al enviar, muestra un mensaje de confirmación (creado dinámicamente) con los datos.
- Si hay errores, muestra mensajes de advertencia clara.

```JavaScript
const form = document.getElementById("form-contacto");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if (nombre === "") {
        alert("El nombre es obligatorio.");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("El email no tiene un formato válido.");
        return;
    }

    const mensaje = document.getElementById("mensaje-confirmacion");
    mensaje.textContent = `¡Gracias, ${nombre}! Recibiremos tu mensaje en ${email}.`;
});
```

> [!TIP] El método `.trim()`
> `"  texto  ".trim()` elimina los espacios al inicio y al final. Es esencial para validar un "nombre vacío", porque `"   "` (solo espacios) no es realmente un nombre.

### Bloque D: Menú de Navegación Responsive 🧭

En móvil, el menú de navegación debe poder colapsarse con un botón (hamburguesa ☰).

- Agrega un botón hamburguesa visible solo en móvil (con media query).
- Al hacer clic, muestra/oculta el menú (`classList.toggle` + una clase que se ve en móvil).
- Alternativa más simple: que el menú se muestre si hace falta, o que las anclas hagan scroll suave.

Criterio mínimo: **el menú funciona bien en móvil** (legible y usable, sin romper el diseño).

## 3. Requisitos de Código

- Tu archivo JS debe estar **externo** (hola, `script.js`) y cargarse con `defer` o al final del body.
- Usa funciones **flecha** (`const funcion = () => {}`).
- Usa **template literals** (`` ` ``) en vez de concatenación con `+`.
- Usa **let/const** (nunca `var`).
- Comenta tu código explicando qué hace cada bloque.

## 4. Pista de Estructura Final del Proyecto

```
portafolio/
├── index.html      ← Página principal (tu portafolio)
├── estilos.css     ← Todos los estilos (con variables y media queries)
├── script.js       ← Toda la interactividad (modo oscuro, filtros, validación, menú)
└── (opcional) carpetas con tus proyectos individuales
```

## 5. Rúbrica del Proyecto Final

| **Criterio**              | **Básico (aprobado)**                                  | **Competente (notable)**                                    | **Experto (sobresaliente)**                              |
| ------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------- |
| **Modo oscuro (A)**       | Botón alterna fondo claro/oscuro.                      | Usa variables CSS y `classList`.                            | También recuerda la preferencia con `localStorage`.      |
| **Filtro (B)**            | Muestra proyectos dinámicamente.                       | Hay un arreglo de objetos y filtro por categoría.            | Uso de `.filter()`, `createElement` y `appendChild`.     |
| **Formulario (C)**        | Usa `preventDefault()` y valida nombre.                | Valida email con RegEx y muestra confirmación.               | Muestra mensajes de error específicos y datos limpios.   |
| **Menú responsive (D)**   | El menú funciona en móvil.                             | Hay botón hamburguesa.                                       | Colapsa solo en móvil y se ve pulido.                    |
| **Código**                | Funciona y está comentado.                             | Usa `const/let`, arrow functions, template literals.         | Limpio, modular y sin código repetido.                   |

> [!TIP] Empieza por lo fácil
> No intentes hacer los 4 bloques a la vez. Hazlo en este orden: A (modo oscuro, el más simple visualmente) → C (formulario) → B (filtro, reutiliza lo aprendido) → D (menú). Si te atascas en uno, salta al siguiente y vuelve.

## 6. Consejos de Último Minuto

- **Guarda tu avance seguido** y prueba cada bloque con Live Server antes de pasar al siguiente.
- **Abre la consola (F12)** para ver errores de JavaScript. Lee los mensajes de error: casi siempre te dicen exactamente dónde está el problema.
- **The magical debug trick**: si algo no funciona, agrega `console.log()` antes y después de la línea sospechosa para ver dónde se rompe.

> *"El mago no teme a los errores: los lee como pistas del enigma."*