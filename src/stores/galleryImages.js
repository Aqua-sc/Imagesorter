
import {GalleryImage} from "../classes/GalleryImage";
import { writable } from 'svelte/store';



function createGallaray() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe, 
        add: (files) => {
            files = [...files];
            files = files.filter(file => file.type.startsWith("image/"));
            files = files.map(file => new GalleryImage(file, 4, 10));
            update(data => [...data, ...files]);
        },
        set, 
        clear: () => set([])
    };
}

let gallaray = createGallaray();
export default gallaray;