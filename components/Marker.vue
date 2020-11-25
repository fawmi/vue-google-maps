<template>
  <div>marker</div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    location: {
      required: true
    },
    icon: {
      required: false
    }
  },
  setup(props) {
    const mapPromise = inject(
        "mapPromise"
    );

    if (mapPromise) {
      mapPromise.then((googleMap) => {
        const infoWindow = new google.maps.InfoWindow();

        const options = {
          position: new google.maps.LatLng(
              props.location.lat,
              props.location.lng
          ),
          map: googleMap
        };

        if (props.icon) {
          options.icon = props.icon
        }

        const marker = new google.maps.Marker({
          ...options,
        });

        marker.addListener("click", (event) => {
          infoWindow.setContent(`hallo`);
          infoWindow.open(googleMap, marker);
        });
      });
    }

    return {};
  }
};
</script>
