# How to access Google Maps object

[Interactive example on CodeSandbox](https://stackblitz.com/edit/vue-google-maps-marker-khyhfk?file=src/components/ComponentWithMap.vue)

To access Google maps object, or do something when map is loaded, use a ref on the `GMapMap` object.

## Example

```html
<template>
  <GMapMap
    :center="center"
    ref="myMapRef"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script>
  export default {
    mounted() {
      this.$refs.myMapRef.$mapPromise.then((mapObject) => {
        console.log('map is loaded now', mapObject)
      })
    },
    data() {
      return {
        center: { lat: 51.093048, lng: 6.84212 },
        markers: [
          {
            position: {
              lat: 51.093048,
              lng: 6.84212,
            },
          },
          {
            position: {
              lat: 51.198429,
              lng: 6.69529,
            },
          },
          {
            position: {
              lat: 51.165218,
              lng: 7.067116,
            },
          },
          {
            position: {
              lat: 51.09256,
              lng: 6.84074,
            },
          },
        ],
      }
    },
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>
```
