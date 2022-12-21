## Welcome!

Hi! Vue Google Maps Community Fork is a communitary repository. It is a set of the most used Google Maps components made for VueJS 3.

## About this repository

This repository was forked in October/2022 after the original repository's community decide that it was the best for the project. In [the same discussion](https://github.com/NathanAP/vue-google-maps-community-fork/discussions/1) you will find every information you need about our motivation.

We have an update! Fawmi answered us, please access the discussion to know more about it!

## Changelog

You can follow the official changelog [here](https://github.com/NathanAP/vue-google-maps-community-fork/discussions/6)!

## Documentation

You can find a detailed documentation [here](https://vue-google-maps-community-fork.netlify.app). It will show you how to use every component this library contains and demonstrate some examples for you.

Also, you can enter in [this discussion](https://github.com/NathanAP/vue-google-maps-community-fork/discussions/9) to talk about or read the documentation changelog.

It is in our plans to make it better and more detailed, but for now it might help you start using the library.

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

### If you are configuring your project please notice

You might be getting the following error:

`Requested module 'fast-deep-equal' does not provide an export named 'default'`

Some notes about this:

- [We are aware of this problem](https://github.com/NathanAP/vue-google-maps-community-fork/issues/4).
- It doesn't seems that we have control over this, so we hope that it will be fixed soon enough by the responsibles.
- To avoid it right now, you need to do this configuration in your `vite.config.js`:

```js
    optimizeDeps: {
        include: [
            "vue-google-maps-community-fork",
            "fast-deep-equal",
        ],
    },
```

- This **IS NOT** a fix! This is just a hack we are using to avoid the problem.
- We encourage you to subscribe to that issue to stay in touch with this problem

### Using our components anywhere

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

Note: clusters were not working in the original version of this package. All of the clusters are here because of the community fixes. If you're having trouble with it please [try using the docs](https://vue-google-maps-community-fork.netlify.app/components/cluster.html). Also, feel free to open discussions or issues to get help.

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

In order to your Nuxt 3 project work properly with this library, you need to add `vue-google-maps-community-fork` to `build.transpile` property in your `nuxt.config.ts`.

Also, as pointed [here](https://github.com/NathanAP/vue-google-maps-community-fork/issues/14), you will need to add `@googlemaps/markercluster` into it as well for your builded project work properly.

Here is an example:

```ts
export default defineNuxtConfig({
  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },
})
```

After that, you need to configure your plugin `~/plugin/vueGoogleMaps.ts`.

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

Please read [this discussion](https://github.com/NathanAP/vue-google-maps-community-fork/discussions/1) where we talk about sponsorships.
