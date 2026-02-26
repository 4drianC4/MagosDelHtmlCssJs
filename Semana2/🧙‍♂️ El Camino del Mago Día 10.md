# Eventos e Interactividad: Dando Vida a la Magia
## 1. ¿Qué son los Eventos? (El Despertar de la Magia)

Imagina que has creado un muñeco de arcilla (HTML) y le has puesto ropa (CSS). Los Eventos son los sentidos que le das a ese muñeco para que sepa cuándo alguien lo toca, le habla o le entrega un objeto.

Los eventos son acciones o sucesos que ocurren en el navegador. JavaScript puede quedarse "escuchando" estos sucesos para ejecutar una función cuando ocurran.
### Ejemplos de la vida real en la web:
- El usuario hace clic en un botón de "Comprar poción".
- El usuario escribe su nombre en un campo de texto.
- El usuario arrastra una imagen.
- El usuario presiona la tecla Enter.
## 2. El Oído del Mago: addEventListener

Para que un elemento HTML escuche un evento, usamos el método addEventListener (Añadir escuchador de eventos).

Le decimos al navegador: "Presta atención a este elemento. Cuando ocurra X cosa, ejecuta Y función".

### Sintaxis de la invocación:
`elemento.addEventListener('tipoDeEvento', funcionAejecutar);`
### Ejemplo Práctico:
```JavaScript
// 1. Seleccionamos el elemento (Nuestra varita)
const boton = document.querySelector('#miboton');

// 2. Le añadimos el sentido del "tacto" (click)
boton.addEventListener('click', () => {
    alert('¡Hechizo de clic ejecutado con éxito!');
});
```
## 3. El Objeto Evento: El Mensajero Secreto 

Cuando ocurre un evento, el navegador no solo ejecuta la función, sino que le pasa información secreta sobre lo que acaba de ocurrir. Esta información viene en un objeto que solemos llamar e, event o evento.

```JavaScript
const inputMagico = document.querySelector('#palabras-magicas');

inputMagico.addEventListener('keydown', (evento) => {
    // El objeto 'evento' nos dice exactamente qué tecla se presionó
    console.log("Presionaste la tecla: " + evento.key);
    
    // Si presionó Enter, lanzamos el hechizo
    if (evento.key === "Enter") {
        console.log("¡Hechizo lanzado!");
    }
});
```

### La propiedad más poderosa: evento.target
Te indica exactamente qué elemento HTML disparó el evento. Es vital para leer lo que el usuario escribió en un formulario usando evento.target.value.
## 4. Controlando el Destino: preventDefault

Algunos elementos HTML tienen un comportamiento "por defecto" bastante terco.
Por ejemplo, la etiqueta `<form>` intentará enviar los datos a un servidor y recargar la página entera inmediatamente después de hacer clic en enviar. ¡Eso interrumpe nuestra magia en JavaScript!

Para detener este comportamiento predeterminado, usamos el método preventDefault().
```JavaScript
const formulario = document.querySelector('#formulario-registro');

formulario.addEventListener('submit', (evento) => {
    // 1. ¡Detenemos la recarga de la página!
    evento.preventDefault(); 
    
    // 2. Ahora podemos procesar los datos con JS tranquilamente
    console.log('Formulario mágico procesado sin recarga.');
});
```
## 5. Grimoire de Eventos: Los que todo aprendiz debe dominar
| **Tipo de Evento** | **¿Cuándo se activa?**                                     | **Uso común en la magia (Web)**                                         |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| **`click`**        | Al hacer clic en un elemento.                              | Botones de enviar, abrir menús, cerrar modales.                         |
| **`input`**        | Al escribir cada letra dentro de un campo.                 | Buscadores en tiempo real (que muestran resultados mientras escribes).  |
| **`change`**       | Al cambiar el valor de un input o select y perder el foco. | Elegir opciones de un menú desplegable (Select).                        |
| **`submit`**       | Al enviar un formulario.                                   | Validar datos antes de guardarlos en una base de datos.                 |
| **`mouseover`**    | Al pasar el puntero del mouse sobre un elemento.           | Mostrar información extra (tooltips) al pasar por encima de una imagen. |
| **`keydown`**      | Al presionar cualquier tecla.                              | Mover personajes en un juego web, atajos de teclado.                    |

## 6. Reto del Día 10: "El Espejo Parlante"

Para asentar los conocimientos, construyan este pequeño script interactivo:
1. Crea un archivo HTML con un `<input type="text">` y un párrafo `<p id="espejo">`.
2. Usa JS para seleccionar ambos.
3. Añade un evento input al campo de texto.
4. Haz que el párrafo muestre exactamente lo que el usuario está escribiendo en tiempo real (Pista: usa evento.target.value y textContent).