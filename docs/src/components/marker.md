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

```vue{9,10}
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

## Register events
You can register events like click, the same as you do in your vue components

```vue{9}
<template>
  <GMapMap
    ref="myMarker"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="openInfoWindow(marker.id)"
      :clickable="true"
    />
  </GMapMap>
</template>
```

## Add custom icon
To use custom icon, pass `:icon` prop. You can pass a local resource or an image from internet.
```vue{9}
<template>
  <GMapMap
    ref="myMarker"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :icon="'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'"
      :clickable="true"
      :draggable="true"
    />
  </GMapMap>
</template>
```


You can also pass an object to the icon `prop` to define custom size and label origin: 

```vue{9-13}
<template>
  <GMapMap
    ref="myMarker"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :icon= '{
          url: "https://image.flaticon.com/teams/slug/google.jpg",
          scaledSize: {width: 77, height: 77},
          labelOrigin: {x: 16, y: -10}
      }'
      :clickable="true"
      :draggable="true"
    />
  </GMapMap>
</template>
```
