

export default class Config {
    constructor(type, graph_data, options) {
        this.type = type
        this.graph_data = graph_data
        this.options = options
    }

    get_options() {
        return this.options;
    }

    add_option(key, value) {
        this.options[key] = value;
    }

    remove_option(key) {
        delete this.options[key];
    }

    get_type() {
        return this.type;
    }

    set_type(type) {
        this.type = type;
    }

    get_graph_data() {
        return this.graph_data;
    }
}