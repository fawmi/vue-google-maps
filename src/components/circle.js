import buildComponent from './build-component'

const props = {
  center: {
    type: Object,
    twoWay: true,
    required: true,
  },
  radius: {
    type: Number,
    twoWay: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    twoWay: false,
  },
}

const events = [
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'mousedown',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'rightclick',
]

export default buildComponent({
  mappedProps: props,
  name: 'circle',
  ctr: () => google.maps.Circle,
  events,
})
