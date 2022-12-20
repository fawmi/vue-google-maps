# How to add custom controls

[Interactive example on Playcode](https://playcode.io/1041257)

To add custom controls, you can access google maps object and add controls to it, look at this example or follow the interactive example on CodeSandbox above.

## Example

```html
<template>
  <GMapMap
    :center="center"
    ref="myMapRef"
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
    mounted() {
      this.$refs.myMapRef.$mapPromise.then((map) => {
        // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        const centerControlDiv = document.createElement('div')
        this.addCenterControl(centerControlDiv, map)
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)
      })
    },
    methods: {
      addCenterControl(controlDiv, map) {
        const controlUI = document.createElement('div')

        controlUI.innerHTML = `
        <div style="color: white; background: red; padding: 1rem;">
          You can click me, i can also be a vue component
        </div>
      `

        controlDiv.appendChild(controlUI)
        controlUI.addEventListener('click', () => {
          // Do what ever you want to happen on click event
          map.setCenter({
            lat: 53.57532,
            lng: 10.01534,
          })
        })
      },
    },
    data() {
      return {
        center: { lat: 51.093048, lng: 6.84212 },
        markers: [
          {
            position: {
              lat: 51.093048,
              lng: 6.84212,
            },
          },
          {
            position: {
              lat: 51.198429,
              lng: 6.69529,
            },
          },
          {
            position: {
              lat: 51.165218,
              lng: 7.067116,
            },
          },
          {
            position: {
              lat: 51.09256,
              lng: 6.84074,
            },
          },
        ],
      }
    },
  }
</script>
```
