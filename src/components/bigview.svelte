<script>
	import Multibutton from "./multibutton.svelte";
	export let file;
	let height;
	let width;
	let category;

	$: {
		if (file !== undefined) {
			let image = new Image();
			image.src = URL.createObjectURL(file);
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
				<Multibutton/>
			</div>
		</div>
	{/if}
</div>


    

