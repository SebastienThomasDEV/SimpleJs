export default class Dataset {
    constructor(label, backgroundColor, borderColor) {
        this.label = label
        this.backgroundColor = backgroundColor
        this.borderColor = borderColor
        this.data = []
    }

    async fetch_data(url) {
        let response = await fetch(url)
        response = await response.json()
        this.data.push(response)
    }

    get_data() {
        return this.data;
    }

    add_data(data) {
        this.data.push(data);
    }

    remove_data(data) {
        this.data.splice(this.data.indexOf(data), 1)
    }

    get_label() {
        return this.labels;
    }

    set_label(labels) {
        this.labels = labels;
    }

    get_backgroundColor() {
        return this.backgroundColor;
    }

    set_backgroundColor(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    get_borderColor() {
        return this.borderColor;
    }

    set_borderColor(borderColor) {
        this.borderColor = borderColor;
    }
}