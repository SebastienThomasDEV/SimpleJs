export default abstract class EventHandler {
    events: any = [];

    protected constructor() {
        console.log("EventHandler initialized");
    }

    addEvent(element: HTMLElement, event: string, callback: any) {
        this.events.push({ element, event, callback });
        element.addEventListener(event, callback);
    }

    destroyEvent(element: HTMLElement, event: string, callback: any) {
        element.removeEventListener(event, callback);
    }

}