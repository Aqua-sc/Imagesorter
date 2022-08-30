import { writable } from 'svelte/store';


function createCategories() {
    let arrayi = { 
        1 : { name: "Default", color: "white", id: 1},
        2 : { name: "Drinken", color: "teal-300", id: 2}, 
        3 : { name: "Fruit", color: "red-500", id: 3}, 
        4 : { name: "Bomen", color: "green-500", id: 4},
        5 : { name: "Bloemen", color: "fuchsia-400", id: 5}
    };

    let length = 5;
    const { subscribe, set, update } = writable(arrayi);

    return {
        subscribe, 
        add: (files) => {
                update(data => [...data, ...files]);
                length += 1;
            },
        set, 
        clear: () => set([]),
        getById: (id) => {return arrayi.get(id)},
        getLength: () => {return length}
    };
}

let categories = createCategories();
export default categories;