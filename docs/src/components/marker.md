# Marker

## Install

With marker you can show specific locations on the map
```vue
  <GoogleMap>
    <Marker
        :geoCoordinates="[
          {
            lat: 51.2432981,
            lng: 6.7950981
          }
      ]"
    />
  </GoogleMap>
```

## Center markers automatically
To center markers so that all the markers are visible, use:
```vue
  <GoogleMap
    :centerGeoCoordinates="geoCoordinates">
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