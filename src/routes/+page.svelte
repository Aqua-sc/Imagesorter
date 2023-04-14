<svelte:head>
    <title> Imagesorter </title>
</svelte:head> 


<script>
    import Gallery from "../components/gallery.svelte"
    import { onMount } from 'svelte';

let MyComponent;

onMount(async () => {
    const module = await import('../components/gallery.svelte');
    MyComponent = module.default;
});
</script>

<!-- <h1 class="text-6xl font-bold text-center text-teal-500 p-3">Image sorter</h1>
<h2 class="text-3m text-center font-medium"> The place to be to organise your images :D </h2> -->

<div class="flex justify-center">
    <svelte:component this={MyComponent}/>
</div>



