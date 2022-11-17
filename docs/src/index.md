---
home: true
heroImage: 'assets/logo.jpg'
tagline: A library that contains Google Maps reactive components for VueJS 3
actionText: Read Docs
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

## Before starting

It is important to notice that this repository was forked by the community to keep the library alive. You can get more infor about our decision [in this GitHub discussion](https://github.com/NathanAP/vue-google-maps-community-fork/discussions/1).

Since this library is currently maintained by the community, every help is needed and appreciated! You can follow everything in our [GitHub](https://github.com/NathanAP/vue-google-maps-community-fork).

## Installation

You can install this library using npm:

```
npm install vue-google-maps-community-fork
```

### Pre-requisites

To use this library you will need an API Key. You can learn how to get one [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Configure your enviroment

In your `main.js` or inside a Nuxt plugin:

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

### Configuration for Nuxt

Warning: this is part of the old documentation and I never used Nuxt, please let me know if it will work properly this way.

In order to your Nuxt 3 project work properly with this library, you need to add `vue-google-maps-community-fork` to `build.transpile` property in your `nuxt.config.ts`.

Also, as pointed [here](https://github.com/NathanAP/vue-google-maps-community-fork/issues/14), you will need to add `@googlemaps/markercluster` into it as well for your builded project work properly.

```ts
export default defineNuxtConfig({
  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },
})
```

### Great! Now you can use anywhere in your components

Here are some examples:

```vue
<template>
  <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px">
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }, // A long list of clusters
      ],
    }
  },
}
</script>
```
