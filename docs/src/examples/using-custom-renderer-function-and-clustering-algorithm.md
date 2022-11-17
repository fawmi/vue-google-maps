# Using custom renderer function and clustering algorithm

In order to use custom renderer function and clustering algorithm, you will need to do the following step before:

## Install `@googlemaps/makerclusterer` package into your own project

Use `npm install @googlemaps/markerclusterer` to install the library into your project.

Note: this is required because it was the best option for us to make Clustering viable. The original version of this library wasn't supporting the new MarkerClustering package version, so we had to make adjustments. You can read more about it in [this PR](https://github.com/NathanAP/vue-google-maps-community-fork/pull/19).

## Example

Following this example will help you create your own render function and clustering algorithm.

```html
<template>
  <GMapMap
    ref="google"
    :center="center"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GMapCluster :algorithm="algorithm" :renderer="{ renderer: renderer }">
      <GMapMarker
        v-for="(m, index) in markers"
        :key="index"
        :clickable="true"
        :draggable="true"
        :position="m.position"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
  import { GridAlgorithm } from '@googlemaps/markerclusterer'

  export default {
    name: 'App',
    data() {
      return {
        algorithm: new GridAlgorithm({}),
        center: { lat: 51.093048, lng: 6.84212 },
        google: null,
        markers: [
          {
            position: {
              lat: 51.093048,
              lng: 6.84212,
            },
          }, // A long list of clusters
        ],
      }
    },
    methods: {
      renderer: ({ count, position }) =>
        new this.google.maps.Marker({
          label: {
            text: String(count),
            color: 'white',
            fontSize: '10px',
          },
          position,
          // adjust zIndex to be above other markers
          zIndex: Number(this.google.maps.Marker.MAX_ZINDEX) + count,
        }),
    },
  }
</script>
```
