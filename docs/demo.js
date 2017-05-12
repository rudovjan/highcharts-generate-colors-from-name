const series = [];

for(let i = 0; i < 40; i++) {
  series[i] = {
    name: 'Series ' + i,
    data: [3],
    generateColors: {
      enabled: true
    }
  }
}

series.push({
  name: 'Series 4',
  data: [4],
  generateColors: {
    enabled: true
  }
}, {
  name: 'Series 10',
  data: [4],
  generateColors: {
    enabled: true
  }
});

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
