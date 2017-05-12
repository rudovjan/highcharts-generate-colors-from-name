const series = [];

for(let i = 0; i < 20; i++) {
  series[i] = {
    name: 'Series ' + i,
    data: [3],
    generateColor: {
      enabled: true
    }
  }
}

$(() => (
  Highcharts.chart('chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Column chart with negative values'
    },
    xAxis: {
      categories: ['Apples']
    },
    credits: {
      enabled: false
    },
    series
  })
));
