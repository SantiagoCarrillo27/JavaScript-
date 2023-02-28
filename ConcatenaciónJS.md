# Concatenación JavaScript

Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.

Hay varias formas de concatenar, una de ellas es forzar un string

## Forzar a un String (Concatenar numeros)

Para forzar numero a otro tipo de dato a string utilizamos una cadena de texto al inicio del tipo de dato a concatenar


Ejemplo: 

```js

let numero1 = 6;

let numero2 = 4;

let resultado = "" + numero1 + numero2; --> Esto lo que va a hacer es convertir la "suma" en un string de numeros o sea los une y nos daría como resultado 

let resultado = 64;
```


## Utilizando el Concat()

Podemos concatenar unicamente String  por medio del metodo Concat() (esto quiere decir que es un metodo de cadena) o por lo menos uno de los dos datos a concatenar tiene que ser String.


## Template String (Las plantillas de texto).

son cadenas literales de texto incrustadas en el código fuente que permiten su interpolación mediante expresiones.
Es la mas recomendable de utilizar a la hora de concatenar String y lo hacemos mediante los Backticks o comillas invertidas mas el signo de $ seguido de {} y dentro la variable del String que queremos concatenar.
 

Ejemplo:

```js

`Hola, bienvenido ${TuNombre}`

```

## Definición de Escapes de comillas simples y dobles

Esto nos quiere decir que dentro de nuestra cadena de caracteres que esten definidas con comillas simples o dobles no podemos especificar otro string con las mismas comillas iniciales sino que estas deben de estar con diferentes comillas.

Ejemplo:

```js

let nombre = 'Juan'

let frase = "Hola "Juan" " --> No se puede encerrar una cadena de texto dentro de otra utilizando las mismas comillas iniciales 

debería quedar algo así

let frase = "Hola 'Juan' " --> así si que puede ser posible.
```
