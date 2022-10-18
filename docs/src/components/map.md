# Map

Here is where you start. Here you will find some uses for Google Maps component:

[[toc]]

## My first Google Maps component

You can create a Google Map component using `GMapMap`:

```html
<!-- Notice that if no props are provided, the component will show an empty map component with default controls -->
<GMapMap :center="{ lat: 51.093048, lng: 6.84212 }" :zoom="7" />
```

Example on [stackblitz](https://stackblitz.com/edit/vue-google-maps-basic-example)

## Styling your Google Maps component

You can generate custom map styles at [https://mapstyle.withgoogle.com/](https://mapstyle.withgoogle.com/).

You can provide custom styles by providing `style` property to the `options` prop:

```html
<template>
  <GMapMap
    :center="center"
    :options="options"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem"
  >
    <GMapCluster :zoomOnClick="true">
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
    data() {
      return {
        center: { lat: 51.093048, lng: 6.84212 },
        options: {
          styles: [
            // here comes the styles your
          ],
        },
      }
    },
  }
</script>
```

Example on [stackblitz](https://stackblitz.com/edit/vue-google-maps-marker-ssnfbn?file=src/components/ComponentWithMap.vue)

### Cloud-based styles with Map ID

You can manage your cloud-based styles on [Google Maps Platform: Map Styles](https://console.cloud.google.com/google/maps-apis/studio/styles), and your map ids on [Google Maps Platform: Map Management](https://console.cloud.google.com/google/maps-apis/studio/maps)

[Documentation: Maps JavaScript API - Using Cloud-based maps styling](https://developers.google.com/maps/documentation/javascript/cloud-based-map-styling)

```html
<template>
  <GMapMap
    :center="center"
    :options="options"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem"
  >
  </GMapMap>
</template>

<script>
  export default {
    data() {
      return {
        center: { lat: 51.093048, lng: 6.84212 },
        options: {
          mapId: 'xxx', //here comes your map id
        },
      }
    },
  }
</script>
```

## Disable UI elements

You can disable all UI components at once:

```html
<GMapMap :center="{lat: 51.093048, lng: 6.842120}" :zoom="7" :disableDefaultUI="true" />
```

You can also disable specific UI components:

```html
<GMapMap
  :center="{lat: 51.093048, lng: 6.842120}"
  :zoom="7"
  :options="{
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
  }"
/>
```

## Access Google Maps instance

You can easily access the Map instance by accessing `ref` in your component:

```html
<GMapMap
  :center="{ lat: 51.093048, lng: 6.84212 }"
  :zoom="7"
  ref="myMapRef"
  :disableDefaultUI="true"
/>
```
