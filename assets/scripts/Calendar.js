const calendar = require("calendar-js");

cc.Class({
    extends: cc.Component,

    properties: {},

    zoomEffect(targetNode) {
        targetNode.scale = 1.25;
        setTimeout(() => {
            targetNode.scale = 1;
        }, 250);
    },

    init() {
        //Calendar UI
        this.calendarPanel = cc.find(CALENDAR_PANEL.SELF);

        this.btnRecord = cc.find(BOTTOM_UI.BTN_RECORD).getComponent(cc.Button);
        this.btnRecord.node.on(
            "click",
            () => {
                this.zoomEffect(this.btnRecord.node);
                this.toggleCalendar();
            },
            this
        );

        this.btnDiary = cc.find(CALENDAR_PANEL.BTN_DIARY).getComponent(cc.Button);
        this.btnDiary.node.on(
            "click",
            () => {
                this.zoomEffect(this.btnDiary.node);
                this.showDiaryPanel();
            },
            this
        );

        // Months
        this.lblMonth = cc.find(CALENDAR_PANEL.LBL_MONTH).getComponent(cc.Label);

        this.btnRightMonth = cc
            .find(CALENDAR_PANEL.BTN_RIGHT_MONTH)
            .getComponent(cc.Button);
        this.btnRightMonth.node.on(
            "click",
            () => {
                this.zoomEffect(this.btnRightMonth.node);
                this.addMonth();
                console.log("BTN RIGHT MONTH");
            },
            this
        );

        this.btnLeftMonth = cc
            .find(CALENDAR_PANEL.BTN_LEFT_MONTH)
            .getComponent(cc.Button);
        this.btnLeftMonth.node.on(
            "click",
            () => {
                this.zoomEffect(this.btnLeftMonth.node);
                this.subtractMonth();

                console.log("BTN LEFTTTTTT MONTH");
            },
            this
        );

        // Content
        this.content = cc.find(CALENDAR_PANEL.CONTENT_PANEL);

        // Diary UI
        this.botDiaryBackground = cc.find(DIARY_PANEL.SELF);

        this.btnMood = cc.find(DIARY_PANEL.BTN_MOOD).getComponent(cc.Button);
        this.btnMood.node.on(
            "click",
            () => {
                this.zoomEffect(this.btnMood.node);
                this.showMoodPanel();
            },
            this
        );
        this.btnMoodPanel = cc.find(DIARY_PANEL.BTN_MOOD_PANEL);

        this.btnWhoWhat = cc.find(DIARY_PANEL.BTN_WHO_WHAT).getComponent(cc.Button);
        this.btnWhoWhat.node.on(
            "click",
            () => {
                this.zoomEffect(this.btnWhoWhat.node);
                this.showWhoWhatPanel();
            },
            this
        );

        this.btnWhoWhatPanel = cc.find(DIARY_PANEL.BTN_WHO_WHAT_PANEL);
    },

    start() {
        console.log("CALENDAR");
        this.init();

        this.buttons = cc.find(CALENDAR_PANEL.DATE_BUTTONS).children;
        this.dates = [];

        // Getting Child Objects
        for (var i = 0; i < this.buttons.length; i++) {
            this.dates[i] = this.buttons[i]
                .getChildByName("Background")
                .getChildByName("Label")
                .getComponent(cc.Label);
            this.dates[i].fontSize = 40;

            this.dates[i].string = "";
        }

        this.date();
        this.calendarPanel.active = false;
        this.botDiaryBackground.active = false;
    },

    clearUI() {
        var counter = 0;
        for (var i = 0; i < this.dates.length; i++) {
            this.dates[counter].string = "";
            console.log("Nice" + this.dates[counter].string);
            counter++;
        }
    },

    date() {
        var date = new Date();
        this.yearCounter = date.getFullYear();
        this.monthCounter = date.getMonth() + 1;
        this.calendarShow();
    },

    addMonth() {
        this.monthCounter++;
        this.calendarShow();
    },

    subtractMonth() {
        this.monthCounter--;
        this.calendarShow();
    },

    calendarShow() {
        console.log("---------------------------");
        console.log(
            "Calendar Show : " + this.yearCounter + ", " + this.monthCounter
        );

        if (this.monthCounter > 12) {
            console.log("Over 12");
            this.addYearCounter();
        } else if (this.monthCounter < 1) {
            console.log("Below 1");
            this.subYearCounter();
        }

        console.log(
            "Calendar Show : " + this.yearCounter + ", " + this.monthCounter
        );
        var calendarDays = calendar().of(this.yearCounter, this.monthCounter - 1)
            .calendar;

        // Nested loop to show UI
        this.clearUI();
        this.getMonthName(this.monthCounter);
        var counter = 0;
        for (var i = 0; i < calendarDays.length; i++) {
            for (var j = 0; j < calendarDays[i].length; j++) {
                var value = calendarDays[i][j];
                if (value != 0) {
                    this.dates[counter].string = value;
                }
                counter++;
            }
        }
    },

    getMonthName(id) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        this.lblMonth.string = monthNames[id - 1] + "(" + this.yearCounter + ")";
    },

    addYearCounter() {
        this.yearCounter += 1;
        this.monthCounter = 1;
        this.calendarShow();
        console.log(
            "Add Year :" + this.yearCounter + ", Add Month : " + this.monthCounter
        );
    },

    subYearCounter() {
        this.yearCounter--;
        this.monthCounter = 12;
        this.calendarShow();
        console.log(
            "Sub Year :" + this.yearCounter + ", Sub Month : " + this.monthCounter
        );
    },

    toggleCalendar() {
        this.calendarPanel.active = !this.calendarPanel.active;
        this.botDiaryBackground.active = false;
    },

    showDiaryPanel() {
        this.botDiaryBackground.active = true;
    },

    showMoodPanel() {
        this.btnMoodPanel.active = !this.btnMoodPanel.active;
    },

    showWhoWhatPanel() {
        this.btnWhoWhatPanel.active = !this.btnWhoWhatPanel.active;
    },
});