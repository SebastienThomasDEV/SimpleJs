

export default class Parser {
    static bind(html, args) {
        const args_matches = this.seek_args(html)
        const loop_matches = this.seek_loop(html)
        if (loop_matches) {
            console.log(loop_matches)
        }
        if (args_matches) {
            args_matches.forEach(match => {
                let key = match.replace('{{', '').replace('}}', '').replace(/ /g, '')
                if (args[key]) {
                    html = html.replace(match, args[key])
                } else {
                    html = html.replace(match, '')
                    console.error(`Key ${key} not found in args`)
                }
            });
        }
        return html;
    }

    static seek_loop(html) {
        const loop_regex =   /<loop\s*\[(.*?)\]\s+as\s+(\w+)>([\s\S]*?)<\/loop>/g;
        const content_regex = /<content>([\s\S]*?)<\/content>/;
        const matches = html.match(loop_regex);
        if (matches) {
            const loops = [];
            for (let i = 0; i < matches.length; i++) {
                const match = matches[i];
                const content = this.clean(content_regex.exec(match)[1]);
                const loop_args = this.clean(loop_regex.exec(match)[1]);
                const alias = loop_regex.exec(match);
                loops.push({
                    content: content,
                    args: loop_args,
                    alias: alias
                })
            }
            return loops;
        }
    }

    static seek_args(html) {
        const args_regex = /{{(.*?)}}/g;
        return args_regex.exec(html);
    }

    static clean(html) {
        return html.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g,'');
    }

    static sanitize(html) {
        return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    }

}