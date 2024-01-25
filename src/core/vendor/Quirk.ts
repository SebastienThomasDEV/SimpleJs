import VirtualDomRenderer from "./VirtualDomRenderer";
import EventHandler from "./EventHandler";
import Router from "./Router";


export default class Quirk {

    renderer: VirtualDomRenderer;
    router: Router;
    constructor(node: HTMLElement) {
        this.renderer = new VirtualDomRenderer(node);
        this.router = new Router();
        console.info("Quirk App initialized")
    }

}