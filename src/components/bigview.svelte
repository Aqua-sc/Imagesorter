<script>
	import Multibutton from "./multibutton.svelte";
	import { gallarray, selected_img } from "../stores/galleryImages";
	let height;
	let width;
	let file;
	let selected
	selected_img.subscribe((data) => {
		selected = data
		if (data !== undefined) {
			let image = new Image();
			file = data.file;
			image.src = URL.createObjectURL(file);
			image.onload = function () {
				height = image.width;
				width = image.height;
			};
		} else {
			file = undefined;
		}
	})

	function humanFileSize(size) {
		var i = Math.floor(Math.log(size) / Math.log(1024));
		return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
	}

	function removeselected() {
		gallarray.remove(selected);
		selected_img.set(undefined)
	}
</script>

<div class="flex p-3 gap-4 px-2">
	<div class="flex h-selected w-selected border-4 border-black rounded-sm place-items-center">
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
				<Multibutton/>
			</div>
			<button class="bg-red-500 mr-2 px-3 py-2 rounded text-white disabled:text-gray-300 hover:bg-red-700 flex items-center justify-center gap-2 mt-2" title = "Remove picture" on:click={removeselected}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
				Remove from gallery
			</button>
		</div>
	{/if}
</div>


    

