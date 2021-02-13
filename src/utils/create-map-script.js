export function createMapScript(options) {
  const googleMapScript = document.createElement('SCRIPT')
  if (typeof options !== 'object') {
    throw new Error('options should  be an object')
  }

  // libraries
  /* eslint-disable no-prototype-builtins */
  if (Array.prototype.isPrototypeOf(options.libraries)) {
    options.libraries = options.libraries.join(',')
  }
  options['callback'] = 'vueGoogleMapsInit'
  let baseUrl = 'https://maps.googleapis.com/maps/api/js?'

  let url =
    baseUrl +
    Object.keys(options)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(options[key])).join('&')

  googleMapScript.setAttribute('src', url)
  googleMapScript.setAttribute('async', '')
  googleMapScript.setAttribute('defer', '')

  return googleMapScript;
}
