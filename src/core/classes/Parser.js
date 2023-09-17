

export default class Parser {
    static bind(component, args) {
        const args_matches = this.seek_args(component)
        const loop_matches = this.seek_loop(component)
        if (loop_matches) {
            console.log(loop_matches)
        }
        if (args_matches) {
            args_matches.forEach(match => {
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

    static seek_loop(component) {
        const loop_regex =   /<loop\s*\[(.*?)\]\s+as\s+(\w+)>([\s\S]*?)<\/loop>/g;
        const matches = component.match(loop_regex);
        if (matches) {
            for (const match of matches) {
                const attributeMatch = match.match(/\[(.*?)\]/);
                const contentMatch = match.match(/<loop>[\s\S]*?<\/loop>/);
                const attributes = attributeMatch ? attributeMatch[1].trim() : '';
                const content = contentMatch ? contentMatch[0].replace(/<\/?loop>/g, '').trim() : '';
                console.log(`Attributs : ${attributes}`);
                console.log(content);
            }
        }
    }

    static seek_args(component) {
        const args_regex = /{{(.*?)}}/g;
        return args_regex.exec(component);
    }

    static escape_spaces(component) {
        return component.replace(/ /g, '')
    }

}