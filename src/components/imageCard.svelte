<script> 
    export let file
    
</script>


<div class="relative flex-shrink-0 p-0 border-4 border-black rounded-md w-pptx-image border-white" id="imageDiv">
    <img class="object-contain w-full h-full" src="{URL.createObjectURL(file)}" alt=""/>

    <div class="flex flex-col absolute bottom-0 left-0 right-0 px-1 py-2 bg-gray-800 opacity-0 hover:opacity-70 max-h-full">
        <p class="text-gray-300 text-center truncate"><strong>Name:</strong> {file.name}</p>
    </div>
</div>

<!-- <body class="p-10">
    <div class="relative w-[500px]">
        <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-0 hover:opacity-70">
            <h3 class="text-xl text-white font-bold">
                Hey, I Am The Big Boss</h3>
            <p class="mt-2 text-sm text-gray-300">Some description text. Some dummy text here. Welcome to KindaCode.com</p>
        </div>
    </div>
</body> -->
    

