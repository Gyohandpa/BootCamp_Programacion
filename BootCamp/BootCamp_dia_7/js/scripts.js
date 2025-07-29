document.addEventListener('DOMContentLoaded', function() {
    //Gráfico de Barras del Top 20 de Países con Mayor Porcentaje de Energía Renovable
    fetch('data/top20Paises.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficoBarrasPaises').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.Pais),
                    datasets: [{
                        label : 'Porcentaje de Energía Renovable',
                        data: data.map(item => item['Promedio Renovables']),
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
                                text: 'Países'
                            }
                        }
                    }
                }
            });
        });
        //Gráfico de Barras de Producción de Energía Renovable por Regiones
        fetch('data/topRegiones.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficoBarrasRegiones').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.Region),
                    datasets: [{
                        label : 'Porcentaje de Energía Renovable',
                        data: data.map(item => item['Promedio Renovables']),
                        backgroundColor: 'rgba(300, 28, 28, 0.6)',
                        borderColor: 'rgba(200, 15, 15, 1)',
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
                                text: 'Region'
                            }
                        }
                    }
                }
            });
        });
        //Gráfico de lineas Comparativas de Producción de Energía Renovable - Colombia vs Suramerica ( 1965 - 2021)
        fetch('data/colombia_SurAmerica.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => item.Anno <= 2021);
            const ctx = document.getElementById('graficoLineasComparativa').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [...new Set(filteredData.map(item => item.Anno))],
                    datasets: [
                        {
                            label: 'Colombia',
                            data: filteredData.filter(item => item.Region === 'Colombia').map(item => item.Renovable),
                            borderColor: 'rgba(255, 99, 132, 1)',
                            backgroundColor: 'rgba(255, 9, 63, 0.2)',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.3
                        },
                        {
                            label: 'Suramerica',
                            data: filteredData.filter(item => item.Region === 'Suramerica').map(item => item.Renovable),
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(60, 180, 255, 0.6)',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.3
                        }
                    ]
                }
            })
        });
});