import {Controller} from "../../../core/vendor/controller/controller.ts";
import FormManager from "../../../core/modules/form/formManager.ts";
import {Request} from "../../../core/modules/request/Request.ts";


export class IndexController extends Controller {
    constructor(route) {
        super(route);
        this.init();
    }

    async init() {
        const args = {
            title: "base",
        }
        await this.render(args);
    }

    onInit(params, html) {
        return super.onInit(params, html);
    }

    async afterInit() {
        const formManager = new FormManager(this);
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
        return super.afterInit();
    }


    // form callback example
    submit(values) {
        // let response = Request.get("https://jsonplaceholder.typicode.com/todos/1").then(
        //     (response) => {
        //         console.log(response);
        //     }
        // )

        console.log(values);
    }




}