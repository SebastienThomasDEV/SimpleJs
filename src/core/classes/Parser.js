

export default class Parser {
    static bind(component, args) {
        const args_regex = /{{(.*?)}}/g;
        // let loop_regex = /{>(.*?)}/g;
        const loop_regex =   /\{loop\s+\w+\s+in\s+\[.*?\]\}(.*?)\{endloop\}/gs;;
        const loop_matches = component.match(loop_regex)
        if (loop_matches) {
            console.log(loop_matches)
            const arr_regex = /\{loop\s+\w+\s+in\s+\[([^\]]+)\]\}/g;
            console.log(arr_regex.exec(loop_matches[0]));

            let loop = loop_matches[0]
                .replace('loop', '')
                .replace('endloop', '')
                .replace(/ /g, '')
            console.log(loop)
        }
        const matches = component.match(args_regex);
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