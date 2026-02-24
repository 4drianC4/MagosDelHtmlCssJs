Luego de que Letriba, la seguidora del culto "Divide para Vencer", partiera todos los caminos en dos usando un hechizo aritmético prohibido, tu misión como aprendiz de mago web es reconstruir la ruta hacia la legendaria Ciudad de los Arreglos, donde todos los datos viven en armonía. Pero cuidado: en tu camino deberás resolver desafíos usando condicionales, bucles y funciones. Solo dominando estos hechizos podrás avanzar.

Para reconstruir los caminos hacia la Ciudad de los Arreglos, debes invocar el Ritual de los Puentes Gemelos, un antiguo hechizo que consiste en cruzar una serie de pares de números encantados.

Cada par representa un puente roto que deberás reconstruir aplicando el hechizo correcto. Pero ¡cuidado!, cada par exige un tratamiento distinto según su energía:

Reglas del hechizo:

para cada par de números mágicos:

- Si ambos números son iguales, entonces invoca el hechizo de multiplicación.
    
- Si el primer número es mayor, invoca el hechizo de resta.
    
- Si el segundo número es mayor, invoca el hechizo de suma.
    
- Si alguno de los dos es cero, el ritual falla y debes mostrar: “Ritual fallido: energía inestable en el puente”.
    

Tu misión como mago es:

- crear una función llamada ritualDePuente(a, b) que reciba dos números
    
- Dentro de la función usar condicionales para decidir la operación a realizar.
    
- La función debe retornar el resultado del hechizo o un mensaje de error.
    
- Usar un bucle para permitirle al aprendiz reconstruir varios puentes hasta que decida salir. (revisar la propiedad prompt de javascript)
    
- Mostrar el resultado de cada hechizo con un mensaje: console.log("El puente ha sido reconstruido con energía: " + resultado);
    

Demostración:

ritualDePuente(5, 5); // => 25 (hechizo de multiplicación)

ritualDePuente(10, 3); // => 7 (hechizo de resta)

ritualDePuente(2, 6); // => 8 (hechizo de suma)

ritualDePuente(0, 4); // => "Ritual fallido..."