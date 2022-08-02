<script>
import { query_selector_all } from "svelte/internal";


    let test=4
    let files=false
    
    $: {
        if(files) {
            files = [...files]
            files.forEach(file => console.log(file.type))
            files = files.filter(file => file.type.startsWith("image/"))
        }
    }
    function onButtonDown() {
        files=false;
    }

    function getColCount() {
        let width = screen.width
        return "columns-" + Math.floor(width/200)
    }
</script> 

{#if !files}
<div class="max-w-xl">
    <label
        class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="font-medium text-gray-600">
                Drop your folder here or
                <span class="text-blue-600 underline">browse</span>
            </span>
        </span>
        <input type="file" name="file_upload" class="hidden" webkitdirectory directory bind:files accept="image/*">
    </label>
    <br>    
</div>
{:else} 
<div>
    <h1> Selected Files </h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={onButtonDown}> Remove files </button>
    <div class={getColCount()}>
        {#each files as file}
        <img src="{URL.createObjectURL(file)}" alt="" width="200" height="200"/>
        {/each}
    </div>
</div>
{/if}

