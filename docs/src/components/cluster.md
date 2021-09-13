# Cluster
[[toc]]
## Cluster your markers
To cluster objects you simply wrap your markers with the cluster component.


```vue
<template>
  <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>
```

## Props
The following props can be passed to control behavior of clusters.

### minimumClusterSize

Defines the minimum distance of markers to cluster them

``` js
:minimumClusterSize="2" 
```

### styles
With styles prop, you can control style and icon of clusters.

``` js
:styles="clusterIcon"
```

### zoomOnClick
Defines whether clusters should zoom in, when clicked.

``` js
:zoomOnClick="true"
```
