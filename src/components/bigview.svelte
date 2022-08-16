<script>
    export let file


</script>
<div class="">
{#if file}
    <img class="object-contain w-1/2" src="{URL.createObjectURL(file)}" alt=""/>
{:else}
    <p> No image selected </p>
{/if}
</div>