# El Primer Grimorio: Presentación del Portafolio de HTML y CSS

## 1. ¿Qué es un Portafolio?

Un portafolio web es tu carta de presentación como desarrollador: una página donde muestras quién eres, qué sabes hacer y los proyectos que has construido.

Hoy es un día especial: **tu primer portafolio** será la culminación de toda la Semana 1. Juntará lo que aprendiste en los Días 1 a 5:

- Día 1: La estructura base y el `pergamino.html` (tu presentación personal).
- Día 2: La semántica, las tablas y los formularios (`RegistroMagico.html`, horario, contacto).
- Día 3: Los primeros estilos con CSS.
- Día 4: Los layouts con Flexbox y Grid.
- Día 5: El diseño responsive, las animaciones y las variables.

## 2. El Objetivo del Día

Unir **todas esas piezas** en una sola página profesional: tu portafolio. No es solo un ejercicio más; es el proyecto que seguirás mejorando a lo largo del curso y al que agregarás interactividad con JavaScript en la Semana 2.

> [!IMPORTANT] Estructura recomendada de filas
> Crea tres archivos principales en tu carpeta de proyecto:
> - `index.html` — La página principal de tu portafolio.
> - `estilos.css` — Tus estilos externos.
> - `script.js` — (Lo crearás vacío hoy, lo llenarás en la Semana 2).

## 3. Estructura del Portafolio (Sections)

Tu portafolio debe tener al menos estas secciones, usando **HTML semántico**:

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio Mágico</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <!-- Portada / Hero: tu nombre, título y frase de bienvenida -->
    <header class="hero">
        <h1>Hola, soy [Tu Nombre]</h1>
        <p>Aprendiz de Mago del Desarrollo Web</p>
    </header>

    <!-- Navegación: menú que enlaza a las secciones -->
    <nav>
        <ul>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>

    <main>
        <section id="sobre-mi">
            <h2>Sobre Mí</h2>
            <!-- Reutiliza tu presentación del Pergamino (Día 1) -->
        </section>

        <section id="proyectos">
            <h2>Mis Proyectos</h2>
            <!-- Un grid de tarjetas con los proyectos de tus días 1 y 2 -->
        </section>

        <section id="habilidades">
            <h2>Habilidades</h2>
            <!-- Listas con tus habilidades aprendidas -->
        </section>

        <section id="contacto">
            <h2>Contacto</h2>
            <!-- Tu formulario de contacto (Día 2) -->
        </section>
    </main>

    <footer>
        <p>&copy; 2026 [Tu Nombre] — Hecho con magia HTML y CSS</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## 4. Los Retos del Día

Usa todo lo que aprendiste para hacer que tu portafolio luzca profesional. Estos son los **requisitos mínimos** para aprobar la presentación:

### Requisitos de HTML
- [ ] Usa etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- [ ] Un solo `<h1>` (tu nombre) en la portada.
- [ ] Navegación con enlaces internos (anclas `#sobre-mi`, `#proyectos`, etc.).
- [ ] Al menos 3 imágenes con su atributo `alt`.

### Requisitos de CSS
- [ ] Archivo **externo** `estilos.css` enlazado en el `<head>`.
- [ ] Variables CSS (`:root`) para tu paleta de colores.
- [ ] **Flexbox** en al menos una parte (ej. la navegación o la portada).
- [ ] **Grid** para organizar las tarjetas de proyectos.
- [ ] Al menos una **transición** o efecto `:hover`.
- [ ] **Media queries** para que se vea bien en celular.
- [ ] Fuente de **Google Fonts** con fallback `sans-serif`.

### Requisitos de contenido
- [ ] Tus datos reales (nombre, hobbies, habilidades, formación).
- [ ] Enlaces a tus redes sociales (con `target="_blank"` y `rel="noopener noreferrer"`).
- [ ] Proyectos de los Días 1 y 2 mostrados de forma atractiva (pueden ser enlaces o capturas).

## 5. Rúbrica de Evaluación

Esta es la tabla con la que se evaluará tu portafolio. Revísala antes de presentar.

| **Criterio**                          | **Nivel Básico**                     | **Nivel Competente**                                    | **Nivel Experto**                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| Estructura HTML                       | Usa divs para todo.                  | Usa etiquetas semánticas correctamente.                 | Semántica perfecta + navegación con anclas funcionando.      |
| Estilos CSS                           | CSS interno o inline.                | Archivo CSS externo con variables.                      | CSS modular + variables + layout consistente con Flexbox/Grid. |
| Responsive                            | No se ve bien en móvil.              | Usa media queries y se ve aceptable en móvil.           | Diseño Mobile First pulido (sin scroll horizontal).          |
| Detalles visuales                     | Sin transiciones ni hover.           | Transiciones y hover en al menos un elemento.           | Animaciones y micro-interacciones cuidadas.                  |
| Accesibilidad                         | Faltan alts, labels y scope.         | Usa alt, label-con-for y th con scope.                  | Todo lo anterior + contraste de colores y jerarquía visual.  |

> [!INFO] Objetivo del día 6
> No busques perfección: busca un portafolio **completo, responsive y con tu identidad visual**. Lo volverás más interactivo en el Día 11, cuando le agregues JavaScript.

## 6. Guía de Presentación

Antes de presentar tu portafolio, sigue esta mini-guía de 5 minutos:

1. **Abre** tu `index.html` con Live Server.
2. **Muévete** por las secciones usando el menú de navegación.
3. **Prueba en el modo celular** (F12 → icono 📱) y muestra cómo se adapta.
4. **Haz hover** sobre un botón o tarjeta para enseñar las transiciones.
5. **Explica en una oración** qué aprendiste hoy que no sabías antes de la semana.

> [!TIP] ¿Terminaste? Sube de nivel 🚀
> 1. Publícalo gratis en **GitHub Pages** para tener tu portafolio en internet real (busca "GitHub Pages" en tu buscador favorito).
> 2. Dale un "modo oscuro" combinando variables CSS (aunque sea manual por ahora; en el Día 9 verás cómo hacerlo con un botón).
> 3. Agrégale tu carta holográfica del Día 5 (`carta-container`) como un detalle decorativo.

## 7. Cierre de la Semana 1

¡Felicitaciones, aprendiz! 🎉 Has sentado los cimientos:

- Sabes estructurar cualquier página web con HTML.
- Sabes darle vida, estilo y adaptabilidad con CSS.
- Creaste tu primer portafolio profesional.

A partir del **Día 7** comenzará la magia de verdad: **JavaScript** hará que tu portafolio piense, reaccione y responda a las acciones del usuario.

> *"Un mago no nace con poderes: los construye con cada hechizo aprendido."*
