
import { writable } from "svelte/store";

function createStates() {
    const { subscribe, set, update } = writable({});
    return {
        subscribe, 
        add: (id) => {
            update((data) => {
                const newData = {...data};
                newData[id] = false
                return newData;
            })
            instructioncategorystates = instructioncategorystates
        },
        setId: (id, state) => {
            update((data) => {
                const newData = {...data};
                newData[id] = state;
                return newData
            })
            instructioncategorystates = instructioncategorystates
        },
        set, 
        get: (id) => {
            let result = undefined
            subscribe((data) => {
                result = data[id]
            })
            return result
        } 
    };
}

let instructioncategorystates = createStates();
export default instructioncategorystates