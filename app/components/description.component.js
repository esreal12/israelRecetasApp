class DescriptionComponent {
    constructor (pModel, pParent, pUIManager) {
        this.model = pModel;
        this.parent = pParent;
        this.uiManager = pUIManager;    
        
        this.container = document.createElement('div');

        this.image = document.createElement('img');
        this.image.src = this.model.image;
        this.image.alt = 'Recipe ' + this.model.name + ' image';
        this.image.classList.add('recipe-img');

        this.name = document.createElement('p');
        this.name.innerHTML = '<b><em>' + this.model.name + '</em></b>';
        this.name.classList.add('recipe-name');

        this.description = document.createElement('p');
        this.description.innerHTML = this.model.description;

        this.notes = document.createElement('p');
        this.notes.innerHTML = '<b>Notes: </b>' + this.model.notes;

        this.ingredientsTitle = document.createElement('h5');
        this.ingredientsTitle.innerHTML = 'Ingredients List';

        this.ingredientsContainer = document.createElement('ul');

        let ingredients = this.model.ingredients.map(ingredient => {
            let name = ingredient.name.chartAt(0).toUpperCase() + ingredient.name.slice(1).toLowerCase();
            let amount = ingredient.amount;
            let unit = ingredient.unit;
            let preparation = ingredient.preparation; 

            if (preparation === null) {
                preparation = '';
            }

            if (unit === null) {
                unit = '';
            }

            if (amount === null) {
                amount = '';
            }

            if (name === null) {
                name = '';
            }

            this.li = document.createElement('li');
            this.li.innerHTML = 'name' + ' ' + amount + unit + ' ' + preparation;
            this.ingredientsContainer.append(this.li);
        });

        this.stepsTitle = document.createElement('h5');
        this.stepsTitle.innerHTML = 'Steps:';

        this.stepsContainer = document.createElement('ol');
        this.stepsContainer.classList.add('steps-style');

        let steps = this.model.step.map(steps => {
            this.stepsLi = document.createElement('li');
            this.stepsLi.innerHTML = steps.description;

            this.stepsContainer.appendChild(this.stepsLi);
        });

        this.parent.appendChild(this.container);
        this.container.append(
            this.image,
            this.name,
            this.description,
            this.ingredientsTitle,
            this.ingredientsContainer,
            this.stepsTitle,
            this.stepsContainer,
            this.notes
        );

    }
}