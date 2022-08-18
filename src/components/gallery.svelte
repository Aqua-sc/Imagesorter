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
        if (event.detail.file === selected_img) {
            selected_img = undefined;
        } else {
            selected_img = event.detail.file
        }
    }

    
      
</script>

{#if gallery.length < 1}
    <div class="p-5">
        <label>
            <FileSelectBox/>
            <input type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
        </label>
    </div>
{:else}

<div class="overscroll-hidden">
    <!-- <div class="flex items-center justify-center p-3 gap-3">
        <h1 class="text-center text-2xl font-bold"> Gallery </h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={removeFiles}> Remove All Images </button>
        <label> 
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={addFiles}> Add Images </button>
            <input id="folderselect" type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
        </label>
    </div> -->
    
    
    <div class="flex absolute left-0 gap-2 overscroll-contain h-gallery">
        <div class="flex flex-col gap-2 p-2 overscroll-contain overflow-y-auto min-w-pptx-image ">
            {#each gallery as image}
                <div class="{selected_img === image ? "shadow-lg shadow-cyan-500/50  border-sky-400": "border-white"} border-4  rounded-md"> 
                    <ImageCard on:selected={newSelect} file={image}/>
                </div>
            {/each}
        </div>
        <Bigview file={selected_img}/>
    </div>
</div>   
    

{/if}



