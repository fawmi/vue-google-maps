
# Autocomplete
[[toc]]


## Load Google maps places
Before using Autocomplete, you should load the places library.

```vue{5}
createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "",
      libraries: "places"
    }
  })
  .mount("#app");
</script>
```


## Add autocomplete to your components
You can add autocomplete to your maps using GMapAutocomplete component.
```vue
<template>
  <GMapAutocomplete
       placeholder="This is a placeholder"
       @place_changed="setPlace"
    >
  </GMapAutocomplete>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    setPlace() {
    }
  }
}
</script>

```

## Custom input for autocomplete
You can customize input for autocomplete.
```vue
<template>
  <GMapAutocomplete @place_changed="setPlace">
    <template #input="slotProps">
      <v-text-field
        v-bind="slotProps"
        ref="input"
        prepend-inner-icon="mdi-map-marker"
        hide-details
      />
    </template>
  </GMapAutocomplete>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    setPlace() {
    }
  }
}
</script>

```

## Custom options
You can pass google maps auto complete options using options prop

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
