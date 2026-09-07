# HTML Semántico y Estructura Avanzada

## 1. ¿Qué es la Semántica en HTML?

Imagina que recibes un documento donde todo está escrito con el mismo tamaño de letra y sin espacios. Sería difícil saber qué es el título, qué es un párrafo importante o qué es una nota al pie.

El HTML Semántico consiste en usar etiquetas que describen el **significado** de su contenido, no solo su apariencia.

- **HTML No Semántico**: Usa etiquetas genéricas (como `<div>` y `<span>`) para todo. Funciona visualmente, pero no dice nada sobre qué contiene.
- **HTML Semántico**: Usa etiquetas específicas (como `<header>`, `<article>`, `<footer>`) que explican claramente qué es esa sección.

¿Por qué es vital?

1. **SEO (Google)**: Los buscadores entienden mejor tu página y la posicionan más arriba.
2. **Accesibilidad**: Los lectores de pantalla para personas con discapacidad visual navegan mejor por el contenido.
3. **Mantenibilidad**: Es más fácil leer y corregir el código cuando entiendes qué hace cada parte.

## 2. Las Nuevas Estructuras del Mago (Etiquetas de Estructura)

En lugar de construir todo con "ladrillos genéricos", usaremos piezas especializadas para cada parte del sitio web.

### `<header>` (Encabezado)

No confundir con el `<head>`. El `<header>` es la cabecera **visible** de tu página o de una sección.

- Uso común: Logotipos, título principal, menú de navegación o barra de búsqueda.

```HTML
<header>
    <h1>Mi Blog de Magia</h1>
    <img src="logo-sombrero.png" alt="Logo de sombrero mágico">
</header>
```

### `<nav>` (Navegación)

Contiene los enlaces principales para moverse por el sitio.

- Uso común: Menú principal, índice de contenidos.

```HTML
<nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="hechizos.html">Hechizos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>
```

### `<main>` (Contenido Principal)

Es el corazón de tu página. **Solo debe haber un `<main>` por documento** y contiene la información única de esa página específica.

### `<section>` vs `<article>` (La duda eterna)

A menudo se confunden, aquí la diferencia práctica:

- **`<section>`**: Agrupa contenido relacionado por temática. Siempre debería tener un título (`<h2>` a `<h6>`). Ejemplo: Una sección de "Testimonios" o "Servicios".
- **`<article>`**: Contenido independiente que tiene sentido por sí mismo, incluso si lo sacas de la página. Ejemplo: Un post de blog, una noticia, un comentario de usuario.

```HTML
<section>
    <h2>Nuestros Servicios</h2>
    <!-- Contenido relacionado con servicios -->
</section>

<article>
    <h3>Poción de Vuelo</h3>
    <!-- Este artículo tiene sentido por sí solo -->
</article>
```

> [!TIP] La regla práctica
> Pregúntate: ¿Este bloque tendría sentido si lo pegara en otra página? Si la respuesta es **sí**, es un `<article>`. Si solo funciona dentro de su contexto, es una `<section>`.

### `<aside>` (Contenido Tangencial)

Información relacionada pero **no crítica**. Si lo quitas, el contenido principal se sigue entendiendo.

- Uso común: Barras laterales, publicidad, listas de "posts relacionados".

### `<footer>` (Pie de Página)

La parte final del documento o sección.

- Uso común: Copyright, enlaces legales, redes sociales, datos de contacto.

## 3. Ejemplo Práctico: Esqueleto Semántico

Así se ve una estructura moderna completa comparada con la antigua:

```HTML
<body>
    <header>
        <h1>Tienda de Pociones</h1>
        <nav>...</nav>
    </header>

    <main>
        <section>
            <h2>Nuestras Novedades</h2>
            <article>
                <h3>Poción de Vuelo</h3>
                <p>Duración: 30 min.</p>
                <button>Comprar</button>
            </article>
            <article>
                <h3>Poción de Invisibilidad</h3>
                <p>Duración: 1 hora.</p>
                <button>Comprar</button>
            </article>
        </section>

        <aside>
            <h3>Oferta del día</h3>
            <p>2x1 en varitas de roble.</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2023 Mundo Mágico Inc.</p>
    </footer>
</body>
```

## 4. Contenedores Genéricos: Los Comodines

A veces, ninguna etiqueta semántica (como `header` o `article`) encaja perfectamente, o simplemente necesitas agrupar cosas para darles estilo. Aquí entran los comodines.

### `<div>` (Bloque)

