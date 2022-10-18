# Polygon

Here you will find some uses for Google Maps Polygon component:

[[toc]]

## Adding Polygon to your Maps

You can add polygons to your Maps using `GMapPolygon` component inside of `GMapMap` component:

```html
<template>
  <GMapMap :center="center" :zoom="4" style="width: 100vw; height: 100vh">
    <GMapPolygon :paths="paths" />
  </GMapMap>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        center: { lat: 25.774, lng: -80.19 },
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

## Adding custom options

You can pass Google Maps Polygon options using the prop `options`:

```html
<template>
  <GMapMap>
    <GMapPolygon :options="options" />
  </GMapMap>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        options: {
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
        },
      }
    },
  }
</script>
```
