export class Keycombination {
    constructor(ctrlkey, shiftkey, altkey, key) {
        this.ctrlkey = ctrlkey;
        this.shiftkey = shiftkey;
        this.altkey = altkey;
        this.key = key;
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
    }
}
