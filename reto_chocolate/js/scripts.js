async function cargarDatos() {
    const response = await fetch('data/muertes_accidente_electrico.json');
    const datos =await response.json();
    const fila = document.getElementById('fila');
    fila.innerHTML = '';

    datos.forEach(item => {
        const tr = document.createElement('tr');
        const tdEmpresa = document.createElement('td');
        tdEmpresa.textContent = item.empresa;
        const tdFrecuencia = document.createElement('td');
        tdFrecuencia.textContent = item.frecuencia;

        if (item.frecuencia >= 15) {
            tdFrecuencia.style.color = 'red';
            tdFrecuencia.style.fontWeight = 'bold';
            tdFrecuencia.style.fontSize = '1.2em';
            tdEmpresa.style.color = '#941414';
            tdEmpresa.style.fontWeight = 'bold';
        }

        const tdEstado = document.createElement('td');
        const estado = item.frecuencia >= 15 ? '🛑Critico' : '⚠Grave';
        tdEstado.textContent = estado;

        //Agregar celdas a la fila
        tr.appendChild(tdEmpresa);
        tr.appendChild(tdFrecuencia);
        tr.appendChild(tdEstado);

        //Agregar fila al tbody
        fila.appendChild(tr);
    });
}
document.addEventListener("DOMContentLoaded", cargarDatos);
//__________________________________________________________________________
