<script> 
    import { createEventDispatcher } from 'svelte'
	import categories from '../stores/categories';

    export let data
    export let selected

    let file = data.file;
    let category
    data.categoryid.subscribe((data) => {category = categories.getById(data)});

    
    const dispatch = createEventDispatcher();
    function select() {
        dispatch('selected', {
            data: data,
        });
    }
</script>


<div class="relative flex-shrink-0 p-0 h-pptx-image w-pptx-image {selected ? 'border-double' : ''}" id="imageDiv" on:click={select} style="border-color: {category.color}; border-width: 4px; border-style: solid; {selected ? 'box-shadow: 0 0 10px ' + category.color + ';' : ''}; border-radius: 0.375rem;">
    <img class="object-contain w-full h-full" src="{URL.createObjectURL(file)}" alt=""/>

    <div class="flex flex-col absolute bottom-0 left-0 right-0 px-1 py-2 bg-gray-800 opacity-0 hover:opacity-70 max-h-full">
        <p class="text-gray-300 text-center truncate" on:click={console.log(data.category)}><strong>Name:</strong> {file.name}</p>
    </div>
</div> 


    

