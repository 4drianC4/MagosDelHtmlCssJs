# Presentación Final: La Gran Demostración de Maestría 🏆

## 1. ¡El Último Día del Camino!

Han pasado 12 días de entrenamiento. Hoy llegarás ante el **Gran Consejo de Archimagos** para demostrar todo lo aprendido. Esta es la prueba final: presentarás tu **portafolio interactivo**, la obra que resume tu viaje completo.

No se trata solo de mostrar código que funciona: se trata de **explicar la magia** que hay detrás, demostrar que entiendes cada hechizo que lanzas.

## 2. Preparación (20 minutos antes de presentar)

Antes de presentar, haz una última revisión de tu proyecto:

### Checklist técnica (marca todo ✅)
- [ ] Abre tu portafolio con **Live Server** y se ve correctamente.
- [ ] No hay errores en la **consola** (F12) al interactuar.
- [ ] El **modo oscuro** funciona y alterna correctamente.
- [ ] El **filtro de proyectos** muestra las tarjetas correctas para cada categoría.
- [ ] El **formulario** valida campos vacíos y el email, y muestra confirmación.
- [ ] El **menú** funciona en móvil (prueba con el modo celular del navegador).
- [ ] Los enlaces (`target="_blank"` + `rel`) funcionan.

### Checklist de contenido (marca todo ✅)
- [ ] Tu nombre, tu historia y tus datos son reales.
- [ ] Los proyectos mostrados son reales (los que construiste los días 1, 2 y 5).
- [ ] Las habilidades listadas corresponden a lo que realmente aprendiste.

## 3. Guía de Presentación (10-15 minutos)

Sigue esta estructura para tu presentación frente al consejo:

### Paso 1: La Portada (1 minuto)
Abre tu portafolio en la sección principal (hero). Preséntate y di qué hace tu portafolio en una oración.

### Paso 2: El Modo Oscuro (1 minuto)
Haz clic en el botón de tema y **explica**: "Esto usa `classList.toggle` y variables CSS. El botón alterna una clase en el body y los colores cambian."

### Paso 3: El Filtro de Proyectos (2 minutos)
Filtra por cada categoría y **explica**: "Tengo un arreglo de objetos con mis proyectos. Uso `.filter()` para quedarme con los que coinciden y renderizo cada uno con `createElement` y `appendChild`."

### Paso 4: El Formulario (2 minutos)
Intenta enviar el formulario vacío (muestra el error), luego con un email inválido, y finalmente con datos válidos. **Explica**: "Uso `preventDefault()` para que no recargue, y una RegEx valida el email con `.test()`."

### Paso 5: Responsive (2 minutos)
Cambia al modo celular (F12 → 📱) y muestra cómo el menú y la cuadrícula se adaptan. **Explica**: "Usé media queries y `repeat(1fr)` en el grid para que se vea bien en pantallas pequeñas."

### Paso 6: Cierre (2 minutos)
Responde a esta pregunta del consejo (prepárate de antemano):
> "¿Qué es lo que más te costó y cómo lo superaste?"

## 4. Preguntas que el Consejo Puede Hacer

Prepárate para responder (¡tú ya las sabes!):

1. ¿Cuál es la diferencia entre HTML, CSS y JavaScript?
2. ¿Qué hace el `preventDefault()`?
3. ¿Qué diferencia hay entre `textContent` e `innerHTML`? ¿Cuál es más segura?
4. ¿Qué es el "modelo de caja" (box model)?
5. ¿Cuál es la diferencia entre `const` y `let`?
6. ¿Qué significa que un diseño sea "responsive"?
7. ¿Para qué sirve el `return` dentro de una función?
8. ¿Por qué es importante el atributo `alt` en las imágenes?

## 5. Rúbrica Final

Tu evaluación combinada se verá así:

| **Componente**                                 | **Peso sugerido** |
| ---------------------------------------------- | ----------------- |
| Funcionalidades obligatorias del Día 11 (A-D)  | 60%               |
| Calidad y limpieza del código                  | 15%               |
| Diseño visual y responsive                     | 15%               |
| Presentación y explicación verbal              | 10%               |

> [!TIP] Último consejo del grimorio
> El consejo no juzga solo "si funciona": juzga **cómo lo explicas**. Si entiendes *por qué* funciona tu código, tu proyecto vale el doble.

## 6. Después de la Presentación: Siguientes Pasos

¡Felicidades! Has completado el Camino del Mago. Pero el viaje no termina aquí. Revisa la lista de **proyectos por niveles** en la carpeta "Practicas y proyectos" para seguir creciendo:

- **Low Level**: Calculadora, To-Do list, Simulador de pociones...
- **Mid Level**: Clon de página famosa, Dashboard, E-commerce...
- **Hard Level**: SPA sin frameworks, Kanban, App en tiempo real...

> [!INFO] Tus superpoderes en este punto
> Ya puedes: estructurar cualquier página web, estilizarla profesionalmente, hacerla responsive e interactiva, validar datos, manipular el DOM, y explicar tus decisiones. Eso es mucho más de lo que la mayoría sabe.

> *"El viaje del aprendiz termina, pero el viaje del mago apenas comienza. Los hechizos que lances de ahora en adelante, los crearás tú."*

**¡Que la magia del código te acompañe!** 🧙‍♂️✨