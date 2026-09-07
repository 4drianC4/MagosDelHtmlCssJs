# Introducción a HTML y Estructura Básica

## 1. ¿Qué es HTML?

HTML (HyperText Markup Language) es el componente fundamental de la web. No es un lenguaje de programación, sino un lenguaje de marcado que define el significado y la estructura de un documento.

- HTML: Define la estructura (el "esqueleto").
- CSS: Define la apariencia (la "ropa").
- JavaScript: Define la funcionalidad (el "comportamiento").

> [!INFO] LOS LENGUAJES DE MARCADO NO SON LENGUAJES DE PROGRAMACIÓN
> Los lenguajes de marcado como HTML, XML o LaTeX utilizan reglas para estructurar y codificar documentos, indicando al navegador cómo debe mostrarse la información.

## 2. Preparando el Entorno de Trabajo

Para empezar a escribir código, necesitas un editor. El estándar de la industria es Visual Studio Code (VS Code).

### Paso 1: Instala VS Code

1. Descarga: Ve a https://code.visualstudio.com/download.
2. Instalación (Windows): Durante el proceso, marca la casilla **"Agregar al PATH"** y **"Abrir con Code"**.
3. Tu primer archivo: Crea una carpeta llamada `mis-proyectos` en tu escritorio y dentro de ella un archivo con extensión `.html` (ejemplo: `index.html`).

### Paso 2: Abre tu carpeta en VS Code

1. Abre VS Code.
2. Ve a **Archivo → Abrir carpeta** (File → Open Folder) y selecciona tu carpeta `mis-proyectos`.
3. Crear un archivo dentro de la carpeta: Haz clic en el icono de "Nuevo archivo" y escribe `index.html`.

### Paso 3: Instala la extensión Live Server (Opcional pero recomendado)

1. En la barra lateral izquierda haz clic en el icono de cuadrados (Extensiones).
2. Busca **Live Server** y haz clic en "Instalar".
3. Con tu archivo `index.html` abierto, haz clic derecho y selecciona **"Open with Live Server"**.
4. Tu navegador se abrirá mostrando tu página. Ahora, cada vez que guardes el archivo (Ctrl + S), la página se actualizará sola.

> [!TIP] ¿Prefieres un compilador online?
> Si no quieres instalar nada todavía, puedes usar https://onecompiler.com/html en tu navegador.

## 3. Estructura Básica de un Documento HTML

> [!INFO] Sobre la estructura de un documento HTML...
> La estructura de un documento HTML se compone de etiquetas, las cuales informan al navegador sobre la estructura de una página web. Se escriben entre signos de menor y mayor (< >) y se pueden clasificar en etiquetas de cierre automático y etiquetas que necesitan cerrarse.

Todo documento HTML profesional debe seguir esta estructura mínima para que el navegador lo interprete correctamente:

```HTML
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi Primera Página</title>
    </head>
    <body>
        <!-- Todo lo que el usuario ve va aquí -->
    </body>
</html>
```

Desglose de etiquetas esenciales:

- `<!DOCTYPE html>`: Informa al navegador que use el estándar moderno de HTML5.
- `<html>`: Es la raíz del documento. El atributo `lang="es"` indica el idioma del contenido.
- `<head>`: Contiene metadatos (información de fondo) que no se ven en la página: título, enlaces a estilos, codificación de caracteres.
- `<body>`: Contiene todo lo que el usuario ve: textos, imágenes, enlaces y títulos.
  - **Regla de oro**: Solo puede haber un `<body>` por documento.

> [!TIP] Atajo mágico en VS Code
> Escribe solo `!` y presiona **Tab** (o Enter). VS Code autocompleta automáticamente toda la estructura básica de HTML5. Genial, ¿verdad? En la sección 9 veremos más atajos.

## 4. Etiquetas de Contenido (Texto)

### Encabezados (`<h1>` a `<h6>`)

Se utilizan para jerarquizar el contenido, desde el más importante al menos importante.

