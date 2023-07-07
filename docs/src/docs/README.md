# Introduction
`@fawmi/vue-google-maps` provides a set of Vue.js 3 components wrapping the Google Maps API v3.

The following components are currently supported:

`Map`, `Marker`, `Cluster`, `InfoWindow`, `Circle`, `Polygon`, `Polyline`, `Rectangle`, `Autocomplete`

## Install

To install it via NPM
```bash
npm install -S @fawmi/vue-google-maps
```

## Basic usage
You need an API Key. Learn how to [get an Api key ](https://developers.google.com/maps/documentation/javascript/get-api-key).

Initialise the plugin in your `main.js`:
```js
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
        // language: 'de',
    },
}).mount('#app')
```

Use it anywhere in your components

```vue
<template>
  <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
  >
  </GMapMap>
</template>

<script >
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
    }
  }
}
</script>
```


## Register google maps events

In order to use Google maps events, they should either be enabled globally

```js
app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
    },
    autobindAllEvents: true,
}).mount('#app')
```

Or better yet, they should be activated when needed. 


In this example, we enable `closeclick` event for `GMapInfoWindow` component and register the event. 

```vue
<GMapInfoWindow
    :closeclick="true"
    @closeclick="closeMarker"
    :opened="openedMarkerID === m.id"
  >
    <div>I am in info window {{ m.id }}</div>
</GMapInfoWindow>
```
