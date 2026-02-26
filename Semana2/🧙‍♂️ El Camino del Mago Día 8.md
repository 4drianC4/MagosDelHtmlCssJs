# Estructuras de Datos: Arreglos y Objetos
## 1. Arreglos (Arrays): La Mochila de Inventario 

Un arreglo es una lista ordenada de datos. Imagina una mochila con compartimentos numerados.

- Índices: En programación, empezamos a contar desde 0. El primer elemento está en la posición 0, el segundo en la 1, etc.
- Declaración:
    ```JavaScript
    const inventario = ["Poción", 1, false];
    const inventario2 = [...inventario]
	```
### Operaciones Esenciales (Métodos)

| **Método**      | **Acción**            | **Resultado en ["A", "B"]** |
| --------------- | --------------------- | --------------------------- |
| `.push("C")`    | Agrega al **final**.  | `["A", "B", "C"]`           |
| `.pop()`        | Quita el **último**.  | `["A"]`                     |
| `.unshift("Z")` | Agrega al **inicio**. | `["Z", "A", "B"]`           |
| `.shift()`      | Quita el **primero**. | `["B"]`                     |
| `.length`       | Te dice cuántos hay.  | `2`                         |

### Información Importante: Arreglos y const

Muchos se preguntan: "Si declaré mi arreglo con const, ¿por qué puedo usar .push() para cambiarlo?".

La explicación: const protege el "nombre" de la variable. No puedes reasignar la mochila entera (inventario = ["otra cosa"]), pero sí puedes cambiar lo que hay dentro de ella. A esto se le llama mutabilidad.
## 2. Recorriendo la Mochila (Iteración)

Para hacer algo con cada elemento de la lista, usamos bucles.
- for...of (El más legible):
```JavaScript
	for (let item of inventario) {
		console.log("Tienes un: " + item);
	}
```

- .forEach() (El moderno):
```JavaScript
    inventario.forEach((item, indice) => {
        console.log(`${indice}: ${item}`);
    });
```

## 3. Objetos: El Grimorio Personal 

Mientras que el Arreglo es una lista numerada, el Objeto es una colección de datos donde cada valor tiene un nombre (clave).
```JavaScript
const mago = {
    nombre: "Merlín",
    edad: 150,
    estaVivo: true,
    hechizos: ["Fuego", "Hielo"],
    // Esto es un MÉTODO (una función dentro de un objeto)
    lanzarHechizo: function() {
        console.log("¡EXPELIARMUS!");
    }
};
```
### Accediendo a la información
1. Punto (.): mago.nombre (El más común).
2. Corchetes ([]): mago["edad"] (Útil si la clave está en otra variable).

### Información Importante: Valores vs Referencias
Este es el concepto más avanzado de hoy:
- Los datos simples (números, strings) se copian por valor.
- Los Arreglos y Objetos se guardan por referencia (dirección de memoria).
>[!WARNING] El peligro: 
>Si haces let mago2 = mago;, no estás creando un mago nuevo, estás creando un "espejo". Si cambias la edad en mago2, ¡también cambiará en mago!

>[!IMPORTANT] Para copiar un objeto o lista dentro de otro...
>podemos usar spread operator `...` esto hará que todos los datos dentro se copien en el nuevo objeto
>const original = [1,2,3,4]
>const copia = [...original, 1, 2, 3]
>const obj = {a: 1, b: 2, c: 3}
>const obj2 = {...obj, d: 4, c: 5}
## 4. Combinando Poderes: Arreglos de Objetos

En la vida real, los datos se ven así: una lista de objetos.
```JavaScript
const gremio = [
    { nombre: "Gandalf", rango: "Gris" },
    { nombre: "Saruman", rango: "Blanco" },
    { nombre: "Radagast", rango: "Pardo" }
];

// Acceder al rango del segundo mago:
console.log(gremio[1].rango); // "Blanco"
```
## 5. Reto del Día 9: "El Gestor de Inventario"

Creen un script que:
1. Tenga un arreglo de objetos llamado armas.
2. Cada objeto debe tener nombre y poder.
3. Usar un bucle para mostrar solo las armas que tengan un poder > 50.