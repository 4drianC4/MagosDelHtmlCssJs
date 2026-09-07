# Lógica de Hechizos: Estructuras de Control y Funciones

> [!INFO] ¿Qué aprendemos hoy?
> Hasta ahora tus programas solo hacían una cosa en orden (arriba→abajo). Hoy aprenderás a hacer que tu código **decida** qué hacer (condicionales), **repita** acciones (bucles) y **empaquete** magia reutilizable (funciones).

## 1. Condicionales: Tomando el Camino Correcto

En tu travesía, llegarás a bifurcaciones. Las condicionales permiten que tu código ejecute diferentes acciones según se cumpla o no una condición.

### A. El bloque if / else if / else

Es la estructura básica de decisión.

```JavaScript
let nivelMagia = 15;

if (nivelMagia > 20) {
    console.log("Puedes invocar un Dragón.");
} else if (nivelMagia >= 10) {
    console.log("Puedes invocar un Lobo.");
} else if (nivelMagia >= 5) {
    console.log("Puedes invocar un Gato Espectral.");
} else {
    console.log("Solo puedes invocar una Chispa.");
}
```

> [!WARNING] ¡Ojo con el orden de las condiciones!
> JavaScript evalúa de arriba hacia abajo y se **detiene en la primera que sea true**. Si pones `nivelMagia >= 5` antes que `nivelMagia >= 10`, un nivel 15 nunca llegaría al lobo. Ordena tus condiciones de la más estricta a la más general.

### B. Operador Ternario (El camino corto)

Si solo tienes **dos opciones** (blanco o negro), puedes usar esta sintaxis simplificada:

```JavaScript
let esMago = true;
let mensaje = esMago ? "¡Bienvenido al Gremio!" : "No se admiten muggles.";
```

Estructura: `condición ? valor_si_true : valor_si_false;`

### C. Switch: El selector de pócimas

Cuando tienes **muchas opciones fijas**, el `switch` es más ordenado que muchos `if` seguidos.

```JavaScript
let pocion = "roja";

switch (pocion) {
    case "roja":
        console.log("Recuperas vida.");
        break;
    case "azul":
        console.log("Recuperas maná.");
        break;
    default:
        console.log("No pasa nada...");
}
```

> [!INFO] ¿Por qué el `break`?
> Si olvidas el `break`, el switch **continúa** ejecutando los casos siguientes (a esto se le llama "fall-through"). Coloca `break` al final de cada caso.

### D. Valores Truthy y Falsy

En JavaScript, no solo `true` y `false` activan un `if`. El lenguaje evalúa otros valores como si lo fueran:

- **Falsy** (se evalúan como falso): `false`, `0`, `""` (string vacío), `null`, `undefined`, `NaN`.
- **Truthy** (se evalúan como verdadero): **¡Todo lo demás!** (incluyendo números negativos y strings con un solo espacio).

```JavaScript
let nombre = "";
if (nombre) {
    console.log("Hola, " + nombre);
} else {
    console.log("No ingresaste nombre.");  // ESTE se ejecuta porque "" es falsy
}
```

## 2. Bucles (Loops): Repetición Mágica

Los bucles nos permiten repetir un bloque de código varias veces sin tener que escribirlo una y otra vez.

### A. Bucle `for` (El contador)

Se usa cuando sabes **exactamente cuántas veces** quieres repetir algo.

```JavaScript
for (let i = 1; i <= 5; i++) {
    console.log(`Lanzando hechizo número ${i}`);
}
```

Estructura: `for (inicialización; condición; incremento)` — 3 partes:

1. `let i = 1;` → Empieza el contador en 1.
2. `i <= 5;` → Cuántas veces repetir (mientras se cumpla).
3. `i++` → Cuánto aumentar por vuelta.

### B. Bucle `while` (Mientras tanto...)

Se usa cuando **no sabes** cuántas veces se repetirá, solo que debe seguir **mientras la condición sea cierta**.

```JavaScript
let energia = 3;
while (energia > 0) {
    console.log("Sigo luchando...");
    energia--; // ¡Cuidado! Si olvidas esto, bucles infinitos
}
```

> [!WARNING] El peligro de los bucles infinitos
> Si la condición del `while` nunca se vuelve falsa, tu programa corre para siempre y **el navegador se congela** (tendrás que cerrar la pestaña). Siempre verifica que haya algo modificando la variable de la condición (como el `energia--` del ejemplo).

## 3. Funciones: Encantamientos Reutilizables

