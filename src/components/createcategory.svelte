<script>
  import { createEventDispatcher } from 'svelte';
  import categories from '../stores/categories.js';
	import { Keycombination } from '../classes/Keycombination.js';
  import { onMount, onDestroy } from 'svelte';


  let text = '';
  let color = '';
  let textcolor = '';
  let keycombination = new Keycombination(false, false, false, '')


  


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
    categories.add(text, color);
    closeModal();
  }

  onMount(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

  // Don't forget to remove the event listener when the component is unmounted
  onDestroy(() => {
      window.removeEventListener('keydown', handleKeyDown);
  });

  function isSpecialkey(key) {
    const specialKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'Control', 'Shift', 'Alt', 'Meta',  // Meta represents the Windows key (⌘ on macOS)
        'Backspace', 'Enter',
        'Tab', 'Escape',
        'PageUp', 'PageDown', 'Home', 'End',
        'Insert', 'Delete',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
      ];

    return (specialKeys.includes(key))
  }

  function handleKeyDown(event) {
    event.preventDefault()
    keycombination.altkey = event.altKey || keycombination.altkey
    keycombination.ctrlkey = event.ctrlKey || keycombination.ctrlkey
    keycombination.shiftkey = event.shiftKey || keycombination.shiftkey
      
      
    if (!isSpecialkey(event.key)) {
      keycombination.key = event.code
      if (keycombination.key.startsWith("Key")) keycombination.key = keycombination.key.substring(3)
    }


    if (event.key === "Backspace") keycombination.clear()
    if (event.key === "Enter") registering_shortcut = false //TODO: check for valid keycombination
    keycombination = keycombination
      
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


  let registering_shortcut = false
</script>


{#if registering_shortcut}
<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
  <div class="">
    <p class="text-yellow-300 text-2xl">{keycombination}</p>
    <p class="text-gray-700 text-lg">Press "Enter" to confirm"</p> 
    <p class="text-gray-700 text-lg">Press "Backspace" to clear</p> 
  </div>
</div>

{/if}

<div class="fixed inset-0 flex items-center justify-center z-40 {registering_shortcut ? "blur-lg" : ""}">
  <div class="bg-zinc-400 border-4 border-sky-500 p-6 rounded shadow">
    <h2 class="text-lg font-semibold mb-4">Create category</h2>

    <div class="mb-4 flex items-center">
      <label for="text-input" class="w-20">Name:</label>
      <input type="text" id="text-input" bind:value={text} class="flex-1 border border-gray-300 p-2 rounded" disabled={registering_shortcut}/>
    </div>
    
    <div class="mb-4 flex items-center">
      <label for="color-input" class="w-20">Color:</label>
      <label class="flex-1 items-center">
        <div class="flex-1 h-8 rounded-md border-2 border-double border-black flex items-center justify-center" style="background-color: {color}">
          <p class="text-center" style="color: {textcolor}">{color}</p>
        </div>
        <input type="color" id="color-input" bind:value={color} class="sr-only" disabled={registering_shortcut}/>
      </label>
    </div>

    <div class="mb-4 flex items-center">
      <label for="color-input" class="w-20">Shortcut:</label>
      <label class="flex-1 items-center">
          <button class="rounded bg-transparent text-blue-700" on:click={() => registering_shortcut = true} disabled={registering_shortcut}><u>Register shortcut</u></button>
      </label>
    </div>
    
    <div class="flex justify-end">
      <button class="mr-2 px-4 py-2 rounded bg-gray-300 {registering_shortcut ? "" : "hover:bg-gray-400"}" on:click={closeModal} disabled={registering_shortcut}>Cancel</button>
      <button class="px-4 py-2 rounded bg-blue-500 text-white {registering_shortcut ? "" : "hover:bg-blue-600"}" on:click={confirmModal} disabled={registering_shortcut}>Confirm</button>
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

