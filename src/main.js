import Quirk from "./core/vendor/Quirk.ts";

onload = () => {
    const app = new Quirk(document.getElementById("app"));
    app.renderer.render();
}