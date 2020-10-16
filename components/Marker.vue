<template>
  <div>marker</div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    location: {
      required: true
    }
  },
  setup(props) {
    const mapPromise = inject(
        "mapPromise"
    );

    if (mapPromise) {
      mapPromise.then((googleMap) => {
        const infoWindow = new google.maps.InfoWindow();

        console.log(props.location)
        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(
              props.location.lat,
              props.location.lng
          ),
          map: googleMap
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
