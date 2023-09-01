import Controller from "./Controller.js";

export class dashboardController extends Controller {
    constructor(app, component) {
        super(app, component);
        this.init(app);
    }

    createInstance() {

    }

    async init(app) {
        const args = {
            name: 'dashboard',
        }
        await this.render(app, args);
    }


}