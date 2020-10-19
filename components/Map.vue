<template>
  <div id="map" ref="mapContainer">
    <slot></slot>
  </div>
</template>

<script>
import { Loader } from "../utils/load-google-maps";
import { ref, provide, inject } from "vue";

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
      default: []
    },
    disableDefaultUI: {
      type: Boolean,
    },
    options: {
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
    }
  },
  setup: function(props) {
    const mapContainer = ref(null);

    const apiKey = inject(
        "apiKey"
    );

    const mapsLoader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: [
        "places",
        "drawing",
        "geometry",
        "visualization",
        "localContext"
      ]
    });

    let uiOptions = {}

    if(props.disableDefaultUI) {
      uiOptions = {
        disableDefaultUI: true
      }
    } else {
      uiOptions = props.options
    }

    const additionalOptions = {...props.options};

    const mapPromise = mapsLoader.load().then(() => {
      const map = new google.maps.Map(mapContainer.value, {
        zoom: props.zoom,
        style: props.style,
        center: new google.maps.LatLng(38.423733, 27.142826),
        mapTypeId: "terrain",
        ...uiOptions
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
