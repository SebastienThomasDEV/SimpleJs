

export default class Parser {
    static bind(template, args) {
        let regex = /{{(.*?)}}/g;
        let matches = template.match(regex);
        if (matches) {
            matches.forEach(match => {
                let key = match.replace('{{', '').replace('}}', '').replace(/ /g, '')
                if (args[key]) {
                    template = template.replace(match, args[key])
                } else {
                    template = template.replace(match, '')
                }
            });
        }
        return template;
    }
}