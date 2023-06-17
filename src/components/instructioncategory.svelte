<script>
    import { slide } from "svelte/transition";
	import instructioncategorystates from "../stores/instructioncategorystate";
    export let title
    export let id
    let show = false

    instructioncategorystates.subscribe((data) => {
        if (data[id] === undefined) {
            instructioncategorystates.add(id)
        } else {
            show = data[id]
        }
    })

    function toggle() {
        instructioncategorystates.setId(id, !show)
    }
    
</script>

<div class="flex-col text-center w-full text-gray-200 items-center justify-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex gap-2 text-center justify-center items-center">
        <div class="pb-3">
            {#if !show}
                <svg on:click={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            {:else}
                <svg on:click={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            {/if}
        </div>
        <h1 on:click={toggle} class="text-center text-3xl mb-3 cursor-pointer" ><b>{title}</b></h1>
    </div>
    {#if show}
        <div transition:slide|local class="">
            <slot></slot>
        </div>
    {/if}
</div>