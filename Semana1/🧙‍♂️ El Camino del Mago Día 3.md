# Introducción a CSS y Estilos Básicos

## 1. ¿Qué es CSS? (La Ropa del Mago)

Si HTML es el esqueleto y la estructura, CSS (Cascading Style Sheets) es la piel, la ropa y el maquillaje. Es el lenguaje que usamos para decirle al navegador cómo deben verse los elementos.

- HTML: Dice "Esto es un título".
- CSS: Dice "Este título es azul, grande y está centrado".

> [!INFO] ¿Qué significa "Cascading" (en cascada)?
> "Cascada" se refiere a que los estilos se aplican de arriba hacia abajo, y cuando hay conflictos, hay reglas de prioridad. Ya entenderás este detalle en el Día 4. Por ahora, recuerda: CSS = cómo se ve todo.

---

## 2. Anatomía de una Regla CSS

CSS no funciona con etiquetas, sino con **Reglas**. Una regla tiene dos partes: a quién modificamos (selector) y qué le cambiamos (declaración).

```CSS
/* SELECTOR */
h1 {
    /* PROPIEDAD: VALOR; */
    color: red;
    font-size: 20px;
}
```

> [!INFO] ¡Ojo al detalle!
> En CSS usamos llaves `{}` para agrupar las reglas y cada instrucción debe terminar obligatoriamente con punto y coma `;`.

---

## 3. ¿Dónde escribimos el hechizo? (Tipos de Inserción)

Hay tres formas de conectar CSS con HTML, pero solo una es la "Vía del Mago Supremo".

### A. Externa (La Profesional) ✅

Crear un archivo separado (ej. `style.css`) y lo enlazas en el `<head>` de tu HTML.

```HTML
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

> [!INFO] Ventaja
> Mantienes el orden. Un solo archivo de estilos puede controlar 100 páginas HTML. **Esta es la forma que usarás siempre en proyectos reales.**

### B. Interna (Para pruebas rápidas)

Usas la etiqueta `<style>` dentro del `<head>`.

```HTML
<style>
    p {
        color: blue;
    }
</style>
```

### C. En línea (La Prohibida 🚫)

Se escribe directamente en la etiqueta HTML.

```HTML
<p style="color: red;">Texto</p>
```

> [!WARNING] La prohibida
> Es una pesadilla de mantener. **Evítala a menos que sea estrictamente necesario.** ¿Qué pasa si tienes 50 párrafos rojos y el cliente quiere que sean azules? Tendrías que cambiar los 50. Con un archivo externo, cambias una sola línea.

> [!TIP] ¿Cómo creo y enlazo mi primer archivo CSS?
> 1. En VS Code, en la misma carpeta de tu `index.html`, crea un archivo llamado `style.css`.
> 2. Dentro de tu HTML, en el `<head>`, agrega: `<link rel="stylesheet" href="style.css">`.
> 3. Escribe alguna regla en `style.css` (por ejemplo, `h1 { color: purple; }`) y guarda. ¡Tu página cobrará vida!

---

## 4. Selectores: ¿A quién lanzamos el hechizo?

Para dar estilo, primero debes apuntar al elemento correcto.

| **Selector**  | **Símbolo** | **Ejemplo**        | **Descripción**                                                                 |
| ------------- | ----------- | ------------------ | ------------------------------------------------------------------------------- |
| **Universal** | `*`         | `* { margin: 0; }` | Selecciona **todos** los elementos de la página. Se usa para reiniciar estilos. |
| **Etiqueta**  | (Nada)      | `p { ... }`        | Afecta a **todos** los párrafos `<p>` del sitio.                                |
| **Clase**     | `.`         | `.boton { ... }`   | Afecta a cualquier elemento que tenga `class="boton"`. **Es el más usado.**     |
| **ID**        | `#`         | `#header { ... }`  | Afecta a un **único** elemento con `id="header"`.                               |

### La analogía del Gremio:

- Etiqueta: "¡Que **todos** los magos se levanten!" (Afecta a todos).
- Clase: "¡Que los magos **de fuego** se levanten!" (Afecta a un grupo específico).
- ID: "¡Que **Merlín** se levante!" (Afecta solo a uno).

> [!TIP] Clase vs ID: ¿Cuál usar cuándo?
> Las **clases** son reutilizables: puedes tener 20 botones con `class="boton"`. Los **IDs** son únicos: solo puede existir un elemento con `id="header"` en toda la página. Regla práctica: usa clases casi siempre.

```HTML
<!-- Múltiples elementos pueden compartir una clase -->
<button class="boton">Enviar</button>
<button class="boton">Cancelar</button>

<!-- Un ID solo puede existir una vez -->
<div id="header">...</div>
```

---

## 5. El Color en la Web

CSS nos permite definir colores de varias formas. Las más comunes son:

- **Nombres** (Keywords): `red`, `blue`, `gold`. (Limitados, poco usados profesionalmente).
- **Hexadecimal** (Hex): Código de 6 dígitos que empieza con `#`. Ej: `#ff5733`.
- **RGB**: Mezcla de Rojo, Verde y Azul. Ej: `rgb(255, 0, 0)`.
- **RGBA**: Igual que el anterior, pero el último número es la **Transparencia** (Alpha) de 0 a 1. Ej: `rgba(0, 0, 0, 0.5)` (Negro medio transparente).

