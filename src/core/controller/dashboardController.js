import Controller from "./Controller.js";

export class dashboardController extends Controller {
    constructor(app, component) {
        super(app, component);
        this.init(app);
    }

    async init(app) {
        const args = {
            title: 'dashboard',
        }
        await this.render(app, args);
    }


}