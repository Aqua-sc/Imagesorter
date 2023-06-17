<script>
    import Icon from "$lib/assets/icon-no-water-2.png"
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title> Imagesorter </title>
</svelte:head>

<div class="text-gray-200 text-center flex-col grow  h-gallery">
    <br>
    <h1 class="text-3xl pb-3"> <u>About this website</u> </h1>
    <p>This website was made with the goal of easing the process of sorting a bunch of (e.g. holiday-)pictures</p>
    <p>It is your device that processes the data, nothing is sent to any server!</p>
    <p>Make sure to check the <a href="{base}/instructions"><u>instructions</u></a> page to get an idea of what is possible</p>
    <br>
    <p>Any bugs or suggestions can be communicated to me using <a href="https://github.com/Aqua-sc/PictureSorter/issues/new"><u>a Github issue</u></a></p>
    <div class="p-12 flex-1 flex justify-center w-full grow" style={"height: 67vh"}>
        <img class="object-scale-contain" src={Icon} alt="icon">
    </div>
    
</div>
