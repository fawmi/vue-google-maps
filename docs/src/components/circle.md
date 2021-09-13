# Circle
[[toc]]
## Add circle to your maps
To add circles, just add the `GMapCircle` component inside `GMapMap` component.

```vue
<template>
  <GMapMap
      :center="center"
      :zoom="6"
      map-type-id="terrain"
      style="width: 100vw; height: 100vh"
  >
    <GMapCircle
        :key="city.id"
        v-for="city in germanCities"
        :radius="Math.sqrt(city.population) * 100"
        :center="{ lat: city.position.lat, lng: city.position.lng}"
    />
  </GMapMap>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
      germanCities: [
        {
          id: 'duesseldorf',
          population: 612178,
          position: {
            lat: 51.233334, lng: 6.783333
          },
        },
        {
          id: 'koeln',
          position: {
            lat: 50.935173, lng: 6.953101
          },
          population: 1087863
        },
        {
          id: 'Hamburg',
          position: {
            lat: 53.551086,
            lng:  9.993682
          },
          population: 1899160
        }
      ]
    }
  },
}
</script>
```

## Add custom circle style

Circle style and all other circle options can be added using `options` prop.


```vue
<GMapMap>
    <GMapCircle
        :options="circleOptions" />
</GMapMap>
<script>

export default {
  name: 'App',
  data() {
    return {
      circleOptions: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      },
    }
  },
}
</script>
```