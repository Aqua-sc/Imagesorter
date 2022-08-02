<script>


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
<div class="max-w-xl">
    <label
        class="flex justify-center w-full h-32 px-4 transition bg-zinc-800 border-2 border-white-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="font-medium text-green-300">
                Drop your folder here or
                <span class="text-blue-700 underline">browse</span>
            </span>
        </span>
        <input type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
    </label>
    <br>    
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
    <div class="flex flex-wrap justify-center gap-2">
        {#each gallery as image}
        <div class="border-2 rounded-md" id="imageDiv" style="width: {Math.floor(screen.width/5) - 5}px; height: {Math.floor(screen.width/5) - 5}px">
            <img src="{URL.createObjectURL(image)}" alt=""/>
        </div>
        {/each}
    </div>
</div>
{/if}

<style> 
img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>

