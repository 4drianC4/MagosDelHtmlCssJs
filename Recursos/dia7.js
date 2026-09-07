// 🌟 Ejemplo del Día 7 — Práctica de Consola
// Los hechizos básicos de JavaScript

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

// 5. Extra: tipos de datos
const esMago = true;
console.log(`Tipo de dato de esMago: ${typeof esMago}`);