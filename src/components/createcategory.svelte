<script context="module">
  export function isSpecialkey(key) {
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

</script>

<script>
  import { createEventDispatcher } from 'svelte';
  import categories from '../stores/categories.js';
	import { Keycombination } from '../classes/Keycombination.js';
  import { onMount, onDestroy } from 'svelte';

  export let category
  let text = category ? category.name : '';
  let color = category ? category.color : '';
  let textcolor = '';
  let keycombination = category ? category.shortcut : new Keycombination()
  let confirm_error = '';
  


  


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
    if (text == '') {
      confirm_error = 'Name cannot be empty'
      return
    }
    if (!categories.isUniqueName(text) && text != category.name) {
      confirm_error = 'A category with this name already exists'
      return
    }
    if (color == '') {
      confirm_error = 'Color cannot be empty'
      return
    }

    if (!category) {
      categories.add(text, color, keycombination.isValid() ? keycombination : new Keycombination());
    } else {
      categories.update({...category, name: text, color: color, shortcut: keycombination})
    }
    closeModal();
  }

  onMount(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

  // Don't forget to remove the event listener when the component is unmounted
  onDestroy(() => {
      window.removeEventListener('keydown', handleKeyDown);
  });

  

  

  function handleKeyDown(event) {
    if (registering_shortcut) {
      shortcut_error = ''
      event.preventDefault()
      keycombination.altkey = event.altKey || keycombination.altkey
      keycombination.ctrlkey = event.ctrlKey || keycombination.ctrlkey
      keycombination.shiftkey = event.shiftKey || keycombination.shiftkey
        
        
      if (!isSpecialkey(event.key)) {
        keycombination.key = event.key
        keycombination.keycode = event.code
      }


      if (event.key === "Backspace") keycombination.clear()
      if (event.key === "Enter") {
        if (keycombination.isValid()) registering_shortcut = false
        else shortcut_error = "\nA valid shortcuts consists of:\n - zero or more modifier keys (Alt/Shift/Ctrl)\n - any other non-special key"
        //TODO: Add check for duplicate shortcuts
      }
      keycombination = keycombination
    }
    
      
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
  let cleared = false
  let shortcut_error = ''

  function deletecategory() {
    categories.delete(category.id)
    closeModal()
  }
</script>


{#if registering_shortcut}
<div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 text-center">
  <div class="">
    <p class="text-yellow-300 text-2xl text-center">{keycombination}</p>
    <p class="text-gray-400 text-sm text-center">Press "Enter" to confirm, "Backspace" to clear</p> 
    <p class="text-red-400 text-sm text-center whitespace-pre-line">{shortcut_error}</p>
  </div>
</div>

{/if}

<div class="fixed inset-0 flex items-center justify-center z-40 {registering_shortcut ? "blur-lg" : ""}">
  <div class="bg-zinc-400 border-4 border-sky-500 p-6 rounded shadow">
    <div class="flex gap-2 text-center">
      <h2 class="text-lg font-semibold mb-4 text-center">{category ? "Edit" : "Create"} category</h2>
      {#if category && category.id == 0}
        <h3 class="text-base text-center" style="margin-top: 0.4px">(default)</h3>
      {/if}
    </div>

    <div class="mb-4 flex items-center">
      <label for="text-input" class="w-20">Name:</label>
      <input type="text" id="text-input" bind:value={text} class="flex-1 border border-gray-300 p-2 rounded" disabled={registering_shortcut} on:input={() => confirm_error = ''}/>
    </div>
    
    <div class="mb-4 flex items-center">
      <label for="color-input" class="w-20">Color:</label>
      <label class="flex-1 items-center">
        <div class="flex-1 h-8 rounded-md border-2 border-double border-black flex items-center justify-center" style="background-color: {color} " on:input={() => confirm_error = ''}>
          <p class="text-center" style="color: {textcolor}">{color}</p>
        </div>
        <input type="color" id="color-input" bind:value={color} on:click={() => confirm_error= ''} class="sr-only" disabled={registering_shortcut}/>
      </label>
    </div>

    <div class="mb-4 flex items-center">
      <label for="color-input" class="w-20">Shortcut:</label>
      <label class="flex-1 items-center">
        {#if !keycombination.isValid() || registering_shortcut}
          <button class="rounded bg-transparent text-blue-700" on:click={() => {registering_shortcut = true; registering_shortcut = !cleared; cleared = false}} disabled={registering_shortcut || keycombination.isValid()}><u>Register shortcut</u></button>
        {:else}
          <div class="flex gap-2">
            <p>{keycombination}</p>
            <button class="text-gray-700" on:click={() => {keycombination.clear(); registering_shortcut = true}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
            <button class="text-gray-700" on:click={() => {keycombination.clear(); keycombination=keycombination; cleared=true}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>              
            </button>
          </div>
        {/if}
      </label>
    </div>
    
    <div class="flex justify-center">
      {#if category}
        <button class="bg-red-500 mr-2 px-3 py-2 rounded text-white disabled:text-gray-300 hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed" title={category.id == 0 ? "Cannot delete default category" : "Delete"} disabled={category.id == 0} on:click={deletecategory}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
      </button>
      {/if}
      <button class="mr-2 px-4 py-2 rounded bg-gray-300 border-gray-300 border-2 {registering_shortcut ? "" : "hover:bg-gray-400 hover"}" on:click={closeModal} disabled={registering_shortcut}>Cancel</button>
      <button class="px-4 py-2 rounded bg-blue-500 text-white {registering_shortcut ? "" : "hover:bg-blue-600"}" on:click={confirmModal} disabled={registering_shortcut}>Confirm</button>
    </div>
    <p class="text-red-600 text-center whitespace-pre-line {confirm_error ? "pt-4" : ""} ">{confirm_error}</p>
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

