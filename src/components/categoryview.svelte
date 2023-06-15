<script>
    import categories from '../stores/categories';
    import {showcreatecategory} from '../stores/modal'
    import { slide } from 'svelte/transition';
    let options = [];
    let show = false;
    categories.subscribe((data) => {
        options = Object.values(data);  
    });

    import Modal from './createcategory.svelte';

    let showModal = false;
    showcreatecategory.subscribe((data) => {
        showModal = data;
    })
    function openModal() {
        showcreatecategory.set(true)
    }
    function handleCloseModal() {
        showcreatecategory.set(false)
    }


    let showbutton;


    let bottomoffset = 0
    $: {
        bottomoffset = showbutton ? showbutton.offsetTop + 47 : 0
        console.log(bottomoffset)
    }
    
    let maxheight = `calc(65vh - 10px)`;

</script>

{#if showModal}
    <Modal on:close={handleCloseModal} />
{/if}

<div class="flex-col justify-between h-full overscroll-contain overflow-hidden">
    {#if show }
        <div transition:slide class="absolute right-5 bg-sky-300 bg-opacity-10 border-1 p-1 border-emerald-600 rounded-lg place-items-center overflow-y-auto min-w-max" style="max-height: {maxheight}; bottom: {bottomoffset}px">
            {#each options as option}
            <div class="flex gap-1 pl-1 text-center items-center">
                <div class="rounded w-5 h-5 border-2 border-black" style="background-color: {option.color}"></div>
                <p> {option.name} </p>
            </div>
            {/each}
            <button class="flex gap-1 pl-1 text-center items-center" on:click={openModal}>
                Add category
            </button>
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
