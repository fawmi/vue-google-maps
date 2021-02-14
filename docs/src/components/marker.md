# Marker
[[toc]]

## Add marker to your components
With a marker, you can show specific locations on the map
```vue
<template>
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    />
  </GMapMap>
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
  <GMapMap
    ref="myMarker"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
    />
  </GMapMap>
</template>
```
