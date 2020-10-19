# Map

## Install

This is the base Map component. If no props are provided, it shows an empty map component with default controls. 

```javascript
  <GoogleMap />
```

## Provide your own style
You can provide custom map styling as prop.

You can generate custom map styles at  [https://mapstyle.withgoogle.com/](https://mapstyle.withgoogle.com/)
```javascript
  <GoogleMap
      :style="mapStyles"
  />
```

## Disable ui elements
You can disable all ui components at once 
```javascript
  <GoogleMap
      :disableDefaultUI="true"
  />
```
You can also disable specific UI components

```vue
  <GoogleMap
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