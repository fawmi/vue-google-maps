# Google maps Components for Vue.js 3

Set of mostly used Google Maps components for Vue.js.

#### Why this library exists?
We heavily use Google Maps in our projects, so I wanted to have a well maintained Google Maps library.

## Documentation
Checkout https://vue-map.netlify.app for a detailed documentation

## Installation
You can install it using npm
```
npm install -S @fawmi/vue-google-maps
```

## Basic usage
You need an API Key. Learn how to [get an Api key ](https://developers.google.com/maps/documentation/javascript/get-api-key).

##Configure Vue to use the Components

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
## Use it anywhere in your components

```vue
<template>
  <GmapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
  >
  </GmapMap>
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

### Markers

If you need to gain access to the `Map` instance (e.g. to call `panToBounds`, `panTo`):
```vue
<template>
  <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    />
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
      ]
    }
  }
}
```
### Cluster
If you have too many markers, it is helpfull to cluster markers. You can easily cluster maps by wrapping your markers with Cluster component.


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
```
If you need to gain access to the `google` object, you can access it by getting ref of the map object.
```vue
<template>
  <GmapMarker ref="myMarker"
    />
</template>
<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  mounted() {
    console.log(this.$refs.myMarker)
  }
}
</script>
```
### Map options
You can pass Map options using options property:

See [MapOptions](https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions) for a complete list of available options.
 ```vue
 <GmapMap
  :options="{
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    disableDefaultUi: false
  }"
>
</GmapMap>
```

Add region and language localization:

Example for [Localization](https://developers.google.com/maps/documentation/javascript/localization):
```vue
Vue.use(VueGoogleMaps, {
  load: {
    region: 'VI',
    language: 'vi',
  },
})
```

## Contributions
The best way to contribute is to report reproducible bugs, but feature requests and improvement suggestions are always welcome too. And definitely bug fixes and PR are welcome.
