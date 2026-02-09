# Introducción a HTML y Estructura Básica
## 1. ¿Qué es HTML?

HTML (HyperText Markup Language) es el componente fundamental de la web. No es un lenguaje de programación, sino un lenguaje de marcado que define el significado y la estructura de un documento.
- HTML: Define la estructura (el "esqueleto").
- CSS: Define la apariencia (la "ropa").
- JavaScript: Define la funcionalidad (el "comportamiento").

>[!INFO] Nota importante: 
>Los lenguajes de marcado como HTML, XML o LaTeX utilizan reglas para estructurar y codificar documentos, indicando al navegador cómo debe mostrarse la información.

## 2. Preparando el Entorno de Trabajo

Para empezar a escribir código, necesitas un editor. El estándar de la industria es Visual Studio Code (VS Code).

Pasos rápidos para configurar:
1. Descarga: Ve a [code.visualstudio.com](https://code.visualstudio.com).
2. Instalación: Durante el proceso en Windows, asegúrate de marcar la casilla "Agregar al PATH" y "Abrir con Code" para facilitar el acceso a tus carpetas.
3. Tu primer archivo: Crea un archivo con extensión .html (ejemplo: index.html).

## 3. Estructura Básica de un Documento HTML

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

- <!DOCTYPE html>: Informa al navegador que use el estándar moderno de HTML5.

<html>: Es la raíz del documento. El atributo lang="es" indica el idioma del contenido.

<head>: Contiene metadatos (información de fondo) que no se ven en la página, como el título, enlaces a estilos y codificación de caracteres.

<body>: Contiene todo lo que el usuario ve: textos, imágenes, enlaces y títulos. Regla de oro: Solo puede haber un <body> por documento.

4. Etiquetas de Contenido (Texto)
Encabezados (<h1> a <h6>)

Se utilizan para jerarquizar el contenido.

    <h1>: El título más importante (solo debe haber uno por página).

<h6>: El nivel de menor importancia.

Párrafos y Saltos

    <p>: Define un bloque de texto. El navegador añade automáticamente un espacio después de cerrarlo.

<br>: Realiza un salto de línea manual sin crear un nuevo párrafo.

<hr>: Dibuja una línea horizontal para separar temas visualmente.

5. Listas: Organizando la Información

Para crear listas, siempre necesitamos una etiqueta "madre" que defina el tipo y etiquetas "hijas" para cada elemento.

Tipo de Lista	Etiqueta Madre	Etiqueta de Elemento
Desordenada (viñetas)	

<ul> 

	

<li> 

Ordenada (números)	

<ol> 
	

	

<li> 

Ejemplo de código:
HTML

<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ul>