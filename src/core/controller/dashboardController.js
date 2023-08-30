import Controller from "./Controller.js";

export class dashboardController extends Controller {
    constructor(app, template_path) {
        super(app, template_path);
        this.init(app);
    }

    async init(app) {
        const args = {
            method: 'alert()',
        }
        await this.render(app, args);
    }


}