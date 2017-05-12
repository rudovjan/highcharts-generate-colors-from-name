import { generateColorForString } from './color.js'

(function(H) {
  H.wrap(H.Series.prototype, 'getColor', function (proceed) {

    console.log(this.name);
    const color = generateColorForString(this.name);
    console.log(color);

    this.color = color;
  });
}(Highcharts));