export function createMapScript(options) {
  const googleMapScript = document.createElement('SCRIPT')

  // Allow options to be an object.
  // This is to support more esoteric means of loading Google Maps,
  // such as Google for business
  // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
  if (typeof options !== 'object') {
    throw new Error('options should  be an object')
  }

  // libraries
  /* eslint-disable no-prototype-builtins */
  if (Array.prototype.isPrototypeOf(options.libraries)) {
    options.libraries = options.libraries.join(',')
  }
  options['callback'] = 'vueGoogleMapsInit'
  let baseUrl = 'https://maps.googleapis.com/'

  let url =
    baseUrl +
    'maps/api/js?' +
    Object.keys(options)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(options[key]))
      .join('&')

  googleMapScript.setAttribute('src', url)
  googleMapScript.setAttribute('async', '')
  googleMapScript.setAttribute('defer', '')

  return googleMapScript;
}
