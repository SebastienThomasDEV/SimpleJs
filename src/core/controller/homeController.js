import Controller from "./Controller.js";

export class homeController extends Controller {
    constructor(app, component_path) {
        super(app, component_path);
        this.init(app);
    }

    async init(app) {
        const args = {
            name: 'test',
        }
        await this.render(app, args);
    }


}