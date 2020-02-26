google.charts.load('current', {
    'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['案件種類', '新收件數', '終結件數'],
        ['財税', 995, 1027, ],
        ['健保', 562, 526, ],
        ['罰鍰', 4711, 5181, ],
        ['費用', 3093, 3296, ]
    ]);

    var options = {
        chart: {
            title: '新收件數',
            subtitle: '統計期間:108年',
        },
        legend:{
            position: 'none', 
            textStyle: {
                // color: 'blue', 
                // fontSize: 10
            },
            alignment: 'center'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChartPie);

function drawChartPie() {
    var data = google.visualization.arrayToDataTable([
      ['案件種類', '徵起金額'],
      ['財税',     954],
      ['健保',      1005],
      ['罰鍰',  254],
      ['費用', 787],
    ]);

    var options = {
      title: '徵起金額',
      pieHole: 0.5,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }