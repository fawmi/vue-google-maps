# Polyline
[[toc]]

## Add Polyline to the map

You can add Polyline to the map using `GMapPolyline` component.

```vue
<template>
  <GMapPolyline 
      :path="path"
      :editable="true"
      ref="polyline" />
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 1.38, lng: 103.8},
      path: [
        {lat: 1.33, lng: 103.75},
        {lat: 1.43, lng: 103.85},
      ],
    }
  },
}
</script>
```

## Make polyline editable 
You can make Polyline editable using `editable` prop.

```vue
<template>
  <GMapMap>
    <GMapPolygon
        :editable="true"  
        :paths="paths"/>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>
```

## Polyline options
You can set Polyline options using `options` prop.

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
      }
    }
  },
}
</script>
```
