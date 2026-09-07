# Introducción a JavaScript: El Despertar de la Magia

## 1. ¿Qué es JavaScript?

JavaScript es un **lenguaje de programación** interpretado (el navegador lo lee y ejecuta al momento) que nos permite hacer que la página "piense" y reaccione. A diferencia de HTML/CSS, aquí sí estamos programando: podemos realizar cálculos, tomar decisiones y reaccionar a lo que hace el usuario.

- HTML: "Esto es un botón".
- CSS: "Este botón es morado y redondeado".
- **JavaScript**: "Cuando el usuario haga clic en este botón, muestra un mensaje".

> [!IMPORTANT] Dato importante
> JavaScript **NO es lo mismo que Java**. Son lenguajes totalmente distintos. Como lo son el "Cine" y el "Gimnasio".

## 2. ¿Cómo invocar el hechizo? (Vincular JS)

Al igual que con CSS, tenemos dos formas principales de incluir código JS en nuestro HTML usando la etiqueta `<script>`.

### A. Interno (Scripts rápidos)

Se escribe directamente en el HTML.

```HTML
<script>
    console.log("¡Hechizo ejecutado!");
</script>
```

### B. Externo (El estándar profesional) 🏆

Creamos un archivo `.js` y lo llamamos.

```HTML
<script src="script.js"></script>
```

> [!IMPORTANT] Regla de Oro
> Siempre coloca la etiqueta `<script>` **al final de tu `<body>`**, justo antes de la etiqueta de cierre `</body>`. Esto asegura que el HTML cargue primero y la página no se sienta lenta. (En el Día 9 verás la alternativa moderna con `defer`).

## 3. Tu Primer Hechizo: La Consola del Navegador

Antes de programar, necesitas saber **dónde ver los resultados**. La consola es tu "cristal mágico": te muestra lo que tu código dice.

### Cómo abrir la consola

1. Abre tu página HTML en el navegador.
2. Presiona la tecla **F12** (o clic derecho → "Inspeccionar").
3. Ve a la pestaña **"Consola" (Console)**.
4. Ahí verás todo lo que tu código imprime con `console.log()`.

### ¿Qué es console.log()?

Es nuestra herramienta principal de **depuración**: muestra un mensaje en la consola para que veas qué está pasando.

```JavaScript
console.log("Hola, mundo mágico!");
console.log(10 + 5);
```

## 4. Declaraciones: Los Nombres de la Magia

Para guardar información, usamos **variables**. En JavaScript moderno tenemos tres formas de declarar "contenedores":

| **Declaración** | **¿Se puede cambiar?** | **¿Es moderna?** | **Recomendación**                                                                               |
| --------------- | ---------------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| **`const`**     | **No** (Es constante)  | Sí               | Úsala por defecto para todo.                                                                    |
| **`let`**       | **Sí**                 | Sí               | Úsala solo si sabes que el valor va a cambiar.                                                  |
| **`var`**       | Sí                     | No               | **Evítala**. Es la forma antigua y puede causar "errores fantasma" (problemas de scope).        |

```JavaScript
const nombreMago = "Gandalf"; // No cambiará
let nivelEnergia = 100;       // Puede subir o bajar
nivelEnergia = 90;            // ¡Correcto!

// nombreMago = "Merlín";     // ❌ ERROR: const no se puede reasignar
```

## 5. Tipos de Datos (Los Ingredientes)

Para que JavaScript sepa qué hacer, necesita saber qué tipo de dato está manejando.

- **Strings (Cadenas)**: Texto encerrado en comillas (`" "`, `' '` o `` ` ` ``).
- **Numbers (Números)**: Valores numéricos, sean enteros o decimales (`10`, `3.14`).
- **Booleans (Booleanos)**: Valores lógicos: `true` (verdadero) o `false` (falso).
- **Null**: Indica que una variable está **intencionalmente** vacía.
- **Undefined**: Una variable que ha sido declarada pero aún no tiene valor.

```JavaScript
const nombre = "Gandalf";          // string
const nivel = 100;                 // number
const esMago = true;               // boolean
const pociónBebida = null;         // null (vacío a propósito)
let energía;                       // undefined (existe pero sin valor)
```

## 6. Operadores Básicos: Manipulando la Magia

### A. Aritméticos (Cálculos)

- `+` (Suma / Concatenación de texto)
- `-` (Resta)
- `*` (Multiplicación)
- `/` (División)
- `%` (Módulo: el resto de una división)
- `**` (Exponente)

```JavaScript
console.log(7 % 3);  // 1 (el resto de dividir 7 entre 3)
console.log(2 ** 3);  // 8 (2 elevado a 3)
```

### B. Comparación (¿Quién es más fuerte?)

Devuelven un booleano (`true`/`false`).

- `==` : Igualdad de valor (`5 == "5"` es `true`).
- `===` : Igualdad estricta (compara **valor y tipo**. `5 === "5"` es `false`). **¡Usa siempre este!**
- `!=` / `!==` : Distinto / Distinto estricto.
- `>`, `<`, `>=`, `<=` : Mayor, menor, mayor o igual...

> [!WARNING] ¿Por qué siempre `===`?
> Porque `==` convierte los tipos de forma sorprendente:
> ```JavaScript
> console.log(5 == "5");    // true (JS convierte "5" a número 😱)
> console.log(5 === "5");   // false (no compara número con string)
> console.log(0 == "");     // true (¡¿un número que es igual a un texto vacío?!)
> ```
> Usar `===` evita errores "fantasma" muy difíciles de encontrar. Acostúmbrate a escribirlo siempre.

