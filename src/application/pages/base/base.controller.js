import {Controller} from "../../../core/vendor/controller/controller.ts";


export class BaseController extends Controller {
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


}