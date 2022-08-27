<script>
    import { gallarray } from "../stores/galleryImages";
</script>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded" on:click={() => gallarray.clear()} title="Remove All Files"> 
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="white"/>
    </svg> 
</button>