Es una caja vacía que no significa nada por sí misma. Se usa para agrupar grandes bloques de contenido.

- **Comportamiento**: Ocupa todo el ancho disponible y fuerza un salto de línea.
- **Uso**: Crear tarjetas, contenedores de diseño, fondos de secciones.

### `<span>` (Línea)

Sirve para seleccionar trozos pequeños de texto o elementos dentro de una línea **sin romper el flujo**.

- **Comportamiento**: Solo ocupa el espacio de su contenido.
- **Uso**: Dar color a una palabra específica, iconos dentro de texto.

```HTML
<p>Aprendí a lanzar el hechizo <span style="color: gold;">Lumos</span> hoy.</p>
```

### La analogía de la mudanza

- `<div>`: Es la caja de cartón donde metes los libros.
- `<span>`: Es el resaltador con el que marcas una palabra en un libro.

## 5. Formularios: Interactuando con el Usuario (`<form>`)

Los formularios permiten que el usuario te envíe datos (registros, logins, búsquedas).

### La etiqueta `<form>`

Envuelve todos los controles interactivos. Tiene dos atributos importantes:

- **action**: A dónde se envían los datos (por ahora lo dejaremos vacío o `#`).
- **method**: Cómo se envían (GET para búsquedas, POST para contraseñas/datos privados).

### La etiqueta `<input>` (Entrada de datos)

Es la pieza más versátil. Su comportamiento cambia radicalmente según el atributo `type`.

| **Tipo (type)** | **Descripción**                                   | **Ejemplo Visual**  |
| --------------- | ------------------------------------------------- | ------------------- |
| `text`          | Campo de texto normal de una línea.               | Nombre, Apellido    |
| `password`      | Oculta los caracteres con puntos.                 | Contraseña          |
| `email`         | Valida que tenga formato de correo (@).           | usuario@mail.com    |
| `number`        | Solo permite números.                             | Edad, Cantidad      |
| `date`          | Despliega un calendario.                          | Fecha de nacimiento |
| `checkbox`      | Casilla cuadrada para selección múltiple.         | [x] Acepto términos |
| `radio`         | Círculo para selección única (solo uno a la vez). | ( ) Sí ( ) No       |
| `submit`        | Botón para enviar el formulario.                  | [ENVIAR]            |

## 6. Etiquetas Auxiliares de Formulario

### `<label>` (Etiqueta)

Es el texto que dice "Nombre:" o "Email:".

> [!INFO] Regla de accesibilidad
> Usa el atributo `for` para vincularlo con el `id` del input. Así, al hacer clic en el texto, se activa el campo. Esto es esencial para lectores de pantalla y para mejorar la experiencia táctil en móviles.

```HTML
<label for="nombre">Nombre:</label>
<input type="text" id="nombre">
```

### `<textarea>` (Texto largo)

Para mensajes largos, comentarios o biografías. A diferencia del input, este **tiene etiqueta de cierre**.

```HTML
<textarea rows="5" cols="30">Escribe tu historia aquí...</textarea>
```

### `<select>` y `<option>` (Menú desplegable)

Para elegir una opción de una lista predefinida.

```HTML
<select>
    <option value="fuego">Elemento Fuego</option>
    <option value="agua">Elemento Agua</option>
    <option value="tierra">Elemento Tierra</option>
</select>
```

## 7. Atributos "Mágicos" para Formularios

Pequeños atributos que mejoran mucho la experiencia de usuario (UX):

- **placeholder**: Texto gris de ayuda dentro del campo (ej: "Escribe tu nombre aquí...").
- **required**: Impide enviar el formulario si el campo está vacío. ¡El navegador valida por ti!
- **value**: El valor por defecto que tendrá el campo.
- **disabled**: Muestra el campo pero no deja escribir en él.

```HTML
<input type="text" placeholder="Merlín, Gandalf..." required>
```

## 8. Práctica Final del Día 2: "El Registro del Gremio"

Combina semántica y formularios creando una página de registro. Abajo tienes la base; tu trabajo es **agregarle** un checkbox de "Acepto las normas" y un campo `email` obligatorio.

```HTML
<form action="">
    <h2>Registro de Nuevo Mago</h2>

    <div>
        <label for="nombre">Nombre de Mago:</label>
        <input type="text" id="nombre" placeholder="Merlín, Gandalf..." required>
    </div>

    <div>
        <label for="tipo">Especialidad:</label>
        <select id="tipo">
            <option value="fuego">Elemento Fuego</option>
            <option value="curacion">Sanación</option>
            <option value="ilusion">Ilusionismo</option>
        </select>
    </div>

    <div>
        <label for="historia">Breve Biografía:</label>
        <br>
        <textarea id="historia" rows="5"></textarea>
    </div>

    <!-- Agrega aquí el email y el checkbox -->

    <button type="submit">Enviar Solicitud</button>
</form>
```

