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
    
    
    <div class="flex absolute left-0 gap-2 overscroll-contain overflow-hidden h-gallery">
        <div class="flex flex-col gap-2 p-2 overscroll-contain overflow-y-auto min-w-pptx-image flex-shrink-0">
            {#each gallery as image}
                <div> 
                    <ImageCard on:selected={newSelect} file={image} selected={selected_img === image}/>
                </div>
            {/each}
        </div>
        <div class="overflow-hidden">
            <Bigview file={selected_img}/>
            <div class="absolute inset-x-pptx-image bottom-1 py-1 px-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded" on:click={removeFiles} title="Remove All Files"> 
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="white"/>
                    </svg> 
                </button>
                <label> 
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded" on:click={addFiles} title="Add folder"> 
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" fill="rgba(255,255,255,1)"/>
                        </svg> 
                    </button>
                    <input id="folderselect" type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
                </label>
            </div>
        </div>
    </div>
</div>      
{/if}



