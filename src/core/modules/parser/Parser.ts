export default class Parser {
    static operator = {
        'true': function () { return true },
        'false': function () { return false },
        '==': function (a: any, b: any) { return a === b },
        '!=': function (a: any, b: any) { return a !== b },
        '>': function (a: any, b: any) { return a > b },
        '<': function (a: any, b: any) { return a < b },
        '>=': function (a: any, b: any) { return a >= b },
        '<=': function (a: any, b: any) { return a <= b },
        '&&': function (a: any, b: any) { return a && b },
        '||': function (a: any, b: any) { return a || b },
        'in': function (a: any, b: any) { return a in b },
        'not in': function (a: any, b: any) { return !(a in b) },
    }
    static parse(html: string, params: any) {
        html = this.bind_condition(html, params)
        html = this.bind_loop(html, params)
        html = this.bind_params(html, params)
        return html;
    }

    static bind_condition(html: string, params: any) {
        const condition_matches = html.match(/@if \((.*?)\)(.*?)@endif/gs);
        if (condition_matches) {
            for (let i = 0; i < condition_matches.length; i++) {
                let condition_content = this.clean(condition_matches[i].replace(/@if \((.*?)\):/g, '').replace(/@endif/g, ''))
                let condition_params = condition_matches[i].match(/@if \((.*?)\)/g)[0].replace(/@if \(/g, '').replace(/\)/g, '').split(',')
                for (let j = 0; j < condition_params.length; j++) {
                    let condition = condition_params[j].trim()
                    for (let k = 0; k < Object.keys(this.operator).length; k++) {
                        if (condition.includes(Object.keys(this.operator)[k])) {
                            let condition_operator = Object.keys(this.operator)[k]
                            let condition_value = condition.split(condition_operator)
                            for (let l = 0; l < condition_value.length; l++) {
                                condition_value[l] = condition_value[l].trim()
                            }
                            console.log(condition_value)
                            // if (this.operator[condition_operator](params[condition], condition_value)) {
                            //     html = html.replace(condition_matches[i], condition_content)
                            // } else {
                            //     html = html.replace(condition_matches[i], '')
                            // }
                        }
                    }
                }
            }
        }
        return html;
    }

    static bind_params(html: string, params: any) {
        const params_matches = html.match(/{{(.*?)}}/g);
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
        html = this.clean(html)
        return html;
    }


    static bind_loop(html: string, params: any) {
        const loop_matches = html.match(/@for=\((.*?)\)(.*?)@endfor/gs);
        if (loop_matches) {
            for (let i = 0; i < loop_matches.length; i++) {
                let loop = loop_matches[i]!
                let loop_content = this.clean(loop.replace(/@for=\((.*?)\)/g, '').replace(/@endfor/g, ''))
                let loop_params = loop.match(/@for=\((.*?)\)/g)[0].replace(/@for=\(/g, '')!.replace(/\)/g, '')!.split(',')
                let loop_iterable = loop_params[0].split('=>')[0].trim()
                let loop_key = loop_params[0].split('=>')[1].trim()
                let loop_html = ''
                if (params[loop_iterable]) {
                    for (let j = 0; j < params[loop_iterable].length; j++) {
                        loop_html += loop_content.replace(`#${loop_key}`, params[loop_iterable][j])
                    }
                    html = html.replace(loop, loop_html)
                } else {
                    html = html.replace(loop, '')
                    console.error(`Key ${loop_iterable} not found in params`)
                }
            }
        }
        return html;
    }

    static clean(html: string) {
        return html.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '').trim();
    }

    static sanitize(html: string) {
        return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    }
}