document.addEventListener('DOMContentLoaded', function(){
    const number1 =document.getElementById('number1');
    const number2 =document.getElementById('number2');
    const addButton =document.getElementById('addButton');
    const resultText =document.getElementById('resultText')

    addButton.addEventListener('click', function(){
        const num1 = Number(number1.value);
        const num2 = Number(number2.value);
        

        if (num1 === ' '||
            num2 === ' '||
            isNaN(Number(num1)) ||
            isNaN(Number(num2))) {
                resultText.textContent = 'Por favor, ingrese un número válidos. ';
                return;    
        }
        let result = Number(num1) + Number(num2);
        resultText.textContent = result;
        
    });
});

/* if (NaN(num1)){
    resultText.textContent = 'Eso no es un número'
} */
/* number1.value.trim() es para tomar el valor y quita los espacios */