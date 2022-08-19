<script>
    export let file

    function humanFileSize(size) {
    var i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};

</script>
<div class="flex p-3 gap-4">
    <div class="flex h-selected w-selected border-4 border-rose-500 rounded-sm place-items-center"> 
        {#if file}
            <img class="object-contain h-full w-full" src="{URL.createObjectURL(file)}" alt=""/>
        {:else}
            <p class="text-center align-middle text-2xl"> No image selected </p>
        {/if}
    </div>
    {#if file}
    <div class="w-selected-text">
        <p class="break-words text-ellipsis"><b> Name: </b> {file.name} </p>
        <p><b> Size: </b> {humanFileSize(file.size)} </p>
    </div>
    {/if}
</div>