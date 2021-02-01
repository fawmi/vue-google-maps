# Vue.js google maps
vue.js 3 components for Google maps

## Still in development

This repo is still in active development. Most of the components are already implemeted, but some important parts are still missing. Documentations may not be fully upto date.

## Install

to install it via NPM 
```
npm install -S @fawmi/vue-google-maps
```
You can also install via Yarn
```
yarn add @fawmi/vue-google-maps
```

## Example
Here is a basic example 

```
import { createApp } from 'vue'
import googleMap from '@fawmi/vue-google-maps'
import App from './App.vue';

const googleMapOption = {
    apiKey: 'here_comes_your_api_key',
}

const app = createApp(App);

app.use(googleMap, googleMapOption)
app.mount('#app')

```

## Documentation

Checkout [https://vue-map.netlify.app](https://vue-map.netlify.app/) for a detailed documentation 


