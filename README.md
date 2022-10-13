## Why this fork exists

Vue Google Maps Community Fork is a repository to keep the original [Vue Google Maps repository](https://github.com/fawmi/vue-google-maps) alive. The original repository is great but it wasn't maintained as the community wanted, so we decided to fork it because many of us depends on it.

We tried to contact Fawmi many times in different ways but we never got an answer. He did a great job and I'm sure we will be able to talk with him about all the situation. All we want is to keep this library alive and better and I'm sure Fawni would share the same feeling.

More info about the community decision [here](https://github.com/fawmi/vue-google-maps/issues/159).

## How to contribute

The best way to help this library to grow is reporting bugs through issues and send PR's to improve it. Right now I'm just trying to make this library organized and healthy but I'll try my best to help.

If you want to support directly as a contribuitor of this library, please let me know! Every help is welcome in this moment.

## How to stay connected with the community

You can use Github to communicate with us using issues or discussions, don't be ashamed to ask or express your thoughts or ideas.

I created a [Discord](https://discord.gg/6VbKmW5u) for the community, feel free to enter and talk with us.

Also, you can contact me directly in sending an email to natspaludo@gmail.com

## About this library

Vue Google Maps Community Fork is a communitary repository. It is a set of the most used Google Maps components made for VueJS 3.

## Documentation

For now, the original documentation is detailed in [vue-map.netlify.app](https://vue-map.netlify.app) and most of the components are still working properly.

It is in your plans to create a way for you use this package in Codesandbox or Codepen, but right now it is not possible.

## Installation

You can install this library using this command:

```
npm install vue-google-maps-community-fork
```

## Basic usage

To use this library you will need an API Key. You can learn how to get an API Key [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Configure Vue to use the Components

In your `main.js`

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

### Use it anywhere in your components

```vue
<template>
  <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 100vw; height: 900px">
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

## Components

### Markers

If you need to add markers to the `Map`, add `GMapMarker` as child of `GMapMap` component.

```vue
<template>
  <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px">
    <GMapMarker :key="marker.id" v-for="marker in markers" :position="marker.position" />
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
          id: 'dfsldjl3r',
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

### Cluster

If you have too many markers, it is helpful to cluster markers. You can easily cluster markers by wrapping your markers with `GMapCluster` component.

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
        }, // Along list of clusters
      ],
    }
  },
}
</script>
```

### Heatmap

If you need to add heatmap layer to the Map, add visualization library in load config and add GMapHeatmap as child of GMapMap component.

```js
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app
  .use(VueGoogleMaps, {
    load: {
      key: 'YOUR_API_KEY_COMES_HERE',
      libraries: 'visualization',
    },
  })
  .mount('#app')
```

```vue
<template>
  <GMapMap ref="myMapRef" :center="center" :zoom="zoom" style="width: 100%; height: 600px">
    <GMapHeatmap :data="heatData"></GMapHeatmap>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  setup() {
    const center = { lat: 52.2985593, lng: 104.2455337 }
    const zoom = 12
    const myMapRef = ref()
    const heatData = ref([])

    watch(myMapRef, (googleMap) => {
      if (googleMap) {
        googleMap.$mapPromise.then((map) => {
          heatData.value = [
            { location: new google.maps.LatLng({ lat: 52.2985593, lng: 104.2455337 }) },
          ]
        })
      }
    })

    return {
      center,
      zoom,
      heatData,
      myMapRef,
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
  },
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
    disableDefaultUi: false,
  }"
>
</GMapMap>
```

## More components

Many other components are also supported. Checkout [docs](https://vue-map.netlify.app) for more.

## Nuxt 3 usage

Warning: this is part of the old documentation and I never used Nuxt, please let me know if it will work properly this way.

First add `vue-google-maps-community-fork` to `build.transpile` property in your `nuxt.config.ts`.

```ts
export default defineNuxtConfig({
  build: {
    transpile: ['vue-google-maps-community-fork'],
  },
})
```

Then create a plugin `~/plugin/vueGoogleMaps.ts`.

```ts
import { defineNuxtPlugin } from '#app'
import VueGoogleMaps from 'vue-google-maps-community-fork'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'YOUR_API_KEY_COMES_HERE',
    },
  })
})
```

## Sponsorship

Sponsorships aren't being accepted right now because I'm not sure when Fawmi will comeback. Keep in mind that this project belongs to the community and him until further news. Thanks for the support and I hope this library helps you in any stage of it.
