# Manipulación del DOM y Eventos: Alterando la Realidad

> [!INFO] El gran salto
> Hasta ahora, JavaScript solo hablaba consigo mismo (imprimía en consola, calculaba). Hoy JavaScript **hablará con tu HTML**: leerá, modificará y eliminará elementos. Tu página web pasará de ser estática a **viva**.

## 1. ¿Qué es el DOM? (El Árbol Mágico)

El DOM (Document Object Model) no es parte del lenguaje JavaScript en sí, sino una **interfaz que el navegador crea cuando lee tu HTML**.

El navegador convierte todas tus etiquetas HTML en un "árbol de objetos" en la memoria. Imagina que cada etiqueta (`<h1>`, `<p>`, `<div>`) es una **criatura mágica viva** con la que JavaScript puede hablar, leer y transformar.

```HTML
<body>
  <header>
    <h1>Mi Título</h1>
  </header>
</body>
```

Se convierte en un árbol:

```
body
 └── header
      └── h1 "Mi Título"
```

JavaScript puede subir, bajar y modificar cualquier rama de este árbol.

## 2. Cargando el Script Correctamente

> [!IMPORTANT] ¿`</body>` o `defer`?
> Ya sabes que la regla era poner `<script>` al final del body. La alternativa moderna (y más limpia) es ponerlo en el `<head>` **con el atributo `defer`**, que le dice al navegador: "carga el script pero ejecútalo hasta que el HTML esté listo".

```HTML
<head>
    <!-- ... -->
    <script src="script.js" defer></script>
</head>
```

Ambas funcionan. Usa la que prefieras, pero elige una y mantente consistente.

## 3. Seleccionar Elementos: Apuntando con la Varita

Para modificar algo en la página, primero debes **encontrarlo**. JavaScript tiene varios "radares" para esto:

### A. Por ID (getElementById)

Ideal para seleccionar un elemento único que tiene un atributo `id`.

```JavaScript
let titulo = document.getElementById("titulo-principal");
```

### B. El Selector Universal (querySelector / querySelectorAll)

Es la forma más moderna y versátil. Usa **exactamente la misma sintaxis que CSS** para encontrar elementos.

```JavaScript
// Selecciona el PRIMER elemento con la clase "btn"
let boton = document.querySelector(".btn");

// Selecciona el elemento con id "menu"
let menu = document.querySelector("#menu");

// Selecciona TODOS los <li> (devuelve una lista/NodeList)
let todosLosItems = document.querySelectorAll("li");
```

> [!TIP] `querySelector` es tu mejor amigo
> Piensa en `querySelector` como "dame el primero que cumpla con este selector CSS". Es poderoso porque puedes usar `.clase`, `#id`, `etiqueta`, `div > p`, etc. En proyectos reales es el método más usado.

## 4. Modificando el Contenido: Hechizos de Transformación

Una vez que tienes el elemento "capturado" en una variable, puedes cambiar lo que dice o cómo se ve.

### Cambiar Texto (textContent vs innerHTML)

```JavaScript
// textContent: Cambia solo el TEXTO. Es seguro y rápido.
titulo.textContent = "¡Bienvenido, aprendiz Supremo!";

// innerHTML: Cambia el HTML interno. Permite inyectar nuevas etiquetas.
titulo.innerHTML = "¡Bienvenido, <em>aprendiz</em>!";
```

> [!WARNING] Los peligros de innerHTML
> `innerHTML` puede inyectar HTML (y ejecutar scripts). Si usas `innerHTML` con datos que **escribió un usuario**, podrías abrir una vulnerabilidad de seguridad conocida como **XSS** (Cross-Site Scripting). Regla: usa `textContent` siempre que puedas; usa `innerHTML` solo con contenido fijo que tú controlas.

### Cambiar Estilos (style)

Puedes cambiar el CSS directamente desde JavaScript. Las propiedades que en CSS llevan guion (`background-color`), en JS se escriben en **camelCase** (`backgroundColor`).

