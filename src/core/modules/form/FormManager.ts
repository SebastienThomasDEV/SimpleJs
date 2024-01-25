
import Form from "./Form"
import {Controller} from "../../vendor/Controller";

export default class FormManager {
    forms: Form[] = [];
    controller : Controller;
    constructor(controller: Controller) {
        this.controller = controller;
        this.init();
    }

    init() {
        this.searchForm();
    }

    searchForm() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            this.forms.push(new Form(form, this.controller));
        })
    }

    findForm(name: string) {
        return this.forms.find(form => form.name === name);
    }
}