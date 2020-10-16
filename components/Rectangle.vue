<template>
  <div>
    auto complete
  </div>
</template>

<script >
import { inject } from "vue";

export default {
  props: {
    bounds: {
      required: true
    },
  },
  setup(props) {
    const mapPromise = inject(
      "mapPromise"
    );

    if (mapPromise) {
      mapPromise.then((map) => {
        const rectangle = new google.maps.Rectangle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map,
          bounds: props.bounds
        });
      });
    }

    return {};
  }
};
</script>
