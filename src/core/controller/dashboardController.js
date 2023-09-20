import Controller from "./Controller.js";

export class dashboardController extends Controller {
    constructor(app, component) {
        super(app, component);
        this.init(app);
    }

    async init(app) {
        const args = {
            title: 'test',
            banx: 'banx',
            tests: [
                {
                    name: 'test1',
                    content: 'content1'
                },
                {
                    name: 'test2',
                    content: 'content2'
                },
                {
                    name: 'test2',
                    content: 'content2'
                },
                {
                    name: 'test2',
                    content: 'content2'
                },
                {
                    name: 'test2',
                    content: 'content2'
                },
                {
                    name: 'test2',
                    content: 'content2'
                },
            ],
            variables: [
                {
                    name: 'var1',
                    content: 'var_content1'
                },
                {
                    name: 'var2',
                    content: 'var_content2'
                },
            ]
        }

        await this.render(app, args);
    }


}