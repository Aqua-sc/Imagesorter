<script>
    import categories from '../stores/categories';
    import { selected_img } from '../stores/galleryImages';
    import { getContrastColor } from './createcategory.svelte';
    let options = [];
    let selected = undefined;
    let selectedid = 0;

    categories.subscribe((data) => {
        options = Object.values(data);
        selected = categories.getById(selectedid)
    });
                
    let show = false

    let image;
    
    selected_img.subscribe((data) => {
        if (data) {
            image = data;
            data.categoryid.subscribe((id) => {
                selected = categories.getById(id);
                selectedid = id
            })
        }
        show = false;
    });

    let textcolor = getContrastColor(selected.color)
    function thisOne(arg) {
        selected = arg;
        image.setCategory(arg.id);
        textcolor = getContrastColor(selected.color)
        show = !show;
    }

    
</script>




<div class="relative inline-block items-center justify-center">
    <button class="flex relative  items-center justify-center  pr-4 mt-3 mr-3 ml-1  text-sm font-medium text-gray-900 rounded-lg group  h-9 border-2" on:click={() => show = !show} style="background-color: {selected.color}; border-color: {textcolor}">
        <span class="relative px-2.5 py-2.5 transition-all ease-in duration-75bg-zinc-600 rounded-md group-hover:bg-opacity-0" style="color: {textcolor}">
            {selected.name}    
        </span>
        <svg aria-hidden="true" focusable="false"data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"  >
            <path fill={textcolor} d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
        </svg>
    </button>
    
    {#if show}
        <div class=" bg-sky-300 bg-opacity-10 border-1 border-emerald-600 rounded-lg place-items-center pb-1 pt-1">
            {#each options as option}
            <button class="flex gap-1 pl-1 pr-1 text-center items-center overscroll contain hover:bg-black hover:bg-opacity-5 w-full" on:click={thisOne(option)} >
                <div class="rounded w-5 h-5 border-2 border-black" style="background-color: {option.color}"></div>
                <p style="max-width: 18vw"> {option.name} </p>
            </button>
            {/each}
        </div>
    {/if}
</div>
    