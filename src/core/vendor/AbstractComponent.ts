export default abstract class AbstractComponent {
    protected constructor() {
        console.log("AbstractComponent initialized");
        this.init();
    }

    init(): void {

    }

    abstract destroy(): void;

    





}