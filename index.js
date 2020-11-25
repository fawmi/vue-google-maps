import GoogleMap from './components/Map'
import Marker from './components/Marker'
import Circle from './components/Circle'
import Polygon from './components/Polygon'
import Rectangle from './components/Rectangle'

export default {
    install: (app, options) => {
        app.component('GoogleMap', GoogleMap)
        app.component('Marker', Marker)
        app.component('Circle', Circle)
        app.component('Polygon', Polygon)
        app.component('Rectangle', Rectangle)
        app.provide('apiKey', options.apiKey)
        app.provide('mapIds', options.mapIds)
    }
}