<template>
  <div>marker</div>
</template>

<script>
import { inject } from "vue";
import {fitMapToMarkers} from "@fawmi/vue-google-maps/utils/center-markers";

export default {
  props: {
    geoCoordinates: {
      required: true,
      default: []
    },
    centerAutomatically: {
      required: false,
      default: false
    }
  },
  setup(props) {
    const mapPromise = inject(
        "mapPromise"
    );

    if (mapPromise) {
      mapPromise.then((googleMap) => {
        const infoWindow = new google.maps.InfoWindow();

        props.geoCoordinates.forEach(geoCoordinate=> {
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                geoCoordinate.lat,
                geoCoordinate.lng
            ),
            map: googleMap
          });

          marker.addListener("click", (event) => {
            infoWindow.setContent(`hallo`);
            infoWindow.open(googleMap, marker);
          });
        });

        if (props.centerAutomatically) {
          fitMapToMarkers(props.geoCoordinates, googleMap)
        }
      });
    }

    return {};
  }
};
</script>
