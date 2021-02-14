import {Env} from "./utils/env";
import {createMapScript} from "./utils/create-map-script";

let isApiSetUp = false
export function loadGMapApi (options) {

  if (Env.isServer()) {
    return;
  }

  if (!isApiSetUp) {
    isApiSetUp = true
    const googleMapScript = createMapScript(options);
    document.head.appendChild(googleMapScript)
  } else {
    throw new Error('You already started the loading of google maps')
  }
}
