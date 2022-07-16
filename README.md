# Vue 3 Google maps Components

Set of mostly used Google Maps components for Vue.js.

#### Why this library exists?
We heavily use Google Maps in our projects, so I wanted to have a well maintained Google Maps library.

## Documentation
Checkout [vue-map.netlify.app](https://vue-map.netlify.app) for a detailed documentation or [codesandbox for an example](https://codesandbox.io/s/vue-3-google-maps-ygpr4?file=/src/main.js)

## Installation
You can install it using npm
```
npm install -S @fawmi/vue-google-maps
```

## Basic usage
You need an API Key. Learn how to [get an Api key ](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Configure Vue to use the Components

In your `main.js`

```js
import { createApp } from 'vue'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

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
## Components

### Markers

If you need to add markers to the `Map`, add `GMapMarker` as child of `GMapMap` component.
```vue
<template>
  <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
    />
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
          id: 'dfsldjl3r',
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
      ]
    }
  }
}
</script>
```

### Cluster
If you have too many markers, it is helpful to cluster markers. You can easily cluster markers by wrapping your markers with `GMapCluster` component.


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

### Heatmap
If you need to add heatmap layer to the Map, add visualization library in load config and add GMapHeatmap as child of GMapMap component.

```js
import { createApp } from 'vue'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_KEY_COMES_HERE',
    libraries: "visualization"
  },
}).mount('#app')

```

```vue
<template>
  <GMapMap
    ref="myMapRef"
    :center="center"
    :zoom="zoom"
    style="width: 100%; height: 600px"
  >
    <GMapHeatmap :data="heatData"></GMapHeatmap>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  setup() {
    const center = {lat: 52.2985593, lng: 104.2455337}
    const zoom = 12
    const myMapRef = ref();
    const heatData = ref([])

    watch(myMapRef, googleMap => {
      if (googleMap) {
        googleMap.$mapPromise.then(map=> {
          heatData.value = [
            {location: new google.maps.LatLng({lat: 52.2985593, lng: 104.2455337})},
          ];
        })
      }
    });

    return {
      center,
      zoom,
      heatData,
      myMapRef
    }
  },
}
</script>
```

Checkout docs for more component

## Access map object
If you want to access `google map` object, you can access it by getting ref of the map object.
```vue
<template>
  <GMapMap ref="myMapRef" />
</template>
<script>
export default {
  mounted() {
    console.log(this.$refs.myMapRef)
  }
}
</script>
```
### Map options
You can pass Map options using options property:

See [MapOptions](https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions) for a complete list of available options.
 ```vue
 <GMapMap
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
</GMapMap>
```

## More components

Many other components are also supported. Checkout [docs](https://vue-map.netlify.app) for more.

## Nuxt 3 usage

First add `@fawmi/vue-google-maps` to `build.transpile` property in your `nuxt.config.ts`.

 ```ts
export default defineNuxtConfig({
  build: {
    transpile: ['@fawmi/vue-google-maps']
  },
})
 ```

Then create a plugin `~/plugin/vueGoogleMaps.ts`.

```ts
import { defineNuxtPlugin } from '#app'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'YOUR_GOOGLE_API_KEY',
    },
  })
})
```


## Contributions
The best way to contribute is to report reproducible bugs, but feature requests and improvement suggestions are always welcome too. And definitely bug fixes and PR are welcome.
