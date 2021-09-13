# Info Window
[[toc]]
## Add info window to your components
You can create info window by passing custom HTML or Vue components as the child of `Marker` component.
```vue
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow>
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```

## Open/close info window
You can pass `opened` prop to open and close InfoWindows.

```vue{7}
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow
        :opened="true"
      >
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```


### Open/close info window on marker click
You can open open and close info windows after marker click, by modifying the `:opened` prop and maintaining a state variable containing ID of the opened marker.


Check out [this interactive example on stackblitz](https://stackblitz.com/edit/vue-google-maps-marker-w4hxvd?file=src/components/ComponentWithMap.vue).

Example:
```vue
<template>
  <GMapMap :center="center" :zoom="10" map-type-id="terrain" style="width: 100vw; height: 20rem">
     <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
        @click="openMarker(m.id)" >
          <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID === m.id"
      >
        <div>I am in info window {{ m.id }} </div>
      </GMapInfoWindow>
        </GMapMarker>
  </GMapMap>
</template>

<script>
  export default {
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          id: 1,
          position: {
            lat: 51.093048,
            lng: 6.84212
          }
        },
        {
           id: 2,
          position: {
            lat: 51.198429,
            lng: 6.69529
          }
        }
      ]
    };
  },
  methods: {
    openMarker(id) {
       this.openedMarkerID = id
    }
  }
};
</script>

<style>
  body {
    margin: 0;
  }
</style>
```


## Options
You can pass any Google map InfoWindow component using `options` prop


```vue{8-14}
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow
        :opened="true"
        :options=" {
              pixelOffset: {
                width: 10, height: 0
              },
              maxWidth: 320,
              maxHeight: 320,
       }"
      >
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```
