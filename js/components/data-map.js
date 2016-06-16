(function(exports) {

  exports.EITIDataMap = document.registerElement('data-map', {
    prototype: Object.create(
      HTMLElement.prototype,
      {
        createdCallback: function() {
          var svg = d3.select(this).append('svg');

          var legend = d3.select(this).append('svg')
          // for (step in steps.length) {
          var swatch = legend.append('rect')

          swatch.attr('class', 'swatch')
            .attr('height', 10)
            .attr('width', 10)
            .attr('fill', '#ccc');
          // }


          this.values = this.getAttribute('values') || [];
          this.dot = this.getAttribute('dot');
          this.line = this.getAttribute('line');
        },
        attachedCallback: {value: function() {
          this.update();
        }},

        update: {value: function() {
          var type = this.getAttribute('scale-type') || 'quantize';
          var scheme = this.getAttribute('color-scheme') || 'Blues';
          var steps = this.getAttribute('steps') || 5;
          var units = this.getAttribute('units') || '';

          var colors = colorbrewer[scheme][steps];
          if (!colors) {
            return console.error(
              'bad # of steps (%d) for color scheme:', steps, scheme
            );
          }

          var marks = d3.select(this)
            .selectAll('svg [data-value]')
            .datum(function() {
              return +this.getAttribute('data-value') || 0;
            });

          var domain = this.hasAttribute('domain')
            ? JSON.parse(this.getAttribute('domain'))
            : d3.extent(marks.data());

          if (domain[0] > 0) {
            domain[0] = 0;
          } else if (domain[0] < 0) {
            domain[1] = Math.max(0, domain[1]);
          }

          // FIXME: do something with divergent scales??

          var scale = d3.scale[type]()
            .domain(domain)
            .range(colors);

          // console.log('scale  :',scale)


          marks.attr('fill', scale);


          d3.select(this).selectAll('[threshold-start]')



          // svg:egend.select(".legendQuant")
          //   .call(legend);
        }}
      }
    )
  });

})(this);
