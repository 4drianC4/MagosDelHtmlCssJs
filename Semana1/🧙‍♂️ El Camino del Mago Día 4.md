# CSS Intermedio: Diseño y Posicionamiento

## 1. La Propiedad Maestra: display

Todo elemento HTML tiene un **comportamiento predeterminado**. Entender esto es vital para saber por qué unos elementos se ponen al lado de otros y otros no.

### display: block (Bloque)

Son elementos "egoístas". Ocupan todo el ancho disponible y fuerzan un salto de línea.

- **Comportamiento**: Se apilan uno debajo del otro.
- **Ejemplos**: `<div>`, `<h1>`, `<p>`, `<section>`.
- **Propiedades**: Respetan `width`, `height`, `margin` y `padding`.

### display: inline (En línea)

Son elementos "sociables". Solo ocupan el espacio necesario de su contenido y se sitúan uno al lado del otro.

- **Comportamiento**: Fluyen como texto.
- **Ejemplos**: `<span>`, `<a>`, `<strong>`.
- **Limitación**: **Ignoran el `width`, `height` y los márgenes verticales.** ¡No puedes darles tamaño!

```CSS
/* Los enlaces son inline: no puedes darles ancho/alto */
a {
    width: 100px;      /* ❌ Se ignora */
    height: 50px;      /* ❌ Se ignora */
}

/* Los bloques sí respetan dimensiones */
div {
    width: 300px;      /* ✅ Funciona */
    height: 80px;      /* ✅ Funciona */
}
```

### display: inline-block (El Híbrido)

Lo mejor de los dos mundos. Se colocan **en línea** uno al lado del otro, pero sí respetan el ancho y alto que les des.

- **Uso**: Botones, tarjetas pequeñas en fila.

---

## 2. Flexbox: La Magia Flexible (display: flex)

Olvida los `float` y trucos antiguos. Flexbox es un sistema **unidimensional** (filas **O** columnas) diseñado para distribuir espacio y alinear elementos mágicamente.

Para usarlo necesitas definir un **Contenedor Padre** y sus Hijos se acomodarán automáticamente.

```CSS
.contenedor-magico {
    display: flex; /* ¡Activa la magia! */
}
```

### ¿Qué es el contenedor padre?

El elemento que tiene `display: flex`. Sus hijos directos se convierten en "items flex" y pierden parte de su comportamiento rígido de bloque/inline.

```HTML
<!-- .contenedor es el padre; las cajas son sus hijos -->
<div class="contenedor">
    <div class="caja">1</div>
    <div class="caja">2</div>
    <div class="caja">3</div>
</div>
```

```CSS
.contenedor {
    display: flex; /* Ahora las 3 cajas se acomodan en fila automáticamente */
}
```

### Controlando la Dirección (flex-direction)

Por defecto, los elementos se ponen en fila (`row`). Pero puedes cambiarlo:

- `column`: Los apila verticalmente (como bloques).
- `row-reverse`: Fila invertida (del final al principio).
- `column-reverse`: Columna invertida.

### Alineación en el Eje Principal (justify-content)

Si estás en fila, esto mueve los elementos **horizontalmente**.

| Valor          | Efecto                                                          |
| -------------- | --------------------------------------------------------------- |
| `flex-start`   | Al inicio (izquierda).                                          |
| `center`       | Al centro.                                                      |
| `flex-end`     | Al final (derecha).                                             |
| `space-between`| Uno al inicio, uno al final y espacio igual en medio. **Muy usado en menús.** |
| `space-around` | Espacio alrededor de cada elemento.                             |

### Alineación en el Eje Cruzado (align-items)

Si estás en fila, esto controla la alineación **vertical**.

| Valor        | Efecto                                                    |
| ------------ | --------------------------------------------------------- |
| `stretch`    | Se estiran para llenar el alto del contenedor (por defecto). |
| `center`     | Se centran verticalmente. **¡El fin de las pesadillas para centrar cosas!** |
| `flex-start` | Arriba.                                                   |
| `flex-end`   | Abajo.                                                    |

> [!TIP] El truco más pedido: centrar algo en CSS
> Para centrar tanto horizontal como verticalmente con Flexbox, solo necesitas dos líneas:
> ```CSS
> .contenedor {
>     display: flex;
>     justify-content: center; /* Centra horizontal */
>     align-items: center;     /* Centra vertical */
> }
> ```

---

## 3. CSS Grid: La Cuadrícula de Poder (display: grid)

Mientras Flexbox es para una dimensión, Grid es **bidimensional** (filas **Y** columnas a la vez). Es como tener una hoja de cálculo invisible para colocar tus elementos.

### Creando la Cuadrícula

```CSS
.tablero {
    display: grid;
    /* Crea 3 columnas: dos de 100px y una automática */
    grid-template-columns: 100px 100px auto;

    /* Crea 2 filas de 50px */
    grid-template-rows: 50px 50px;

    /* Espacio entre celdas (huecos) */
    gap: 10px;
}
```

### La unidad mágica: fr (fracción)

En lugar de píxeles, en Grid usamos `fr` para dividir el espacio disponible **proporcionalmente**.

```CSS
grid-template-columns: 1fr 1fr 1fr; /* 3 columnas de idéntico tamaño */
grid-template-columns: 2fr 1fr;     /* La primera ocupa el doble que la segunda */
```

### Atajo práctico: repeat()

Cuando quieres varias columnas iguales, `repeat()` te ahorra escribir:

