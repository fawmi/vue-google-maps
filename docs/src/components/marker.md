# Marker

With a marker, you can show specific locations on the map
```vue
<template>
  <GmapMap>
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
    />
  </GmapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
      ]
    }
  },
}
</script>

```

## Enable/Disable events
You can enable or disable map events by passing props.

```vue
<template>
  <GmapMap
    ref="myMarker"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
    />
  </GmapMap>
</template>
```
