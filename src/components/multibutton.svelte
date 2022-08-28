<script>
    import categories from '../stores/categories';
    import { selected_img } from '../stores/galleryImages';
    let options = [];

    categories.subscribe((data) => {
        options = Object.values(data);
    });
                
    let show = false
    let selected = "Default"
    let image;
    selected_img.subscribe((data) => {
        image = data;
    });
   
   function thisOne(arg) {
        selected = arg.name;
        image.setCategory(arg);
   }
</script>




<div class="relative inline-block">
    <button class="flex relative  items-center justify-center  pr-4 w-50 mr-2 ml-1  text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-cyan-500 to-blue-500" on:click={() => show = !show}>
        <span class="relative px-2.5 py-2.5 transition-all ease-in duration-75bg-zinc-600 rounded-md group-hover:bg-opacity-0 text-white">
            {selected}    
        </span>
        <svg aria-hidden="true" focusable="false"data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"  >
            
            <path fill="white" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            
        </svg>
    </button>
    
    {#if show}
        <div class="bg-sky-300 bg-opacity-10 border-1 border-emerald-600 rounded-lg place-items-center">
            {#each options as option}
            <button class="flex gap-1 hover:bg-black hover:bg-opacity-5" on:click={thisOne(option)}>
                <div class="w-5 h-5 bg-{option.color} border-2 border-black"></div>
                <p> {option.name} </p>
            </button>
            {/each}
        </div>
    {/if}
</div>
    