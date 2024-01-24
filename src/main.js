import Quirk from "./core/vendor/Quirk.ts";

onload = () => {
    const app = new Quirk(document.getElementById("app"));
    const element = app.getRenderer().createElement("h1", {innerText: "Hello World!"})

    app.getRenderer().render(element);
}