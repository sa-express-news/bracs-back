import d3 from 'd3';

export default {
	bracSpendingBar: {
        size: {
          height: 360
        },
        data: {
          x: 'x',
          columns: [
            ['x', 'Tarrant County', 'Bexar County', 'El Paso County', 'Bell County', 'Dallas County'],
            ['Defense Spending', 13.6, 5.9, 2.4, 2.3, 2,]
          ],
          type: 'bar',
          labels: {
            format: d3.format('$')
          },
          colors: {
            ['Defense Spending']: '#FE7400',
          }
        },
        bar: {
          width: 55,
          space: 0.25
        },
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        axis: {
          x: {
            type: 'category'
          },
          y: {
            tick: {
              format: d3.format('$')
            }
          }
        }
    },
    bracPersonnelBar: {
        size: {
          height: 360
        },
        data: {
          x: 'x',
          columns: [
            ['x', 'Bexar County', 'Bell County', 'El Paso County', 'Tarrant County', 'Harris County'],
            ['Total Personnel', 60076, 34167, 32357, 11738, 8908]
          ],
          type: 'bar',
          labels: {
            format: d3.format(',')
          },
          colors: {
            ['Total Personnel']: '#FE7400',
          }
        },
        bar: {
          width: 55,
          space: 0.25
        },
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        axis: {
          x: {
            type: 'category'
          },
          y: {
            tick: {
              format: d3.format(',')
            }
          }
        }
    }
};