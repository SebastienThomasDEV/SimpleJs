import QuirkParser from "./QuirkParser";

export default class VirtualDomRenderer {
    node: HTMLElement;
    constructor(node: HTMLElement) {
        this.node = node;
    }

    createElement(type: string, attrs: any, ...children: any[]) {
        return { type, attrs: attrs || {}, children };
    }

    render() {
        this.load().then((html: string) => {
            const test = QuirkParser.parseComponant(html);
            console.log(test);
        });
    }

    async load() {
        // need
        return await fetch(`./src/app/templates/test.html`).then((response) => {
            return response.text()
        }).then((html: string) => {
            return html;
        })
    }


}