```JavaScript
titulo.style.color = "purple";
titulo.style.backgroundColor = "gold";
titulo.style.fontSize = "32px";
```

> [!TIP] Mejor aún: usa clases CSS
> En lugar de escribir muchos `style`, define clases en tu CSS y añádelas/quítalas con JS:
> ```JavaScript
> // En CSS: .activo { background-color: gold; color: black; }
> elemento.classList.add("activo");     // Agrega la clase
> elemento.classList.remove("activo");  // Quita la clase
> elemento.classList.toggle("activo");  // Alterna (si la tiene, la quita y viceversa)
> ```
> Esto mantiene los estilos en tu CSS (separación de responsabilidades) y deja tu JS limpio.

## 5. Creación y Destrucción: Invocación y Desaparición

No estás limitado a lo que ya existe en el HTML; puedes **crear cosas de la nada**.

### A. Crear e Inyectar (createElement y appendChild)

1. Creas el elemento en el "limbo" (memoria).
2. Le das contenido.
3. Lo pegas en la página.

```JavaScript
// 1. Invocamos un nuevo elemento <li>
let nuevoItem = document.createElement("li");

// 2. Le damos poder (texto)
nuevoItem.textContent = "Poción de Velocidad";

// 3. Lo añadimos al final de una lista <ul> existente
document.querySelector("ul").appendChild(nuevoItem);
```

### B. Eliminar (remove)

Si un elemento ya no es útil, bórralo de la existencia.

```JavaScript
let maldicion = document.querySelector(".elemento-maldito");
maldicion.remove();
```

## 6. Eventos: ¡Activando la Magia!

Un **evento** es cualquier acción que sucede en la página (un clic, mover el mouse, presionar una tecla). Usamos `addEventListener` para decirle a JS: *"Quédate escuchando, y cuando pase ESTO, ejecuta ESTA función"*.

### Sintaxis

`elemento.addEventListener('tipoDeEvento', funcionAejecutar);`

### Ejemplo Práctico

```JavaScript
const boton = document.getElementById("activar-hechizo");

boton.addEventListener("click", () => {
    alert("¡Hechizo lanzado!");
});
```

> [!TIP] ¿Por qué `.addEventListener` y no `onclick`?
> El atributo `onclick` (antiguo) solo permite **un** manejador. Con `addEventListener` puedes "escuchar" **muchos** eventos distintos sobre el mismo elemento, y es la forma estándar moderna. Acostúmbrate a ella.

### El Objeto Evento: El Mensajero Secreto

Cuando ocurre un evento, el navegador le pasa a la función un **objeto de evento** (comúnmente llamado `e` o `evento`) con información sobre lo que pasó.

```JavaScript
const inputMagico = document.querySelector("#palabras-magicas");

inputMagico.addEventListener("keydown", (evento) => {
    console.log(`Presionaste la tecla: ${evento.key}`);

    if (evento.key === "Enter") {
        console.log("¡Hechizo lanzado!");
    }
});
```

La propiedad más poderosa: **`evento.target`** — te indica exactamente **qué** elemento disparó el evento. Es vital para leer lo que el usuario escribió (`evento.target.value`).

### Controlando el Destino: preventDefault

Algunos elementos HTML tienen un comportamiento "por defecto" bastante terco. Por ejemplo, la etiqueta `<form>` intentará **enviar los datos al servidor y recargar la página**. ¡Eso interrumpe nuestra magia en JavaScript!

```JavaScript
const formulario = document.querySelector("#formulario-registro");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // 1. ¡Detenemos la recarga de la página!

    // 2. Ahora procesamos los datos con JS sin recargar
    const nombre = document.querySelector("#nombre").value;
    console.log(`Formulario procesado. Bienvenido, ${nombre}`);
});
```

## 7. Grimoire de Eventos: Los que todo aprendiz debe dominar

