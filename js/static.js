var BarChart = document.getElementById('BarChart').getContext('2d');
var doughnutChart = document.getElementById('doughnut').getContext('2d');
var lineChart = document.getElementById('lineChart').getContext('2d');
var options = {
    responsive: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

function getData(dataType){
    var data = {
        labels: [
            "財稅案件",
            "健保案件",
            "罰鍰案件",
            "費用案件"
        ],
        datasets: [{
            label: "108年新收件數(萬件)",
            data: dataType,
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            backgroundColor:[
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    return data;
}

var BarChartdata = [87.7, 52.1, 258.9, 254.4];
var doughnutChartData = [100, 63, 547, 379];

var lineChartData = {
    labels: [
        "104年",
        "105年",
        "106年",
        "107年",
        "108年"
    ],
    datasets: [{
        label: "近五年徵起金額(新臺幣億元)",
        data: [272, 214, 249, 279, 232],
        backgroundColor: "rgba(1, 1, 1, 0)",
        borderCapStyle: 'square',
        borderColor  :"#43ACAC",

    }]
};


Chart.Bar(BarChart, {
    options: options,
    data: getData(BarChartdata),
});

Chart.Doughnut(doughnutChart, {
    options: options,
    data: getData(doughnutChartData),
})

Chart.Line(lineChart,{
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
    data: lineChartData,
})