<script>
    import gallaray from "../stores/galleryImages";
    let files = [];
    function addFiles() {
        document.getElementById('folderselect').click()
    }

    $: {
        if (files) {
            gallaray.add(files);
        }
    }
        
</script>

<label> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded" on:click={addFiles} title="Add folder"> 
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" fill="rgba(255,255,255,1)"/>
        </svg> 
    </button>
    <input id="folderselect" type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
</label>