Joven mago, llegaste muy lejos para conseguir tu tercera insignia y ya te encuentras cerca de lograrlo, solamente debes demostrar tus nuevas habilidades combinandolas con las anteriores que ya conseguiste:

### Objetivo general:

Conectar todo el conocimiento anterior y darle vida a los proyectos previos mediante JavaScript: modificando el DOM y reaccionando a eventos.

  

Parte 1: El Pergamino de Iniciación cobra vida

Instrucciones:

1. Selecciona secciones del pergamino (presentación, hobbies, habilidades, etc.) usando getElementById o querySelector.  
      
    
2. Agrega un botón encantado llamado "Mostrar en modo oscuro" y otro llamado "Mostrar en modo claro".  
      
    

- Al hacer clic en cada botón, cambia dinámicamente los estilos del pergamino (fondo, texto, bordes) usando .style.  
      
    

4. Agrega animaciones de tu gusto (como mínimo 3).
    

Parte 2: Tu Horario Personal se adapta a los cambios

Instrucciones:

1. Usa un botón mágico llamado "Cambiar vista" que alterne entre una vista de:  
      
    

- Semana completa (todas las filas de la tabla visibles).  
      
    
- Sólo universidad (solo filas con clases académicas).  
      
    
- Sólo actividades extracurriculares.  
    (Puedes lograr esto con classList.add/remove/toggle y .style.display)  
      
    

3. Al pasar el mouse sobre cada celda del horario, cambia su fondo y muestra un pequeño mensaje emergente con el nombre de la actividad (mouseover + title o appendChild temporal).  
      
    
4. Añade un botón llamado "Agregar actividad", que al hacer clic, abre un formulario para:  
      
    

- Día  
      
    
- Hora  
      
    
- Actividad  
    Y al enviar, añade esa actividad como nueva fila en la tabla (createElement, appendChild).  
      
    

Parte 3: El Formulario Mágico ahora responde

Instrucciones:

1. Al escribir el nombre, se actualiza en vivo un encabezado tipo "Bienvenido, [nombre]" (input + textContent).  
      
    
2. Al elegir la raza, se cambia el estilo general del formulario (change + .classList o .style).  
      
    
3. Validar la edad:  
      
    

- Si es menor a 10, se muestra una advertencia.  
      
    
- Si es mayor a 99, otro mensaje (por ejemplo: “¿Eres un anciano sabio?”).  
      
    

5. Al enviar, mostrar los datos mágicos en una sección nueva creada dinámicamente.  
      
    

- Usa createElement, appendChild, etc.  
      
    

7. Usa preventDefault() para evitar el envío real del formulario.  
      
    

Bonus mágico para quienes dominan el hechizo:

- Haz que el formulario del pergamino o el formulario mágico pueda borrarse con un solo clic (y opcionalmente mostrar una animación antes de desaparecer).  
      
    
- Permite que se expanda o colapse el horario según el nivel de zoom del navegador (resize event).