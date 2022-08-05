<script> 
    export let file
    
</script>

<div class="border-2 rounded-md p-3 border-green-400">
    <div class="border-double border-4 border-black rounded-md" id="imageDiv" style="width: {Math.floor(screen.width/5) - 5}px; height: {Math.floor(screen.width/5) - 5}px">
        <img src="{URL.createObjectURL(file)}" alt=""/>
    </div>
    <p class="text-center break-all" style="width: {Math.floor(screen.width/5) - 5}px;"> <strong>Name:</strong> {file.name} </p>
</div>

<style> 
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
</style>

