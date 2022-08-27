<script> 
    import { createEventDispatcher } from 'svelte'
    export let data
    export let selected

    let file = data.file;
    let category = data.category;

    const dispatch = createEventDispatcher();
    function select() {
        dispatch('selected', {
            data: data
        });
    }
</script>


<div class="relative flex-shrink-0 p-0  h-pptx-image w-pptx-image {selected ? "shadow-lg shadow-white  border-double": ""} border-{category.color} border-4 rounded-md" id="imageDiv" on:click={select}>
    <img class="object-contain w-full h-full" src="{URL.createObjectURL(file)}" alt=""/>

    <div class="flex flex-col absolute bottom-0 left-0 right-0 px-1 py-2 bg-gray-800 opacity-0 hover:opacity-70 max-h-full">
        <p class="text-gray-300 text-center truncate"><strong>Name:</strong> {file.name}</p>
    </div>
</div>


    

