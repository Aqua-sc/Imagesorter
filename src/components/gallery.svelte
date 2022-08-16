<script>
    import FileSelectBox from "./fileselector.svelte"
    import ImageCard from "./imageCard.svelte"
    import Bigview from "./bigview.svelte"
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
        selected_img = undefined
        console.log(gallery.length)
    }

    function addFiles() {
        document.getElementById('folderselect').click();
    }

    let selected_img
    function newSelect(event) {
        selected_img = event.detail.file
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
    <div class="flex items-center justify-center p-3 gap-3">
        <h1 class="text-center text-2xl font-bold"> Gallery </h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={removeFiles}> Remove All Images </button>
        <label> 
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={addFiles}> Add Images </button>
            <input id="folderselect" type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
        </label>
    </div>
    
    
    <div class="flex left-0 gap-2">
        <div class="flex flex-col gap-2 overscroll-contain overflow-y-auto w-pptx-image h-5/6">
            {#each gallery as image}
            <!-- <ImageCard on:selected={newSelect} file={image}/> -->
            <img src="{URL.createObjectURL(image)}"/>
            {/each}
        </div>
        <Bigview file={selected_img}/>
    </div>
</div>   
    

{/if}



