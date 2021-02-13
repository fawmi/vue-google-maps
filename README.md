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
  