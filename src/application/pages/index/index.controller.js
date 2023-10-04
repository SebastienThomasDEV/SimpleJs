import {Controller} from "../../../core/vendor/controller/controller.ts";
import FormManager from "../../../core/modules/form/formManager.ts";


export class IndexController extends Controller {
    constructor(route) {
        super(route);
        this.init();
    }

    async init() {
        const args = {
            title: "base",
        }
        await this.render(args);
    }

    onInit(params, html) {
        const formManager = new FormManager();
        return super.onInit(params, html);
    }


}