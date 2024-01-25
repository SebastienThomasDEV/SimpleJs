import {Controller} from "../../vendor/Controller";

export default class Form {
    inputs: any;
    form: HTMLFormElement;
    name: any;
    controller: Controller

    constructor(form: HTMLFormElement, controller: Controller) {
        this.form = form;
        this.inputs = {};
        this.controller = controller;
        this.init();
    }

    init() {
        this.name = this.form.getAttribute('@form');
        this.bindInputs();
    }

    bindInputs() {
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.getAttribute('@submit')) {
                input.addEventListener('click', (e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.submit(this.inputs, input.getAttribute('@submit')!
                        .replace("(", '')
                        .replace(")", '')
                    );
                    e.target.removeEventListener('click', () => {});
                    this.form.reset();
                })
            }
            if (input.getAttribute('@name')) {
                const name = input.getAttribute('@name')!.replace("@", '');
                if (this.inputs[name]) throw new Error('Input name must be unique');
                this.inputs[name] = {
                    value: input.value,
                    type: input.type
                }
                input.addEventListener('change', (e: any) => {
                    this.inputs[name].value = e.target.value;
                    this.inputs[name].type = e.target.type;
                })
            }
        })
    }

    submit(values: any, callbackName: string) {
        try {
            // @ts-ignore
            this.controller[`${callbackName}`](values);

        } catch (e) {
            console.error("Class method not found in " + this.controller.constructor.name);
        }
    }




}