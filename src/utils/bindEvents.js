export default (vueInst, googleMapsInst, events) => {
  for (let eventName of events) {
    const propName = `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

    if (vueInst.$props[propName] || vueInst.$attrs[propName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev)
      })
    } else if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$attrs[eventName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev)
      })
    }
  }
}
