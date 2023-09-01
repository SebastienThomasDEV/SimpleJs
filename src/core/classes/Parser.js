
export default class Parser {
    static bind(component, args) {
        let regex = /{{(.*?)}}/g;
        let matches = component.match(regex);
        if (matches) {
            matches.forEach(match => {
                let key = match.replace('{{', '').replace('}}', '').replace(/ /g, '')
                if (args[key]) {
                    component = component.replace(match, args[key])
                } else {
                    component = component.replace(match, '')
                    console.error(`Key ${key} not found in args`)
                }
            });
        }
        return component;
    }
}