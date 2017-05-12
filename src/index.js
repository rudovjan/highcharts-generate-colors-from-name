import { generateColorForString } from './color.js'

(function(H) {
  H.wrap(H.Series.prototype, 'getColor', function(proceed) {
    if (this.options.generateColors && this.options.generateColors.enabled) {
      this.color = generateColorForString(this.name);
    } else {
      // Execute original
      proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    }
  });
}(Highcharts));