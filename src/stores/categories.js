import { setResponse } from '@sveltejs/kit/node';
import { writable } from 'svelte/store';

function createCategories() {
    let arrayi = { 
        0: { name: "Default", color: "#FFFFFF", id: 0 }
    };

    let length = 1;
    const { subscribe, set, update } = writable(arrayi);

    return {
        subscribe, 
        add: (name, color) => {
            update(data => {
                let id = Math.max(...Object.keys(data))+1
                const newData = { ...data }; // Create a copy of the existing data object
                newData[id] = { name:name, color:color, id: id }; // Add the new category with the specified id
                return newData; // Return the updated data object
            });
            length += 1;
        },
        set, 
        clear: () => set([]),
        getById: (id) => {
            let category = null;
            
            const unsubscribe = categories.subscribe(data => {
                category = data[id];
            });
            unsubscribe(); // Unsubscribe immediately to avoid unnecessary updates
            return category;
        }
        ,
        getLength: () => length
    };
}

let categories = createCategories();
export default categories;
