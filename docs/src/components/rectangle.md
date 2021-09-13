# Rectangle
[[toc]]

## Add Rectangle to your map

You can add rectangles to your map using `GMapRectangle` component


```vue
<template>
  <GMapMap
      :center="center"
      :zoom="4"
      style="width: 100vw; height: 100vh"
  >
    <GMapRectangle
        :bounds="bounds"
    />
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 33.685, lng: 33.671},
      bounds: {
      north: 33.685,
      south: 33.671,
      east: -116.234,
      west: -116.251,
    },
    }
  },
}
</script>

```

## Add custom Rectangle options

Like almost all components, you can pass all available Google maps rectangle options as prop. 

```vue
<template>
  <GMapMap
      :center="center"
      :zoom="4"
      style="width: 100vw; height: 100vh"
  >
    <GMapRectangle
        :bounds="bounds"
        :options="options"
    />
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 33.685, lng: 33.671},
      bounds: {
      north: 33.685,
      south: 33.671,
      east: -116.234,
      west: -116.251,
    },
    options: {
       strokeColor: "#FF0000",
       strokeOpacity: 0.8,
       strokeWeight: 2,
       fillColor: "#FF0000",
       fillOpacity: 0.35,
    }
    }
  },
}
</script>

```
