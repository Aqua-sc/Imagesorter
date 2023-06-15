<script>
    import categories from '../stores/categories';
    import {showcreatecategory} from '../stores/modal'
    import { slide } from 'svelte/transition';
    let options = [];
    let show = false;
    categories.subscribe((data) => {
        options = Object.values(data);  
    });

    import CategoryWindow from './createcategory.svelte';

    let showModal = false;
    showcreatecategory.subscribe((data) => {
        showModal = data;
    })
    function openModal() {
        showcreatecategory.set(true)
    }
    function handleCloseModal() {
        showcreatecategory.set(false)
        pressedcategory = undefined
    }


    let showbutton;


    let bottomoffset = 0
    $: {
        bottomoffset = showbutton ? showbutton.offsetTop + 47 : 0
    }
    
    let maxheight = `calc(65vh - 10px)`;
    let pressedcategory
</script>

{#if showModal}
    <CategoryWindow on:close={handleCloseModal} category={pressedcategory}/>
{/if}

<div class="flex-col justify-between h-full overscroll-contain overflow-hidden">
    {#if show }
        <div transition:slide class="absolute right-1 bg-sky-300 bg-opacity-10 border-1 p-1 border-emerald-600 rounded-lg place-items-center overflow-y-auto min-w-max" style="max-height: {maxheight}; bottom: {bottomoffset}px">
            {#each options as option}
            <button class="flex gap-1 pl-1 pr-1 pt-1 text-center items-center overscroll contain hover:bg-black hover:bg-opacity-5 w-full" on:click={() => {pressedcategory = option; openModal()}} >
                <div class="rounded w-5 h-5 border-2 border-black" style="background-color: {option.color}"></div>
                <p style="max-width: 18vw"> {option.name} <i>{option.shortcut.isValid() ? `(${option.shortcut.toString().trim()})` : ''}</i></p>
            </button>
            {/each}
            <div class="flex gap-1 pl-1 text-center items-center  w-full justify-center" >
                <button class="hover:bg-black hover:bg-opacity-5" on:click={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <button class="hover:bg-black hover:bg-opacity-5" on:click={categories.clear}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    {/if}

    <div bind:this={showbutton} class="flex justify-end mt-2">
        <button  on:click={() => show = !show} class="bg-blue-500 hover:bg-blue-700 text-white p-1.5 place-items-center rounded-full aspect-square" title="Categories">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        </button>
    </div>
</div>

<style>
    /* Track */
    ::-webkit-scrollbar {
      width: 6px; /* width of the vertical scrollbar */
      height: 6px; /* height of the horizontal scrollbar */
    }

    /* Thumb */
    ::-webkit-scrollbar-thumb {
      background-color: rgb(125 211 252); /* color of the scrollbar thumb */
      border-radius: 3px; /* border radius of the scrollbar thumb */
    }
</style>
