<template>
  <div>Cirlce</div>
</template>

<script >
import { inject } from "vue";
export default {
  props: {
    position: {
      required: true
    },
    radius: {
      required: true
    }
  },
  setup(props) {
    const mapPromise = inject(
      "mapPromise"
    );

    if (mapPromise) {
      mapPromise.then((googleMap) => {
        new google.maps.Circle({
          strokeColor: "red",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map: googleMap,
          center: new google.maps.LatLng(props.position.lat, props.position.lng),
          radius: props.radius
        });
      });
    }

    return {};
  }
};
</script>
