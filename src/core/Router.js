

export default class Router {
    constructor(app, routes) {
        this.app = app;
        this.routes = routes;
        this.active_route = app.get_base_url();
        this.init();
    }

    init() {
        this.#init_router();
        this.load_controller(this.active_route)
    }

    #init_router() {
        window.addEventListener('hashchange', (e) => {
            this.active_route = e.target.location.hash;
            this.load_controller(this.active_route);
        });
    }

    async load_controller(active_route) {
        const route = this.routes.find(route => route.name === active_route);
        if (!route) {
            throw new Error(`${active_route} route not found try to create it or check if it's imported in the routes.js file`);
        }
        return await import(`./Controller/${route.controller}.js`)
            .then(controller => {
                new controller[route.controller](this.app, route.component_path);
                return true;
            }).catch(() => {
                throw new Error(`${active_route}Controller not found try to create it or check if it's imported in the routes.js file`);
            });
    }


}