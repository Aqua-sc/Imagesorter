<script>
    
    import FileSelectBox from "./fileselector.svelte"
    import ImageCard from "./imageCard.svelte"
    import Bigview from "./bigview.svelte"
    import { gallarray, selected_img} from "../stores/galleryImages";
    import {showcreatecategory} from '../stores/modal'
    import { onMount, onDestroy } from 'svelte';
    import Removebutton from "./removebutton.svelte";
    import Addbutton from "./addbutton.svelte";
    import Exportbutton from "./exportbutton.svelte";
    import Categoryview from "./categoryview.svelte";
	import categories from "../stores/categories";
	import { Keycombination } from "../classes/Keycombination";
    import { isSpecialkey } from "./createcategory.svelte"
    
    
    let gallery=[];
    let selected;
    let keycombination = new Keycombination();
    let showCreateCategory = false;
    showcreatecategory.subscribe((data) => {
        showCreateCategory = data;
    })
    let scrollablediv

    gallarray.subscribe((data) => {
        gallery = data;
    });
    
    selected_img.subscribe((data) => {
        selected = data;
    })

    onMount(() => {
        window.addEventListener('keydown', handleKeyPress);
    });

    // Don't forget to remove the event listener when the component is unmounted
    onDestroy(() => {
        window.removeEventListener('keydown', handleKeyPress);
    });

    function handleKeyPress(event) {
        //TODO: Only execute following code if the modal window is not active
        if (!showCreateCategory && event.target.tagName !== 'INPUT' && selected && !isSpecialkey(event.key)) {
            
            keycombination.altkey = event.altKey;
            keycombination.shiftkey = event.shiftKey;
            keycombination.ctrlkey = event.ctrlKey;
            keycombination.keycode = event.code;

            let category = categories.matchingShortcut(keycombination)
            if (category) {
                event.preventDefault();
                selected.setCategory(category.id)
            }
        }
        
        if (!showCreateCategory && event.target.tagName !== 'INPUT') {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                let index = gallery.indexOf(selected)
                let modifier = 1
                if (event.key === 'ArrowDown') {
                    selected = index+1 === gallery.length ? selected : gallery[index+1]
                    selected_img.update(_ => selected)
                } else if ( event.key === 'ArrowUp' ) {
                    selected = index === 0 ? selected : gallery[index-1]
                    selected_img.update(_ => selected)
                    modifier = (-1)
                }
                let divRef = selected ? selected.divRef : undefined
                if (divRef) {
                    const scrollTop = scrollablediv.scrollTop;
                    const containerHeight = scrollablediv.clientHeight;
                    if (divRef.offsetTop >= scrollTop && divRef.offsetTop + divRef.offsetHeight <= scrollTop + containerHeight) return
                    scrollablediv.scrollTop += (divRef.offsetHeight+8) * modifier
                }
            }
        }
    }

    function newSelect(event) {
        if (event.detail.data === selected) {
            selected_img.update(data => undefined);
        } else {
            selected_img.update(data => event.detail.data);
        }
    }

    
</script>

{#if gallery.length < 1}
    <div class="p-5">
        <FileSelectBox/>
    </div>
{:else}

<div id="gallery" class="overscroll-hidden w-full">
    <div class="flex absolute left-0 gap-2 overscroll-contain overflow-hidden h-gallery w-full">
        <div bind:this={scrollablediv} class="flex flex-col gap-2 p-2 overscroll-contain overflow-y-auto min-w-pptx-image flex-shrink-0 border-r">
            {#each gallery as image (image.file)}
                <div bind:this={image.divRef}> 
                    <ImageCard on:selected={newSelect} data={image} selected={selected === image} key={image.file}/>
                </div>
            {/each}
        </div>
        <div class="overflow-hidden">
            <Bigview/>
            {#if selected}
                <p class="px-2"><b>Image {gallery.indexOf(selected)+1}/{gallery.length}</b></p>
            {/if}
            <div class="absolute inset-x-pptx-image bottom-1 py-1 px-2">
                <Addbutton/>
                <Removebutton/>
                <Exportbutton/>
            </div>
            <div class="absolute bottom-5 right-5">
                <Categoryview/>
            </div>
        </div>
    </div>
</div>      
{/if}



