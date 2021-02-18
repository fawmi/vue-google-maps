<template>
  <div ref="infoWindow">
    <slot></slot>
  </div>
</template>

<script>
import buildComponent from './build-component.js'

const props = {
  options: {
    type: Object,
    required: false,
    default() {
      return {}
    },
  },
  position: {
    type: Object,
    twoWay: true,
  },
  zIndex: {
    type: Number,
    twoWay: true,
  },
}

const events = ['domready', 'click', 'closeclick', 'content_changed']

export default buildComponent({
  mappedProps: props,
  events,
  name: 'infoWindow',
  ctr: () => google.maps.InfoWindow,
  props: {
    opened: {
      type: Boolean,
      default: true,
    },
  },

  inject: {
    $markerPromise: {
      default: null,
    },
  },

  mounted() {
    const el = this.$refs.infoWindow
    el.parentNode.removeChild(el)
  },

  beforeCreate(options) {
    options.content = this.$refs.infoWindow

    if (this.$markerPromise) {
      delete options.position
      return this.$markerPromise.then((mo) => {
        this.$markerObject = mo
        return mo
      })
    }
  },
  emits: ['closeclick'],
  methods: {
    _openInfoWindow() {
      this.$infoWindowObject.close()
      if (this.opened) {
        this.$infoWindowObject.open(this.$map, this.$markerObject)
      } else {
        this.$emit('closeclick')
      }
    },
  },

  afterCreate() {
    this._openInfoWindow()
    this.$watch('opened', () => {
      this._openInfoWindow()
    })
  },
})
</script>
