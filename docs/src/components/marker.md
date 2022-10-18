# Marker

Here you will find some uses for Google Maps Marker component:

[[toc]]

## Adding marker to your components

You can add markers to your Maps using `GMapMarker` component inside of `GMapMap` component:

```html
<template>
  <GMapMap>
    <GMapMarker :key="index" v-for="(m, index) in markers" />
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
              lat: 51.093048,
              lng: 6.84212,
            },
          },
        ],
      }
    },
  }
</script>
```

## Enabling or disabling events

You can enable or disable the Google Maps Marker events by passing `props`:

```html
<template>
  <GMapMap ref="myMarker">
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

## Registering events

You can register events (like click) in the same way as you do in your Vue components:

```html
<template>
  <GMapMap ref="myMarker">
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

## Adding a custom icon

You can use `:icon` prop to pass a custom icon to your `GMapMarker`. Also, you can pass a local resource or an image from internet:

```html
<template>
  <GMapMap ref="myMarker">
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

Local resources can be passed in using `require`, for example: `:icon="require('@/assets/images/place-icon.svg').default"`.

The `icon` prop also can receive an object to define custom size and label origin:

```html
<template>
  <GMapMap ref="myMarker">
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :icon='{
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
