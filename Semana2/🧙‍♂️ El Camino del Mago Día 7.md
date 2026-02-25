# Lógica de Hechizos: Estructuras de Control y Funciones
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
    console.log("Puedes invocar un Lobo.");
} else {
    console.log("Solo puedes invocar una Chispa.");
}
```

### B. Operador Ternario (El camino corto)
Si solo tienes dos opciones (blanco o negro), puedes usar esta sintaxis simplificada:
condición ? expresión_si_true : expresión_si_false;
```JavaScript

let esMago = true;
let mensaje = esMago ? "¡Bienvenido al Gremio!" : "No se admiten muggles.";
```

### C. Switch: El selector de pócimas
Cuando tienes muchas opciones fijas, el switch es más ordenado que muchos if seguidos.
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

### Extra: Valores Truthy y Falsy
En JavaScript, no solo true y false activan un if. El lenguaje evalúa otros valores como si lo fueran:
- Falsy (Se evalúan como falso): false, 0, "" (string vacío), null, undefined, NaN.
- Truthy (Se evalúan como verdadero): ¡Todo lo demás! (incluyendo números negativos y strings con un solo espacio).

## 2. Bucles (Loops): Repetición Mágica

Los bucles nos permiten repetir un bloque de código varias veces sin tener que escribirlo una y otra vez.
### A. Bucle for (El contador)
Se usa cuando sabes exactamente cuántas veces quieres repetir algo.
```JavaScript
for (let i = 1; i <= 5; i++) {
    console.log("Lanzando hechizo número " + i);
}
```

### B. Bucle while (Mientras tanto...)
Se usa cuando no sabes cuántas veces se repetirá, solo que debe seguir mientras la condición sea cierta.

```JavaScript

let energia = 3;
while (energia > 0) {
    console.log("Sigo luchando...");
    energia--; // ¡Cuidado con los bucles infinitos!
}
```

## 3. Funciones: Encantamientos Reutilizables

Una función es un bloque de código que "empaquetamos" con un nombre para usarlo cuando queramwhile (energia > 0) {
    console.log("Sigo luchando...");
    eos.
### A. Declaración y Parámetros
Los parámetros son las variables que la función recibe para trabajar. Los argumentos son los valores reales que le pasas al llamarla.
```JavaScript

function calcularPoder(ataque, defensa) {
    return ataque + defensa; // El 'return' devuelve el resultado
}

let resultado = calcularPoder(10, 5); // 10 y 5 son argumentos
```

### B. Funciones Flecha (Arrow Functions) 🏹
Es la forma moderna y concisa de escribir funciones.
```JavaScript
const saludar = (nombre) => `Hola, mago ${nombre}`;
```

### Extra: Parámetros por Defecto y Scope
Para hacer tus funciones más robustas, agregamos dos conceptos:

- Parámetros por defecto: Si no envías un argumento, la función usa uno predefinido.
    ```JavaScript
    function invocar(criatura = "un conejo") {
        console.log("Invocando " + criatura);
    }
    invocar(); // Resultado: Invocando un conejo
	```
- Scope (Alcance): * Global: Variables declaradas fuera de funciones (visibles en todo el archivo).

- Local: Variables declaradas dentro de una función (mueren cuando la función termina).

## 4. "El Simulador de Batalla"

Todo lo aprendido en un solo script:

```JavaScript
const pelear = (vidaEnemigo) => {
    console.log("¡Empieza la batalla!");
    let rondas = 0;

    while (vidaEnemigo > 0) {
        rondas++;
        let daño = Math.floor(Math.random() * 5) + 1; // Daño aleatorio 1-5
        vidaEnemigo -= daño;
        console.log(`Ronda ${rondas}: Hiciste ${daño} de daño. Vida restante: ${vidaEnemigo}`);
    }

    return `¡Victoria! Te tomó ${rondas} rondas ganar.`;
};

console.log(pelear(15));
```
