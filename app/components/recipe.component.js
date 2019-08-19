class RecipeComponent {
    constructor (pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;

        this.div = document.createElement('div');
        this.div.setAttribute('id', 'recipeComponent');

        this.title = document.createElement('h4');
        this.title.classList.add('recipe-title');
        this.title.innerHTML = this.model.name;
        
        this.title.onclick = this.onRecipeClick.bind(this);

        this.parent.appendChild(this.div);
        this.div.append(this.title);
    }

    onRecipeClick() {
        this.uiManager.showRecipeDetails(this.model);
    }
}