# ¿Qué son los condicionales en JavaSript?

Una parte muy importante de una estructura de control es la “condición”. Cada condición es una expresión que se evalúa a true o false. JavaScript ofrece un total de cuatro instrucciones para procesar código de acuerdo a condiciones determinadas por el programador: if, switch, for y while.
Es ejecutar un fragmento de código o bloque y tomar decisiones referente a sus condiciones

## if
 se usa para ejecutar un bloque código si la condición es verdadera.

 Sintaxis

 ```js

  if (condición) {
   bloque de código a ejecutar
   si la condición  es verdadera
 }

 ```

## Condicional if…else.
El condicional if…else se usa para ejecutar un bloque de código si la condición es verdadera u otro bloque de código si la condición es falsa.

 Sintaxis:

 
 ```js

 if(condición){
   bloque de código a ejecutar
   si la condición    es verdadera
 }
 else {
   bloque de código a ejecutar
   si la condición    es falsa
 }

 ```

 ## Condicional if…else if…else.
El condiciona if…else if…else se usa para seleccionar uno de los varios bloques de código a ejecutar.

Sintaxis:


```js
 if(condición1){
   bloque de código a ejecutar
   si la condición1 es verdadera
 }
 else if(condición2){
   bloque de código a ejecutar
   si la condición2 es verdadera
 }
 else {
   bloque de código a ejecutar
   si condición1 y condición2
   no son verdaderas.
 }

 
 ```

## Codicional switch.
El condicional switch selecciona uno de muchos bloques de código para ejecutar, según una evaluación o un valor.


Sintaxis:

```js
switch([evaluación | valor]) {
   case 1:
     ejecuta este bloque
     si el valor o la evaluación
     son iguales a 1.
     break;
   case 2:
     ejecuta este bloque
     si el valor o la evaluación
     son iguales a 2.
     break;
   default:
     ejecuta este bloque si no ingresa a ninguno
     de los "case" anteriores.
 }
 ```

 