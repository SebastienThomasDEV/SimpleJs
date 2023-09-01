import '/src/scss/style.scss'
import App from "./src/core/app.js";
import Router from "./src/core/classes/Router.js";
import {routes} from "./src/core/routes.js";

onload = () => {
    const app = new App('app');
    app.set_base_url('#home')
    new Router(app, routes);
}
