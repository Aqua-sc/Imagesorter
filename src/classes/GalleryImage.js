import { writable } from 'svelte/store';

export class GalleryImage {
    constructor(file, id, category) {
        this.file = file;
        this.id = id;
        this.category = writable(category);
        
    }

    setCategory(category) {
        this.category.set(category)
    }
}