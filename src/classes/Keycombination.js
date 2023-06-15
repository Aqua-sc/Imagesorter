export class Keycombination {
    constructor(ctrlkey=false, shiftkey=false, altkey=false, key='', keycode='') {
        this.ctrlkey = ctrlkey;
        this.shiftkey = shiftkey;
        this.altkey = altkey;
        this.key = key;
        this.keycode = keycode
    }

    toString() {
        return (`
            ${this.ctrlkey ? "Ctrl + " : ""}
            ${this.shiftkey ? "Shift + " : ""}
            ${this.altkey ? "Alt + " : ""}
            ${this.key}
        `);
    }

    isValid() {
        return this.key != ''
    }
    
    clear() {
        this.ctrlkey = false;
        this.shiftkey = false;
        this.altkey = false;
        this.key = '';
        this.keycode = '';
    }

    equals(otherKeyCombination) {
        return (
            this.ctrlkey === otherKeyCombination.ctrlkey &&
            this.shiftkey === otherKeyCombination.shiftkey &&
            this.altkey === otherKeyCombination.altkey &&
            this.keycode === otherKeyCombination.keycode
        );
    }
}
