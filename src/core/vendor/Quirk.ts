import VirtualDomRenderer from "./VirtualDomRenderer";


export default class Quirk {

    renderer: VirtualDomRenderer;
    constructor(node: HTMLElement) {
        this.renderer = new VirtualDomRenderer(node);
        console.info("Quirk App initialized")
    }

    getRenderer() {
        return this.renderer;
    }


}