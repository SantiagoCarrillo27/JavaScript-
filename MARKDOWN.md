# Markdown 

## ¿Qué es Markdown?

Es un lenguaje de marcado que permite documentar cualquier cosa y sirve o se puede abrir y vizualizar casi que en cualquier parte, es como tener una libreta de apuntes en todo momento donde estemos 
En principio, fue pensado para elaborar textos cuyo destino iba a ser la web con más rapidez y sencillez que si estuviésemos empleando directamente HTML. Y si bien ese suele ser el mejor uso que podemos darle, también podemos emplearlo para cualquier tipo de texto, independientemente de cual vaya a ser su destino.

## Declarar titulos con Markdown
Para declarar titulos en Markdown utilizamos el caracter numeral o almohadilla ("#") como si estas fueran H1,H2,H3, etc en HTML

Ejemplo:
"#"+ el titulo que queramos agregar si queremos que este sea igual que un H1 en Html y así sucesivamente hasta el "#" numero 6 que hace referencia a un h6 en HTML.

# "#" Sirve igual un H1 en HTML (se utiliza para encabezados)
## "##" Sirve igual que un H2 en HTML
### "###" Sirve igual que un H3 en HTML
#### "####" Sirve igual que un H4 en HTML
##### "#####" Sirve igual que un H5 en HTML5
###### "######" Sirve igual que un H6 en HTML5


## Declarar negritas y cursivas
Para estabelecer como cursiva o negrita una palabra utilizamos el caracter ("*")

### negritas ("**") adelante y al final de la palabra  + la palabra

**Negrita**

### Cursiva ("*") adelante y al final de la palabra + la palabra 

*Cursiva*

## Declarar listas 
 dado que en HTML hay de dos tipos, numeradas y sin numerar (u ordenadas y desordenadas), usaremos números seguidos de un punto y un espacio para cada elemento en el caso de las primeras y asteriscos y un espacio (ahora sólo al principio), signos más o guiones para las segundas.

 ### Lista numerada

(1 . + Elemento) utilizamos el numero y un punto de manera separada y depues el elemento.

### Listas sin numerar

( * + Elemento) utilizamos un Asterisco separado del elemento.

## Declarar codigo 
Para documentar codigo utilizamos los backtick o comillas invertidas ( ```las utilizamos  en la parte de arriba y de abajo de las lineas de codigo que tengamos````) Declaramos 3 comillas al inicio y al final.

```
let edad = prompt("Ingresa tu edad")

```

Podemos formatear la documentación del código al lenguaje que queramos solo hace falta agregarle a las 3 primeras lines la extensión del lenguaje de programación o framework que estemos documentando (```js). En este caso nuestro codigo estara formateado para el lenguaje JavaScript 

```js
let carro = {
    'silla',
    'motor',
    'espejos'
}```




