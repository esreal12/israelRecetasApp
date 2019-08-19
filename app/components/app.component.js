class AppComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;

        this.div = document.createElement('div');
        this.div.setAttribute('id', 'appComponent');
        this.div.classList.add('container');

        this.headerComponent = new HeaderComponent(this.uiManager);
    }

    addMainElement (pBody) {
        pBody.prepend(this.div);
        this.headerComponent.showHeader(
            pBody,
            this.div,
            this.uiManager
        )
    }
}