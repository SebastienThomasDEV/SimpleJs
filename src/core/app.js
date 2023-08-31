export default class App {
    constructor(id) {
        this.id = id;
        this.dom = null;
        this.base_url = null;
        this.init();
    }

    init() {
        this.dom = this.#init_app(this.id);
        return this;
    }

    #init_app(id) {
        return document.getElementById(id)
    }

    set_base_url(url) {
        this.base_url = url;
        window.location.hash = url;
    }

    get_base_url() {
        if (this.base_url) {
            return this.base_url;
        } else {
            throw new Error('Base url not set');
        }
    }
}