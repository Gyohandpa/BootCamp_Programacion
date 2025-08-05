//Configuración de SupaBase
const SUPABASE_URL = 'https://hmosdbrdtlbfcwjpkswd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtb3NkYnJkdGxiZmN3anBrc3dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4OTA0NDIsImV4cCI6MjA2OTQ2NjQ0Mn0.Q3dmeSYkxhvzrlZlaTUjZjMlWuXBjrDLDSd6LIlRKSE';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
document.addEventListener('DOMContentLoaded', async function () {
    //AUTENTICACIÓN ANONIMA
    await supabase.auth.signInAnonymously();
    //Ejecutar todas las funciones
    fetchtop20Paises();
    fetchtopRegiones();
    fetchcolombia_SurAmerica();


    //Gráfico de Barras del Top 20 de Países con Mayor Porcentaje de Energía Renovable
    async function fetchtop20Paises() {
        const { data, error } = await supabase
            .from('top_20_paises')
            .select('*')
            .order('Promedio_renovables', { ascending: false })
            .limit(20);
        if (error) throw error;
        createBarChart('graficobarrasPaises', data, 'pais', 'promedio_renovables', 'Porcentaje de Energía Renovable', 'rgba(54, 162, 235, 0.6)');
        //Archivo, data, columna, olumna, grafico. titulo. rgba 
    }
    //Gráfico de Barras de Producción de Energía Renovable por Regiones

    async function fetchtopRegiones() {
        const { data, error } = await supabase
            .from('top_regiones')
            .select('*')
            .order('Promedio_renovables', { ascending: false })

        if (error) throw error;

        createBarChart('graficoBarrasRegiones', data, 'region', 'promedio_renovables', 'Porcentaje de Energía Renovable', 'rgba(54, 162, 235, 0.6)');

        //Funcion para crear grafico de barras
        function createBarChart(CanvasId, data, labelField, dataField, label, backgroundColor) {
            const ctx =document.getElementById(canvasId).getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item[labelField]),
                    datasets: [{
                        label: label,
                        data: data.map(item => item[dataField]),
                        backgroundColor: backgroundColor,
                        borderColor: backgroundColor.replace("0.6", "1"),
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
                                    text: canvasId.includes('Países') ? 'Países' : 'Regiones'
                                }
                            }
                        }
                    }
            })
        }
        //Grafica comparativa de lineas
        async function fetchcolombia_SurAmerica() {
            const { data, error } = await supabase
            .from('colombia_suramerica_3')
            .select('*')
            .lte('anno',2021)
            .order('anno', { ascending: true });
            if (error) throw error;
            //Procesar los datos que vienen de la Consulta
            const colombiaData = data.filter(item => item.region === 'Colombia');
            const suramericaData = data.filter(item => item.region === 'Suramerica');
            const years = [...new Set(data.map(item => item.anno))];

            const ctx = document.getElementById('graficoLineasComparativa').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: years,
                        datasets: [
                            {
                                label: 'Colombia',
                                data: colombiaData.map(item => item.Renovables),
                                borderColor: 'rgba(255, 99, 132, 1)',
                                backgroundColor: 'rgba(255, 9, 63, 0.2)',
                                fill: false,
                                borderWidth: 1,
                                tension: 0.2
                            },
                            {
                                label: 'Suramerica',
                                data: suramericaData.map(item => item.Renovables),
                                borderColor: 'rgba(54, 162, 255, 1)',
                                backgroundColor: 'rgba(60, 180, 255, 0.6)',
                                fill: false,
                                borderWidth: 1,
                                tension: 0.2
                            }
                        ]
                    }
                })
        }
    }
});

/*         fetch('data/top20Paises.json')
            .then(response => response.json())
            .then(data => {
                const ctx = document.getElementById('graficoBarrasPaises').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(item => item.Pais),
                        datasets: [{
                            label: 'Porcentaje de Energía Renovable',
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
                            label: 'Porcentaje de Energía Renovable',
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
                                borderColor: 'rgba(54, 162, 255, 1)',
                                backgroundColor: 'rgba(60, 180, 255, 0.6)',
                                fill: false,
                                borderWidth: 1,
                                tension: 0.3
                            }
                        ]
                    }
                })
            });
    }
}); */