# Manipulación del DOM: Alterando la Realidad
## 1. ¿Qué es el DOM? (El Árbol Mágico)

El DOM (Document Object Model) no es parte del lenguaje JavaScript en sí, sino una interfaz que el navegador crea cuando lee tu HTML.

El navegador convierte todas tus etiquetas HTML en un "árbol de objetos" en la memoria. Imagina que cada etiqueta (`<h1>, <p>, <div>`) es una criatura mágica viva con la que JavaScript puede hablar, leer y transformar usando hechizos (funciones).
## 2. Seleccionar Elementos: Apuntando con la Varita

Para modificar algo en la página, primero debes encontrarlo. JavaScript tiene varios "radares" para esto:
### A. Por ID (getElementById)
Ideal para seleccionar un elemento único que tiene un atributo id.
```JavaScript
let titulo = document.getElementById("titulo-principal");
```
### B. El Selector Universal (querySelector / querySelectorAll)
Es la forma más moderna y versátil. Usa exactamente la misma sintaxis que CSS para encontrar elementos.
```JavaScript
// Selecciona el PRIMER elemento con la clase "btn"
let boton = document.querySelector(".btn");

// Selecciona TODOS los <li> (Devuelve una lista/NodeList)
let todosLosItems = document.querySelectorAll("li");
```
## 3. Modificando el Contenido: Hechizos de Transformación

Una vez que tienes el elemento capturado en una variable, puedes cambiar lo que dice o cómo se ve.
### Cambiar Texto (textContent vs innerHTML)
- textContent: Cambia solo el texto. Es seguro y rápido.
    ```JavaScript
	titulo.textContent = "¡Bienvenido, aprendiz Supremo!";
	```
- innerHTML: Cambia el HTML interno. Permite inyectar nuevas etiquetas, pero cuidado: si inyectas texto escrito por un usuario, podrías sufrir ataques de seguridad (XSS).
	```JavaScript

	titulo.innerHTML = "¡Bienvenido, <em>aprendiz</em>!";
	```
### Cambiar Estilos (style)

Puedes cambiar el CSS directamente desde JavaScript. Las propiedades que en CSS tienen guion (como background-color), en JS se escriben en camelCase (backgroundColor).
```JavaScript
titulo.style.color = "purple";
titulo.style.backgroundColor = "gold";
```
## 4. Creación y Destrucción: Invocación y Desaparición

No estás limitado a lo que ya existe en el HTML; puedes crear cosas de la nada.
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
## 5. Eventos: ¡Activando la Magia!

Un evento es cualquier cosa que sucede en la página (un clic, mover el mouse, presionar una tecla). Usamos addEventListener para decirle a JS: "Quédate escuchando, y cuando pase ESTO, ejecuta ESTA función".

### Sintaxis Clásica:
```JavaScript
let boton = document.getElementById("activar-hechizo");

boton.addEventListener("click", function() {
    alert("¡Hechizo lanzado!");
});
```
### Respondiendo a la pregunta del PDF: ¿Cómo usar Funciones Flecha aquí?
¡Es muy sencillo y el código queda mucho más limpio!
```JavaScript
boton.addEventListener("click", () => {
    alert("¡Hechizo lanzado con función flecha!");
});
```
## 6. Validaciones: Runas de Protección (RegEx)

Cuando le pides datos al usuario (en un formulario), no siempre escribirán lo correcto. Para verificar que un texto tiene el formato adecuado, usamos Expresiones Regulares (RegEx), que son patrones de búsqueda.

### ¿Cómo se usan en JS? Usando el método .test(), que devuelve true o false.
```JavaScript
// La runa (patrón) para solo letras
const regexLetras = /^[a-zA-Z\s]+$/; 
let nombreIngresado = "Gandalf el Blanco";

if (regexLetras.test(nombreIngresado)) {
    console.log("Nombre válido, puedes pasar.");
} else {
    console.log("¡Error! Solo se permiten letras.");
}
```
### Diccionario de Runas (Patrones útiles de tu PDF):

1. Solo números: /^\d+$/
2. Solo letras (sin espacios): /^[a-zA-Z]+$/
3. Letras y espacios: /^[a-zA-Z\s]+$/
4. Email válido: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
5. Contraseña segura (Mínimo 8 caracteres, al menos una letra y un número):
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

## 5. Reto del Día 10: "El Botón de Luz"
Creen un botón en HTML y un cuadrado `<div>`. Al hacer clic en el botón, el fondo del cuadrado debe cambiar de negro a amarillo, simulando el hechizo Lumos. ¡Esto aplicará selección, eventos y modificación de estilos!