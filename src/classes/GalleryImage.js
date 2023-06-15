import { writable } from 'svelte/store';
import categories from '../stores/categories';

export class GalleryImage {
    constructor(file, id) {
        this.file = file;
        this.categoryid = writable(id);
        this.divRef = undefined;
    }

    setCategory(categoryid) {
        this.categoryid.set(categoryid)
    }

    getCategory() {
        let category = undefined
        const unsubscribe = this.categoryid.subscribe(data => {
            category = categories.getById(data)
        });
        unsubscribe();
        return category
    }
}