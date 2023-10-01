import Page from "./page";
export default interface Config {
    version: string;
    name: string;
    author: string;
    app: {
        pages: Page[]
    }
}