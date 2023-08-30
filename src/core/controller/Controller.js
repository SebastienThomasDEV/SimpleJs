
import Parser from "../Parser.js";

export default class Controller {
    constructor(app, template_path) {
        this.app = app;
        this.template_path = template_path;
    }

    async load_template() {
        try {
            const response = await fetch(this.template_path);
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
        await this.load_template().then(
            loaded_template => {
                app.dom.insertAdjacentHTML('afterbegin', Parser.bind(loaded_template, args));
                this.search_links().forEach(link => {
                    link.addEventListener('click', () => {
                        window.location.hash = link.dataset.src;
                    });
                });
            }
        )
    }

    search_links() {
        return document.querySelectorAll(`[data-src]`);
    }

}