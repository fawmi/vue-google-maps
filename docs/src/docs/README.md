# Introduction
[[toc]]
`@fawmi/vue-google-maps` provides a set of Vue.js 3 components wrapping the Google Maps API v3.

The following components are currently supported:

`Map`, `Marker`, `Cluster`, `InfoWindow`, `Polygon`, `Rectangle`


Checkout getting started to read, how to install and use vue-google-maps

# Install and configure

to install it via NPM
```bash
npm install -S @fawmi/vue-google-maps
```

## Basic usage
You need an API Key. Learn how to [get an Api key ](https://developers.google.com/maps/documentation/javascript/get-api-key).

## Configure Vue to use the Components

Initialise the plugin in your `main.js`:
```js
import { createApp } from 'vue'
import * as VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
    },
}).mount('#app')
```

## Use it anywhere in your components

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
