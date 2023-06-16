<script>
    import { slide } from "svelte/transition";
    export let title
    let show = false
</script>

<div class="text-center w-full text-gray-200">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex gap-2 cursor-pointer text-center w-full justify-center items-center" on:click={() => show = !show}>
        <div class="pb-3">
            {#if !show}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            {/if}
        </div>
        <h1 class="text-center text-3xl mb-3 cursor-pointer" ><b>{title}</b></h1>
    </div>
    {#if show}
        <div transition:slide|local>
            <slot></slot>
        </div>
    {/if}
</div>