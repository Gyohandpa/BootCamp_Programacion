document.addEventListener('DOMContentLoaded', function() {
    //Gráfico de Barras de la frecuencia de accidentes electricos
    fetch('data/muertes_accidente_electrico.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('fila').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.tdEmpresa),
                    datasets: [{
                        label : 'frecuencia de accidentes eléctricos',
                        data: data.map(item => item['tdFrecuencia']),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Porcentaje (%)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Empresa'
                            }
                        }
                    }
                }
            });
        });
    });