# Polygon
[[toc]]

## Add polygon to the map

You can add polygons to the map using polygon component.

```vue
<template>
  <GMapMap
      :center="center"
      :zoom="4"
      style="width: 100vw; height: 100vh"
  >
    <GMapPolygon
        :paths="paths"
    />
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 25.774, lng: -80.19},
      paths: [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
      ],
    }
  },
}
</script>
```


## Set polygon options
You can set polygon style and other options using `options` prop.

```vue
<template>
  <GMapMap>
    <GMapPolygon :paths="paths"/>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      }
    }
  },
}
</script>
```