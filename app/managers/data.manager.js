class DataManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.data = '../data/data.json';
        this.recipes = [];
        this.getData();
    }

    getData(){
        const request = this.getRecipes();
    }

    getRecipes() {
        let request = new XMLHttpRequest();
        request.open('GET', 'app/data/data.json', true);
        request.onreadystatechange = this.getRecipesCallback;
        request.send();
    }

    getRecipesCallback(e) {
        let request = e.target;
        if(request.readyState === XMLHttpRequest.DONE){
            let data = JSON.parse(request.responseText);
            console.log(data); 
            
            let recipe = new Recipe();
        }
    }
}