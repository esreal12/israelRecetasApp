class UIManager{
    constructor(pAppManager){
        this.appManager = pAppManager;
        this.body = document.getElementsByTagName('body')[0];
        this.appComponent = new AppComponent(this);    
    }

    showUI(){
        this.appComponent.addMainElement(this.body, this.appManager);
    }
};