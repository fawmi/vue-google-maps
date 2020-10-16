<template>
  <div>marker</div>
</template>

<script >
import { inject } from "vue";
export default {
  props: {
    coords: {
    }
  },
  setup(props) {

    const mapPromise = inject(
      "mapPromise"
    );

    if (mapPromise) {
      mapPromise.then((googleMap) => {
        const bermudaTriangle = new google.maps.Polygon({
          paths: props.coords,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(googleMap);
      });
    }

    return {};
  }
};
</script>
