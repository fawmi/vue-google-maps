# Adding a custom button to my map

You can use the map instance to add custom buttons to your map:

```html
<template>
  <GMapMap
    :center="{ lat: 51.093048, lng: 6.84212 }"
    :zoom="7"
    ref="myMapRef"
    :disableDefaultUI="true"
  />
</template>

<script>
  import { ref, watch } from 'vue'

  function addMyButton(map) {
    const controlUI = document.createElement('button')
    controlUI.title = 'Click to zoom the map'
    const controlText = document.createElement('div')
    controlText.innerHTML = `Center`
    controlUI.appendChild(controlText)

    controlUI.addEventListener('click', () => {
      map.setZoom(map.getZoom() + 1)
    })

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlUI) // eslint-disable-line no-undef
  }

  export default {
    setup() {
      const myMapRef = ref()

      watch(myMapRef, (googleMap) => {
        if (googleMap) {
          googleMap.$mapPromise.then((map) => {
            addMyButton(map)
          })
        }
      })

      return {
        myMapRef,
      }
    },
  }
</script>
```
