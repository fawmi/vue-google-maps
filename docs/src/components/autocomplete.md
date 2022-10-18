# Autocomplete

Here you will find some uses for Google Maps Autocomplete component:

[[toc]]

## Pre-requisite: load places library

Before using Autocomplete, you need to load the places library:

```js
createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: 'YOUR_API_KEY_COMES_HERE',
      libraries: 'places',
    },
  })
  .mount('#app')
```

## Adding Autocomplete to your components

You can add an Autocomplete to your `template` using `GMapAutocomplete` component:

```html
<template>
  <GMapAutocomplete placeholder="This is a placeholder" @place_changed="setPlace" />
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    },
    methods: {
      setPlace() {},
    },
  }
</script>
```

## Adding custom options

You can pass Google Maps Autocomplete options using the prop `options`:

```vue{9}
<template>
    <GMapAutocomplete
        placeholder="This is a placeholder"
       :options="{
            bounds: {north: 1.4, south: 1.2, east: 104, west: 102},
            strictBounds: true
       }"
    />
</template>
```
