<script>
    
    import FileSelectBox from "./fileselector.svelte"
    import ImageCard from "./imageCard.svelte"
    import Bigview from "./bigview.svelte"
    import gallaray from "../stores/galleryImages";
    import Removebutton from "./removebutton.svelte";
    import Addbutton from "./addbutton.svelte";
    
    
    let gallery=[]

    gallaray.subscribe((data) => {
        gallery = data;
    });
    
    let selected_img
    function newSelect(event) {
        if (event.detail.data === selected_img) {
            selected_img = undefined;
        } else {
            selected_img = event.detail.data
        }
    }

    
      
</script>

{#if gallery.length < 1}
    <div class="p-5">
        <FileSelectBox/>
    </div>
{:else}

<div class="overscroll-hidden">
    <div class="flex absolute left-0 gap-2 overscroll-contain overflow-hidden h-gallery">
        <div class="flex flex-col gap-2 p-2 overscroll-contain overflow-y-auto min-w-pptx-image flex-shrink-0">
            {#each gallery as image}
                <div> 
                    <ImageCard on:selected={newSelect} data={image} selected={selected_img === image}/>
                </div>
            {/each}
        </div>
        <div class="overflow-hidden">
            <Bigview data={selected_img}/>
            <div class="absolute inset-x-pptx-image bottom-1 py-1 px-2">
                <Addbutton/>
                <Removebutton/>
            </div>
        </div>
    </div>
</div>      
{/if}