- `<h1>`: El título más importante (solo debe haber uno por página).
- `<h2>` a `<h5>`: Niveles intermedios para subsecciones.
- `<h6>`: El nivel de menor importancia.

```HTML
<h1>Mi Página</h1>        <!-- Título principal -->
<h2>Mi Historia</h2>      <!-- Sección -->
<h3>Mi Infancia</h3>      <!-- Subsección -->
```

### Párrafos y Saltos

- `<p>`: Define un bloque de texto. El navegador añade automáticamente un espacio después de cerrarlo.
- `<br>`: Realiza un salto de línea manual **sin** crear un nuevo párrafo.
- `<hr>`: Dibuja una línea horizontal para separar temas visualmente.

```HTML
<p>Este es un párrafo normal.</p>
<p>Este es otro párrafo.<br>Y esta línea está debajo gracias a &lt;br&gt;.</p>
<hr>
<p>Texto después de la línea separadora.</p>
```

## 5. Listas: Organizando la Información

Para crear listas, siempre necesitamos una etiqueta "madre" que defina el tipo y etiquetas "hijas" para cada elemento.

| **Tipo de Lista**         | **Etiqueta Madre** | **Etiqueta de Elemento** |
| ------------------------- | ------------------ | ------------------------ |
| **Desordenada** (viñetas) | `<ul>`             | `<li>`                   |
| **Ordenada** (números)    | `<ol>`             | `<li>`                   |

### Ejemplo de código:

```HTML
<h3>Mis Hechizos Favoritos (desordenada)</h3>
<ul>
    <li>Lumos</li>
    <li>Expelliarmus</li>
    <li>Wingardium Leviosa</li>
</ul>

<h3>Mis Pasos para Convertirme en Mago (ordenada)</h3>
<ol>
    <li>Estudiar HTML</li>
    <li>Dominar CSS</li>
    <li>Conjurar JavaScript</li>
</ol>
```

> [!TIP] El atributo `type` ayuda a elegir el modelo de los marcadores de la lista
> Para `<ul>` existe: `disc`, `circle`, `square`, `none`
> Para `<ol>` existe: `1`, `a`, `A`, `i`, `I`

## 6. Enlaces: Conectando el Contenido (`<a>`)

La etiqueta `<a>` (anchor) es la que permite crear hipervínculos a otras páginas web, archivos o secciones del mismo documento.

```HTML
<a href="https://www.google.com" target="_blank">Ir a Google</a>
```

Atributos clave:

- **href**: Es el atributo más importante; aquí colocas la URL o la ruta del archivo al que quieres dirigir al usuario.
- **target**: Define dónde se abrirá el enlace.
  - `_self` (predeterminado): Abre el enlace en la misma pestaña.
  - `_blank`: Abre el enlace en una nueva pestaña.
  - *Otros menos usados*: `_parent` y `_top` (contextos de navegación, rara vez necesarios en proyectos básicos).
- **rel="noopener noreferrer"**: Una buena práctica de seguridad que debes usar **siempre que uses `target="_blank"`**, para proteger tu sitio de vulnerabilidades.

```HTML
<!-- Uso correcto con target="_blank" -->
<a href="https://mi-red-social.com" target="_blank" rel="noopener noreferrer">Mi Red Social</a>

<!-- Uso simple (misma pestaña) -->
<a href="contacto.html">Ir a Contacto</a>
```

> [!WARNING] ¡No olvides `rel="noopener noreferrer"`!
> Siempre que abras un enlace en una nueva pestaña (`target="_blank"`), agrega `rel="noopener noreferrer"`. Es un hábito de seguridad que los magos profesionales usan siempre.

## 7. Rutas Relativas vs. Absolutas

Para que los enlaces y las imágenes funcionen, debes saber cómo referenciarlos.

| **Tipo de Ruta** | **Definición**                                                          | **Ejemplo**                                |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| **Absoluta**     | La dirección completa desde la raíz o una URL completa.                 | `https://google.com` o `C:\fotos\logo.png` |
| **Relativa**     | La ubicación del archivo respecto al documento donde estás escribiendo. | `images/foto.jpg` o `contacto.html`        |

