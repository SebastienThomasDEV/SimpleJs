import EventHandler from "./EventHandler";

export default class QuirkParser extends EventHandler {
    static parseComponant(html: string) {
        // need to change this to a regex that can handle nested tags
        const regex = /<([a-zA-Z]+)([^>]*)>([^<]*)/g;
        const matches = html.matchAll(regex);
        const result = [];
        for (const match of matches) {
            // @ts-ignore
            const [full, type, props, children] = match;
            const attrs = QuirkParser.parseAttributes(props || '');
            if (type !== 'script') result.push({ type, attrs, children });
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