| **Tipo de Evento** | **¿Cuándo se activa?**                                     | **Uso común en la magia (Web)**                                          |
| ------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------ |
| **`click`**        | Al hacer clic en un elemento.                              | Botones de enviar, abrir menús, cerrar modales.                          |
| **`input`**        | Al escribir cada letra dentro de un campo.                 | Buscadores en tiempo real (resultados mientras escribes).                |
| **`change`**       | Al cambiar el valor de un input/select y perder el foco.   | Elegir opciones de un menú desplegable (Select).                         |
| **`submit`**       | Al enviar un formulario.                                   | Validar datos antes de guardarlos.                                       |
| **`mouseover`**    | Al pasar el puntero del mouse sobre un elemento.           | Mostrar información extra (tooltips) al pasar sobre una imagen.          |
| **`keydown`**      | Al presionar cualquier tecla.                              | Atajos de teclado, mover personajes en juegos web.                       |

## 8. (Opcional) Runas de Protección: RegEx

Cuando le pides datos al usuario, no siempre escribirá lo que esperas. Las **Expresiones Regulares** (RegEx) son **patrones de búsqueda** para verificar que un texto tenga el formato adecuado. Puedes usarlas con el método `.test()`, que devuelve `true` o `false`.

```JavaScript
// La runa (patrón) para solo letras
const regexLetras = /^[A-Za-zñÑ\s]+$/;
let nombreIngresado = "Gandalf el Blanco";

if (regexLetras.test(nombreIngresado)) {
    console.log("Nombre válido, puedes pasar.");
} else {
    console.log("¡Error! Solo se permiten letras.");
}
```

### Diccionario de Runas (Patrones útiles)

1. Solo números: `/^\d+$/`
2. Solo letras (sin espacios): `/^[a-zA-Z]+$/`
3. Letras y espacios: `/^[a-zA-Z\s]+$/`
4. Solo letras y ñ: `/^[a-zA-ZñÑ]+$/`
5. Email válido: `/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/`
6. Contraseña segura (mínimo 8 caracteres, al menos una letra y un número): `/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/`

> [!INFO] No memorices RegEx
> Son patrones difíciles de escribir de memoria. Lo importante es saber que existen y saber **buscar** el patrón que necesitas (casi siempre en Google/MDN). Guárdalos en esta nota como tu "grimorio de runas".

## 📝 Dos Retos para el Día

### Reto 1: "El Botón de Luz" (Lumos)

Crea un botón en HTML y un cuadrado `<div>`. Al hacer clic en el botón, el fondo del cuadrado debe cambiar de negro a amarillo. Esto aplicará selección, eventos y modificación de estilos.

```HTML
<button id="lanzar">Lanzar Lumos</button>
<div id="cuadro" style="width: 100px; height: 100px; background-color: black;"></div>
```

```JavaScript
const boton = document.getElementById("lanzar");
const cuadro = document.getElementById("cuadro");

boton.addEventListener("click", () => {
    cuadro.style.backgroundColor = "yellow";
});
```

### Reto 2: "El Espejo Parlante"

Crea un `<input type="text">` y un párrafo `<p id="espejo">`. Con el evento `input`, haz que el párrafo muestre **en tiempo real** lo que el usuario escribe (pista: `evento.target.value` + `textContent`).

> [!TIP] Desglosando el reto 2
> `input` dispara la función con **cada letra** que escribes. En cada disparo, lee el valor actual del campo con `evento.target.value` y asígnaselo al `textContent` del párrafo. ¡Es muy simple!

## 📝 Práctica del Día: Obteniendo la Tercera Insignia

Todo lo de hoy (y los días anteriores) se combina en el reto **"Práctica 9-10. Obteniendo la Tercera Insignia"** de la carpeta de prácticas. Es extenso, pero es la preparación directa para tu **proyecto final del Día 11**.

> [!IMPORTANT] Antes de continuar, verifica que:
> - Sabes seleccionar elementos con `querySelector`.
> - Sabes crear y eliminar elementos con `createElement`, `appendChild` y `remove`.
> - Dominas `addEventListener` y `preventDefault`.
> - Puedes alternar clases con `classList.toggle`, que será clave en el Día 11.