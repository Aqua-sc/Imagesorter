<script>
    import categories from '../stores/categories';
    let options = [];
    let show = false;
    categories.subscribe((data) => {
        options = Object.values(data);  
    });

    import Modal from './createcategory.svelte';

    let showModal = false;
    function openModal() {
        showModal = true;
    }
    function handleCloseModal() {
        showModal = false;
    }
</script>

{#if showModal}
    <Modal on:close={handleCloseModal} />
{/if}

<div class="flex-col justify-between h-full">
    {#if show }
        <div class="bg-sky-300 bg-opacity-10 border-1 p-1  border-emerald-600 rounded-lg place-items-center">
            {#each options as option}
            <div class="flex gap-1 pl-1 text-center items-center">
                <div class="rounded w-5 h-5 bg-{option.color} border-2 border-black"></div>
                <p> {option.name} </p>
            </div>
            {/each}
            <button class="flex gap-1 pl-1 text-center items-center" on:click={openModal}>
                Add category
            </button>
        </div>
    {/if}

    <div class="flex justify-end mt-2">
        <button on:click={() => show = !show} class="bg-blue-500 hover:bg-blue-700 text-white p-1.5 place-items-center rounded-full aspect-square" title="Categories">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        </button>
    </div>
</div>
