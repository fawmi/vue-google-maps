export default (vueInst, googleMapsInst, events) => {
  for (let eventName of events) {
    if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$attrs[eventName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev)
      })
    }
  }
}
