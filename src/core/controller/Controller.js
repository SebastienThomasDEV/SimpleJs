
import Parser from "../classes/Parser.js";

export default class Controller {
    constructor(app, component) {
        this.app = app;
        this.component = component;
    }

    async load_component() {
        try {
            const response = await fetch(this.component.component_path);
            return response.text();
        } catch (error) {
            throw new Error(error);
        }
    }

    clear_app(app) {
        app.dom.innerHTML = '';
    }

    async render(app, args) {
        this.clear_app(app);
        await this.load_component().then(
            loaded_component => {
                app.dom.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" type="text/css" href="${this.component.component_css}">`)
                app.dom.insertAdjacentHTML('afterbegin', Parser.bind(loaded_component, args));
                this.search_links().forEach(link => {
                    link.addEventListener('click', () => {
                        window.location.hash = link.dataset.src;
                    });
                });
            }
        );
    }

    search_links() {
        return document.querySelectorAll(`[data-src]`);
    }



}