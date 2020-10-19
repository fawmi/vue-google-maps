export function fitMapToMarkers(geoCoordinates, mapInstance) {
    /* eslint-disable no-undef */
    const bounds = new google.maps.LatLngBounds();
    if (geoCoordinates.length === 1) {
        mapInstance.setCenter({lat: geoCoordinates[0].position.lat, lng: geoCoordinates[0].position.lng});
        mapInstance.setZoom(16);
    } else if (geoCoordinates.length > 0) {
        geoCoordinates.forEach(geoCoordinate => {
            bounds.extend({lat: geoCoordinate.position.lat, lng: geoCoordinate.position.lng});
        });
        mapInstance.fitBounds(bounds);
    }
}
