import Controller from "./Controller.js";

export class homeController extends Controller {
    constructor(app, template_path) {
        super(app, template_path);
        this.init(app);
    }

    async init(app) {
        const args = {
            name: 'home',
        }
        await this.render(app, args);
    }


}