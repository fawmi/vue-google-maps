# Info Window

## Create

You can create info window by passing custom HTML or Vue components as the child of `Marker` component. 
```vue
  <GoogleMap>
    <Marker
        :geoCoordinates="[
          {
            lat: 51.2432981,
            lng: 6.7950981
          }
      ]"
    >
    <div>I am info window. I appear, when you click a marker</div>
  </Marker>
  </GoogleMap>
```

## Center markers automatically
To center markers so that all the markers are visible, use:
```vue
  <GoogleMap>
    <Marker
        :centerAutomatically="false"
        :geoCoordinates="[
          {
            lat: 51.2432981,
            lng: 6.7950981
          }
      ]"
    />
  </GoogleMap>
```
