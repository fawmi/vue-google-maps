<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import {
  DefaultRenderer,
  MarkerClusterer,
  SuperClusterAlgorithm,
} from '@googlemaps/markerclusterer'
import buildComponent from './build-component.js'

const props = {
  algorithm: {
    type: Object,
    default: new SuperClusterAlgorithm({}),
    noBind: true,
  },
  renderer: {
    type: Object,
    default: new DefaultRenderer(),
    noBind: true,
  },
}

const events = ['clusteringbegin', 'clusteringend']

export default buildComponent({
  mappedProps: props,
  events,
  name: 'cluster',
  ctr: () => {
    if (typeof MarkerClusterer === 'undefined') {
      const errorMessage = 'MarkerClusterer is not installed!'
      console.error(errorMessage)
      throw new Error(errorMessage)
    }
    return MarkerClusterer
  },
  ctrArgs: ({ map, ...otherOptions }) => [{ map, ...otherOptions }],
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
      this.$clusterObject.render()
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
