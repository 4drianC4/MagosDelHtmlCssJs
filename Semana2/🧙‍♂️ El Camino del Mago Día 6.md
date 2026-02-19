# Introducción a JavaScript: El Despertar de la Magia
## 1. ¿Qué es JavaScript?

JavaScript es un lenguaje de programación interpretado (el navegador lo lee y ejecuta al momento) y orientado a objetos. A diferencia de HTML/CSS, aquí sí estamos programando: podemos realizar cálculos, tomar decisiones y reaccionar a lo que hace el usuario.

>[!IMPORTANT] Dato importante: 
>JavaScript NO es lo mismo que Java. Son lenguajes totalmente distintos, como lo son el "Cine" y el "Gimnasio".

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

Creamos un archivo .js y lo llamamos.
```HTML
<script src="script.js"></script>
```

>[!IMPORTANT] Regla de Oro: 
>Siempre coloca la etiqueta `<script>` al final de tu `<body>`, justo antes de la etiqueta de cierre `</body>`. Esto asegura que el HTML cargue primero y la página no se sienta lenta.

## 3. Declaraciones: Los nombres de la magia

Para guardar información, usamos variables. En JavaScript moderno tenemos tres formas de declarar "contenedores":

|**Declaración**|**¿Se puede cambiar?**|**¿Es moderna?**|**Recomendación**|
|---|---|---|---|
|**`const`**|**No** (Es constante)|Sí|Úsala por defecto para todo.|
|**`let`**|**Sí**|Sí|Úsala solo si sabes que el valor va a cambiar.|
|**`var`**|Sí|No|**Evítala**. Es la forma antigua y puede causar "errores fantasma" (problemas de scope).|

Ejemplo:
```JavaScript
const nombreMago = "Gandalf"; // No cambiará
let nivelEnergia = 100;       // Puede subir o bajar
nivelEnergia = 90;            // ¡Correcto!
```

## 4. Tipos de Datos (Los ingredientes)

Para que JavaScript sepa qué hacer, necesita saber qué tipo de dato está manejando.
- Strings (Cadenas): Texto encerrado en comillas (" ", ' ' o ` `).
- Numbers (Números): Valores numéricos, sean enteros o decimales (10, 3.14).
- Booleans (Booleanos): Valores lógicos: true (verdadero) o false (falso).
- Null: Indica que una variable está intencionalmente vacía.
- Undefined: Una variable que ha sido declarada pero aún no tiene valor.

## 5. Operadores Básicos: Manipulando la Magia
### A. Aritméticos (Cálculos)

- + (Suma / Concatenación de texto)
- - (Resta)
- * (Multiplicación)
- / (División)
- % (Módulo: el resto de una división)
- ** (Exponente)

### B. Comparación (¿Quién es más fuerte?)

Devuelven un booleano (true/false).

- == : Igualdad de valor (5 == "5" es true).
- === : Igualdad estricta (compara valor y tipo. 5 === "5" es false). ¡Usa siempre este!
- != / !== : Distinto / Distinto estricto.
- `>, <, >=, <=` : Mayor, menor, mayor o igual...

### C. Lógicos (Combinando condiciones)

- && (AND): Verdadero solo si ambos son ciertos.
- || (OR): Verdadero si al menos uno es cierto.
- ! (NOT): Invierte el valor (lo que es true pasa a false).

### 6. Primeras Herramientas de Diagnóstico

Como magos aprendices, necesitamos ver qué está pasando "detrás de cámaras".
- console.log(): Muestra un mensaje en la consola del navegador (F12). Es nuestra herramienta principal de depuración.
- alert(): Lanza una ventana emergente. Úsala con moderación, ¡puede ser molesta!
- prompt(): Abre una ventana para que el usuario escriba algo.

## 7. Instalando Node.js: La Forja del Mago 🛠️

Aunque JavaScript nació para vivir dentro del navegador (Chrome, Firefox, Edge), Node.js es un entorno que permite que JavaScript corra en tu computadora como cualquier otro programa. Esto es lo que permite crear servidores, herramientas de automatización y aplicaciones complejas.

### Paso 1: Descarga

1. Ve al sitio oficial: nodejs.org.
2. Verás dos opciones. Elige siempre la versión LTS (Long Term Support).
3. ¿Por qué LTS? Es la versión más estable y segura. La versión "Current" es para quienes quieren probar lo último, pero puede tener fallos.

### Paso 2: Instalación

Windows / macOS: Ejecuta el instalador descargado. Dale a "Siguiente" a todo.

>[!IMPORTANT] Importante (Windows): 
>Si te pregunta sobre instalar "Tools for Native Modules" (Chocolatey), puedes marcarlo, aunque no es estrictamente necesario para empezar. Asegúrate de que la opción "Add to PATH" esté marcada.


### Paso 3: Verificación (El momento de la verdad)

Para saber si la instalación fue exitosa, abre tu terminal (CMD, PowerShell o la terminal de VS Code) y escribe los siguientes comandos:
Bash

node -v

Si ves algo como v20.11.0, ¡Node ya está en tu sistema!
```Bash
npm -v
```

Esto verifica NPM (Node Package Manager), que es la mochila de herramientas de Node. Se instala automáticamente con él.

## 8. ¿Qué es NPM y por qué lo necesito? 

NPM es el gestor de paquetes de Node. Imagina que es una biblioteca mágica universal donde otros magos (programadores) han guardado funciones y herramientas que tú puedes descargar y usar en tus proyectos sin tener que escribirlas desde cero.

- Instalar una herramienta: npm install nombre-del-paquete
- Iniciar un proyecto: npm init -y (Esto crea un archivo package.json, que es el "inventario" de tu proyecto).

## 9. Ejecutando tu primer script en Node

Ahora no necesitas el navegador para ver tus resultados.

1. Crea un archivo llamado app.js.
2. Escribe: console.log("¡Magia desde la terminal!");
3. En tu terminal, escribe:

```Bash
node app.js
```

## Práctica de Consola

```JavaScript
// 1. Declaramos variables
const nombre = prompt("¿Cuál es tu nombre de mago?");
let mana = 100;
const costoHechizo = 25;

// 2. Operación aritmética
mana = mana - costoHechizo;

// 3. Concatenación (Unir textos)
console.log("Bienvenido " + nombre);
console.log("Tu maná actual es de: " + mana);

// 4. Comparación lógica
const puedeLanzarOtro = mana >= costoHechizo;
console.log("¿Puedes lanzar otro hechizo? " + puedeLanzarOtro);
```