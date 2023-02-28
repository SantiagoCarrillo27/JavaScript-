# Operadores en JavaScript
Los operadores permiten manipular el valor de las variables, realizar operaciones matemáticas con sus valores y comparar diferentes variables. De esta forma, los operadores permiten a los programas realizar cálculos complejos y tomar decisiones lógicas en función de comparaciones y otros tipos de condiciones.

Hay operadores matemáticos, de comparación, lógicos y de referencia.


## Operadores de Asignación
Asignan un valor al operando de la izquierda basado en el valor del operando de la derecha

Nombre	Operador abreviado	Significado:

Asignación	x = y	x = y

Asignación de adición	x += y	x = x + y

Asignación de resta	x -= y	x = x - y

Asignación de multiplicación	x *= y	x = x * y

Asignación de división	x /= y	x = x / y

Asignación de residuo (Resto)	x %= y	x = x % y

Asignación de exponenciación	x **= y	x = x ** y

Asignación de desplazamiento a la izquierda	x <<= y	x = x << y

Asignación de desplazamiento a la derecha	x >>= y	x = x >> y

Asignación de desplazamiento a la derecha sin signo	x >>>= y	x = x >>> y

Asignación AND bit a bit	x &= y	x = x & y

Asignación XOR bit a bit	x ^= y	x = x ^ y

Asignación OR bit a bit	x |= y	x = x | y

Asignación AND lógico	x &&= y	x && (x = y)

Asignación OR lógico	x ||= y	x || (x = y)

Asignación de anulación lógica	x ??= y	x ?? (x = y)

 
## Operadores de Aritméticos

Los operadores aritméticos toman valores numéricos (Ya sean literales o variables) como sus operandos y retornan un valor numérico único.

Toman los valores numéricos de dos o más números y los convierten para retornar un valor

### Operadores

Descripción

+suma

-resta

*producto (multiplicación)

/división

%resto de la división entera

**Exponencialización (Eleva un numero con otro )

Ejemplo:

```js
10**4 = 40.000 
```



&Resto (Es la cantidad que sobra cuando el resultado de una división no es exacto)

Ejemplo:

```js
let numero = 10;

let numero2 = 5;

let resultado = numero & numero2; --> El resultado sera de 0, ya que si dividimos 10 % 5 el resultado sera exacto por lo tanto no hay (& Resto)


```

-numero Negación unaria 

Ejemplo:

```js

let numero = 23;

let resultado = -numero; --> Esto lo que va a hacer es colocar nuestro resultado en negativo.

```


## Operadores Comparación

Los operadores de comparación comparan dos expresiones y devuelven un valor Boolean que representa una relación de sus valores.
Hay operadores para comparar valores numéricos, operadores para comparar cadenas y operadores para comparar objetos.

### Comparación Igualdad

El operador de comparacion de igualdad (==) comprueba si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad estricta (===), es que este convierte y compara operandos que son de diferentes tipos.

Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.
Por ejemplo: 2 == "2" devuelve True

```js
console.log(1 == 1);
 Expected output: true

console.log('hello' == 'hello');
 Expected output: true

console.log('1' ==  1);
 Expected output: true

console.log(0 == false);

 Expected output: true
```
sintaxis (x == y)


### Igualdad estricta

Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.

Por ejemplo: 2 === "2" devuelve False.

### Desigualdad

Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.
Por ejemplo: 2 != "2" devuelve False.

### Desigualdad estricta

Desigualdad estricta (!==) Lo mismo que la igualdad estricta, pero negándola.
Por ejemplo: 2 !== "2" devuelve True.

Y por ultimo estos 4  


Mayor que (>)

Mayor o igual que (>=)

Menor que (<)

Menor o igual que (<=)



## Operadores Lógicos

Los operadores lógicos comparan valores booleanos y devuelven respuestas booleanas. Hay dos tipos de operadores lógicos AND y OR. Estos operadores por lo general se escriben && (AND) y || (OR).

### Operador Lógico AND (&&)

Este operador lógico compara dos expresiones. Si la primera se evalúa como "verdadera" (truthy), la sentencia devolverá el valor de la segunda expresión. Si la primera expresión se evalúa como "falsa"(falsy), la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve verdadero si las dos expresiones son verdaderas. Si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.

```js
true && true  devuelve el segundo valor, verdadero
true && false devuelve el segundo valor, falso
false && false  devuelve el primer valor, falso
123 && 'abc'  devuelve el segundo valor, 'abc'
'abc' && null  devuelve el segundo valor, nulo
undefined && 'abc'  devuelve el primer valor, indefinido
0 && false   devuelve el primer valor, 0
```

### Operador lógico OR ( || )

Este operador lógico compara dos expresiones. Si la primera se evalúa como "falsa", la sentencia devolverá el valor de la segunda expresión. Si la primera se evalúa como "verdadera", la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.

```js
true || true devuelve el primer valor, verdadero
true || false devuelve el primer valor, verdadero
false || false devuelve el segundo valor, falso
123 || 'abc' devuelve el primer valor, 123
'abc' || null devuelve el primer valor, 'abc'
undefined || 'abc' devuelve el segundo valor, 'abc'
0 || false devuelve el segundo valor, falso
```

### Operador lógico NOT (!)
El operador lógico NOT no realiza ninguna comparación como lo hacen los operadores AND y OR. Además, se opera en solo un operando.

Se utiliza un símbolo "!" (signo de exclamación) para representar un operador NOT.

Usos del operador NOT
Convertir la expresión en un booleano.
Devolver el valor contrario del booleano obtenido en el último paso.

```js
var spam = 'rinki'; spam puede ser igual a cualquiera de las cadenas de texto no vacías

var booSpam = !spam;
devuelve falso
  porque la string vacía al convertirse en un booleano se devuelve como verdadera y lo contrario se devuelve como falso 


var spam2 = ''; spam2 es igual a una cadena de texto vacía

var booSpam2 = !spam2;

  devuelve verdadero
  porque la cadena de texto vacia al convertirse en un booleano se devuelve como falsa y lo contrario se devuelve como verdadero.

```

Ten en cuenta que && devuelve el primer valor, mientras que || devuelve el segundo valor y vice versa.