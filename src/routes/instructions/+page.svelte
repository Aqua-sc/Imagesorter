<script>
	import Instructioncategory from "../../components/instructioncategory.svelte";

</script>
<div>
    <br>
    <Instructioncategory title="Uploading Image">
        <p>Click on the dropzone or drag your folder into to the dropzone to select your images.</p>
        <p>Only image files (.jpg, .png, .gif, .svg, .webp ...) will be added to the galary.</p>
        <div class="flex items-center justify-center">
            <p  class="whitespace-pre">Additional folders can be added using the </p>
            <svg class="w-4 h-4 mr-1 ml-1 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
            </svg> 
            <p>button located on the bottom left of your screen.</p>
        </div>
        <div class="flex items-center justify-center">
            <p  class="whitespace-pre">You can <u>remove</u> all images using the</p>
            <svg class="w-4 h-4 mr-1 ml-1 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"/>
            </svg> 
            <p>button located on the bottom left of your screen.</p>
        </div>
    </Instructioncategory>
    <br>
        <Instructioncategory title="Managing categories">
            <div class="flex items-center justify-center">
                <p  class="whitespace-pre">You can view categories using the</p>
                <svg class="w-6 h-6 mr-1 ml-1 pt-0.5 stroke-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p>button located on the bottom right of your screen.</p>
            </div>
            <p>You can edit or remove a category by clicking on it. The default category can not be removed.</p>
            <p>When removing a category, all images with that category will go back to having the default category.</p>
        </Instructioncategory>
    <br>
    <Instructioncategory title="Selecting images">
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
            <svg class="mr-1 ml-1 stroke-red-500 fill-transparent w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <p>button located on the top right of your screen.</p>
        </div>
    </Instructioncategory>
</div>

