# Tipado dinámico
JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:

```js
let foo = 42;    // foo ahora es un número
foo     = 'bar'; // foo ahora es un string
foo     = true;  // foo ahora es un booleano


```

# Estructuras y tipos de datos

## Valores primitivos
Todos los tipos, excepto los objetos, definen valores inmutables (es decir, valores que no se pueden cambiar). Por ejemplo (y a diferencia de C), las cadenas son inmutables. Nos referimos a los valores de estos tipos como "valores primitivos".

## Tipo Boolean
Boolean representa una entidad lógica y puede tener dos valores: true y false.

## Tipo Null
El tipo Null tiene exactamente un valor: null.
Esto quiere decir que estamos dandole un valor intencionalmente de nulo o vacio a la variable, y por ende esta no va a valer nada, a diferencia de Undefined  la cual obtiene ese valor cuando no le otorgamos un valor inicial al momento de inicializar la variable.
Ejemplo:

```js
let vaca = null; --> Esto quiere decir que nuestra variable va a tener un valor vacio o sea que no va a valer nada y le estamos otorgando el valor intencionalmente.
```

## Tipo Undefined
Una variable que inicializamos pero a la que no se le ha asignado un valor.

Ejemplo:

```js

let carro; --> No esta inicializada con ningun valor por lo tanto este sera de tipo Undefined

```
## Tipo Number
Number: permite representar y manipular valores numéricos como «37» o «-9.25».

## Tipo String

String: representa datos textuales (cadenas de caracteres).

## Tipo Bigint

BigInt: representa valores numéricos que son demasiado grandes para ser representados por el tipo de dato number.

## Tipo Symbol

Symbol: es un valor primitivo único e inmutable.

## Otros tipos de datos de JavaScript
Object: representa una colección de datos definidos y entidades más complejas.
Function: es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor Object. Son objetos con la capacidad de ser ejecutables.

## Tipo  NaN (Not a Number)
El acrónimo NaN es un valor especial de Javascript que significa literalmente Not A Number (No es un número). Sin embargo, no hay que dejarse llevar por su significado literal, ya que nos podría dar lugar a malentendidos. El valor NaN, a pesar de su significado, se usa para representar valores numéricos (y ahora es donde viene el matiz) que son indeterminados o imposibles de representar como número.
Dentro de esa categoría hay varios:

Indeterminación matemática: Por ejemplo, 0 / 0.
Valores imposibles: Por ejemplo, 4 - 'a', ya que es imposible restar una letra a un número.
Operaciones con NaN: Por ejemplo, NaN + 4, ya que el primer operando es NaN.
Uno de los más frecuentes es el segundo, ya que Javascript es un lenguaje flexible que no requiere tipos. Eso, unido a que la mayoría de datos que extraemos de una página web se obtienen como , da como resultado operaciones de ese tipo, o concatenaciones inesperadas.
