export default class QuirkParser {
    static parse(html: string) {
        const regex = /<([a-zA-Z]+)([^>]*)>([^<]*)/g;
        const matches = html.matchAll(regex);
        const result = [];
        for (const match of matches) {
            // @ts-ignore
            const [full, type, attrs, content] = match;
            const props = QuirkParser.parseAttributes(attrs || '');
            if (type !== 'script') result.push({ type, props, content });
        }
        return result;
    }

    static parseAttributes(attributes: string) {
        const regex = /@([a-zA-Z]+)="([^"]*)"/g;
        const matches = attributes.matchAll(regex);
        const result = {};
        for (const match of matches) {
            // @ts-ignore
            const [full, key, value] = match;
            result[key] = value;
        }
        return result;
    }
}