import { setResponse } from '@sveltejs/kit/node';
import { writable } from 'svelte/store';
import { Keycombination } from '../classes/Keycombination';
import { gallarray } from './galleryImages';
import { xlink_attr } from 'svelte/internal';


function createCategories() {
    let arrayi = { 
        0: { name: "Default", color: "#FFFFFF", id: 0, shortcut: new Keycombination()}
    };

    let length = 1;
    const { subscribe, set, update } = writable(arrayi);

    return {
        subscribe, 
        add: (name, color, shortcut) => {
            update(data => {
                let id = Math.max(...Object.keys(data))+1
                const newData = { ...data }; // Create a copy of the existing data object
                newData[id] = { name:name, color:color, id: id, shortcut: shortcut }; // Add the new category with the specified id
                return newData; // Return the updated data object
            });
            length += 1;
        },
        update: (category) => {
            update(data => {
                const newData = {...data}
                newData[category.id] = category
                return newData;
            })
            categories = categories
        },
        delete: (id) => {
            update(data => {
                const newData = {...data}
                if (Object.keys(newData).length > 1) {
                    delete newData[id]
                    gallarray.updateAfterDelete(id)
                }
                return newData;
            })
            categories = categories
        },
        clear: () => {
            update(data => {
                console.log('kzzd')
                let newData = {...data}
                newData = {0 : newData[0]}
                console.log(newData)
                return newData;
            })
            categories = categories
        },
        parseJsonObject: (JSON) => {
            // Check if the file is valid
            let keys = JSON.map(a => a.id)
            let names = JSON.map(a => a.name)
            let valid = keys.length === (new Set(keys)).size ? '' : 'All id\'s must be unique'
            valid = keys.includes(0) ? '' : 'A category with id \'0\' must be present'
            valid = names.length === (new Set(names)).size ? '' : 'All names must be unique'
            if (!valid) {
                update(data => {
                    const newData = {}
                    JSON.forEach(element => {
                        let shortcutjson = element.shortcut
                        let shortcut = new Keycombination(shortcutjson.ctrlkey, shortcutjson.shiftkey, shortcutjson.altkey, shortcutjson.key, shortcutjson.keycode)
                        let category = { name: element.name, color: element.color, id: element.id, shortcut: shortcut}
                        newData[element.id] = category
                    });
                    return newData
                })
                categories = categories
                gallarray.resetCategories()
                return '';
            }
            return valid;
        },
        set, 
        getById: (id) => {
            let category = null;
            
            const unsubscribe = categories.subscribe(data => {
                category = data[id];
            });
            unsubscribe(); // Unsubscribe immediately to avoid unnecessary updates
            return category;
        }
        ,
        getLength: () => length,
        isUniqueName: (name) => {
            let unique = true
            const unsubscribe = categories.subscribe(data => {
                const existingNames = Object.values(data).map(obj => obj.name);
                unique = !existingNames.includes(name)
            });
            unsubscribe(); // Unsubscribe immediately to avoid unnecessary updates
            return unique
        },
        matchingShortcut: (combination) => {
            let categorieslist = [];
            const unsubscribe = categories.subscribe(data => {
                categorieslist = Object.values(data)
            });
            unsubscribe();
            for (let i = 0; i <categorieslist.length; i++) {
                if (combination.equals(categorieslist[i].shortcut)) {
                    return categorieslist[i]
                }
            }
            return undefined
        }
    };
}

let categories = createCategories();
export default categories;
