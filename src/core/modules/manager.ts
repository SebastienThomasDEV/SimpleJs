import Router from "./router/router";
import Guard from "./guard/guard";
import Manager from "../vendor/manager/manager";

export default class ModuleManager extends Manager {
    constructor() {
        super([Router, Guard]);
    }
}