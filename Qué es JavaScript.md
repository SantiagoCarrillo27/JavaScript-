# ¿Qué es JavaScript?
JavaScript es un lenguaje de alto nivel, dinámico e interpretado. Se define como orientado a objetos, basado en prototipos, imperativo y débilmente tipado. Junto al HTML y a CSS, es una de las tres tecnologías esenciales en la producción mundial webs: la mayoría de los sitios web la emplean y es compatible con todos los navegadores modernos sin necesidad de plug-ins. JavaScript posee una API (interfaces de programación de aplicaciones )para trabajar con texto, arrays, fechas y expresiones regulares.


## Uso de JavaScript
JavaScript también se utiliza en entornos que no se basan en web, tales como documentos PDF, navegadores específicos del sitio y widgets de escritorio. Máquinas virtuales de JavaScript (VMs) mucho más nuevas y rápidas, así como plataformas construidas sobre este lenguaje, han aumentado la popularidad de JavaScript para aplicaciones web. Por parte del cliente, JavaScript se ha aplicado tradicionalmente como un lenguaje interpretado, pero los navegadores más recientes pueden realizar la compilación al momento.
También se utiliza en el desarrollo de videojuegos, en la creación de aplicaciones de escritorio y móviles y en la programación de servidores con entornos de ejecución como Node.js. Para interactuar con una página web se provee al lenguaje JavaScript de una implementación del Document Object Model (DOM).

## DOM ( Document Object Model) 
Modelo de objeto de documento

**JavaScript es un lenguaje interpretado** ya que todo el codigo que se escribe no tiene que pasar por un compilador para ejecutarse, sino que pasa directamente a ejecutarse en el navegador mediante una herramienta llamado *interpreta*

## ¿Qué es un lenguaje de programación?
Es una herramienta que nos permite darle instrucciones a una maquina a traves del codigo, codigo que esta estructurado para que los programadores puedan escribirlo siguiendo una lógica que es **logica de programación**

### Hay 2 tipos de lenguajes 
Los compilados y los interpretados
### Compilados 
Esto hace referencia a que para poder ejecuarse un programa primero tiene que pasar este mismo por un compilador.
### Interpretados
Estos no necesitan un compilador para poder ejecurtase ya que se ejecutan directamente en el navegador mediante una herramienta llamada *Interpreta*

#### JavaScript es un lenguaje orientado objetos 
Esto hace referencia a que trabaja con clases, herencias, polimorfismo entre otras cosas que son propias de los lenguajes orientados a objetos.

**JavaScript esta basado en prototipos / instancias / classless.**

**Es de tipado debil**
Esto hace referencia a que el valor de los datos de las variables pueden cambiar en tiempo de ejecución o atraves del tiempo.

Ej:

*Enero del 2020*

```js 
let x = 20;
```

*Enero del 2022*

```js
let x = true;
```

Podemos cambiar el valor y el tipo de dato de x cuando queramos atraves del tiempo y esto va a ser permitido gracias a que es de tipado debil

#### JavaScript es sensible a minusculas y mayusculas

## JavaScript es de lenguaje dinamico

Los lenguajes de tipado dinámico son aquellos (como JavaScript) donde el intérprete asigna a las variables un tipo durante el tiempo de ejecución basado en su valor en ese momento.

Ej:
```js
let carro = 58; --> tipo : Number (JavaScript lo interpreta de ese modo)

let  piso = true; --> tipo : Boolean.
```

Esto quiere decir que el tipo de dato de la variable se va asignar dependiendo del tipo de dato que esta tenga como valor en este caso la variable carro sera de **Number** ya que ese es el tipo de dato que le hemos asigando y cuando nos referimos a lenguaje dinamico es que JavaScript va a interpretar que el tipo de dato que queremos pasarle es un numero.

