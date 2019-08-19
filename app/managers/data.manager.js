class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.recipes = [];
        this.getRecipes();
    }

    getRecipes() {
        let request = new XMLHttpRequest();
        request.open('GET', 'app/data/data.json', true);
        request.onreadystatechange = this.getRecipesCallback.bind(this);
        request.send();
    };

    getRecipesCallback(e) {
        let request = e.target;
        let notes = null;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let dataRecipes = JSON.parse(request.response);
                
                dataRecipes.recipe.map(dataRecipe => {

                    let ingredients = dataRecipe.ingredient.map(ingredient => {
                        let name = null;
                        let amount = null;
                        let unit = null;
                        let preparation = null;

                        if (ingredient.name != '' && ingredient.name != undefined && ingredient.name != null) {
                            name = ingredient.name;
                        };

                        if (ingredient.amount != '' && ingredient.amount != undefined && ingredient.amount != null) {
                            amount = ingredient.amount;
                        };

                        if (ingredient.unit != '' && ingredient.unit != undefined && ingredient.unit != null) {
                            unit = ingredient.unit;
                        };

                        if (ingredient.preparation != '' && ingredient.preparation != undefined && ingredient.preparation != null) {
                            preparation = ingredient.preparation;
                        };

                        return new Ingredient(
                            name,
                            amount,
                            unit,
                            preparation
                        );
                    });

                    let steps = dataRecipe.step.map(step => {
                        return new Step(step.description);
                    });

                    if (dataRecipe.notes != '' || dataRecipe.notes != undefined || dataRecipe.notes != null) {
                        notes = dataRecipe.notes;
                    };

                    let newRecipe = new Recipe(
                        dataRecipe.id,
                        dataRecipe.name,
                        dataRecipe.description,
                        dataRecipe.forked,
                        dataRecipe.image,
                        notes,
                        ingredients,
                        steps
                    );

                    this.recipes.push(newRecipe);
                });
            };

            this.appManager.completeDowload();
            console.log(this.recipes);
        };

    };

};