Una función es un bloque de código que "empaquetamos" con un nombre para poder usarlo cuando queramos, las veces que queramos. Cada función es como un hechizo: lo preparas una vez y lo lanzas muchas veces.

### A. Declaración y Parámetros

- **Parámetros**: Las variables que la función recibe para trabajar (son el "molde").
- **Argumentos**: Los valores reales que le pasas al llamarla.

```JavaScript
function calcularPoder(ataque, defensa) {  // ataque y defensa son parámetros
    return ataque + defensa;               // El 'return' devuelve el resultado
}

let resultado = calcularPoder(10, 5);      // 10 y 5 son argumentos
console.log(`Tu poder total es: ${resultado}`);
```

> [!INFO] ¿Qué es el `return`?
> El `return` "devuelve" el resultado al mundo exterior. Sin él, la función hace cosas pero no te entrega nada. Todo lo escrito después de `return` no se ejecuta.

### B. Funciones Flecha (Arrow Functions) 🏹

Es la forma moderna y concisa de escribir funciones. Muy usada en el desarrollo moderno (y en el Día 10 con eventos).

```JavaScript
// Forma clásica (function)
function saludar(nombre) {
    return `Hola, mago ${nombre}`;
}

// Forma flecha equivalente
const saludar = (nombre) => `Hola, mago ${nombre}`;
```

Mismo resultado, sintaxis más corta. Reglas: si solo hay **un parámetro**, puedes omitir los paréntesis; si el cuerpo es **una sola línea**, puedes omitir las llaves y el `return` (es implícito).

```JavaScript
const saludar = nombre => `Hola, mago ${nombre}`;
```

### C. Parámetros por Defecto

Si no envías un argumento, la función usa uno predefinido.

```JavaScript
function invocar(criatura = "un conejo") {
    console.log(`Invocando ${criatura}`);
}
invocar();                 // Resultado: "Invocando un conejo"
invocar("un dragón");      // Resultado: "Invocando un dragón"
```

### D. Scope (Alcance)

- **Global**: Variables declaradas fuera de funciones (visibles en todo el archivo).
- **Local**: Variables declaradas **dentro** de una función (mueren cuando la función termina).

```JavaScript
const elementoGlobal = "Anillo Único";  // Visible en todos lados

function probarScope() {
    const elementoLocal = "Varita";     // Solo vive dentro de la función
    console.log(elementoGlobal);        // ✅ Funciona
    console.log(elementoLocal);         // ✅ Funciona
}

console.log(elementoGlobal);  // ✅ Funciona
console.log(elementoLocal);   // ❌ ERROR: no existe fuera de la función
```

## 4. "El Simulador de Batalla"

Todo lo aprendido en un solo script. Analiza cada línea antes de ejecutarlo.

```JavaScript
const pelear = (vidaEnemigo) => {
    console.log("¡Empieza la batalla!");
    let rondas = 0;

    while (vidaEnemigo > 0) {                       // Repite mientras viva
        rondas++;                                   // Suma una ronda
        let daño = Math.floor(Math.random() * 5) + 1; // Daño aleatorio 1-5
        vidaEnemigo -= daño;                        // Resta el daño a la vida
        console.log(`Ronda ${rondas}: Hiciste ${daño} de daño. Vida restante: ${vidaEnemigo}`);
    }

    return `¡Victoria! Te tomó ${rondas} rondas ganar.`;
};

console.log(pelear(15));
```

> [!TIP] ¿Qué hay dentro de `Math.floor(Math.random() * 5) + 1`?
> Desglosemos el hechizo:
> - `Math.random()` → Devuelve un decimal entre 0 y 1 (ej: `0.7654`).
> - `* 5` → Lo multiplica (ej: `3.827`).
> - `Math.floor()` → Redondea hacia abajo (ej: `3`).
> - `+ 1` → Suma 1 para que salga entre 1 y 5, no entre 0 y 4.

## 📝 Práctica del Día: La Ruta a la Ciudad de los Arreglos

¡Es hora de poner en práctica tu lógica! Ve a la carpeta **"Practicas y proyectos"** y completa el reto **"Práctica 7. La Ruta a la Ciudad de los Arreglos"**.

Ese reto pondrá a prueba exactamente lo de hoy: condicionales, bucles, funciones y `return`.

> [!IMPORTANT] Antes de continuar, verifica que:
> - Resuelves el ejercicio **funcional** (el del puente `ritualDePuente`) sin mirar soluciones.
> - Entiendes la diferencia entre `if/else` y `switch`.
> - Sabes cuándo usar `for` vs `while`.
> - Puedes explicar qué hace `return` en una función.