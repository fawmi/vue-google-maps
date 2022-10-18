# How to open or close an info window on event

[Interactive example on CodeSandbox](https://stackblitz.com/edit/vue-google-maps-marker-w4hxvd?file=src/components/ComponentWithMap.vue).

To open or close info windows after marker click, you can modify the `:opened` prop and maintain a state variable containing ID of the opened marker.

```html
<template>
  <GMapMap :center="center" :zoom="10" map-type-id="terrain" style="width: 100vw; height: 20rem">
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="openMarker(m.id)"
    >
      <GMapInfoWindow
        :closeclick="true"
        @closeclick="openMarker(null)"
        :opened="openedMarkerID === m.id"
      >
        <div>I am in info window {{ m.id }}</div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
</template>

<script>
  export default {
    data() {
      return {
        openedMarkerID: null,
        center: { lat: 51.093048, lng: 6.84212 },
        markers: [
          {
            id: 1,
            position: {
              lat: 51.093048,
              lng: 6.84212,
            },
          },
          {
            id: 2,
            position: {
              lat: 51.198429,
              lng: 6.69529,
            },
          },
        ],
      }
    },
    methods: {
      openMarker(id) {
        this.openedMarkerID = id
      },
    },
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>
```
