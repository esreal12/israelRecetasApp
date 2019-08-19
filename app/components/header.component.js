class HeaderComponent {
    constructor (pAppManager) {
        this.appManager = pAppManager;

        this.header = document.createElement('header');
        this.header.setAttribute('id', 'headerComponent');
        this.header.classList.add('header');

        this.title = document.createElement('h1');
        this.title.innerHTML = 'Recipes';
        this.title.classList.add('header-title');

        this.header.appendChild(this.title);

        this.mainComponent = new MainComponent(this.appManager);
    }

    showHeader (pBody, pDiv, pAppManager) {
        pDiv.prepend(this.header);
        this.mainComponent.showMain(pBody, pAppManager);
    }
}