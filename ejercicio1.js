// Este es un ejercicio donde piden crear una escalera de '#' 
// tambien la hicimos por si piden hacerla manera inervsa. 
function escalera(n) {
    for (i = 1; i <= n; i++) {

        let espacio = ' '.repeat(n - i)
        let caracter = '#'.repeat(i);
        console.log(espacio + caracter);
    }

}

escalera(5);