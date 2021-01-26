let clickedButtonID = '';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    init() {
        this._UIManager = cc.find('Canvas').getComponent('UIManager');
        this.ID = this.node.parent.name;

        //Labels
        this.label = this.node
            .getChildByName('Background')
            .getChildByName('Label')
            .getComponent(cc.Label);

        //OnClickListeners
        this._UIManager.btnCoin.node.on(
            'click',
            () => {
                this._UIManager.zoomEffect(this._UIManager.btnCoin.node);
                this._UIManager.hidePurchasePanel();
                this.onPurchasedChapter();
            },
            this
        );

        this._UIManager.btnCupon.node.on(
            'click',
            () => {
                this._UIManager.zoomEffect(this._UIManager.btnCupon.node);
                this._UIManager.hidePurchasePanel();
                this.onPurchasedChapter();
            },
            this
        );

        this.node.on(
            //Don't Change
            'mouseup',
            () => {
                clickedButtonID = this.ID;
                this._UIManager.zoomEffect(this.node);
                if (this.label.string == 'read') {
                    console.log('Read');
                    this._UIManager.hideBookInfo();
                    this._UIManager.showChapterContent();
                } else {
                    console.log('Purchase');
                    this._UIManager.showPurchasePanel();
                }
            },
            this
        );
    },

    onLoad() {
        this.init();
    },

    start() {
        console.log('Chapter');
    },

    // update (dt) {},

    onPurchasedChapter() {
        console.log(this.ID + ', ' + clickedButtonID);
        if (this.ID == clickedButtonID) this.label.string = 'read';
    },
});