### C. Lógicos (Combinando condiciones)

- `&&` (AND): Verdadero solo si **ambos** son ciertos.
- `||` (OR): Verdadero si **al menos uno** es cierto.
- `!` (NOT): Invierte el valor (lo que es `true` pasa a `false`).

```JavaScript
const energia = 100;
const tieneVarita = true;

console.log(energia > 50 && tieneVarita); // true (ambas ciertas)
console.log(energia > 50 || tieneVarita); // true (al menos una)
console.log(!tieneVarita);                // false (invierte)
```

## 7. Concatenación y Template Literals

Hay dos formas de unir texto con variables: la clásica y la moderna.

### Concatenación clásica (con `+`)

```JavaScript
const nombre = "Gandalf";
console.log("Bienvenido, " + nombre + ". Tu maná es de " + 100);
```

### Template literals (con backticks `` ` ``) — la forma moderna 🏆

Usa el acento grave (backtick, la tecla junto al número 1 en tu teclado) y `${...}` para insertar variables.

```JavaScript
const nombre = "Gandalf";
const mana = 100;
console.log(`Bienvenido, ${nombre}. Tu maná es de ${mana}.`);
// Resultado: "Bienvenido, Gandalf. Tu maná es de 100."
```

> [!TIP] ¿Cuál usar?
> Los **template literals** son más legibles y modernos. Son el estándar profesional. La mayoría de los ejemplos de este curso los usan.

## 8. Herramientas de Diagnóstico

Como magos aprendices, necesitamos ver qué está pasando "detrás de cámaras".

- **`console.log()`**: Muestra un mensaje en la consola del navegador (F12). Es nuestra herramienta principal de depuración.
- **`alert()`**: Lanza una ventana emergente. Úsala con moderación, ¡puede ser molesta!
- **`prompt()`**: Abre una ventana para que el usuario escriba algo.

```JavaScript
const nombre = prompt("¿Cuál es tu nombre de mago?");
alert(`¡Bienvenido, ${nombre}!`);
```

> [!INFO] Sobre el tipado dinámico
> JavaScript es de **tipado dinámico**: una misma variable puede guardar un número y luego un texto. Eso es flexible, pero también causa confusiones (las mismas de la sección 6). Presta atención al tipo de dato que tienes.

## 📝 Práctica de Consola

Crea un archivo `script.js`, vincúlalo a tu `index.html` (al final del `<body>`), y escribe y ejecuta:

```JavaScript
// 1. Declaramos variables
const nombre = prompt("¿Cuál es tu nombre de mago?");
let mana = 100;
const costoHechizo = 25;

// 2. Operación aritmética
mana = mana - costoHechizo;

// 3. Template literal (forma moderna)
console.log(`Bienvenido ${nombre}`);
console.log(`Tu maná actual es de: ${mana}`);

// 4. Comparación lógica
const puedeLanzarOtro = mana >= costoHechizo;
console.log(`¿Puedes lanzar otro hechizo? ${puedeLanzarOtro}`);
```

> [!TIP] Prueba a cambiar los valores
> Cambia `costoHechizo` a `200` y observa cómo cambia el mensaje final. Experimenta: esa es la mejor forma de aprender.

## 🛠️ Extra (Opcional): Node.js y NPM — La Forja del Mago

> [!INFO] ¿Lo necesitas ya?
> Esta sección es **optativa**. Puedes aprender las bases de JavaScript solo con el navegador (F12). Node.js te servirá más adelante, cuando quieras hacer automatizaciones, servidores o herramientas de línea de comandos. Vuelve aquí cuando quieras.

¿Qué es Node.js? Aunque JavaScript nació para vivir **dentro del navegador**, Node.js es un entorno que permite que JavaScript corra **en tu computadora** como cualquier otro programa. Esto es lo que permite crear servidores, herramientas de automatización y aplicaciones complejas.

### Paso 1: Descarga

1. Ve al sitio oficial: nodejs.org.
2. Elige siempre la versión **LTS** (Long Term Support). Es la más estable y segura. La versión "Current" es para quien quiere lo último, pero puede tener fallos.

### Paso 2: Instalación

Windows / macOS: Ejecuta el instalador descargado. Dale a "Siguiente" a todo. Asegúrate de que la opción **"Add to PATH"** esté marcada.

### Paso 3: Verificación

Abre tu terminal (CMD, PowerShell o la terminal de VS Code) y escribe:

```Bash
node -v
```

Si ves algo como `v20.11.0`, ¡Node ya está en tu sistema!

```Bash
npm -v
```

Esto verifica **NPM** (Node Package Manager), que es la "mochila de herramientas" de Node. Se instala automáticamente con él.

### ¿Qué es NPM?

NPM es el gestor de paquetes de Node. Imagina que es una biblioteca mágica universal donde otros magos (programadores) han guardado funciones y herramientas que tú puedes descargar y usar sin tener que escribirlas desde cero.

- Instalar una herramienta: `npm install nombre-del-paquete`
- Iniciar un proyecto: `npm init -y` (crea un archivo `package.json`, el "inventario" de tu proyecto).

### Ejecutando tu primer script en Node

1. Crea un archivo llamado `app.js`.
2. Escribe: `console.log("¡Magia desde la terminal!");`
3. En tu terminal, escribe:

```Bash
node app.js
```
