# How to get if a clicked area is within polygon in Google Maps. 



[Interactive example on Condesandbox](https://stackblitz.com/edit/vue-google-maps-marker-fnzw4j?file=src%2Fcomponents%2FComponentWithMap.vue)



## Example

```bash

// Source of JS implementation: https://github.com/mattwilliamson/Google-Maps-Point-in-Polygon/blob/master/maps.google.polygon.containsLatLng.js
<template>
  <GMapMap
    ref="myMapRef"
    :click="true"
    @click="handleClick"
    :center="center"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem">
    <GMapPolygon
      :options="{
          clickable: false
        }"
      :clickable="false"
      ref="mapPolygon"
      :paths="paths"
    />
  </GMapMap>
</template>

<script>
import {ref, onMounted} from "vue";
import {setupContainsLatLng} from '../util/is-point-within-polygon.js'

export default {
  data() {
    return {
      center: {lat: 25.774, lng: -80.19},
      paths: [
        {lat: 25.774, lng: -80.19},
        {lat: 18.466, lng: -66.118},
        {lat: 32.321, lng: -64.757},
      ],
    };
  },
  setup() {
    const myMapRef = ref();
    const mapPolygon = ref();

    function handleClick(event) {
      if (event.latLng?.lat) {
        mapPolygon.value.$polygonPromise.then(res => {
          let isWithinPolygon = res.containsLatLng(event.latLng.lat(), event.latLng.lng());
          console.log({isWithinPolygon})
        })
      }
    }

    onMounted(() => {
      myMapRef.value.$mapPromise.then(() => {
        setupContainsLatLng();
      })
    })

    return {
      myMapRef,
      mapPolygon,
      handleClick
    }
  }
};
</script>

```
