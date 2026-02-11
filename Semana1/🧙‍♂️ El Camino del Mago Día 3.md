# Introducción a CSS y Estilos Básicos
## 1. ¿Qué es CSS? (La Ropa del Mago)

Si HTML es el esqueleto y la estructura, CSS (Cascading Style Sheets) es la piel, la ropa y el maquillaje. Es el lenguaje que usamos para decirle al navegador cómo deben verse los elementos.
- HTML: Dice "Esto es un título".
- CSS: Dice "Este título es azul, grande y está centrado".
---
## 2. Anatomía de una Regla CSS

CSS no funciona con etiquetas, sino con Reglas. Una regla tiene dos partes: a quién modificamos (selector) y qué le cambiamos (declaración).
```CSS
/* SELECTOR */
h1 {
    /* PROPIEDAD: VALOR; */
    color: red;
    font-size: 20px;
}
```

>[!INFO] ¡Ojo al detalle! 
>En CSS usamos llaves { } para agrupar las reglas y cada instrucción debe terminar obligatoriamente con punto y coma ;.

---
## 3. ¿Dónde escribimos el hechizo? (Tipos de Inserción)

Hay tres formas de conectar CSS con HTML, pero solo una es la "Vía del Mago Supremo".
### A. Externa (La Profesional) 🏆
Creas un archivo separado (ej. style.css) y lo vinculas en el `<head>` de tu HTML.

```HTML
	<link rel="stylesheet" href="style.css">
```

>[!INFO] Ventaja: 
>Mantienes el orden. Un solo archivo de estilos puede controlar 100 páginas HTML.

### B. Interna (Para pruebas rápidas)

Usas la etiqueta `<style>` dentro del `<head>`.
```HTML
<style>
  p { color: blue; }
</style>
```
### C. En línea (La Prohibida 🚫)
Se escribe directamente en la etiqueta HTML.
```HTML
<p style="color: red;">Texto</p>
```
>[!INFO] Desventaja: 
>Es una pesadilla de mantener. ¡Evítala a menos que sea estrictamente necesario!

---
## 4. Selectores: ¿A quién lanzamos el hechizo?

Para dar estilo, primero debes apuntar al elemento correcto.

|**Selector**|**Símbolo**|**Ejemplo**|**Descripción**|
|---|---|---|---|
|**Universal**|`*`|`* { margin: 0; }`|Selecciona **todos** los elementos de la página. Se usa para reiniciar estilos.|
|**Etiqueta**|(Nada)|`p { ... }`|Afecta a **todos** los párrafos `<p>` del sitio.|
|**Clase**|`.`|`.boton { ... }`|Afecta a cualquier elemento que tenga `class="boton"`. **Es el más usado.**|
|**ID**|`#`|`#header { ... }`|Afecta a un **único** elemento con `id="header"`.|

### La analogía del Gremio:
- Etiqueta: "¡Que todos los magos se levanten!" (Afecta a todos).
- Clase: "¡Que los magos de fuego se levanten!" (Afecta a un grupo específico).
- ID: "¡Que Merlín se levante!" (Afecta solo a uno).
---
## 5. El Color en la Web

CSS nos permite definir colores de varias formas. Las más comunes son:
- Nombres (Keywords): red, blue, gold. (Limitados, poco usados profesionalmente).
- Hexadecimal (Hex): Código de 6 dígitos que empieza con #. Ej: #ff5733.
- RGB: Mezcla de Rojo, Verde y Azul. Ej: rgb(255, 0, 0).
- RGBA: Igual que el anterior, pero el último número es la Transparencia (Alpha) de 0 a 1. Ej: rgba(0, 0, 0, 0.5) (Negro medio transparente).

---
## 6. El Modelo de Caja (The Box Model) 📦

Este es el concepto más importante del diseño web. Todo elemento en HTML es, en realidad, una caja rectangular.

Esta caja tiene 4 capas, desde adentro hacia afuera:
1. Content (Contenido): El texto o la imagen real.
2. Padding (Relleno): El espacio interno entre el contenido y el borde. Es como el plástico de burbujas dentro de una caja.
3. Border (Borde): La línea que rodea la caja.
4. Margin (Margen): El espacio externo que separa esta caja de las demás. Es el "espacio personal" del elemento.

Ejemplo visual en código:

```CSS

.caja-magica {
    width: 200px;          /* Ancho del contenido */
    padding: 20px;         /* Espacio interno (la caja engorda) */
    border: 5px solid gold;/* El borde visible */
    margin: 50px;          /* Empuja a los vecinos lejos */
}
```
## 7. Bordes: Estilo y Redondeo

La propiedad border suele usarse de forma abreviada (shorthand) para ahorrar tiempo.

### Sintaxis abreviada:
border: `[grosor] [estilo] [color]`;

```CSS
/* Borde sólido rojo de 1 pixel */
div {
    border: 1px solid red;
}
```

### Border Radius (Redondear esquinas):
Es lo que hace que los botones se vean modernos.

- border-radius: 10px; (Esquinas suaves).
- border-radius: 50%; (Si el elemento es cuadrado, esto lo convierte en un círculo perfecto).