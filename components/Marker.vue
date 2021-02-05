<template>
  <div ref="markerRef" >
    <slot></slot>
  </div>
</template>

<script>
import {inject, ref, computed} from "vue";

export default {
  props: {
    location: {
      required: true
    },
    infoWindow: {
      type: String,
      required: false
    },
    icon: {
      required: false
    }
  },
  setup(props) {
    const markerRef = ref();

    const mapPromise = inject(
        "mapPromise"
    );

    const hasLocation = computed(()=> props?.location?.lat && props?.location?.lng);

    if (mapPromise && hasLocation.value) {
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
          infoWindow.setContent(markerRef.value.innerHTML);
          infoWindow.open(googleMap, marker);
        });
      });
    }

    return {
      markerRef,
    };


    return {};
  }
};
</script>
