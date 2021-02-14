# Map
[[toc]]
## Install

This is the base Map component. If no props are provided, it shows an empty map component with default controls.

```vue
    <GMapMap />
```

## Provide your own style
You can provide custom map styling as prop.

You can generate custom map styles at  [https://mapstyle.withgoogle.com/](https://mapstyle.withgoogle.com/)
```vue
  <GMapMap
      :style="mapStyles"
  />
```

## Disable ui elements
You can disable all ui components at once
```vue
  <GMapMap
      :disableDefaultUI="true"
  />
```
You can also disable specific UI components

```vue
  <GMapMap
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
  ref="myMapRef"
  :disableDefaultUI="true"
/>
```

## Add custom button
You can use the map instance to add custom buttons to your map
```js
export function addMyButton(map) {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");
    controlUI.title = "Click to zoom the map";
    controlDiv.appendChild(controlUI);
    const controlText = document.createElement("div");
    controlText.innerHTML = `Center`;
    controlUI.appendChild(controlText);
    controlUI.style.position = "relative"
    controlUI.style.bottom = "80px"
    controlUI.addEventListener("click", () => {
        map.setZoom(map.getZoom() + 1);
    });

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv); // eslint-disable-line no-undef
}
```
