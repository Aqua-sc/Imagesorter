import { writable } from 'svelte/store';

export class GalleryImage {
    constructor(file, id) {
        this.file = file;
        this.categoryid = writable(id);

    }

    setCategory(categoryid) {
        console.log(categoryid)
        this.categoryid.set(categoryid)
    }

}