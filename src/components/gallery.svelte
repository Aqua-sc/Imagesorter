<script>
    import FileSelectBox from "./fileselector.svelte"
    import ImageCard from "./imageCard.svelte"
    let files=false
    let gallery=[]

    $: {
        if(files) {
            files = [...files]
            files = files.filter(file => file.type.startsWith("image/"))
            updateGallery();
        }
    }

    function updateGallery() {
        gallery = gallery.concat(files);
        files=false;
    }

    function removeFiles() {
        gallery = [];
        console.log(gallery.length)
    }

    function addFiles() {
        document.getElementById('folderselect').click();
    }
      
</script>

{#if gallery.length < 1}
    <div>
        <label>
            <FileSelectBox/>
            <input type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
        </label>
    </div>
{:else}
<div>
    <h1 class="text-center text-2xl font-bold"> Gallery </h1>
    <div class="flex items-center justify-center p-3 gap-3">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={removeFiles}> Remove All Images </button>
        <label> 
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={addFiles}> Add Images </button>
            <input id="folderselect" type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
        </label>
    </div>

    <!-- <div class="flex flex-wrap justify-center gap-3">
        {#each gallery as image}
            <ImageCard file={image}/>
        {/each}
    </div> -->
    
    
    <div class="flex absolute inset-x-0 bottom-0 overflow-x-auto overflow-y-hidden gap-2 p-2">
        {#each gallery as image}
            <ImageCard file={image}/>
        {/each}
    </div>
    
</div>
{/if}



