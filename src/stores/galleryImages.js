
import {GalleryImage} from "../classes/GalleryImage";
import { writable } from 'svelte/store';



function createGallarray() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe, 
        add: (files) => {
            files = [...files];
            files = files.filter(file => file.type.startsWith("image/"));
            files = files.map(file => new GalleryImage(file, 4, { name: "Default", color: "sky-500", id: 1}));
            update(data => [...data, ...files]);
        },
        set, 
        clear: () => set([])
    };
}

let gallarray = createGallarray();

let selected_img = writable(undefined);


export { gallarray, selected_img };