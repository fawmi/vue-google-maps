import buildComponent from './build-component.js'

const props = {
  options: {
    type: Object,
    twoWay: false,
    default: () => {
    },
  },
  data: {
    type: Array,
    twoWay: true
  },
}

const events = [];

export default buildComponent({
  mappedProps: props,
  name: 'heatmap',
  ctr: () => google.maps.visualization.HeatmapLayer,
  events,
})


