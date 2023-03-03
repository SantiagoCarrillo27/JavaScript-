const txtope1 = document.getElementById('ope1');
const txtope2 = document.getElementById('ope2');
const txtOperacion = document.getElementById('operador');
const boton = document.getElementById('calcular');
const pResultado = document.getElementById('resultado');

boton.addEventListener("click", calcular)



function calcular() {
    const operacion = txtOperacion.value;
    const ope1 = parseFloat(txtope1.value);
    const ope2 = parseFloat(txtope2.value);

    if ( (operacion == '+' || operacion == '-' ||
        operacion == '*' || operacion == '/') &&  !isNaN(ope1)&&!isNaN(ope2)) {

        let resultado;

        switch (operacion) {

            case '+':
                resultado = ope1 + ope2
                break;

            case '-':
                resultado = ope1 - ope2
                break;

            case '*':
                resultado = ope1 * ope2
                break;

            case '/':
                resultado = ope1 / ope2
            break;

        }
        pResultado.style = 'color:black'

        pResultado.innerText = 'El resultado de la operación es = ' + resultado
    } else {

        pResultado.style = 'color:red'
        pResultado.innerText = 'Calculo imposible'
    }

}