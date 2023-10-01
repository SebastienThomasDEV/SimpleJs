import Application from "./core/vendor/app/application.ts";
import {config} from "./core/config/config.ts";
import {manager} from "./core/modules/manager.ts";


onload = async () => {
    const app = new Application(config, document.body);
}