```CSS
/* Equivale a 1fr 1fr 1fr */
grid-template-columns: repeat(3, 1fr);
```

---

## 4. Flexbox vs Grid: ¿Cuál uso?

| **Sistema** | **Úsalo cuando...**                                                                          | **Ejemplo Real**                                                  |
| ----------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Flexbox** | Tienes elementos en una sola dirección o necesitas alinear cosas pequeñas.                   | Barra de navegación, centrar un icono en un botón.                |
| **Grid**    | Necesitas controlar filas y columnas a la vez o maquetar la estructura general de la página. | Galería de fotos, estructura principal (Header + Sidebar + Main). |

> [!TIP] La regla de oro
> Empieza siempre con la pregunta: ¿esto es de **una** o **dos** dimensiones? Una barra de navegación (solo horizontal) → Flexbox. Una galería de fotos (filas y columnas) → Grid. No necesitas más reglas.

---

## 5. Práctica Maestra: El Tablero de Misiones

Vamos a poner a prueba todo lo aprendido creando un panel donde los magos pueden elegir sus misiones. Usaremos **Grid** para organizar las tarjetas en el tablero y **Flexbox** para ordenar el contenido dentro de cada tarjeta.

### El Código HTML

```HTML
<section class="tablero">
    <article class="tarjeta nivel-facil">
        <h3>Recoger Hierbas</h3>
        <p>Busca mandrágoras en el bosque prohibido.</p>
        <button>Aceptar Misión</button>
    </article>

    <article class="tarjeta nivel-medio">
        <h3>Poción de Verdad</h3>
        <p>Mezcla ingredientes sin que explote el caldero.</p>
        <button>Aceptar Misión</button>
    </article>

    <article class="tarjeta nivel-dificil">
        <h3>Duelo de Varitas</h3>
        <p>Sobrevive 5 minutos contra el profesor de Defensa.</p>
        <button>Aceptar Misión</button>
    </article>
</section>
```

### El Hechizo CSS (La Magia)

Aquí es donde ocurre la transformación. Observa los comentarios para entender qué hace cada línea.

```CSS
/* 1. EL TABLERO (Usamos GRID para la estructura macro) */
.tablero {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
    gap: 20px;
    padding: 20px;
}

/* 2. LA TARJETA (Usamos FLEXBOX para el contenido micro) */
.tarjeta {
    background-color: #f4f4f9;
    border: 2px solid #333;
    border-radius: 10px;
    padding: 15px;
    height: 200px; /* Forzamos una altura para ver el efecto flex */

    /* Activamos Flexbox dentro de la tarjeta */
    display: flex;
    flex-direction: column;       /* Apilamos título, texto y botón */
    justify-content: space-between; /* El botón se va al fondo automáticamente */
}

/* Estilos extra para que se vea bonito */
button {
    background-color: #6a0dad; /* Morado mago */
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #8a2be2;
}
```

### ¿Qué acabamos de hacer?

- **Grid (`.tablero`)**: Creamos una cuadrícula perfecta de 3 columnas (`repeat(3, 1fr)`). Si agregaras una 4ª misión, pasaría automáticamente a la fila de abajo. ¡Sin matemáticas complejas!
- **Flexbox (`.tarjeta`)**: Al usar `flex-direction: column` y `justify-content: space-between`, obligamos al botón a pegarse siempre al final de la tarjeta, sin importar si el texto de la descripción es largo o corto.

> [!TIP] Prueba a romperlo
> Agrega una tarjeta más al HTML y observa cómo Grid la coloca en una segunda fila automáticamente. Luego haz el texto de una tarjeta muy largo y ve cómo el botón se mantiene en su lugar. Esto es lo que hace que la magia funcione.

---

## 6. La Cascada y la Especificidad (Concepto Clave)

Recuerda que CSS significa "Cascading Style Sheets". Cuando dos reglas apuntan al mismo elemento, hay un orden de prioridad:

**Prioridad (de menor a mayor fuerza):**
1. Selector de etiqueta (`p { }`) — el más débil.
2. Selector de clase (`.boton { }`)
3. Selector de ID (`#header { }`)
4. Estilo en línea (`style=""`) — el más fuerte (por eso es tan peligroso).

```CSS
/* Si ambas reglas existen, ¿de qué color será el párrafo? */
p { color: blue; }        /* Prioridad 1 */
.importante { color: red; } /* Prioridad 2 → GANA red */
```

```HTML
<p class="importante">Este texto será rojo por la clase.</p>
```

> [!INFO] La frase mágica
> Cuanto **más específico** sea el selector, más poder tiene. Regla práctica: usa clases para todo (evita los ID en CSS), y así evitas peleas de especificidad.

---

## 📝 Práctica del Día: El Tablero de Misiones

1. Crea un HTML y un CSS nuevos y replica el "Tablero de Misiones" de la sección anterior.
2. Modifica la cuadrícula para que tenga 2 columnas en vez de 3 (`repeat(2, 1fr)`).
3. Agrega una 4ª tarjeta y observa cómo cambia el layout.
4. Usa `justify-content` para centrar el contenido de un contenedor flex.

> [!IMPORTANT] Antes de continuar, verifica que:
> - Sabes explicar la diferencia entre `block`, `inline` e `inline-block`.
> - Distingues cuándo usar Flexbox vs Grid.
> - Entendiste el concepto de contenedor padre e hijos flex.
