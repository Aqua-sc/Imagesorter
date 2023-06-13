<script>
    import { gallarray } from "../stores/galleryImages";
    


    


    let files = [];
    let dragging = false

    $: {
        if(files) {
            gallarray.add(files);
        }
    }

    function dropHandler(ev) {
        ev.preventDefault();

        const traverseDirectory = async (item) => {
            if (item.isFile) {
                const file = await new Promise((resolve) => {
                    item.file(resolve);
                });
                files.push(file);
            } else if (item.isDirectory) {
                const directoryReader = item.createReader();
                const entries = await new Promise((resolve) => {
                    directoryReader.readEntries(resolve);
                });

                for (const entry of entries) {
                    await traverseDirectory(entry);
                }
            }
        };

        if (ev.dataTransfer.items) {
            const items = ev.dataTransfer.items;

            (async () => {
                for (const item of items) {
                    const entry = item.webkitGetAsEntry();
                    if (entry) {
                        await traverseDirectory(entry);
                    }
                }

                files = [...files];
            })();
        }
    }

    function dragLeaveHandler() {
        // Update the style variable when the drag event leaves the div
        dragging = false
    }


    function dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        dragging = true
    }

    
</script>

<div on:dragover={dragOverHandler} on:drop={dropHandler} on:dragleave={dragLeaveHandler}>
    <label>
        <div class="max-w-xl flex justify-center w-full h-32 px-4 transition bg-zinc-800 border-2 border-white-300 border-dashed rounded-md appearance-none  hover:border-gray-400 focus:outline-noneh {dragging ? "border-gray-400 cursor-copy" :"cursor-pointer"}">
            <span class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span class="font-medium text-green-300">
                    Drop your folder here or
                    <label class="cursor-pointer">
                        <span class="text-blue-700 underline">browse</span>
                        <input type="file" name="file_upload" class="hidden" webkitdirectory multiple bind:files accept="image/*">
                    </label>
                    
                </span>
            </span>
            <br>   
        </div>
        
    </label>
</div>