```CSS
h1 {
    color: gold;             /* Por nombre */
    color: #ffd700;          /* Por hexadecimal (el más usado) */
    color: rgb(255, 215, 0); /* Por RGB */
    background-color: rgba(0, 0, 0, 0.5); /* Fondo negro 50% transparente */
}
```

> [!TIP] ¿Cómo elegir colores bonitos?
> No memorices códigos de color. Usa herramientas como **Color Picker** de Google, **coolors.co** o **colorhunt.co** para buscar paletas que combinen. En el Día 5 veremos la regla 60-30-10 para combinar colores como un profesional.

---

## 6. El Modelo de Caja (The Box Model)

Este es el concepto **más importante** del diseño web. Todo elemento en HTML es, en realidad, una caja rectangular.

| Capa              | Descripción                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| **Content**       | El texto o la imagen real.                                             |
| **Padding**       | El espacio interno entre el contenido y el borde. Como el plástico de burbujas dentro de una caja. |
| **Border**        | La línea que rodea la caja.                                            |
| **Margin**        | El espacio externo que separa esta caja de las demás. Es el "espacio personal" del elemento. |

Ejemplo visual en código:

```CSS
.caja-magica {
    width: 200px;           /* Ancho del contenido */
    padding: 20px;          /* Espacio interno (la caja engorda) */
    border: 5px solid gold; /* El borde visible */
    margin: 50px;           /* Empuja a los vecinos lejos */
}
```

> [!INFO] El dato que todos confunden
> El `width` que le das a `.caja-magica` NO incluye el padding ni el border. Es decir, el ancho total real es: 200 (content) + 40 (padding) + 10 (border) = **250px**. Esto confunde a todos al principio; lo retomamos en el Día 5 con el truco `box-sizing`.

---

## 7. Bordes: Estilo y Redondeo

La propiedad `border` suele usarse de forma abreviada (shorthand) para ahorrar tiempo.

### Sintaxis abreviada

`border: [grosor] [estilo] [color];`

```CSS
/* Borde sólido rojo de 1 pixel */
div {
    border: 1px solid red;
}
```

Los estilos de borde más comunes: `solid` (sólido), `dashed` (discontinuo), `dotted` (punteado).

### Border Radius (Redondear esquinas)

Es lo que hace que los botones se vean modernos.

```CSS
.boton {
    border-radius: 10px; /* Esquinas suaves */
    border-radius: 50%;  /* Si el elemento es cuadrado, esto lo convierte en un círculo perfecto */
}
```

---

## 8. Tipografía y Textos

El 90% de la web es texto. Si sabes manejarlo, tu sitio ya se verá mejor que la mayoría.

### Propiedades de Fuente (font)

```CSS
p {
    font-family: 'Arial', 'Helvetica', sans-serif; /* Pila de fuentes */
    font-size: 16px;      /* Tamaño (usa px para empezar) */
    font-weight: 700;     /* Grosor: normal (400), bold (700) */
}
```

- **font-family**: Define la tipografía. Usa **pilas de fuentes**: si el usuario no tiene la primera, cargará la segunda, y así.
- **font-size**: El tamaño. Usa `px` para empezar, pero el Día 5 aprenderás sobre `rem` (relativo al tamaño base), más recomendado para accesibilidad.
- **font-weight**: El grosor. `normal` (400), `bold` (700).

### Propiedades de Texto (text)

```CSS
a {
    text-align: center;       /* left, center, right, justify */
    text-decoration: none;    /* Quita el subrayado de los enlaces */
    line-height: 1.6;         /* Espaciado entre renglones */
}
```

- **text-align**: Alineación (`left`, `center`, `right`, `justify`).
- **text-decoration**: Decoraciones (`none` para quitar subrayado, `underline` para subrayar).
- **line-height**: Altura de línea. **Un valor de 1.5 suele ser perfecto para lectura.** El texto "respira".

### Ejemplo de "Hechizo de Texto"

```CSS
p {
    font-family: 'Verdana', sans-serif;
    font-size: 16px;
    line-height: 1.6; /* El texto respira */
    color: #333;      /* Gris oscuro lee mejor que negro puro */
}

a {
    text-decoration: none; /* Adiós subrayado feo */
    color: #ff4500;        /* Color naranja */
}
```

> [!TIP] ¿Gris oscuro en vez de negro puro?
> El negro puro (`#000`) cansa la vista sobre fondo blanco. Un gris oscuro (`#333` o `#222`) es más cómodo de leer y se ve más profesional.

## 📝 Práctica del Día: Tu Primera Regla CSS

Antes de pasar al siguiente día, asegúrate de practicar:

1. Toma tu `pergamino.html` del Día 1 y créale su archivo `estilos.css` (link externo).
2. Aplica al menos: un color de fondo al `<body>`, un color y tamaño al `<h1>`, un estilo de fuente a los párrafos.
3. Experimenta con las 4 capas del modelo de caja en algún elemento con bordes y margen.

> [!IMPORTANT] Antes de continuar, verifica que:
> - Usas el método **externo** (archivo `.css` separado), no el inline.
> - Aplicaste clases para agrupar elementos (recuerda: `.clase`, no `#id` a todo).
> - Tu página se ve **distinta** de antes. ¡La magia del CSS está funcionando!
