# CSS Avanzado: Adaptabilidad y Movimiento
## 1. El Arte de la Metamorfosis: Responsive Design
Antiguamente, las webs solo se veían en computadoras. Hoy, un mago debe asegurarse de que sus hechizos funcionen igual de bien en un celular pequeño que en una pantalla gigante.
### Media Queries (@media)
Son "condicionales" en CSS. Le dicen al navegador: "Si la pantalla mide X tamaño, aplica estos estilos distintos".
#### Sintaxis Mágica:
```CSS
/* Estilos base (Generalmente para Móvil - Mobile First) */
body {
    background-color: white;
    font-size: 16px;
}
/* CONDICIÓN: Si la pantalla es mayor a 768px (Tablet/PC) */
@media (min-width: 768px) {
    body {
        background-color: #f0f0f0; /* El fondo cambia */
        font-size: 20px;           /* La letra crece */
    }
}
```

### Los Puntos de Quiebre (Breakpoints)
Son los anchos estándar donde solemos cambiar el diseño:

    Móvil: Estilos por defecto (sin media query).
    Tablet: min-width: 768px
    Desktop: min-width: 1024px
    
>[!INFO] Filosofía "Mobile First": 
>Diseña primero para lo más difícil (la pantalla pequeña del celular) y luego expande el diseño para pantallas grandes. Es más fácil escalar hacia arriba que intentar meter un elefante en una caja de zapatos.

## 2. Pseudo-clases: Reacción ante el Usuario

| **Pseudo-clase** | **¿Cuándo se activa?**                                 | **Uso común**                       |
| ---------------- | ------------------------------------------------------ | ----------------------------------- |
| `:hover`         | Cuando el mouse pasa por encima.                       | Cambiar color de botones o enlaces. |
| `:active`        | Mientras haces clic (el momento de presión).           | Efecto de "botón hundido".          |
| `:focus`         | Cuando el elemento está seleccionado (con Tab o clic). | Resaltar el input de un formulario. |
| `:nth-child(n)`  | Selecciona un "hijo" específico por su número.         | Tablas rayadas (pares/impares).     |

### Ejemplo de Botón Interactivo:
```CSS

button {
    background-color: blue;
    transition: 0.3s; /* Suaviza el cambio */
}

button:hover {
    background-color: darkblue; /* Al pasar el mouse */
    transform: scale(1.1);      /* Crece un poco */
}
```
## 3. Unidades de Medida: Más allá de los Píxeles

En el diseño web moderno, usar solo px (píxeles) es un error, ya que son unidades fijas que no se adaptan bien.
Existen dos tipos de unidades, absolutas y relativas.
### Unidades Absolutas
en general se considera que siempre tienen el mismo tamaño y la mayoría de estos valores son más útiles cuando se usan en una salida en formato impreso que en la salida de pantalla.

![[Pasted image 20260218083058.png]]

### Unidades Relativas (Las preferidas)
Las unidades de longitud relativa son relativas a algo más, por ejemplo, al tamaño de letra del elemento principal o al tamaño de la ventana gráfica. La ventaja de usar unidades relativas es que con una planificación cuidadosa puedes lograr que el tamaño del texto u otros elementos escalan en relación con todo lo demás en la página.

![[Pasted image 20260218083118.png]]
- rem: Basada en el tamaño de fuente de la raíz (`<html>`). Por defecto, 1rem = 16px. Si el usuario cambia el tamaño de letra de su navegador por accesibilidad, tu web se adaptará.
- em: Basada en el tamaño de fuente del elemento padre. Útil para padding y márgenes que deben crecer proporcionalmente al texto.
- vw / vh (Viewport Width/Height): Basadas en el tamaño de la ventana del navegador. 100vw es el ancho total de la pantalla.
- %: Útil para anchos de contenedores que deben ocupar una parte de su padre.
## 4. Pseudo-elementos: Decoración Avanzada

Permiten añadir contenido estético sin ensuciar tu HTML. Se escriben con cuatro puntos :: (aunque : suele funcionar, :: es el estándar moderno).

- ::before: Inserta contenido antes del elemento.
- ::after: Inserta contenido después del elemento.
- ::first-letter: Da estilo solo a la primera letra (estilo libro antiguo).

>[!INFO] Regla de Oro: 
>Para que ::before o ::after funcionen, SIEMPRE debes poner la propiedad content: ''; (aunque esté vacía).

## 5. Variables CSS (Custom Properties)

Las variables son fundamentales para la mantenibilidad. Imagina que el cliente quiere cambiar el color "Púrpura Mago" por uno "Azul Galaxia". Sin variables, tendrías que buscar y reemplazar en 50 lugares.

Cómo se declaran: Se usa el selector :root (que representa a todo el documento).
```CSS
:root {
    --color-primario: #6a1b9a;
    --color-secundario: #ffd600;
    --espaciado-base: 20px;
}
```
Cómo se usan:
```CSS
.tarjeta {
    background-color: var(--color-primario);
    padding: var(--espaciado-base);
    border: 2px solid var(--color-secundario);
}
```
## 6. Animaciones y Transiciones

