# Getting started

Welcome! In `vue-google-maps-community-fork` will you find a set of VueJS 3 components wrapping the Google Maps API.

## Before starting

It is important to notice that this repository was forked by the community to keep the library alive. You can get more infor about our decision [in this GitHub discussion](https://github.com/NathanAP/vue-google-maps-community-fork/discussions/1).

Since this library is currently maintained by the community, every help is needed and appreciated! You can follow everything in our [GitHub repository](https://github.com/NathanAP/vue-google-maps-community-fork).

## Installation

You can install this library using npm:

```
npm install vue-google-maps-community-fork
```

### Pre-requisites

To use this library you will need an API Key. You can learn how to get one [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Configure your enviroment

Initialise the plugin in your `main.js`:

```js
import { createApp } from 'vue'
import VueGoogleMaps from 'vue-google-maps-community-fork'

const app = createApp(App)
app
  .use(VueGoogleMaps, {
    load: {
      key: 'YOUR_API_KEY_COMES_HERE',
    },
  })
  .mount('#app')
```

### Great! Now you can use anywhere in your components

Here are some examples:

```vue
<template>
  <GMapMap
    :center="{ lat: 51.093048, lng: 6.84212 }"
    :zoom="7"
    map-type-id="terrain"
    style="width: 100vw; height: 900px"
  >
  </GMapMap>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
    }
  },
}
</script>
```

## Registering Google Maps events

To use Google Maps events you have two options:

- The first (and better) option is to activate them when you need.

In this example, we enable `closeclick` event for `GMapInfoWindow` component and register the event.

```html
<GMapInfoWindow :closeclick="true" @closeclick="closeMarker" :opened="openedMarkerID === m.id">
  <div>I am in info window {{ m.id }}</div>
</GMapInfoWindow>
```

- The second option is to enable them globally.

```js
import { createApp } from 'vue'
import VueGoogleMaps from 'vue-google-maps-community-fork'

const app = createApp(App)
app
  .use(VueGoogleMaps, {
    load: {
      key: 'YOUR_API_KEY_COMES_HERE',
    },
    autobindAllEvents: true, // Add this to enable the events
  })
  .mount('#app')
```
