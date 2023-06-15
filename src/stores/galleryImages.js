
import {GalleryImage} from "../classes/GalleryImage";
import { writable } from 'svelte/store';



function createGallarray() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe, 
        add: (files) => {
            console.log(files.length)
            files = [...files];
            files = files.filter(file => file.type.startsWith("image/"));
            files = files.map(file => new GalleryImage(file, 0));
            update(data => [...data, ...files]);
        },
        updateAfterDelete: (id) => {
            update(data => {
                data.forEach(a => {
                    if (a.getCategory().id == id) {
                        a.setCategory(0)
                    }
                })
                return data
            })
        },
        remove: (image) => {
            update(data => {
                const updatedData = data.filter(item => item !== image);
                return updatedData;
            });
            gallarray = gallarray
        },
        set, 
        clear: () => set([])
    };
}

let gallarray = createGallarray();

let selected_img = writable(undefined);


export { gallarray, selected_img };