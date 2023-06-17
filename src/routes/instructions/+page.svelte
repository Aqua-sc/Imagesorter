<script>
	import Instructioncategory from "../../components/instructioncategory.svelte";
    //TODO: Make all trashcan icons the same
</script>

<svelte:head>
    <title> Imagesorter </title>
</svelte:head>

<div class="w-full overflow-y-auto overscroll-y-scroll h-gallery">
    <br>
    <Instructioncategory id="uploading_images" title="Uploading images">
        <p>Click on the dropzone or drag your folder into to the dropzone to select your images.</p>
        <p>Only image files (.jpg, .png, .gif, .svg, .webp ...) will be added to the gallery.</p>
        <div class="flex items-center justify-center">
            <p  class="whitespace-pre">Additional folders can be added using the </p>
            <svg class="w-4 h-4 mr-1 ml-1 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
            </svg> 
            <p>button located on the bottom left of your screen.</p>
        </div>
        <div class="flex items-center justify-center">
            <p  class="whitespace-pre">You can <u>remove</u> all images using the</p>
            <svg class="mr-1 ml-1 stroke-red-400 fill-transparent w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <p>button located on the bottom left of your screen.</p>
        </div>
        <br>
        <p class="text-red-500">Keep in mind that upon an (accidental) close/refresh of the page, all progress will be lost.</p>
    </Instructioncategory>
    <br>
    <Instructioncategory id="managing_categories" title="Managing categories">
        <div class="flex items-center justify-center">
            <p  class="whitespace-pre">You can view categories using the</p>
            <svg class="w-6 h-6 mr-1 ml-1 pt-0.5 stroke-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p>button located on the bottom right of your screen.</p>
        </div>
        <p>You can edit or remove a category by clicking on it. The default category can not be removed.</p>
        <p>When removing a category, all images with that category will go back to having the default category.</p>
        <p>In the category menu you will also find the following buttons:</p>
        <div class="flex justify-center">
            <div class="text-start max-w-max min-w-min justify-center flex-col">
                <ul class="list-disc list-inside">
                    <li class="flex justify-center pt-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-0.5 stroke-blue-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p>: Add a category</p>
                    </li>
                    <li class="flex justify-center pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 mr-0.5 pt-0.5 stroke-red-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <p>: Remove all categories (except default)</p>
                    </li>
                    <li class="flex justify-center pt-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 stroke-blue-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <p>: Download categories</p>
                    </li>
                    <li class="flex justify-center pt-2 items-center pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 stroke-blue-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <p>: Upload categories</p>
                    </li>
                </ul>
            </div>
        </div>
        <p>When adding a category you pick a name (must be unique) and color.</p>
        <p>Optionally you can add a shortcut by clicking "<u>Register shortcut</u>" and pressing the desired keys.</p>
        <p>A shortcut consists of zero or more modifier keys (Shift/Ctrl/Alt) + a non-special key.</p>
        <p>Some shortcuts used by your browser (e.g. Ctrl + p) will not work.</p>
        <br>
        <p>When uploading categories you should only upload files downloaded from this website that have not been altered.</p>
        <p>Uploading any other JSON files will most likely not work and the behaviour will be unpredictable.</p>
        
    </Instructioncategory>
    <br>
    <Instructioncategory id="selecting_images" title="Selecting images">
        <p>Clicking on an image in the gallery view on the left of your screen will select the image.</p>
        <div class="flex items-center justify-center">
            <p>The selected image will now have a</p>
            <p class="whitespace-pre rounded mr-1 ml-1 " style={"text-shadow: 0 0 8px rgb(255 255 255)"}>glow</p>
            <br>
            <p>around it.</p>
        </div>
        <p>Clicking on the selected image in the gallery view will deselect it.</p>
        <p>The selected image will be displayed alongside with some additional information.</p>
        <p>You can use the dropdown menu to give the image a category.</p>
        <div class="flex items-center justify-center">
            <p  class="whitespace-pre">You can <u>remove</u> the selected image using the</p>
            <svg class="mr-1 ml-1 stroke-red-400 fill-transparent w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <p>button located on the top right of your screen.</p>
        </div>
    </Instructioncategory>
    <br>
    <Instructioncategory id="keyboard_only" title="Using the keyboard">
        <p>Once you have your files selected and categories made it is possible to work using only the keyboard.</p>
        <p>Using the arrow keys you can select the image directly above/below the currently selected one.</p>
        <p>(It is advised to, after selecting the initial image, click somewhere on the background of the screen so the scrollbar scrolls properly)</p>
        <br>
        <p>Using the shortcuts you can give the selected image the desired category</p>
    </Instructioncategory>
    <br>
    <Instructioncategory id="exporting" title="Exporting">
        <p>Once all the images have the desired category you can download the sorted images.</p>
        <p>First fill in the name for the folder in the textfield on the bottom left.</p>
        <div class="flex items-center justify-center">
            <p  class="whitespace-pre">You can download the folder using the</p>
            <svg class="w-6 h-6 mr-1 ml-1 pt-0.5 stroke-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <p>button located next to the textfield.</p>
        </div>
        <p>All images will be grouped into folders corresponding to the categories</p>
    </Instructioncategory>
    <br>
</div>

<style>
    /* Track */
    ::-webkit-scrollbar {
      width: 8px; /* width of the vertical scrollbar */
      height: 4px; /* height of the horizontal scrollbar */
    }

    /* Thumb */
    ::-webkit-scrollbar-thumb {
      background-color: rgb(125 211 252); /* color of the scrollbar thumb */
      border-radius: 3px; /* border radius of the scrollbar thumb */
    }
</style>
