import Router from "./router/router";
import Guard from "./guard/guard";
import Manager from "../vendor/manager/manager";

const modules = [
    Router,
    Guard
];

export const manager = new Manager(modules);