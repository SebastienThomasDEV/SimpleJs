import '/src/scss/style.scss'
import App from "./src/core/app.js";
import Router from "./src/core/Router.js";
import {routes} from "./src/core/routes.js";
import eye_icon from '/src/images/eye.svg'
import graph_img from '/src/images/graph.svg'
import Dataset from "./src/core/classes/Dataset.js";
import Config from "./src/core/classes/Config.js";
import {Chart} from "chart.js";
import Swal from "sweetalert2";

onload = () => {
    const app = new App('app');
    app.set_base_url('#home')
    new Router(app, routes);
}
