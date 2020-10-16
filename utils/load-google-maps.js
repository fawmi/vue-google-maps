export class Loader {
    constructor({
                    apiKey,
                    libraries = [],
                    language,
                    region,
                    version,
                    mapIds
                }) {
        // @ts-ignore
        this.callbacks = [];
        this.CALLBACK = "__googleMapsCallback";
        this.version = version;
        this.apiKey = apiKey;
        this.libraries = libraries;
        // @ts-ignore
        this.language = language;
        // @ts-ignore
        this.region = region;
        this.URL = 'https://maps.googleapis.com/maps/api/js';
        // @ts-ignore
        this.mapIds = mapIds;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.URL;
        console.log(this.URL)

        url += `?callback=${this.CALLBACK}`;

        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }

        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }

        if (this.language) {
            url += `&language=${this.language}`;
        }

        if (this.region) {
            url += `&region=${this.region}`;
        }

        if (this.version) {
            url += `&v=${this.version}`;
        }

        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }

        return url;
    }

    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }

    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve();
                } else {
                    reject(err);
                }
            });
        });
    }

    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }

    /**
     * Set the script on document.
     */
    setScript() {
        const url = this.createUrl();
        const script = document.createElement("script");

        script.type = "text/javascript";
        script.src = url;
        // @ts-ignore
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);
    }

    loadErrorCallback(e) {
        this.onerrorEvent = e;
        this.callback();
    }

    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }

    callback() {
        this.done = true;
        this.loading = false;

        this.callbacks.forEach(cb => {
            cb(this.onerrorEvent);
        });

        this.callbacks = [];
    }

    execute() {
        if (this.done) {
            this.callback();
        } else {
            if (this.loading) {
                // do nothing but wait
            } else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}
