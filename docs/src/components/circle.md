# Circle

Here you will find some uses for Google Maps Circle component:

[[toc]]

## Adding Circle to your Maps

You can add circles to your Maps using `GMapCircle` component inside of `GMapMap` component:

```html
<template>
  <GMapMap :center="center" :zoom="6" map-type-id="terrain" style="width: 100vw; height: 100vh">
    <GMapCircle
      :key="city.id"
      v-for="city in germanCities"
      :radius="Math.sqrt(city.population) * 100"
      :center="{ lat: city.position.lat, lng: city.position.lng }"
    />
  </GMapMap>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        center: { lat: 51.093048, lng: 6.84212 },
        germanCities: [
          {
            id: 'Duesseldorf',
            population: 612178,
            position: {
              lat: 51.233334,
              lng: 6.783333,
            },
          },
          {
            id: 'Koeln',
            position: {
              lat: 50.935173,
              lng: 6.953101,
            },
            population: 1087863,
          },
          {
            id: 'Hamburg',
            position: {
              lat: 53.551086,
              lng: 9.993682,
            },
            population: 1899160,
          },
        ],
      }
    },
  }
</script>
```

## Adding custom options

You can pass Google Maps Circle options using the prop `options`:

```html
<GMapMap>
  <GMapCircle :options="circleOptions" />
</GMapMap>

<script>
  export default {
    name: 'App',
    data() {
      return {
        circleOptions: {
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
        },
      }
    },
  }
</script>
```
