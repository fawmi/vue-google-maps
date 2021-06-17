import lazy from './utils/lazyValue'
import { loadGMapApi } from './load-google-maps'
import { createApp } from 'vue'
import Polyline from './components/polyline'
import Polygon from './components/polygon'
import Circle from './components/circle'
import Rectangle from './components/rectangle'
import Marker from './components/marker.vue'
import GMapCluster from './components/cluster.vue'
import InfoWindow from './components/infoWindow.vue'
import Map from './components/map.vue'
import Heatmap from './components/heatmap'
import Autocomplete from './components/autocomplete.vue'

import MapElementMixin from './components/mapElementMixin'
import buildComponent from './components/build-component'
import MountableMixin from './utils/mountableMixin'
import {Env} from "./utils/env";
let GMapApi = null;

export {
  loadGMapApi,
  Marker,
  Polyline,
  Polygon,
  Circle,
  GMapCluster,
  Rectangle,
  InfoWindow,
  Map,
  MapElementMixin,
  Heatmap,
  buildComponent,
  Autocomplete,
  MountableMixin,
}

export default function install(Vue, options) {
  options = {
    installComponents: true,
    autobindAllEvents: false,
    ...options,
  }

  GMapApi = createApp({
    data: function () {
      return { gmapApi: null }
    },
  })

  const defaultResizeBus = createApp()

  // Use a lazy to only load the API when
  // a VGM component is loaded
  let gmapApiPromiseLazy = makeGMapApiPromiseLazy(options)

  Vue.mixin({
    created() {
      this.$gmapDefaultResizeBus = defaultResizeBus
      this.$gmapOptions = options
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy
    },
  })
  Vue.$gmapDefaultResizeBus = defaultResizeBus
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy

  if (options.installComponents) {
    Vue.component('GMapMap', Map)
    Vue.component('GMapMarker', Marker)
    Vue.component('GMapInfoWindow', InfoWindow)
    Vue.component('GMapCluster', GMapCluster)
    Vue.component('GMapPolyline', Polyline)
    Vue.component('GMapPolygon', Polygon)
    Vue.component('GMapCircle', Circle)
    Vue.component('GMapRectangle', Rectangle)
    Vue.component('GMapAutocomplete', Autocomplete)
    Vue.component('GMapHeatmap', Heatmap)
  }
}

function makeGMapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GMapApi.gmapApi = {}
    return window.google
  }

  if (options.load) {
    // If library should load the API
    return lazy(() => {
      // Load the
      // This will only be evaluated once
      if (Env.isServer()) {
        return new Promise(() => {}).then(onApiLoaded)
      } else {
        return new Promise((resolve, reject) => {
          try {
            window['vueGoogleMapsInit'] = resolve
            loadGMapApi(options.load)
          } catch (err) {
            reject(err)
          }
        }).then(onApiLoaded)
      }
    })
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    const promise = new Promise((resolve) => {
      if (Env.isServer()) {
        return
      }
      window['vueGoogleMapsInit'] = resolve
    }).then(onApiLoaded)

    return lazy(() => promise)
  }
}
