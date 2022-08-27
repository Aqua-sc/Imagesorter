export class GalleryImage {
    constructor(file, id, category) {
        this.file = file;
        this.id = id;
        this.category = category
    }

    setCategory(category) {
        this.category = category;
        this = this;
        console.log(this.category)
    }
}