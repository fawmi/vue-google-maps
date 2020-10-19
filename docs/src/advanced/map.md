# Map

## Install

to install it via NPM 
```bash
npm install -S @fawmi/vue-google-maps
```
You can also install via Yarn
```bash
yarn add @fawmi/vue-google-maps
```

## Example
Here is a basic example 

```javascript
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
