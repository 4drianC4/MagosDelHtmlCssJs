# whoami
## Dev. Adrian Rafael Camara Reque
## FullStack - Desingner en Coder Blend
## FullStack en Watcheye
## Cofundador de Digital Services
## & Estudiante en la Universidad Mayor de San Simón
# Introducción a HTML y Estructura Básica
## 1. ¿Qué es HTML?

HTML (HyperText Markup Language) es el componente fundamental de la web. No es un lenguaje de programación, sino un lenguaje de marcado que define el significado y la estructura de un documento.
- HTML: Define la estructura (el "esqueleto").
- CSS: Define la apariencia (la "ropa").
- JavaScript: Define la funcionalidad (el "comportamiento").

>[!INFO] LOS LENGUAJES DE MARCADO NO SON LENGUAJES DE PROGRAMACIÓN 
>Los lenguajes de marcado como HTML, XML o LaTeX utilizan reglas para estructurar y codificar documentos, indicando al navegador cómo debe mostrarse la información.

## 2. Preparando el Entorno de Trabajo

Para empezar a escribir código, necesitas un editor. El estándar de la industria es Visual Studio Code (VS Code).

Pasos rápidos para configurar:
1. Descarga: Ve a https://code.visualstudio.com/download.
2. Instalación: Durante el proceso en Windows, asegúrate de marcar la casilla "Agregar al PATH" y "Abrir con Code" para facilitar el acceso a tus carpetas.
3. Tu primer archivo: Crea un archivo con extensión .html (ejemplo: index.html).
![[Pasted image 20260209155058.png]]

>[!TIP] También puedes utilizar compiladores online
>https://onecompiler.com/html

## 3. Estructura Básica de un Documento HTML

>[!INFO] Sobre la estructura de un documento html...
>la estructura de un documento HTML  se compone de etiquetas, las cuales informan al navegador sobre la estructura de una página web. Se escriben entre signos de menor y mayor (< >) y se pueden clasificar en etiquetas de cierre automático y etiquetas que necesitan cerrarse.

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
    </body>
</html>
```

Desglose de etiquetas esenciales:

- `<!DOCTYPE html>`: Informa al navegador que use el estándar moderno de HTML5.
- `<html>`: Es la raíz del documento. El atributo lang="es" indica el idioma del contenido.
- `<head>`: Contiene metadatos (información de fondo) que no se ven en la página, como el título, enlaces a estilos y codificación de caracteres.
- `<body>`: Contiene todo lo que el usuario ve: textos, imágenes, enlaces y títulos. Regla de oro: Solo puede haber un `<body>` por documento.

## 4. Etiquetas de Contenido (Texto)

### Encabezados (`<h1>` a `<h6>`)

Se utilizan para jerarquizar el contenido.

- `<h1>`: El título más importante (solo debe haber uno por página).
- `<h6>`: El nivel de menor importancia.

### Párrafos y Saltos

- `<p>`: Define un bloque de texto. El navegador añade automáticamente un espacio después de cerrarlo.
- `<br>`: Realiza un salto de línea manual sin crear un nuevo párrafo.
- `<hr>`: Dibuja una línea horizontal para separar temas visualmente.

## 5. Listas: Organizando la Información

Para crear listas, siempre necesitamos una etiqueta "madre" que defina el tipo y etiquetas "hijas" para cada elemento.

| **Tipo de Lista**         | **Etiqueta Madre** | **Etiqueta de Elemento** |
| ------------------------- | ------------------ | ------------------------ |
| **Desordenada** (viñetas) | `<ul>`             | `<li>`                   |
| **Ordenada** (números)    | `<ol>`             | `<li>`                   |
### Ejemplo de código:
```HTML
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ul>
```
>[!TIP] El atributo type ayuda a elegir el modelo de los punteros de la lista 
>para ul existe: disc, circle, square, none
>para ol existe:1, a, A, i, I
## 6. Enlaces: Conectando el Contenido (`<a>`)

La etiqueta `<a>` (anchor) es la que permite crear hipervínculos a otras páginas web, archivos o secciones del mismo documento.

Atributos clave:
- href: Es el atributo más importante; aquí colocas la URL o la ruta del archivo al que quieres dirigir al usuario.
- target: Define dónde se abrirá el enlace.
	- `_self` (predeterminado): Abre el enlace en la misma pestaña.
	- `_blank`: Abre el enlace en una nueva pestaña.
	*otras que ya no se usan mucho pero pueden servir*
	- `_parent`: Carga el archivo sobre la página padre (si es que existe, si no se comporta como `“_self”`.
	- `_top`: Carga la url en el contexto más alto de navegación, posiblemente index.
- `rel="noopener noreferrer"`: Una buena práctica de seguridad que debes usar siempre que utilices target=`"_blank"` para proteger tu sitio.

## 7. Rutas Relativas vs. Absolutas

Para que los enlaces y las imágenes funcionen, debes saber cómo referenciarlos.

| **Tipo de Ruta** | **Definición**                                                          | **Ejemplo**                                |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| **Absoluta**     | La dirección completa desde la raíz o una URL completa.                 | `https://google.com` o `C:\fotos\logo.png` |
| **Relativa**     | La ubicación del archivo respecto al documento donde estás escribiendo. | `images/foto.jpg` o `/contacto.html`       |

## 8. Imágenes en HTML (`<img>`)

Para mostrar imágenes utilizamos la etiqueta <img>. A diferencia de otras, esta es una etiqueta de cierre automático (no necesita `</img>`).

Atributos esenciales:
- src (source): La ruta (relativa o absoluta) donde se encuentra la imagen.
- alt (alternative text): Una descripción corta de la imagen.
	- ¿Por qué es vital? Ayuda a la accesibilidad (lectores de pantalla para personas con discapacidad visual) y aparece si la imagen no carga.

Ejemplo de código:
```HTML
<img src="img/mago.png" alt="Ilustración de un mago principiante" width="300">
```
## 9. 🛠️ Herramientas de Poder: VS Code Like a Pro

Para ser un verdadero "mago" del código, necesitas que tu libro mágico (el editor) trabaje para ti.

### 1. Extensiones Imprescindibles

En VS Code, ve al icono de cuadrados en la barra lateral izquierda e instala estas tres:

* Live Server: Permite abrir un servidor local para ver los cambios de tu HTML en tiempo real. ¡Guardas el archivo y la página se actualiza sola!
* Prettier: Formatea tu código automáticamente. Si dejas todo desordenado, Prettier lo alinea por ti para que sea legible.
* Auto Close Tag: Cuando escribes una etiqueta de apertura (ej. `<div>`), VS Code escribe automáticamente la de cierre (`</div>`).
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
- **`Alt` + `Z`**: Ajuste de línea (para que el texto no se salga de la pantalla y tengas que usar el scroll horizontal).
- **`Ctrl` + `/`**: Comentar/Descomentar una línea de código.
- **`Alt` + `↑ / ↓`**: Mueve la línea de código donde estás parado hacia arriba o hacia abajo.