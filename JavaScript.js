google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['School', 'Completion Rate',],
        ['Cherry Hill', 76.4],
        ['Fells Point', 72.22],
        ['Greater Roland Park/Poplar Hill', 100],
        ['Hamilton', 77.44],
        ['Midtown', 67.65]
    ]);

    var options = {
        title: 'School Completion rates',
        chartArea: {width: '60%'},
        hAxis: {
            title: 'Completion rates',
            minValue: 0
        },
        vAxis: {
            title: 'School'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
