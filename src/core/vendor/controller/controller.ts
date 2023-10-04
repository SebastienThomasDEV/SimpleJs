export class Controller {
    dir_name: string;
    constructor(dir_name: string) {
        this.dir_name = dir_name;
    }

    /**
     * @param params
     * @param html
     *
     * @returns html
     * @description
     * This method is called when the controller is initialized.
     *
     */

    onInit(params: any, html: string) {
        console.log("Controller initialized");
        return html;
    }


    async load() {
        return await fetch(`./src/application/pages/${this.dir_name}/${this.dir_name}.html`).then((response) => {
            return response.text()
        }).then((html: string) => {
            return html;
        })
    }

    async render(params: any) {
        document.body.innerHTML = this.onInit(params, await this.load());
    }



}