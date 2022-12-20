# How to access Google Maps object

[Interactive example on Playcode](https://playcode.io/1041251)

To access Google maps object, or do something when map is loaded, use a ref on the `GMapMap` object.

## Example

```html
<script setup>
  import { ref, watch } from 'vue'

  const center = ref({ lat: 51.093048, lng: 6.84212 })
  const markers = ref([{ position: { lat: 51.093048, lng: 6.84212 } }])

  const myMapRef = ref(null)

  watch(myMapRef, (newValue) => console.log(newValue))
</script>

<template>
  <GMapMap ref="myMapRef" :center="center" :zoom="7" style="width: 500px; height: 300px">
    <GMapCluster :maxZoom="12">
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
```
