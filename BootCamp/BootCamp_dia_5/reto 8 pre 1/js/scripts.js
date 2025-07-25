// Obtener la referencia de los documentos de la pagina
// funcion(parametro1,parametro2,...si esta vacia no tiene requerimientos){constante aclarada con la funcion document.getElementBy Id}
document.addEventListener('DOMContentLoaded', function(){
    const inputBox = document.getElementById('inputBox');
    const showBtn = document.getElementById('showBtn');
    const outputBox =document.getElementById('outputBox');
    //Añadir un observador al boton.
    showBtn.addEventListener('click', function(){
        const message = inputBox.value;
        /* console.log(message) */
        console.log('Dato Ingresado')
        outputBox.textContent = message
    })
})
