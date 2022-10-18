# Rectangle

Here you will find some uses for Google Maps Rectangle component:

[[toc]]

## Adding Rectangle to your Maps

You can add polygons to your Maps using `GMapRectangle` component inside of `GMapMap` component:

```html
<template>
  <GMapMap :center="center" :zoom="4" style="width: 100vw; height: 100vh">
    <GMapRectangle :bounds="bounds" />
  </GMapMap>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        center: { lat: 33.685, lng: 33.671 },
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

## Adding custom options

You can pass Google Maps Rectangle options using the prop `options`:

```html
<template>
  <GMapMap :center="center" :zoom="4" style="width: 100vw; height: 100vh">
    <GMapRectangle :bounds="bounds" :options="options" />
  </GMapMap>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        center: { lat: 33.685, lng: 33.671 },
        bounds: {
          north: 33.685,
          south: 33.671,
          east: -116.234,
          west: -116.251,
        },
        options: {
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
        },
      }
    },
  }
</script>
```
