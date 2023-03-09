# Bucles e Iteración

Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente
Puedes pensar en un bucle como una versión computarizada del juego en la que le dices a alguien que dé X pasos en una dirección y luego Y pasos en otra. Por ejemplo, la idea "Ve cinco pasos hacia el este" se podría expresar de esta manera como un bucle:

```js

for (let step = 0; step < 5; step++) {
   Se ejecuta 5 veces, con valores del paso 0 al 4.
  console.log('Camina un paso hacia el este');
}

```
Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción varias veces. (¡Ten en cuenta que es posible que ese número sea cero!).



# While

Una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true. Una instrucción while tiene el siguiente aspecto: 

```js
while (condición)
  expresión
```

Si la condición se vuelve false, la instrucción dentro del bucle se deja de ejecutar y el control pasa a la instrucción que sigue al bucle.

# Declaración do...while

La instrucción do...while se repite hasta que una condición especificada se evalúe como falsa.

Una declaración do...while tiene el siguiente aspecto:

```js
do
  expresión
while (condición);

```

exposición siempre se ejecuta una vez antes de que se verifique la condición. (Para ejecutar varias instrucciones, usa una declaración de bloque ({ ... }) para agrupar esas declaraciones).
Si condición es true, la declaración se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. Cuando la condición es false, la ejecución se detiene y el control pasa a la declaración que sigue a do...while.

## Ejemplo 
Si condición es true, la declaración se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. Cuando la condición es false, la ejecución se detiene y el control pasa a la declaración que sigue a do...while.

```js

let i = 0; do { i += 1; console.log(i); } while (i < 5);
```

#  Declaración for

Un ciclo for se repite hasta que una condición especificada se evalúe como false. El bucle for de JavaScript es similar al bucle for de Java y C.

```js
for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción
```

Cuando se ejecuta un bucle for, ocurre lo siguiente:

 * Se ejecuta la expresión de iniciación expresiónInicial, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. Esta expresión también puede declarar variables.
* Se evalúa la expresión expresiónCondicional. Si el valor de expresiónCondicional es verdadero, se ejecutan las instrucciones del bucle. Si el valor de condición es falso, el bucle for termina. (Si la expresión condición se omite por completo, se supone que la condición es verdadera).
* Se ejecuta la instrucción. Para ejecutar varias instrucciones, usa una declaración de bloque ({ ... }) para agrupar esas declaraciones.
* Si está presente, se ejecuta la expresión de actualización expresiónDeActualización.
El control regresa al paso 2.
* El control regresa al paso 2.

Ejemplo:

En el siguiente ejemplo, la función contiene una instrucción for que cuenta el número de opciones seleccionadas en una lista de desplazamiento (el elemento <select> de HTML representa un control que proporciona un menú de opciones que permite múltiples selecciones). La instrucción for declara la variable i y la inicia a 0. Comprueba que i es menor que el número de opciones en el elemento <select>, realiza la siguiente instrucción if e incrementa i después de cada pasada por el bucle.

```js


<form name="selectForm">
  <p>
    <label for="musicTypes">Elija algunos tipos de música, luego haga clic en el botón de abajo:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="¿Cuántos están seleccionados?" /></p>
</form>

<script>
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Número de opciones seleccionadas: ' + howMany(document.selectForm.musicTypes));
});
</script>

```

# Continue

Termina la ejecución de las sentencias de la iteración actual del bucle actual o la etiqueta y continua la ejecución del bucle con la próxima iteración.

En contraste con la sentencia break, continue no termina la ejecución del bucle por completo; en cambio,

En un bucle while, salta de regreso a la condición.
En un bucle for, salta a la expresión actualizada.
La sentencia continue puede incluir una etiqueta opcional que permite al programa saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual. En este caso, la sentencia continue necesita estar anidada dentro de esta sentecia etiquetada.

Ejemplo: 
El siguiente ejemplo muestra un bucle while que tiene una sentencia continue que se ejecuta cuando el valor de i es 3. Así, n toma los valores 1, 3, 7 y 12.
```js
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}

```

# Break
La sentencia break incluye una etiqueta opcional que permite al programa salir de una sentencia etiquetada. La sentencia break necesita estar anidada dentro de la sentencia etiquetada. La sentencia etiquetada puede ser cualquier tipo de sentencia; no tiene que ser una sentencia de bucle.

Ejemplo: Usando break
La siguiente función tiene una sentencia que termina el bucle while cuando i es 3, y entonces devuelve el valor 3 * x.

