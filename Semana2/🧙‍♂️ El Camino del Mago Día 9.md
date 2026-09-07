# Estructuras de Datos: Arreglos y Objetos

## 1. Arreglos (Arrays): La Mochila de Inventario 🎒

Un arreglo es una **lista ordenada** de datos. Imagina una mochila con compartimentos numerados. Podemos meter cualquier tipo de dato: strings, números, booleanos, ¡incluso otros arreglos u objetos (los verás en este mismo día)!

```JavaScript
const inventario = ["Poción", "Varita", "Pergamino"];
const mezclado = ["Poción", 1, true];  // Incluso mezclando tipos (raro pero posible)
```

### Índices: Empezamos a contar desde 0

El primer elemento está en la posición **0**, el segundo en la **1**, etc.

```JavaScript
const inventario = ["Poción", "Varita", "Pergamino"];

console.log(inventario[0]); // "Poción"  (el PRIMERO)
console.log(inventario[1]); // "Varita"
console.log(inventario[2]); // "Pergamino"  (el último)
console.log(inventario.length); // 3 (cuántos hay)
```

> [!WARNING] Índice vs Length
> Si el arreglo tiene 3 elementos, el **último índice** es 2 (empezamos en 0), pero `inventario.length` es 3. Es fácil confundirse: el último índice siempre es `length - 1`.

### Operaciones Esenciales (Métodos)

| **Método**      | **Acción**            | **Resultado en ["A", "B"]** |
| --------------- | --------------------- | --------------------------- |
| `.push("C")`    | Agrega al **final**.  | `["A", "B", "C"]`           |
| `.pop()`        | Quita el **último**.  | `["A"]`                     |
| `.unshift("Z")` | Agrega al **inicio**. | `["Z", "A", "B"]`           |
| `.shift()`      | Quita el **primero**. | `["B"]`                     |
| `.length`       | Te dice cuántos hay.  | `2`                         |

```JavaScript
const mochila = [];

mochila.push("Poción");       // ["Poción"]
mochila.push("Varita");       // ["Poción", "Varita"]
mochila.unshift("Mapa");      // ["Mapa", "Poción", "Varita"]
mochila.pop();                // Elimina "Varita" → ["Mapa", "Poción"]
mochila.shift();              // Elimina "Mapa" → ["Poción"]

console.log(mochila);         // ["Poción"]
```

### Información Importante: Arreglos y `const`

Muchos se preguntan: "Si declaré mi arreglo con `const`, ¿por qué puedo usar `.push()` para cambiarlo?".

La explicación: `const` protege el **nombre** de la variable. No puedes reasignar la mochila entera (`inventario = ["otra cosa"]`), pero sí puedes **cambiar lo que hay dentro** de ella. A esto se le llama **mutabilidad**.

```JavaScript
const inventario = ["Poción"];

inventario.push("Varita");       // ✅ Válido: modificamos el contenido
inventario[0] = "Poción de lujo"; // ✅ Válido: cambiamos un elemento

// inventario = ["otro"];          // ❌ ERROR: no se puede reasignar un const
```

## 2. Recorriendo la Mochila (Iteración)

Para hacer algo con **cada elemento** de la lista, usamos bucles.

### A. `for...of` (El más legible)

```JavaScript
const inventario = ["Poción", "Varita", "Pergamino"];

for (let item of inventario) {
    console.log(`Tienes un: ${item}`);
}
```

### B. `.forEach()` (El moderno)

Recibe una función que se ejecuta por cada elemento. El método te da el elemento y (opcionalmente) su índice.

```JavaScript
inventario.forEach((item, indice) => {
    console.log(`${indice}: ${item}`);
});
// Resultado:
// 0: Poción
// 1: Varita
// 2: Pergamino
```

> [!INFO] ¿Cuándo usar cada forma?
> Usa `for...of` cuando solo necesites el elemento. Usa `.forEach()` cuando quieras también el índice o prefieras el estilo funcional. Ambas son válidas.

## 3. Objetos: El Grimorio Personal 📖

Mientras que el Arreglo es una **lista numerada**, el Objeto es una colección de datos donde **cada valor tiene un nombre (clave)**.

```JavaScript
const mago = {
    nombre: "Merlín",
    edad: 150,
    estaVivo: true,
    hechizos: ["Fuego", "Hielo"],        // Un objeto puede contener un arreglo
    lanzarHechizo: function() {           // Esto es un MÉTODO (función dentro de un objeto)
        console.log("¡EXPELIARMUS!");
    }
};
```

### Accediendo a la información

1. **Punto (`.`)**: `mago.nombre` — El más común.
2. **Corchetes (`[]`)**: `mago["edad"]` — Útil si la clave está en otra variable.

```JavaScript
console.log(mago.nombre);        // "Merlín"
console.log(mago["edad"]);       // 150

const propiedad = "nombre";
console.log(mago[propiedad]);    // "Merlín" (se usa con variable)
```

### Modificando y agregando propiedades

```JavaScript
mago.edad = 151;                    // Cambiar un valor existente
mago.casa = "Gryffindor";           // Agregar una nueva propiedad
delete mago.casa;                   // Eliminar una propiedad

mago.lanzarHechizo();               // Llamar el método
```

### Objetos con métodos más elegantes

