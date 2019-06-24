// requisição ajax para o git hub pegar os dados do arquivo json no github
let dadosJs;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        dadosJs = JSON.parse(this.responseText)
        console.log(dadosJs);
        // gráfico
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
                datasets: [{
                    label: dadosJs.title,
                    backgroundColor: 'rgb(183, 100, 0)',
                    borderColor: 'rgb(183, 100, 0)',
                    data: [dadosJs.janeiro,
                    dadosJs.fevereiro,
                    dadosJs.março,
                    dadosJs.abril,
                    dadosJs.maio,
                    dadosJs.junho,
                    dadosJs.julho,
                    dadosJs.setembro,
                    dadosJs.outubro,
                    dadosJs.novembro,
                    dadosJs.dezembro
                    ]
                },]
            },

            // Configuration options go here
            options: {}
        });
    }
};
xhttp.open("GET", "https://marlonporfirio.github.io/DevWebProjeto/temp.json", true);
xhttp.send();