Hagamos que las cosas se muevan.
### Transiciones (transition)
Es la forma sencilla. Sirve para ir del Estado A al Estado B suavemente.
transition: [propiedad] [duración] [tipo-de-movimiento];
```CSS

.caja {
    width: 100px;
    transition: width 1s ease-in-out; /* Tardará 1s en crecer */
}
.caja:hover {
    width: 300px;
}
```
### Animaciones (@keyframes)
Es la forma compleja. Puedes controlar lo que pasa en cada momento (0%, 50%, 100%).

1. Creas la animación:

```CSS
@keyframes rebote {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}
```

2. La aplicas al elemento:

```CSS
.pelota {
    animation: rebote 2s infinite; /* Se repite por siempre */
}
```
## 7. Transformaciones (transform)

La propiedad `transform` permite modificar la geometría de los elementos sin afectar el flujo del documento (es decir, no mueve a los elementos vecinos, solo cambia cómo se ve el elemento en sí).
### A. Traslación (`translate`)
Mueve un elemento de su posición original usando coordenadas X (horizontal) e Y (vertical).
- `transform: translateX(50px);` (Mueve a la derecha).  
- `transform: translateY(-20px);` (Sube).
- `transform: translate(10px, 20px);` (Mueve en ambos ejes).

>[!INFO] **Truco de Mago:** 
>Es la mejor forma de centrar elementos de forma absoluta junto con `top: 50%; left: 50%; transform: translate(-50%, -50%);`.

### B. Escala (`scale`)
Cambia el tamaño del elemento.
- `scale(2)`: Duplica el tamaño.
- `scale(0.5)`: Lo reduce a la mitad.
- `scaleX` o `scaleY`: Para estirar solo en una dirección.

### C. Rotación (`rotate`)
Gira el elemento los grados que le indiques.
- `transform: rotate(45deg);` (Gira a favor del reloj).
- `transform: rotate(-90deg);` (Gira en contra).
### D. Inclinación (`skew`)
Distorsiona el elemento dándole un ángulo de inclinación. Muy usado para diseños modernos y cortes diagonales.
- `transform: skewX(20deg);`

## 8. Buenas Prácticas de Diseño Visual

No basta con que el código funcione, debe verse profesional.
1. Paleta de Colores: No uses colores al azar. Usa la regla del 60-30-10 (60% color dominante, 30% secundario, 10% acento).
2. Tipografía: Usa fuentes legibles. Evita Comic Sans a menos que seas un payaso. Google Fonts es tu amigo.
3. Iconos: Usa librerías como FontAwesome o Google Icons para añadir símbolos visuales (lupas, casas, usuarios) en lugar de imágenes pesadas.
4. Prototipado: Antes de escribir código, dibuja tu idea en papel o usa herramientas como Figma. Ahorrarás horas de correcciones.

## 11. Tipografía de Élite: Google Fonts

No todas las computadoras tienen instaladas las mismas fuentes. Para que tu web se vea igual en todo el mundo, usamos Google Fonts, que sirve las fuentes desde la nube.
Paso a Paso para Implementarlo:
1. Selección: Vas a fonts.google.com, eliges una familia (ej. Montserrat o Poppins) y seleccionas los estilos (Regular 400, Bold 700).
2. El Vínculo (HTML): Google te dará un código `<link>`. Este debe ir dentro del `<head>`, siempre antes de tu propio archivo de CSS.
```HTML

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```
3. La Aplicación (CSS): Ahora usas el nombre de la fuente en tus reglas.
```CSS

    body {
        font-family: 'Poppins', sans-serif;
    }
```
### ¿Qué significa el sans-serif al final?
Es una fuente de respaldo (fallback). Si por alguna razón internet falla y no carga Google Fonts, el navegador usará la fuente "sin serifa" (letras lisas) que tenga por defecto la computadora del usuario.

## 10. Ejercicio Final del Día 5: La Carta Holográfica 🃏

Vamos a crear una tarjeta que gire 3D al pasar el mouse.
### HTML:
```HTML

<div class="carta-container">
    <div class="carta">
        <div class="cara frente">🔮 Frente</div>
        <div class="cara atras">Secreto revelado</div>
    </div>
</div>
```

### CSS (El truco de magia):
```CSS
.carta-container {
    perspective: 1000px; /* Da profundidad 3D */
}

.carta {
    width: 200px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d; /* Permite girar en 3D */
    transition: transform 0.8s;
}

.carta-container:hover .carta {
    transform: rotateY(180deg); /* Gira la carta */
}

.cara {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Oculta la parte trasera */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}

.frente { background-color: gold; }
.atras { 
    background-color: purple; 
    color: white;
    transform: rotateY(180deg); /* Ya está girada para esperar la vuelta */
}
```