```js
function comprobarBreak(x) {
   var i = 0;
   while (i < 6) {
      if (i == 3)
         break;
      i++;
   }
   return i * x;
}
```

 # For in

 Nos muestra la posicion en que estan los elementos [indice], se utiliza con objetos, para iterar con ellos, es un bucle que reccore todas las posiciones de las propiedades dentro de un arreglo de objetos. Este puede iterar sobre arrays y arreglos

 un bucle for in lo constituyen dos elementos: un índice temporal actual dentro del loop y un array a recorrer, que llamamos con su nombre. Estos dos elementos los separa la palabra clave in. A continuación, te presentamos cómo se escribiría:

 ```js

 for (let index in languageArr) {

let language = languageArr [index];

console.log (‘Language in position ${index} is {language}’);

}
 ```

 Con esta forma de escribir un bucle for, podemos ver la posición de cada elemento del array gracias a la inserción del elemento index. Al igual que en el bucle in, el incremento del valor sucede de manera automática, haciendo que se recorran todos los elementos de nuestro array, sin que nosotros definamos su consecución como lo hacemos en la forma canónica.

 # For of

  Nos muestra el valor de los elementos o propiedades, o sea reccore todo, es un bucle que recorre todos los valores de un array[] y solo de un array y eso es lo que nos muestra.
 
  El bucle for of nos facilita la escritura de nuestro bucle al tener un contador interno. Esto hace que se reduzcan los elementos que debemos definir dentro de nuestro bucle. Entonces, el bucle for of está compuesto por dos elementos: una variable temporal en la que tenemos el valor actual dentro del loop y un array a recorrer. La variable temporal es una forma de almacenar el valor de cada ciclo del loop.

  Por tanto, para escribir un bucle de este tipo podemos escribir lo siguiente:

  ```js
  for (let currentLanguage of languageArr) {

console.log (‘Language is ${currentLanguage} ‘)

}
  ```


#  label en JavaScript

La etiqueta de JavaScript es una declaración que se usa para prefijar una etiqueta como identificador. Puede especificar la etiqueta con cualquier nombre que no sean las palabras reservadas. Simplemente se usa con dos puntos (:) en el código.

Se puede usar una etiqueta con una declaración de interrupción o continuación para controlar el flujo del código con mayor precisión. La etiqueta se aplica a un bloque de código o una declaración.


## Parámetros
etiqueta: Es un identificador de JavaScript. Defínalo con cualquier nombre que no sea una palabra clave reservada.

Declaraciones: es una declaración de JavaScript, donde la interrupción se usa simplemente con la declaración etiquetada y continúa con la declaración etiquetada en bucle.

## Ejemplos
Comprendamos cómo funciona la etiqueta de JavaScript y cómo ayuda a romper o continuar con la declaración de bucle con la ayuda de diferentes ejemplos.

Ejemplo: etiqueta con bucle for para romper
En este ejemplo, definiremos dos etiquetas con el nombre bucle interno y bucle externo , que se usa con bucle for para interrumpir la ejecución del bucle para una condición específica.

Copiar código

Ejemplo 
```js
<html> _ _  
< cuerpo >  
< guión >  
var i, j;  
//Ejecución de bucle exterior e interior usando etiqueta  
document.write("¡Entrando en el bucle! < br />  ");   
  
bucle exterior: // Este es el nombre de la etiqueta para el siguiente bucle  
para ( yo  =  0 ; yo  < 5 ; yo++) {   
   document.write(" < b >  Outerloop i:  </ b > " + i + " </ br > ");  
   bucle interno: //otra etiqueta  
   para ( j  =  0 ; j  < = 4; j++) {  
        //cuando j es mayor que 3, sale del bucle más interno  
        si (j  >  3) {  
            document.write(" < b >  Romper el bucle más interno cuando j > 3  </ b > </ br > ");  
            romper ;    
        }  
        // cuando  i  =  2 , sale del bucle interior  
        si ( yo  == 2) {  
            document.write(" < b >  Romper bucle interno cuando  i = 2 </ b > </ br > ");   
            romper bucle interior;   
        }  
        // cuando  i  =  4 , también sale del bucle exterior  
        si ( yo  == 4) {  
            document.write(" < b >  Romper bucle externo cuando  i = 4 </ b > </ br > ");   
            romper el lazo exterior;   
        }  
        document.write("Ejecución Innerloop j: " + j + "  < br /> ");   
   }  
}  
document.write("¡Salir de todos los bucles!  </ br >  ");  
</ guión >  
</ cuerpo >  
</html> _ _  


```