Reglas prácticas de rutas relativas:

- `imagen.jpg` → Dentro de la misma carpeta que mi HTML.
- `carpeta/imagen.jpg` → Dentro de una subcarpeta.
- `../imagen.jpg` → En la carpeta **padre** (sube un nivel con `../`).

## 8. Imágenes en HTML (`<img>`)

Para mostrar imágenes utilizamos la etiqueta `<img>`. A diferencia de otras, esta es una etiqueta de **cierre automático** (no necesita `</img>`).

Atributos esenciales:

- **src** (source): La ruta (relativa o absoluta) donde se encuentra la imagen.
- **alt** (alternative text): Una descripción corta de la imagen.
  - ¿Por qué es vital? Ayuda a la accesibilidad (lectores de pantalla para personas con discapacidad visual) y aparece si la imagen no carga.
- **width / height**: Controlan el tamaño (opcional).

```HTML
<img src="img/mago.png" alt="Ilustración de un mago principiante" width="300">
```

> [!INFO] Regla de oro del `alt`
> Piensa en el `alt` como la descripción que le darías a un amigo que no puede ver la imagen: "Un sombrero de mago morado sobre una mesa". Así es como lo hace un profesional.

## 9. 🛠️ Herramientas de Poder: VS Code Like a Pro

Para ser un verdadero "mago" del código, necesitas que tu libro mágico (el editor) trabaje para ti.

### 1. Extensiones Imprescindibles

En VS Code, ve al icono de cuadrados en la barra lateral izquierda e instala estas tres:

- **Live Server**: Permite abrir un servidor local para ver los cambios de tu HTML en tiempo real. ¡Guardas el archivo y la página se actualiza sola!
- **Prettier**: Formatea tu código automáticamente. Si dejas todo desordenado, Prettier lo alinea por ti para que sea legible.
- **Auto Close Tag**: Cuando escribes una etiqueta de apertura (ej. `<div>`), VS Code escribe automáticamente la de cierre (`</div>`).

### 2. El Truco Maestro: Emmet Shortcuts

VS Code viene con **Emmet** integrado. Es un motor de abreviaciones que te permite escribir estructuras complejas en segundos.

| **Si escribes...** | **Presionas...** | **Obtienes...**                                   |
| ------------------ | ---------------- | ------------------------------------------------- |
| `!`                | `Tab` o `Enter`  | **La estructura completa** de un documento HTML5. |
| `h1{Hola}`         | `Tab`            | `<h1>Hola</h1>`                                   |
| `p*3`              | `Tab`            | Crea **3 párrafos** vacíos automáticamente.       |
| `ul>li*3`          | `Tab`            | Una lista desordenada con **3 elementos** dentro. |
| `img`              | `Tab`            | `<img src="" alt="">` (con los atributos listos). |

### 3. Atajos de Teclado (Windows/Linux)

Aprender estos 3 te ahorrará horas de vida:

- **`Alt` + `Z`**: Ajuste de línea (para que el texto no se salga de la pantalla).
- **`Ctrl` + `/`**: Comentar/Descomentar una línea de código.
- **`Alt` + `↑ / ↓`**: Mueve la línea de código hacia arriba o hacia abajo.

## 📝 Práctica del Día: El Pergamino de Iniciación

¡Hora de poner a prueba tus nuevos poderes! Ve a la carpeta **"Practicas y proyectos"** y completa el reto **"Practica 1. El Pergamino de Iniciación"**.

> [!IMPORTANT] Antes de terminar, verifica que:
> - Tu archivo se abre correctamente en el navegador (con Live Server si lo instalaste).
> - Usaste al menos un `<h1>` como título principal (solo uno).
> - Todas tus imágenes tienen atributo `alt`.
> - Si usaste `target="_blank"` en algún enlace, también agregaste `rel="noopener noreferrer"`.
