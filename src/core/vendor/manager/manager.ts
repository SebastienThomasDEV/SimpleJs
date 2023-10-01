
export default class Manager {
    modules: any[];
    constructor(modules: any[]) {
        this.modules = modules;
        this.init();
    }

    init() {
        console.log("Manager initialized");
        for (let i = 0; i < this.modules.length; i++) {
            this.modules[i] = new this.modules[i]();
        }
    }

    get_modules() {
        return this.modules;
    }

}