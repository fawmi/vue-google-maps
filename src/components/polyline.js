import buildComponent from './build-component.js'

const props = {
  draggable: {
    type: Boolean,
  },
  editable: {
    type: Boolean,
  },
  options: {
    twoWay: false,
    type: Object,
  },
  path: {
    type: Array,
    twoWay: true,
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
  props: {
    deepWatch: {
      type: Boolean,
      default: false,
    },
  },
  events,

  name: 'polyline',
  ctr: () => google.maps.Polyline,
  emits: events,
  afterCreate(inst) {
    let clearEvents = () => {}
    
    events.forEach((event)=> {
      inst.addListener(event, (payload)=> {
        this.$emit(event, payload)
      });
    })

    this.$watch(
      'path',
      (path) => {
        if (path) {
          clearEvents()

          this.$polylineObject.setPath(path)

          const mvcPath = this.$polylineObject.getPath()
          const eventListeners = []

          const updatePaths = () => {
            this.$emit('path_changed', this.$polylineObject.getPath())
          }

          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)])
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)])
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)])

          clearEvents = () => {
            eventListeners.map((
              [obj, listenerHandle] // eslint-disable-line no-unused-vars
            ) => google.maps.event.removeListener(listenerHandle))
          }
        }
      },
      {
        deep: this.deepWatch,
        immediate: true,
      }
    )
  },
})
