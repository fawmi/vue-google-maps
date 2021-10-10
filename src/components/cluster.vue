<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import MarkerClusterer from '@googlemaps/markerclustererplus';
import buildComponent from './build-component.js'

const props = {
  maxZoom: {
    type: Number,
    twoWay: false,
  },
  batchSizeIE: {
    type: Number,
    twoWay: false,
  },
  calculator: {
    type: Function,
    twoWay: false,
  },
  enableRetinaIcons: {
    type: Boolean,
    twoWay: false,
  },
  gridSize: {
    type: Number,
    twoWay: false,
  },
  ignoreHidden: {
    type: Boolean,
    twoWay: false,
  },
  imageExtension: {
    type: String,
    twoWay: false,
  },
  imagePath: {
    type: String,
    twoWay: false,
  },
  imageSizes: {
    type: Array,
    twoWay: false,
  },
  minimumClusterSize: {
    type: Number,
    twoWay: false,
  },
  styles: {
    type: Array,
    twoWay: false,
  },
  zoomOnClick: {
    type: Boolean,
    twoWay: false,
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
  name: 'cluster',
  ctr: () => {
    if (typeof MarkerClusterer === 'undefined') {
      const errorMessage = 'MarkerClusterer is not installed!';
      console.error(errorMessage);
      throw new Error(errorMessage)
    }
    return MarkerClusterer
  },
  ctrArgs: ({ map, ...otherOptions }) => [map, [], otherOptions],
  afterCreate(inst) {
    const reinsertMarkers = () => {
      const oldMarkers = inst.getMarkers()
      inst.clearMarkers()
      inst.addMarkers(oldMarkers)
    }
    for (let prop in props) {
      if (props[prop].twoWay) {
        this.$on(prop.toLowerCase() + '_changed', reinsertMarkers)
      }
    }
  },
  updated() {
    if (this.$clusterObject) {
      this.$clusterObject.repaint()
    }
  },
  beforeUnmount() {
    /* Performance optimization when destroying a large number of markers */
    if (this.$children && this.$children.length) {
      this.$children.forEach((marker) => {
        if (marker.$clusterObject === this.$clusterObject) {
          marker.$clusterObject = null
        }
      })
    }


    if (this.$clusterObject) {
      this.$clusterObject.clearMarkers()
    }
  },
})
</script>
