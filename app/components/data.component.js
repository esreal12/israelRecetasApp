class DataComponent {
    constructor (pMain, pUIManager) {
        this.main = pMain;
        this.uiManager = pUIManager;

        this.container = document.createElement('section');
        this.container.setAttribute('id', 'dataContainer');
        this.container.classList.add('data-container');

        this.main.append(this.container);
    }

    showData(recipe) {
        this.container.innerHTML = '';
        new DescriptionComponent(
            recipe, 
            this.main,
            this.uiManager
        )
    }
}