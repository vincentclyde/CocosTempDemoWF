let UIManager = require('UIManager');

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.UIManager = cc.find('Canvas').getComponent('UIManager');
        //this.bookOverView = cc.find(BOOK_OVERVIEW.SELF);
    },

    init() {
        //Panels
        this.achPanel = cc.find(ACHIEVEMENT_PANEL.SELF);
        this.typeDataPanel = cc.find(ACHIEVEMENT_PANEL.ACH_TYPE_DATA);
        this.friendPanel = cc.find(FRIEND_PANEL.SELF);
        this.ticketPanel = cc.find(TICKET_PANEL.SELF);
        this.beansPanel = cc.find(TICKET_PANEL.BEANS_PART);
        this.profilePicPanel = cc.find(PROFILE_PIC.SELF);
        this.aboutPanel = cc.find(PROFILE_PIC.ABOUT_PANEL);
        this.goalPanel = cc.find(PROFILE_PIC.GOAL_PANEL);
        this.agePanel = cc.find(PROFILE_PIC.AGE_PANEL);
        this.sexPanel = cc.find(PROFILE_PIC.SEX_PANEL);

        //Buttons
        this.btnAch = cc.find(BOTTOM_UI.BTN_ACHIEVEMENT).getComponent(cc.Button);
        this.btnType = cc.find(ACHIEVEMENT_PANEL.ACH_BTN_TYPE).getComponent(cc.Button);
        this.btnFriend = cc.find(BOTTOM_UI.BTN_FRIEND).getComponent(cc.Button);
        this.btnTicket = cc.find(BOTTOM_UI.BTN_TICKET).getComponent(cc.Button);
        this.btnShards = cc.find(TICKET_PANEL.BTN_SHARDS).getComponent(cc.Button);
        this.btnDraw = cc.find(TICKET_PANEL.BTN_DRAW).getComponent(cc.Button);
        this.btnProfile = cc.find(TOP_UI.BTN_PROFILE_PIC).getComponent(cc.Button);
        this.btnAboutArrow = cc.find(PROFILE_PIC.BTN_ABOUT_ARROW).getComponent(cc.Button);
        this.btnGoalArrow = cc.find(PROFILE_PIC.BTN_GOAL_ARROW).getComponent(cc.Button);
        this.btnAge = cc.find(PROFILE_PIC.BTN_AGE).getComponent(cc.Button);
        this.btnSex = cc.find(PROFILE_PIC.BTN_SEX).getComponent(cc.Button);

        //Button and panel
        this.shardsPanel = cc.find(TICKET_PANEL.SHARDS_PANEL).getComponent(cc.Button);
        this.plantPanel = cc.find(TICKET_PANEL.PLANT_PART).getComponent(cc.Button);

        //onClick Listeners
        this.btnAch.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnAch.node);
                this.showAchPanel();
            },
            this
        );

        this.btnType.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnType.node);
                this.showHideTypeDataPanel();
            },
            this
        );

        this.btnFriend.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnFriend.node);
                this.showFriPanel();
            },
            this
        );

        this.btnTicket.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnTicket.node);
                this.showticketPanel();
            },
            this
        );


        this.btnShards.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnShards.node);
                this.showHideShardsPanel();
            },
            this
        );

        this.shardsPanel.node.on(
            'click',
            () => {
                this.showHideShardsPanel();
            },
            this
        );

        this.btnDraw.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnDraw.node);
                this.showPlantPanel();
            },
            this
        );

        this.plantPanel.node.on(
            'click',
            () => {
                this.showBeanPanel();
            },
            this
        );

        this.btnProfile.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnProfile.node);
                this.toggleProfilePanel();
                this.showAboutPanel();
            },
            this
        );

        this.btnAboutArrow.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnAboutArrow.node);
                this.showGoalPanel();
            },
            this
        );

        this.btnGoalArrow.node.on(
            'click',
            () => {
                this.zoomEffect(this.btnGoalArrow.node);
                this.showAboutPanel();
            },
            this
        );

        this.btnAge.node.on(
            'click',
            () => {
                this.showAgePanel();
            },
            this
        );

        this.btnSex.node.on(
            'click',
            () => {
                this.showSexPanel();
            },
            this
        );

    },

    start() {
        this.init();
        this.hideAll();
    },

    // update (dt) {},

    showHideTypeDataPanel() {
        this.typeDataPanel.active = !this.typeDataPanel.active;
    },

    showHideShardsPanel() {
        this.shardsPanel.node.active = !this.shardsPanel.node.active;
    },

    showPlantPanel() {
        this.beansPanel.active = false;
        this.plantPanel.node.active = true;
    },

    showBeanPanel() {
        this.plantPanel.node.active = false;
        this.beansPanel.active = true;
    },

    hideAll() {
        this.achPanel.active = false;
        this.friendPanel.active = false;
        this.ticketPanel.active = false;
        this.typeDataPanel.active = false;
        this.shardsPanel.node.active = false;
        this.profilePicPanel.active = false;
        this.plantPanel.node.active = false;
        this.beansPanel.active = false;
        this.aboutPanel.active = false;
        this.goalPanel.active = false;
        this.agePanel.active = false;
        this.sexPanel.active = false;
    },

    showAchPanel() {
        if (this.achPanel.active == false) {
            this.hideAll();
            this.achPanel.active = true;
        } else {
            this.achPanel.active = false;
            this.UIManager.bookOverView.active = true;
        }
    },

    showFriPanel() {
        if (this.friendPanel.active == false) {
            this.hideAll();
            this.friendPanel.active = true;
        } else {
            this.friendPanel.active = false;
            this.UIManager.bookOverView.active = true;
        }
    },

    showticketPanel() {
        if (this.ticketPanel.active == false) {
            this.ticketPanel.active = true;
            this.showBeanPanel();
        } else {
            this.ticketPanel.active = false;
            this.UIManager.bookOverView.active = true;
        }
    },

    toggleProfilePanel() {

        //this.profilePicPanel.active = !this.profilePicPanel.active;
        var bool = this.profilePicPanel.active;

        this.UIManager.hideAllPanels();
        this.hideAll();

        this.profilePicPanel.active = bool;

        if (this.profilePicPanel.active == false) {

            this.profilePicPanel.active = true;
        }
        else {
            this.profilePicPanel.active = false;
            this.UIManager.bookOverView.active = true;
        }
    },

    showAboutPanel() {
        this.resetAboutGoal();
        this.aboutPanel.active = true;
    },

    showGoalPanel() {
        this.resetAboutGoal();
        this.goalPanel.active = true;
    },

    showAgePanel() {
        this.agePanel.active = !this.agePanel.active;
    },

    showSexPanel() {
        this.sexPanel.active = !this.sexPanel.active;
    },

    resetAboutGoal() {
        this.aboutPanel.active = false;
        this.goalPanel.active = false;
    },

    zoomEffect(targetNode) {
        targetNode.scale = 1.25;
        setTimeout(() => {
            targetNode.scale = 1;
        }, 250);
    },
});