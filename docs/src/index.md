---
home: true
heroImage: 'assets/logo.jpg'
tagline: Reactive Vue 3 components for Google maps.
actionText: Read Docs →
actionLink: /docs/
---

<div style="display: flex; align-content: center;justify-content: center;">
    <a target="_blank"
        style="display: inline-block;
                font-size: 1.2rem;
                padding: .8rem 1.6rem;
                border-radius: 4px;
                box-sizing: border-box;
                border: 1px solid #000;"
href="https://stackblitz.com/edit/vue-google-maps-marker?file=src%2Fcomponents%2FComponentWithMap.vue">View example</a>
</div>

## Installation
You can install it using npm
```
npm install -S @fawmi/vue-google-maps
```

## Basic usage
You need an API Key. Learn how to [get an Api key ](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Configure Vue to use the Components

In your `main.js` or inside a Nuxt plugin:

```js
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
    },
}).mount('#app')

```
### Use it anywhere in your components
```vue
<template>
  <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>
```
