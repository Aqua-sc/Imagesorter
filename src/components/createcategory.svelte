<script>
  import { createEventDispatcher } from 'svelte';
  import categories from '../stores/categories.js';

  let text = '';
  let color = '';
  let textcolor = '';


  


  $: {
        if (color) {
          textcolor = getContrastColor(color)
        }
  }

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close');
  }

  function confirmModal() {
    if (text == '' || color == '') return
    let id = categories.getLength() + 1
    categories.add(id, { name: text, color: color, id: id});
    closeModal();
  }

  // Created by chatGPT
  function getContrastColor(bgColor) {
    if (!bgColor) return '#000'; // Default to black if no background color is provided

    // Convert the hexadecimal color to RGB values
    const hexToRGB = (hex) =>
      hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));

    const [r, g, b] = hexToRGB(bgColor);

    // Calculate the relative luminance of the color
    const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

    // Determine the contrast color based on the luminance value
    return luminance > 0.5 ? '#000' : '#fff';
  }
</script>

<div class="fixed inset-0 flex items-center justify-center z-50 ">
  <div class="bg-zinc-400 border-4 border-sky-500 p-6 rounded shadow">
    <h2 class="text-lg font-semibold mb-4">Create category</h2>

    <div class="mb-4 flex items-center">
      <label for="text-input" class="w-16">Name:</label>
      <input type="text" id="text-input" bind:value={text} class="flex-1 border border-gray-300 p-2 rounded" />
    </div>
    
    <div class="mb-4 flex items-center">
      <label for="color-input" class="w-16">Color:</label>
      <label class="flex-1 items-center">
        <div class="flex-1 h-8 rounded-md border-2 border-double border-black flex items-center justify-center" style="background-color: {color}">
          <p class="text-center" style="color: {textcolor}">{color}</p>
        </div>
        <input type="color" id="color-input" bind:value={color} class="sr-only" />
      </label>
    </div>
    
    <div class="flex justify-end">
      <button class="mr-2 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400" on:click={closeModal}>Cancel</button>
      <button class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" on:click={confirmModal}>Confirm</button>
    </div>
  </div>
</div>

<style>
  .fixed {
    /* Make the modal window cover the entire screen */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    /* Add a semi-transparent background overlay */
    background-color: rgba(0, 0, 0, 0.5);
    
    /* Display the modal window in the center */
    display: flex;
    align-items: center;
    justify-content: center;
  }


</style>

