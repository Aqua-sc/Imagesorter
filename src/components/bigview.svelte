<script>
    export let file


</script>
<div class="">
{#if file}
    <div class="h-20 w-20"> 
        <img class="object-contain" src="{URL.createObjectURL(file)}" alt=""/>
    </div> 
{:else}
    <p> No image selected </p>
{/if}
</div>