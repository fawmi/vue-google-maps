# How to open or close an info window on event

[Interactive example on Playcode](https://playcode.io/1041264).

To open or close info windows after marker click, you can modify the `:opened` prop and maintain a state variable containing ID of the opened marker.

```html
<script setup>
  import { ref } from 'vue'

  const openedMarkerID = ref(null)
  const center = ref({ lat: 51.093048, lng: 6.84212 })
  const markers = ref([
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
  ])

  function openMarker(id) {
    openedMarkerID.value = id
  }
</script>

<template>
  <GMapMap :center="center" :zoom="7" style="width: 500px; height: 300px">
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

<style scoped>
  body {
    margin: 0;
  }
</style>
```
