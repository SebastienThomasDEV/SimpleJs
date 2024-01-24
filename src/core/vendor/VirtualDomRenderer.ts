import QuirkParser from "./QuirkParser";

export default class VirtualDomRenderer {
    node: HTMLElement;
    constructor(node: HTMLElement) {
        this.node = node;
    }

    createElement(type: string, attrs: any, ...children: any[]) {
        return { type, attrs: attrs || {}, children };
    }

    render(vNode: any) {
        this.load().then((html: string) => {
            // if (typeof vNode === 'string') {
            //     this.node.appendChild(document.createTextNode(vNode));
            //     return;
            // }
            const test = QuirkParser.parse(html);
            test.forEach((element: any) => {
                const domEl = document.createElement(element.type);
                Object.keys(element.props).forEach(propName => {
                    element[propName] = element.props[propName];
                });
                vNode.children.forEach((child: any) => {
                    this.render(child);
                });
                this.node.appendChild(element)
            });

            // test.forEach((element: any) => {
            //     console.log(element);
            // })

            // this.node.appendChild(test as HTMLElement)
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