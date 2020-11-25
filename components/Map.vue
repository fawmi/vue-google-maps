<template>
  <div id="map" ref="mapContainer">
    <slot></slot>
  </div>
</template>

<script>
import { Loader } from "../utils/load-google-maps";
import { fitMapToMarkers } from "../utils/center-markers";
import { ref, provide, watch, inject } from "vue";

export default {
  props: {
    center: {
      required: false
    },
    zoom: {
      type: Number,
      default: 12
    },
    mapTypeId: {
      default: "terrain"
    },
    mapStyles: {
      type: Array,
      required: true
    },
    centerGeoCoordinates: {
      type: Array,
      required: false
    },
    options: {
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      disableDefaultUI: false
    }
  },
  setup: function(props) {
    const mapContainer = ref(null);

    const apiKey = inject(
        "apiKey"
    );

    const mapIds = inject(
        "mapIds"
    );

    const mapsLoader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      mapIds: mapIds,
      libraries: [
        "places",
        "drawing",
        "geometry",
        "visualization",
        "localContext"
      ]
    });

    const disableDefaultUi = props?.options?.disableDefaultUI ? true : false

    const mapPromise = mapsLoader.load().then(() => {
      const map = new google.maps.Map(mapContainer.value, {
        zoom: props.zoom,
        mapId: "889b7f2cfa338388",
        center: new google.maps.LatLng(51.2228924, 6.788524),
        disableDefaultUI: disableDefaultUi,
        gestureHandling: "auto",
      });

      if (props.centerGeoCoordinates && props.centerGeoCoordinates.length) {
        fitMapToMarkers(props.centerGeoCoordinates, map);
      }

      return map;
    });

    provide("mapPromise", mapPromise);

    return {
      mapContainer,
      mapPromise
    };
  }
};
</script>

<style>
#map {
  height: 80vh;
}
</style>
