<script>
    import JSZip from 'jszip';
    import FileSaver from 'file-saver'
    import { gallarray } from "../stores/galleryImages";
	import categories from '../stores/categories';

    let files=[]
    let name = ""
    gallarray.subscribe((data) => {
        files = data;
    })

    function download() {
        if (name) {
            let zip = new JSZip();
            files.forEach(a => zip.file(`${a.getCategory().name}/${a.file.name}`, a.file));
            zip.generateAsync({ type:  'blob'}).then(function (content) {
                FileSaver.saveAs(content, `${name}.zip`);
            });
        } else {
            alert("Folder name can't be empty")
        }
        
    }

    function handleKeyPress(event) {
    if (event.key === "Enter") {
      // Execute your desired function here
      // For example, call a function named 'handleEnterKeyPress'
        download()
    }
}
</script>



<div class="flex gap-1 mt-1 place-items-center">
    <input class="p-1 border-blue-500 bg-blue-300 bg-opacity-95 border-2 rounded-md text-white font-bold placeholder-gray-200 text-base focus:outline-0 focus:ring-2" bind:value={name} placeholder="Folder name here" on:keydown={handleKeyPress}> 
    <label> 
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-1.5 py-1.5 rounded stroke-white fill-none stroke-2" on:click={download} title="Download"> 
            <svg class="w-5.5 h-5.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg> 
        </button>    
    </label>
    
</div>
    