class AppManager {
    constructor() {
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
    };

    completeDowload() {
        this.uiManager.showUI();
    };
};