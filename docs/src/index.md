---
home: true
heroImage: 'assets/logo.jpg'
tagline: Vue 3 Google maps components
actionText: Read Docs →
actionLink: /docs/
---


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
import * as VueGoogleMaps from '@fawmi/vue-google-maps'

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
  <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GmapCluster>
      <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GmapCluster>
  </GmapMap>
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
