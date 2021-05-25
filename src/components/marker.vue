<template>
  <div @click="()=> {console.log('sdfsd')}">
    <slot></slot>
  </div>
</template>
<script>

import buildComponent from './build-component.js'

const props = {
  animation: {
    twoWay: true,
    type: Number,
  },
  attribution: {
    type: Object,
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true,
  },
  cursor: {
    type: String,
    twoWay: true,
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false,
  },
  icon: {
    twoWay: true,
  },
  label: {},
  opacity: {
    type: Number,
    default: 1,
  },
  options: {
    type: Object,
  },
  place: {
    type: Object,
  },
  position: {
    type: Object,
    twoWay: true,
  },
  shape: {
    type: Object,
    twoWay: true,
  },
  title: {
    type: String,
    twoWay: true,
  },
  zIndex: {
    type: Number,
    twoWay: true,
  },
  visible: {
    twoWay: true,
    default: true,
  },
}

const events = [
  'click',
  'rightclick',
  'dblclick',
  'drag',
  'dragstart',
  'dragend',
  'mouseup',
  'mousedown',
  'mouseover',
  'mouseout',
]

export default buildComponent({
  mappedProps: props,
  events,
  name: 'marker',
  ctr: () => google.maps.Marker,

  inject: {
    $clusterPromise: {
      default: null,
    },
  },
  emits: events,
  unmounted() {
    if (!this.$markerObject) {
      return
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true)
    } else {
      this.$markerObject.setMap(null)
    }
  },

  beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null
    }

    return this.$clusterPromise
  },

  afterCreate(inst) {
    events.forEach((event)=> {
      inst.addListener(event, (payload)=> {
        this.$emit(event, payload)
      });
    })
    if (this.$clusterPromise) {
      this.$clusterPromise.then((co) => {
        this.$clusterObject = co
        co.addMarker(inst)
      })
    }
  },
})
</script>
