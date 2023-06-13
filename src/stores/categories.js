import { writable } from 'svelte/store';


function createCategories() {
    let arrayi = { 
        1 : { name: "Default", color: "#FFFFFF", id: 1},
        2 : { name: "Drinks", color: "#5eead4", id: 2}, 
        3 : { name: "Fruit", color: "#ef4444", id: 3}, 
        4 : { name: "Trees", color: "#22c55e", id: 4},
        5 : { name: "Flowers", color: "#e879f9", id: 5}
    };

    let length = 5;
    const { subscribe, set, update } = writable(arrayi);

    return {
        subscribe, 
        add: (id, category) => {
            update(data => {
                const newData = { ...data }; // Create a copy of the existing data object
                newData[id] = { ...category, id }; // Add the new category with the specified id
                return newData; // Return the updated data object
            });
            length += 1;
        }
        ,
        set, 
        clear: () => set([]),
        getById: (id) => {return arrayi.get(id)},
        getLength: () => {return length}
    };
}

let categories = createCategories();
export default categories;