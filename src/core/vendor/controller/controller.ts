export class Controller {
    dir_name: string;
    loaded: boolean = false;
    constructor(dir_name: string) {
        this.dir_name = dir_name;
    }

    pre_process(params: any, html: string) {
        return html;
    }

    async process(params: any) {
        return this.pre_process(params, await this.load());
    }

    async load() {
        return await fetch(`./src/application/pages/${this.dir_name}/${this.dir_name}.html`).then((response) => {
            return response.text()
        }).then((html: string) => {
            return html;
        })
    }

    async render(html: string) {
        document.body.innerHTML = await this.process(html);
    }



}