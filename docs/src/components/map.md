# Map
[[toc]]
## Install

This is the base Map component. If no props are provided, it shows an empty map component with default controls.

```vue
    <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="7"
    />
```
Example on [stackblitz](https://stackblitz.com/edit/vue-google-maps-basic-example)

## Provide your own style
You can provide custom map styling by providing `style` property to the `options` prop.

You can generate custom map styles at  [https://mapstyle.withgoogle.com/](https://mapstyle.withgoogle.com/)
```vue{4}
<script>
    <template>
      <GMapMap :center="center"
      :options="options"
       :zoom="10" map-type-id="terrain" style="width: 100vw; height: 20rem">
        <GMapCluster :zoomOnClick="true">
          <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
            @click="center = m.position" />
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
    };
  }
};
</script>
```

Example on [stackblitz](https://stackblitz.com/edit/vue-google-maps-marker-ssnfbn?file=src/components/ComponentWithMap.vue)


## Disable ui elements
You can disable all ui components at once
```vue{4}
  <GMapMap
    :center="{lat: 51.093048, lng: 6.842120}"
    :zoom="7"
    :disableDefaultUI="true"
  />
```
You can also disable specific UI components

```vue{4-11}
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


## Access google maps instance
You can easily access Map instance by accessing map ref in your component.

```vue
<GMapMap
    :center="{lat: 51.093048, lng: 6.842120}"
    :zoom="7"
    ref="myMapRef"
    :disableDefaultUI="true"
/>
```

## Add custom button
You can use the map instance to add custom buttons to your map.

```vue
<template>
  <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="7"
      ref="myMapRef"
      :disableDefaultUI="true"
  />
</template>
<script >
import { ref, watch } from "vue";

function addMyButton(map) {
  const controlUI = document.createElement("button");
  controlUI.title = "Click to zoom the map";
  const controlText = document.createElement("div");
  controlText.innerHTML = `Center`;
  controlUI.appendChild(controlText);
  
  controlUI.addEventListener("click", () => {
    map.setZoom(map.getZoom() + 1);
  });

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlUI); // eslint-disable-line no-undef
}

export default {
  setup() {
    const myMapRef = ref();

    watch(myMapRef, googleMap => {
      if (googleMap) {
        googleMap.$mapPromise.then(map=> {
          addMyButton(map);
        })
      }
    });
    
    return {
      myMapRef
    }
  }
}
</script>
```