```JavaScript
const criatura = {
    nombre: "Dragón",
    nivelPoder: 85,
    presentarse() {                  // Sintaxis moderna de método
        console.log(`Soy ${this.nombre}, una criatura de nivel ${this.nivelPoder}`);
    }
};
```

> [!INFO] ¿Qué es `this`?
> Dentro de un método, `this` se refiere al propio objeto. Así `this.nombre` lee la propiedad `nombre` del objeto. No te preocupes por dominarlo hoy, solo conoce que existe.

### Objetos anidados

Un objeto puede contener otros objetos, formando estructuras más complejas:

```JavaScript
const jugador = {
    nombre: "Aprendiz",
    stats: {
        vida: 100,
        mana: 50,
        fuerza: 12
    },
    equipo: {
        arma: "Varita de Saúco",
        armadura: "Túnica de Aprendiz"
    }
};

console.log(jugador.stats.mana);       // 50
console.log(jugador.equipo.arma);      // "Varita de Saúco"
```

## 4. Valores vs Referencias (Concepto Clave)

Este es uno de los conceptos más importantes y confusos de JavaScript:

- Los **datos simples** (números, strings, booleanos) se copian **por valor**.
- Los **arreglos y objetos** se guardan **por referencia** (dirección de memoria).

```JavaScript
// POR VALOR (tipos simples)
let a = 5;
let b = a;   // COPIA el valor
b = 10;
console.log(a); // 5 (a no cambió, es una copia independiente)

// POR REFERENCIA (arreglos y objetos)
const original = { nombre: "Merlín" };
const espejo = original;   // NO copia, apunta a la MISMA referencia
espejo.nombre = "Saruman";
console.log(original.nombre); // "Saruman" — ¡EL ORIGINAL CAMBIÓ!
```

> [!WARNING] El peligro del espejo
> Si haces `const mago2 = mago;`, no estás creando un mago nuevo; estás creando un "espejo" que apunta al mismo lugar en memoria. Si cambias un valor en `mago2`, también cambiará en `mago`.

### La solución: Spread Operator (`...`)

Para **copiar** un objeto o arreglo en uno nuevo, usamos el spread operator (`...`). Es como abrir la caja y vaciar todo su contenido en una caja nueva:

```JavaScript
const original = [1, 2, 3, 4];
const copia = [...original, 5, 6, 7];   // Copia los elementos y agrega más
// copia = [1, 2, 3, 4, 5, 6, 7]

copia[0] = 99;
console.log(original[0]);  // 1 — ¡EL ORIGINAL NO CAMBIÓ! ✅

// Lo mismo con objetos
const obj = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj, d: 4 };   // Copia a, b, c y agrega d
// obj2 = { a: 1, b: 2, c: 3, d: 4 }
```

> [!TIP] ¿Cuándo usar el spread?
> Siempre que quieras crear una **copia independiente** de un arreglo u objeto para modificarla sin afectar el original. Es increíblemente común en proyectos reales.

## 5. Combinando Poderes: Arreglos de Objetos

En la vida real, los datos casi nunca son solo una lista o solo un objeto. **La combinación** más común es una "lista de objetos": por ejemplo, tus proyectos del portafolio, tus redes sociales, los productos de una tienda.

```JavaScript
const gremio = [
    { nombre: "Gandalf", rango: "Gris", poder: 85 },
    { nombre: "Saruman", rango: "Blanco", poder: 92 },
    { nombre: "Radagast", rango: "Pardo", poder: 64 }
];

// Acceder al rango del segundo mago (índice 1):
console.log(gremio[1].rango);   // "Blanco"

// Recorrer todos con for...of:
for (let mago of gremio) {
    console.log(`${mago.nombre} es de rango ${mago.rango}`);
}
```

### La analogía del inventario de una tienda

```JavaScript
// Es EXACTAMENTE así como se ven los datos en las APIs y bases de datos
const productos = [
    { nombre: "Poción de Vuelo", precio: 150, stock: 5 },
    { nombre: "Varita de Roble", precio: 300, stock: 2 },
    { nombre: "Capa de Invisibilidad", precio: 999, stock: 1 }
];

for (let producto of productos) {
    console.log(`${producto.nombre} — $${producto.precio}`);
}
```

## 📝 Reto del Día: "El Gestor de Inventario"

Pon a prueba lo aprendido. Crea un script que:

1. Tenga un arreglo de objetos llamado `armas`.
2. Cada objeto debe tener `nombre` y `poder`.
3. Usa un bucle para mostrar **solo** las armas que tengan un `poder > 50`.

Luego, revisa la práctica **"Práctica 8. La Ciudad de los Arreglos"** en la carpeta de prácticas y complétala para afianzar los conceptos.

> [!TIP] Pista
> Empezarías algo así:
> ```JavaScript
> const armas = [
>     { nombre: "Espada de Fuego", poder: 80 },
>     { nombre: "Daga del Aprendiz", poder: 30 },
>     ...
> ];
> ```
> Falta el bucle que recorra y la condición `if (arma.poder > 50)`.

> [!IMPORTANT] Antes de continuar, verifica que:
> - Entiendes la diferencia entre `pop()` y `shift()`.
> - Puedes explicar el problema de "valor vs referencia" (el espejo).
> - Sabes copiar un objeto/arreglo con el spread operator `...`.