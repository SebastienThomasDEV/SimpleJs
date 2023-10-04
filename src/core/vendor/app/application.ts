import Config from "../interfaces/config";
import {Controller} from "../controller/controller";

export default class Application {

    constructor() {
        this.init();
    }

    init() {
        this.run();
    }


    private run() {
        console.log('Running the application');
    }




}