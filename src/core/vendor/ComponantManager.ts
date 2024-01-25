export default class ComponantManager {
    private componants: any = [];
    private componantElements: any = [];

    constructor() {
        console.log("ComponantManager initialized");
        this.init();
    }
}