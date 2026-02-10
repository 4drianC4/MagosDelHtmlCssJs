# HTML Semántico y Estructura Avanzada
## 1. ¿Qué es la Semántica en HTML?

Imagina que recibes un documento donde todo está escrito con el mismo tamaño de letra y sin espacios. Sería difícil saber qué es el título, qué es un párrafo importante o qué es una nota al pie.

El HTML Semántico consiste en usar etiquetas que describen el significado de su contenido, no solo su apariencia.

    HTML No Semántico: Usa etiquetas genéricas (como <div> y <span>) para todo. Funciona visualmente, pero no dice nada sobre qué contiene.

    HTML Semántico: Usa etiquetas específicas (como <header>, <article>, <footer>) que explican claramente qué es esa sección.

    ¿Por qué es vital?

        SEO (Google): Los buscadores entienden mejor tu página y la posicionan más arriba.

        Accesibilidad: Los lectores de pantalla para ciegos pueden navegar mejor por el contenido.

        Mantenibilidad: Es más fácil leer y corregir el código.

2. Las Nuevas Estructuras del Mago (Etiquetas de Estructura)

En lugar de construir todo con "ladrillos genéricos", usaremos piezas especializadas para cada parte del sitio web.
<header> (Encabezado)

No confundir con el <head>. El <header> es la cabecera visible de tu página o de una sección.

    Uso común: Logotipos, título principal, menú de navegación o barra de búsqueda.

HTML

<header>
  <h1>Mi Blog de Magia</h1>
  <img src="logo-sombrero.png" alt="Logo">
</header>

<nav> (Navegación)

Contiene los enlaces principales para moverse por el sitio.

    Uso común: Menú principal, índice de contenidos.

HTML

<nav>
  <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="hechizos.html">Hechizos</a></li>
  </ul>
</nav>

<main> (Contenido Principal)

Es el corazón de tu página. Solo debe haber un <main> por documento y contiene la información única de esa página específica.
<section> vs <article> (La duda eterna)

A menudo se confunden, aquí la diferencia práctica:

    <section>: Agrupa contenido relacionado por temática. Siempre debería tener un título (h2-h6). Ejemplo: Una sección de "Testimonios" o "Servicios".

    <article>: Contenido independiente que tiene sentido por sí mismo, incluso si lo sacas de la página. Ejemplo: Un post de blog, una noticia, un comentario de usuario.

<aside> (Contenido Tangencial)

Información relacionada pero no crítica. Si lo quitas, el contenido principal se sigue entendiendo.

    Uso común: Barras laterales, publicidad, listas de "posts relacionados".

<footer> (Pie de Página)

La parte final del documento o sección.

    Uso común: Copyright, enlaces legales, redes sociales, datos de contacto.

3. Ejemplo Práctico: Esqueleto Semántico

Así se ve una estructura moderna completa comparada con la antigua:
HTML

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