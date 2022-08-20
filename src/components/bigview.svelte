<script>
	export let file;
	let height;
	let width;
	let category;

	$: {
		if (file !== undefined) {
			let image = new Image();
			image.src = URL.createObjectURL(file);
			console.log(image);
			image.onload = function () {
				height = image.width;
				width = image.height;
			};
		}
	}

	function humanFileSize(size) {
		var i = Math.floor(Math.log(size) / Math.log(1024));
		return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
	}
</script>

<div class="flex p-3 gap-4">
	<div class="flex h-selected w-selected border-4 border-rose-500 rounded-sm place-items-center">
		{#if file}
			<img
				class="object-contain h-full w-full"
				src={URL.createObjectURL(file)}
				alt=""
				id="centerimg"
			/>
		{:else}
			<p class="text-center text-2xl w-full">No image selected</p>
		{/if}
	</div>
	{#if file}
		<div class="w-selected-text">
			<p class="break-words text-ellipsis"><b> Name: </b> {file.name}</p>
			<p><b> Size: </b> {humanFileSize(file.size)}</p>
			<p><b> Dimensions: </b> {height} x {width}</p>
			<div class="flex text-center">
				<p class="py-2"><b> Category: </b></p>
				<button
					class="flex relative inline-flex items-center justify-center p-1 mb-2 mr-2 ml-1  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
				>
					<span
						class="relative px-2.5 py-2.5 transition-all ease-in duration-75 bg-white bg-zinc-600 rounded-md group-hover:bg-opacity-0">
						Default
                        
					</span>
					<svg aria-hidden="true" focusable="false"data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
						<path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
					</svg>
				</button>
			</div>
		</div>
	{/if}
</div>


    

