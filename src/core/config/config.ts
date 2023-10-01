import Config from "../vendor/interfaces/config";
import Page from "../vendor/interfaces/page";

const pages: Page[] = [
    {
        name: "base",
        path: "/",
    }
]
export const config: Config = {
    version: "0",
    name: "SampleJS",
    author: "SebastienThomasDev",
    app: {
        pages: pages,
    }
}