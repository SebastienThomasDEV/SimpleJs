export default class Route {
    constructor(name, component_path, component_css, controller) {
        this.name = name;
        this.url = `#${name}`;
        this.component_path = component_path;
        this.controller = controller;
        this.component_css = component_css;
        this.component_assets = [];
    }

    get_name() {
        return this.name;
    }

    set_name(name) {
        this.name = name;
    }

    get_controller() {
        return this.controller;
    }


    set_controller(controller) {
        this.controller = controller;
    }

    set_component_path(component_path) {
        this.component_path = component_path;
    }

    get_component_path() {
        return this.component_path;
    }

    set_component_css(component_css) {
        this.component_css = component_css;
    }

    get_component_css() {
        return this.component_css;
    }

    add_component_asset(asset) {
        this.component_assets.push(asset);
    }

    get_component_assets() {
        return this.component_assets;
    }



}