import {Controller} from "../../vendor/controller/controller";

export default class Router {

    active_controller: Controller|void;


    constructor(public baseUrl: string) {
        this.baseUrl = baseUrl;
        this.init();
    }

    init() {
        window.onhashchange = () => {
            console.log(window.location.hash.replace('#', ''))
            if (window.location.hash.replace('#', '') !== this.baseUrl) {
                this.bindToController(window.location.hash.replace('#', '')).then(() => this.seek())
            } else {
                this.bindToController(this.baseUrl).then(() => this.seek())
            }
        }
        this.bindToController(this.baseUrl).then(() => this.seek())
    }

    seek() {
        const observer = new MutationObserver((mutations) => {
            for (let i = 0; i < mutations.length; i++) {
                for (let j = 0; j < mutations[i].addedNodes.length; j++) {
                    if (
                        mutations[i].addedNodes[j].attributes
                        && mutations[i].addedNodes[j].attributes['@redirect']
                        && mutations[i].addedNodes[j].attributes['@redirect'].value
                        !== window.location.hash.replace('#', '')
                    ) {
                        mutations[i].addedNodes[j].onclick = () => {
                            window.location.hash = mutations[i].addedNodes[j].attributes['@redirect'].value;
                            delete this.active_controller;
                            observer.disconnect();
                            this.bindToController(mutations[i].addedNodes[j].attributes['@redirect'].value).then(() => this.seek())
                        }
                    }
                }
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    async bindToController(route: string): Promise<Controller|void> {
        return await import(`../../../application/pages/${route}/${route}.controller.js`)
            .then(controller => {
                this.active_controller = new controller[`${route.charAt(0).toUpperCase() + route.slice(1)}Controller`](route)
                return this.active_controller;
            })
    }

}