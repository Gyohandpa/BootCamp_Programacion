document.addEventListener('DOMContentLoaded', function(){
    const inputBox =document.getElementById('inputBox');
    const outputBox =document.getElementById('outputBox');

    inputBox.addEventListener('input', function(){
       const message = inputBox.value.toUpperCase();
       /* const message = inputBox.value.toUpperCase(); Convierte todo en Mayuscula*/
       outputBox.textContent =message; 
    });
})