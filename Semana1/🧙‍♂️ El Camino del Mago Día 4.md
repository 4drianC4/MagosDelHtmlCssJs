# CSS Intermedio: Diseño y Posicionamiento
## 1. La Propiedad Maestra: display

Todo elemento HTML tiene un comportamiento predeterminado. Entender esto es vital para saber por qué unos elementos se ponen al lado de otros y otros no.
### display: block (Bloque)

Son elementos "egoístas". Ocupan todo el ancho disponible y fuerzan un salto de línea.
- Comportamiento: Se apilan uno debajo del otro.
- Ejemplos: `<div>, <h1>, <p>, <section>`.
- Propiedades: Respetan width, height, margin y padding.
### display: inline (En línea)

Son elementos "sociables". Solo ocupan el espacio necesario de su contenido y se sitúan uno al lado del otro.
- Comportamiento: Fluyen como texto.
- Ejemplos: `<span>, <a>, <strong>`.
- Limitación: Ignoran el width, height y los márgenes verticales. ¡No puedes darles tamaño!
### display: inline-block (El Híbrido)
Lo mejor de los dos mundos. Se colocan en línea uno al lado del otro, pero sí respetan el ancho y alto que les des.
- Uso: Botones, tarjetas pequeñas en fila.

---
## 2. Flexbox: La Magia Flexible (display: flex)

Olvida los float y trucos antiguos. Flexbox es un sistema unidimensional (filas O columnas) diseñado para distribuir espacio y alinear elementos mágicamente.

Para usarlo, necesitas definir un Contenedor Padre y sus Hijos se acomodarán automáticamente.
```CSS
.contenedor-magico {
    display: flex; /* ¡Activa la magia! */
}
```

### Controlando la Dirección (flex-direction)

Por defecto, los elementos se ponen en fila (row). Pero puedes cambiarlo:
- column: Los apila verticalmente (como bloques).
- row-reverse: Fila invertida (del final al principio).
- column-reverse: Columna invertida.

### Alineación en el Eje Principal (justify-content)

Si estás en fila, esto mueve los elementos horizontalmente.

- flex-start: Al inicio (izquierda).
- center: Al centro.
- flex-end: Al final (derecha).
- space-between: Uno al inicio, uno al final y espacio igual en medio. (Muy usado en menús).
- space-around: Espacio alrededor de cada elemento.
### Alineación en el Eje Cruzado (align-items)

Si estás en fila, esto controla la alineación vertical.
- stretch: Se estiran para llenar el alto del contenedor (por defecto).
- center: Se centran verticalmente. ¡El fin de las pesadillas para centrar cosas!
- flex-start / flex-end: Arriba o abajo.

## 3. CSS Grid: La Cuadrícula de Poder (display: grid)

Mientras Flexbox es para una dimensión, Grid es bidimensional (filas Y columnas a la vez). Es como tener una hoja de cálculo invisible para colocar tus elementos.
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

En lugar de píxeles, en Grid usamos fr para dividir el espacio disponible proporcionalmente.
- grid-template-columns: 1fr 1fr 1fr; → Crea 3 columnas de idéntico tamaño.
- grid-template-columns: 2fr 1fr; → La primera columna ocupa el doble que la segunda.

## 4. Flexbox vs Grid: ¿Cuál uso?

| **Sistema** | **Úsalo cuando...**                                                                          | **Ejemplo Real**                                                  |
| ----------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Flexbox** | Tienes elementos en una sola dirección o necesitas alinear cosas pequeñas.                   | Barra de navegación, centrar un icono en un botón.                |
| **Grid**    | Necesitas controlar filas y columnas a la vez o maquetar la estructura general de la página. | Galería de fotos, estructura principal (Header + Sidebar + Main). |
## 5. Práctica Maestra: El Tablero de Misiones

Vamos a poner a prueba todo lo aprendido creando un panel donde los magos pueden elegir sus misiones. Usaremos Grid para organizar las tarjetas en el tablero y Flexbox para ordenar el contenido dentro de cada tarjeta.
### El Código HTML

Crearemos una estructura con un contenedor principal y tres misiones dentro.

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
    /* Crea 3 columnas de igual tamaño */
    grid-template-columns: 1fr 1fr 1fr; 
    /* Un espacio de 20px entre tarjetas */
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
    flex-direction: column; /* Apilamos título, texto y botón */
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
}

button:hover {
    background-color: #8a2be2;
}
```
### ¿Qué acabamos de hacer?

- Grid (.tablero): Creamos una cuadrícula perfecta de 3 columnas (1fr 1fr 1fr). Si agregaras una 4ª misión, pasaría automáticamente a la fila de abajo. ¡Sin matemáticas complejas!
- Flexbox (.tarjeta): Al usar flex-direction: column y justify-content: space-between, obligamos al botón a pegarse siempre al final de la tarjeta, sin importar si el texto de la descripción es largo o corto.