> [!TIP] ¿Completaste la práctica?
> Recuerda que la base de todo formulario profesional es vincular bien cada `<label>` con su `id`. Practica esto siempre.

## 9. Tablas en HTML: Organizando el Caos (`<table>`)

Antiguamente se usaban tablas para maquetar toda la web (¡un horror!), pero hoy en día su uso es exclusivo para **datos tabulados**: filas y columnas de información.

### Las Etiquetas de la Tabla

Imagina una tabla como una estantería de pociones. Necesitas la estantería, las repisas y los frascos.

- `<table>`: El contenedor principal. Es la estantería completa.
- `<caption>`: El título de la tabla. Se pone justo después de abrir `<table>`.
- `<tr>` (Table Row): Cada una de las filas horizontales.
- `<th>` (Table Header): Celdas de encabezado (títulos de columna). Por defecto, el texto se ve en negrita y centrado.
- `<td>` (Table Data): Celdas de datos normales. Es donde va la información.

### Estructura Visual

```HTML
<table>
    <caption>Título de mi tabla</caption>
    <!-- Fila de Encabezados -->
    <tr>
        <th>Personas</th>
        <th>Edad</th>
        <th>Teléfono</th>
    </tr>
    <!-- Fila de Datos 1 -->
    <tr>
        <td>Michael</td>
        <td>25</td>
        <td>31231213</td>
    </tr>
    <!-- Fila de Datos 2 -->
    <tr>
        <td>Mago Anónimo</td>
        <td>150</td>
        <td>98765432</td>
    </tr>
</table>
```

### Ejemplo Práctico: Inventario de Hechizos

Vamos a crear una tabla para organizar los hechizos aprendidos.

```HTML
<table>
    <caption>Lista de Hechizos Básicos</caption>

    <tr>
        <th>Hechizo</th>
        <th>Tipo</th>
        <th>Nivel de Maná</th>
    </tr>

    <tr>
        <td>Lumos</td>
        <td>Iluminación</td>
        <td>Bajo</td>
    </tr>

    <tr>
        <td>Wingardium Leviosa</td>
        <td>Levitación</td>
        <td>Medio</td>
    </tr>

    <tr>
        <td>Expelliarmus</td>
        <td>Defensa</td>
        <td>Alto</td>
    </tr>
</table>
```

> [!Atención] El borde `border="1"` es cosa del pasado
> En este ejemplo no lo usamos a propósito. Los bordes y colores **siempre** se controlan con CSS (que verás a partir del Día 3), nunca con atributos HTML. Si quieres ver el borde de tu tabla por ahora, no pasa nada por usar `border="1"` solo para practicar, pero recuerda que un mago profesional lo hará con CSS.

### Accesibilidad en Tablas: El atributo `scope`

Para que tu tabla sea accesible (y un mago de verdad), los encabezados `<th>` deberían tener el atributo `scope`.

- `scope="col"`: Indica que este encabezado es para toda la **columna** vertical.
- `scope="row"`: Indica que es para la **fila** horizontal.

```HTML
<table>
    <caption>Lista de Hechizos Básicos</caption>
    <tr>
        <th scope="col">Hechizo</th>
        <th scope="col">Tipo</th>
        <th scope="col">Nivel de Maná</th>
    </tr>
    <tr>
        <th scope="row">Lumos</th>
        <td>Iluminación</td>
        <td>Bajo</td>
    </tr>
    <!-- ... -->
</table>
```

> [!INFO] ¿Por qué importa `scope`?
> Los lectores de pantalla usan `scope` para anunciar correctamente qué encabezado corresponde a cada celda. Es una pieza clave de la accesibilidad y no cuesta nada agregarla.

## 📝 Práctica del Día: Hechizos Estructurales y Rituales de Invocación

¡Es hora de poner en práctica todo lo aprendido! Ve a la carpeta **"Practicas y proyectos"** y completa el reto **"Práctica 2. Hechizos Estructurales y Rituales de Invocación"**.

> [!IMPORTANT] Antes de terminar, verifica que:
> - Usaste etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) en lugar de solo `<div>`.
> - Cada `<label>` tiene su atributo `for` vinculado al `id` correcto.
> - Las tablas usan `scope` en sus encabezados.
