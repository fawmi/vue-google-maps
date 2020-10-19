<template>
  <div>
    <slot>marker</slot>
    <div ref="commentContainerRef" v-if="defaultSlot" :is="defaultSlot">
      <component :is="defaultSlot"></component>
    </div>
  </div>

</template>

<script>
import { inject, ref } from "vue";
import {fitMapToMarkers} from "@fawmi/vue-google-maps/utils/center-markers";

const commentContainerRef = ref(null);
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
  setup(props, { slots }) {
    const mapPromise = inject(
        "mapPromise"
    );

    if (mapPromise) {
      mapPromise.then((googleMap) => {
        const infoWindow = new google.maps.InfoWindow();
        props.geoCoordinates.forEach( geoCoordinate => {
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                geoCoordinate.lat,
                geoCoordinate.lng
            ),
            map: googleMap
          });

          marker.addListener("click", (event) => {
            if (slots.default) {
              infoWindow.setContent(commentContainerRef.value.innerHTML);
              infoWindow.open(googleMap, marker);
            }
          });
        });

        if (props.centerAutomatically) {
          fitMapToMarkers(props.geoCoordinates, googleMap)
        }
      });
    }

    return {
      defaultSlot: slots.default,
      commentContainerRef
    };
  }
};
</script>
