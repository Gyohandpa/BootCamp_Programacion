document.addEventListener('DOMContentLoaded', function(){
    const number1 =document.getElementById('number1');
    const number2 =document.getElementById('number2');
    const resultText =document.getElementById('resultText');

    window.calcular = function(operacion) {
        const num1 = parseFloat(number1.value.trim());
        const num2 = parseFloat(number2.value.trim());

         if (isNaN(num1) ||  isNaN(num2)) {
                resultText.textContent = 'Por favor, ingrese un número válidos. ';
                return;    
        }
        let result;
        switch (operacion) {
            case 'sumar':
                result = num1 + num2;
                break;
            case 'restar':
                result = num1 - num2;
                break;
            case 'multiplicar':
                result = num1 * num2;
                break;
            case 'dividir':
                if (num2 ===0) {
                    resultText.textContent = 'No se puede dividir por cero.';
                    return;
                }
                result = num1 / num2;
                break;
            default:
                result = 'Operación no Válida'
        };
    resultText.textContent = result; 
    
    }
});




/*     addButton.addEventListener('click', function(){
        const num1 = number1.value.trim();
        const num2 = number2.value.trim();; */
     /* }); 
});

/* if (NaN(num1)){
    resultText.textContent = 'Eso no es un número'
} */
/* number1.value.trim() es para tomar el valor y quita los espacios */