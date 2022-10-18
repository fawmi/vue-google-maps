# Polyline

Here you will find some uses for Google Maps Polyline component:

[[toc]]

## Adding Polyline to your Maps

You can add polygons to your Maps using `GMapPolyline` component inside of `GMapMap` component:

```html
<template>
  <GMapPolyline :path="path" ref="polyline" />
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        center: { lat: 1.38, lng: 103.8 },
        path: [
          { lat: 1.33, lng: 103.75 },
          { lat: 1.43, lng: 103.85 },
        ],
      }
    },
  }
</script>
```

## Making polyline editable

You can make your `GMapPolyline` component editable using `editable` prop:

```html
<template>
  <GMapMap>
    <GMapPolyline :editable="true" :paths="paths" />
  </GMapMap>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    },
  }
</script>
```

## Adding custom options

You can pass Google Maps Polyline options using the prop `options`:

```html
<template>
  <GMapMap>
    <GMapPolyline :options="options" />
  </GMapMap>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        options: {},
      }
    },
  }
</script>
```
