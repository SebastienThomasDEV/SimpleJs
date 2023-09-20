export default class Parser {
    static bind(html, params) {
        const loop_matches = this.seek_loop(html)
        html = this.clean_loop(html)
        const params_matches = this.seek_params(html)
        if (loop_matches) {
            const looped_content = [];
            loop_matches.forEach(loop => {
                for (let param_key in params) {
                    if (param_key === loop.iterable) {
                        this.seek_params(loop.content).forEach(() => {
                            loop.content = loop.content.replace(`${loop.alias}.`, "").replace('{{', '').replace('}}', '')
                        })
                        params[param_key].forEach((param) => {
                            const keys = Object.keys(param)
                            let loop_content = loop.content
                            keys.forEach(key => {
                                loop_content = loop_content.replace(`${key}`, param[key])
                            })
                            looped_content.push(loop_content)
                        })
                    }
                }
            });
            console.log(looped_content)
            html = html.replace('loop_placeholder', looped_content.join(''))

        }
        if (params_matches) {
            params_matches.forEach(match => {
                let key = match.replace('{{', '').replace('}}', '').replace(/ /g, '')
                if (params[key]) {
                    html = html.replace(match, params[key])
                } else {
                    html = html.replace(match, '')
                    console.error(`Key ${key} not found in params`)
                }
            });
        }
        return html;
    }

    static seek_loop(html) {
        const loop_regex = /<loop\s*\[(.*?)\]\s+as\s+(\w+)>([\s\S]*?)<\/loop>/g;
        const content_regex = /<content>([\s\S]*?)<\/content>/;
        const matches = html.match(loop_regex);
        if (matches) {
            const loops = [];
            for (let i = 0; i < matches.length; i++) {
                const content = this.clean(content_regex.exec(matches[i])[1]);
                const alias = this.clean(/as\s+(\w+)/.exec(matches[i])[1]);
                const loop_params = this.clean(loop_regex.exec(matches[i])[1]);
                loops.push({
                    content: content,
                    iterable: loop_params,
                    alias: alias
                })
            }
            return loops;
        }
    }

    static seek_params(html) {
        const params_regex = /{{(.*?)}}/g;
        return html.match(params_regex);
    }

    static clean_loop(html) {
        const loop_regex = /<loop\s*\[(.*?)\]\s+as\s+(\w+)>([\s\S]*?)<\/loop>/g;
        const matches = html.match(loop_regex);
        if (matches) {
            matches.forEach(match => {
                html = html.replace(match, 'loop_placeholder')
            });
        }
        return html;
    }


    static clean(html) {
        return html.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
    }

    static sanitize(html) {
        return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    }

}