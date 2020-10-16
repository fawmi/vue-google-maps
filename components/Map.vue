<template>
  <div id="map" ref="mapContainer">
    <slot></slot>
  </div>
</template>

<script>
import { Loader } from "../utils/load-google-maps";
import { ref, provide } from "vue";
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
    style: {
      default: "width: 500px; height: 300px"
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

    const mapsLoader = new Loader({
      apiKey: "",
      version: "weekly",
      libraries: [
        "places",
        "drawing",
        "geometry",
        "visualization",
        "localContext"
      ]
    });

    const mapPromise = mapsLoader.load().then(() => {
      const map = new google.maps.Map(mapContainer.value, {
        zoom: props.zoom,
        center: new google.maps.LatLng(38.423733, 27.142826),
        mapTypeId: "terrain"
      });
      return map;
    });

    provide("mapPromise", mapPromise);

    return {
      mapContainer
    };
  }
};
</script>

<style>
#map {
  height: 80vh;
}
</style>
