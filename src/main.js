import Quirk from "./core/vendor/Quirk.ts";

onload = () => {
    const app = new Quirk(document.getElementById("app"));
    const element = app.renderer.createElement("h1", {innerText: "Hello World!"})

    app.renderer.render(element);
}