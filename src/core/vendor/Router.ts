export default class Router {
    constructor() {
        console.log("Router initialized");
        this.init();
    }

    init() {
        history.pushState({name: "Example"}, "pushState example", "test");
        console.log("History.state before pushState: ", history.state);
        addEventListener("popstate", (e: PopStateEvent) => {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            console.log(e);
        });
    }
}