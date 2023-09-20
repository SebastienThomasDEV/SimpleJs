// Import tailwind methods to render html with tailwind classes

export default class Router {
    constructor(app, routes) {
        this.app = app;
        this.routes = routes;
        this.active_route = app.get_base_url();
        this.init();
    }

    init() {
        this.#init_router();
    }

    #init_router() {
        this.load_controller(this.active_route);
        window.addEventListener('hashchange', (e) => {
            if (e.target.location.hash === this.active_route) return;
            this.active_route = e.target.location.hash;
            this.load_controller(this.active_route);
        });
    }

    async load_controller(active_route) {
        const route = this.routes.find(route => route.url === active_route);
        if (!route) {
            throw new Error(`${active_route} route not found try to create it or check if it's imported in the routes.js file`);
        }
        return await import(`./../controller/${route.controller}.js`)
            .then(controller => {
                return new controller[route.controller](this.app, route);
            }).catch(() => {
                throw new Error(`${route.controller} not found try to create it or check if it's imported in the routes.js file`);
            });
    }


}