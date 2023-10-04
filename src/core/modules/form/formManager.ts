export default class FormManager {
    constructor() {
        this.init();
    }

    init() {
        this.searchForm();
    }

    searchForm() {
        const observer = new MutationObserver((mutations) => {
            for (let i = 0; i < mutations.length; i++) {
                for (let j = 0; j < mutations[i].addedNodes.length; j++) {
                    if (
                        mutations[i].addedNodes[j].attributes
                        && mutations[i].addedNodes[j].attributes['@form']
                        && mutations[i].addedNodes[j].attributes['@form'].value
                    ) {
                        console.log(mutations[i].addedNodes[j].querySelectorAll('["#login.name" = ""]'));
                    }
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}