import {Controller} from "../../../core/vendor/controller/controller.ts";
import Parser from "../../../core/modules/parser/parser.ts";
import AuthGuard from "../../guards/auth.guard.ts";
import Router from "../../../core/modules/router/router.ts";


export class DashboardController extends Controller {

    dir_name = "dashboard";
    constructor(dir_name) {
        super(dir_name);
        this.init();
    }

    async init() {
        this.params = {
            title: "teeest",
            items: [
                "item 1",
                "item 2",
                "item 3",
                "item 4",
            ],
        };
        await this.render(this.params);
    }

    onInit(params, html) {
        html = Parser.parse(html, params);
        if (!AuthGuard.guard()) {
            html = AuthGuard.throw_unauthorized_page('./src/core/modules/guard/error/unauthorized.html');
            AuthGuard.set_auth_token("token");
        }
        return super.onInit(params, html);
    }


}