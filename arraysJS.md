# ¿Qué es un Array?
 Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables y podemos determinar si es un array por medio de [] corchetes

 Un Array en JavaScript es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado con referencia a la posición que ocupa dentro del mismo.

La forma más sencilla es asignar un valor de arreglo a una variable.

Sintaxis
```js
 const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']; 

```
Si queremos interactuar con los elementos que esten dentro de un array podemos hacerlo escrbiendo el nombre del array y al lado otros [] y dentro la posición que querramos ver dentro del array 

Ejemplo : 

```js
 const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
 
 cosole.log(salad[0]) --> Esto nos mostrara el tomate 🍅


```

## Nota:
Es necesario saber que todos lo arrays comienzan desde la posición 0.

Cuando arrancamos el array todas las posiciones estan declaradas, es decir que si decidimos imprimir por consola una posición que no este en el array este en vez de marcarnos error, nos mostrara que es undefined

Ejemplo:

```js
 const salad = ['🍅', '🍄']; 


 console.log(salad[2]) --> En este caso no existe la posición 2 o no esta definida, pero no nos va a marcar error a cambio de esto nos marcara Undefined, esto por que cuando tenemos un array todas las posiciones estan declaradas dentro de ese array, solo que no estan declaradas.

```

## Array asociativos

Un array asociativo es un tipo "avanzado" de array: permite agrupar una serie de elementos del mismo tipo. Cada elemento del array está indexado en cualquier tipo de información (y no solo en un índice numérico, como en otros tipos de arrays)

Un array asociativo es aquel en el que cada elemento no está asociado a su posición numérica dentro del array, sino que está asociado a otro valor específico. Los valores de los arrays normales se asocian a índices que siempre son numéricos.

Un array asociativo es un array cuyos índices no son numéricos sinó cadenas de texto (claves). En JavaScript no existen realmente arrays asociativos pero podemos simularlos creando objetos y accediendo a sus propiedades.

## Como declaramos un array asociativo
Se utilizan llaves {} para generar el array de elementos clave:valor. Podemos añadir elementos de dos maneras

```js

var coche = new Array(); --> primera manera de declarlos
coche["color"] = "rojo";
coche["marca"] = "seat";
coche["modelo"] = "leon";




var coche = {"color":"rojo","marca":"seat","modelo":"leon"}; --> segunda manera


var coche = {"color":"rojo","CV":100,"AC":true}; --> podemos guardar elementos de distintos tipos igual que en los indexados


var coche = {color:"rojo",CV:100,AC:true};--> también es valido de este modo
```


## Acceder a los valores de un Array asociativo
En los arrays indexados accedemos con el índice o la posición dentro del array. En los arrays asociativos accedemos con la clave


```js
var coche = {color:"rojo",CV:100,AC:true};
//Accedemos al dato color del array coche
var dato = coche["color"];
//dato ahora vale: rojo
```

Para recorrer un array asociativo usaremos el bucle for in

```js
//Array asociativo
var coche = {color:"rojo",CV:100,AC:true};
//Recorremos el array con un for each
for(var clave in coche) {
    document.write(clave+": " +coche[clave]);
}
```