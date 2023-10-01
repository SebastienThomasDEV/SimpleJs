import Config from "../interfaces/config";
import {Controller} from "../controller/controller";

export default class Application {

    config: Config;
    body: HTMLElement;

    constructor(config: Config, body: HTMLElement) {
        this.config = config;
        this.body = body;
        this.init(config);
    }

    init(config: Config) {
        this.build();
        this.run();
    }

    private build() {
        console.log('Builded successfully');
    }

    private run() {
        console.log('Running the application');
    }




}