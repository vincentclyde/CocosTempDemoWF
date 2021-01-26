cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:
    init() {
        //Panels
        this.bookInfo = cc.find(BOOK_INFO.SELF);
        this.tutorInfo = cc.find(TUTOR_INFO.SELF);
        this.bookOverView = cc.find(BOOK_OVERVIEW.SELF);
        this.classInfo = cc.find(CLASS_INFO.SELF);
        this.levelContent = cc.find(BOOK_OVERVIEW.LEVEL_CONTENT);
        this.chapterContent = cc.find(CHAPTER_CONTENT.SELF);
        this.purchasePanel = cc.find(BOOK_INFO.PURCHASE_PANEL);
        this.bgOverlay = cc.find(BOOK_INFO.BG_OVERLAY);
        this.planPanel = cc.find(PLAN_PANEL.SELF);

        //Buttons
        this.btnReward = cc.find(TOP_UI.BTN_REWARD).getComponent(cc.Button);
        this.btnDiscount = cc.find(TOP_UI.BTN_DISCOUNT).getComponent(cc.Button);
        this.btnClassInfo = cc.find(TOP_UI.BTN_CLASS_INFO).getComponent(cc.Button);
        this.btnSignUp = cc.find(CLASS_INFO.BTN_SIGN_UP).getComponent(cc.Button);
        this.btnEbook = cc.find(BOOK_OVERVIEW.BTN_EBOOK).getComponent(cc.Button);
        this.btnCoin = cc.find(BOOK_INFO.BTN_COIN).getComponent(cc.Button);
        this.btnCupon = cc.find(BOOK_INFO.BTN_CUPON).getComponent(cc.Button);
        // this.btnPlanDone = cc.find().getComponent(cc.Button);

        this.btnBackPlan = cc
            .find(PLAN_PANEL.BTN_BACK_PLAN)
            .getComponent(cc.Button);

        this.btnStartPlan = cc
            .find(CHAPTER_CONTENT.BTN_START_PLAN)
            .getComponent(cc.Button);

        this.btnBackChapterContent = cc
            .find(CHAPTER_CONTENT.BTN_BACK_CHAPTER_CONTENT)
            .getComponent(cc.Button);

        this.btnPowerLevel1 = cc
            .find(BOOK_OVERVIEW.BTN_POWER_LEVEL_1)
            .getComponent(cc.Button);
        this.btnPowerLevel2 = cc
            .find(BOOK_OVERVIEW.BTN_POWER_LEVEL_2)
            .getComponent(cc.Button);
        this.btnPowerLevel3 = cc
            .find(BOOK_OVERVIEW.BTN_POWER_LEVEL_3)
            .getComponent(cc.Button);
        this.btnPowerLevel4 = cc
            .find(BOOK_OVERVIEW.BTN_POWER_LEVEL_4)
            .getComponent(cc.Button);
        this.btnPowerLevel5 = cc
            .find(BOOK_OVERVIEW.BTN_POWER_LEVEL_5)
            .getComponent(cc.Button);
        this.btnPowerLevel6 = cc
            .find(BOOK_OVERVIEW.BTN_POWER_LEVEL_6)
            .getComponent(cc.Button);

        this.btnLeftClassInfo = cc
            .find(CLASS_INFO.BTN_LEFT)
            .getComponent(cc.Button);

        this.btnRightClassInfo = cc
            .find(CLASS_INFO.BTN_RIGHT)
            .getComponent(cc.Button);

        //OnClickListeners
        this.btnBackPlan.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnBackPlan.node);
                this.showChapterContent();
            },
            this
        );

        this.btnStartPlan.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnStartPlan.node);
                this.showPlanPanel();
            },
            this
        );

        this.btnBackChapterContent.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnBackChapterContent.node);
                this.showBookInfo();
            },
            this
        );

        this.bgOverlay.on(
            //Don't Change
            'mouseup',
            () => {
                console.log('Overlay');
                this.hidePurchasePanel();
            },
            this
        );

        this.btnReward.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnDiscount.node);
                this.onClickBtnReward();
            },
            this
        );

        this.btnDiscount.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnDiscount.node);
            },
            this
        );

        this.btnClassInfo.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnClassInfo.node);
                this.showClassInfo();
            },
            this
        );

        this.btnSignUp.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnSignUp.node);
                this.hideClassInfo();
            },
            this
        );

        this.btnLeftClassInfo.node.on('click', () => {
            this.zoomEffect(this.btnLeftClassInfo.node);
        });
        this.btnRightClassInfo.node.on('click', () => {
            this.zoomEffect(this.btnRightClassInfo.node);
        });

        this.btnEbook.node.on(
            'click',
            () => {
                this.showBookInfo();
            },
            this
        );

        this.btnPowerLevel1.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnPowerLevel1.node);
                this.showLevelContent(this.btnPowerLevel1);
            },
            this
        );

        this.btnPowerLevel2.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnPowerLevel2.node);
                this.showLevelContent(this.btnPowerLevel2);
            },
            this
        );

        this.btnPowerLevel3.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnPowerLevel3.node);
                this.showLevelContent(this.btnPowerLevel3);
            },
            this
        );

        this.btnPowerLevel4.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnPowerLevel4.node);
                this.showLevelContent(this.btnPowerLevel4);
            },
            this
        );

        this.btnPowerLevel5.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnPowerLevel5.node);
                this.showLevelContent(this.btnPowerLevel5);
            },
            this
        );

        this.btnPowerLevel6.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnPowerLevel6.node);
                this.showLevelContent(this.btnPowerLevel6);
            },
            this
        );
        this.btnTest = cc.find(BOOK_INFO.BTN_TEST).getComponent(cc.Button);
        this.btnTest.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnTest.node);
                this.hideBookInfo();
            },
            this
        );
    },

    onLoad() {
        this.init();

        this.hideAllPanels();
        this.btnDiscount.node.active = false;

        this.bookOverView.active = true;
        this.btnReward.node.active = true;
    },

    start() {
        console.log('UIManager');
    },

    // update (dt) {},
    hideAllPanels() {
        this.bookInfo.active = false;
        this.tutorInfo.active = false;
        this.bookOverView.active = false;
        this.classInfo.active = false;
        this.levelContent.active = false;
        this.purchasePanel.active = false;
        this.chapterContent.active = false;
        this.bgOverlay.active = false;
        this.planPanel.active = false;
    },

    showPlanPanel() {
        this.hideAllPanels();
        this.planPanel.active = true;
    },

    showBookInfo() {
        console.log('showBookInfo()');
        this.hideAllPanels();
        this.bookInfo.active = true;
    },

    hideBookInfo() {
        console.log('showBookInfo()');
        this.bookInfo.active = false;
        this.bookOverView.active = true;
    },

    showChapterContent() {
        console.log('showChapterContent()');
        this.hideAllPanels();
        this.chapterContent.active = true;
    },

    hideChapterContent() {
        console.log('showChapterContent()');
        this.chapterContent.active = false;
    },

    showLevelContent(button) {
        console.log('showLevelContent()');
        console.log(this.levelContent.position + ', ' + button.node.position);
        if (this.levelContent.position.x == button.node.position.x) {
            this.levelContent.active = !this.levelContent.active;
        } else {
            this.levelContent.active = true;
        }

        this.levelContent.position = button.node.position;
    },

    onClickBtnReward(button) {
        this.btnDiscount.node.active = true;
        this.btnReward.node.active = false;
    },

    showTutorInfo() {
        this.tutorInfo.active = !this.tutorInfo.active;
    },

    showClassInfo() {
        this.classInfo.active = true;
    },

    hideClassInfo() {
        this.tutorInfo.active = false;
        this.classInfo.active = false;
    },

    zoomEffect(targetNode) {
        targetNode.scale = 1.25;
        setTimeout(() => {
            targetNode.scale = 1;
        }, 250);
    },

    showPurchasePanel() {
        console.log('showPurchasePanel()');
        this.purchasePanel.active = true;
    },

    hidePurchasePanel() {
        console.log('hidePurchasePanel()');
        this.purchasePanel.active = false;
    },
});