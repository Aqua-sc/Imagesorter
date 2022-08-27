module.exports = {
  mode: 'jit',
  content: [ './src/**/*.svelte' ],
  safelist: [
    'bg-teal-300',
    'bg-red-500',
    'bg-green-500',
    'bg-fuchsia-400',
    'bg-white'
  ], 

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  
  theme: {
    extend: {

      colors: {
        'bubblegum': '#ff77e9'
      },

      width: {
        'pptx-image': '11vw',
        'selected' : '55vw',
        'selected-text' : '20vw'
      },

      padding: {
        'square': '100%'
      },

      height: {
        'pptx-image': '11vw',
        'nav' : '6.5vh',
        'gallery' : '93.5vh',
        'selected' : '75vh'
      },

      minWidth: {
        'selected' : '60vh'
      },

      minHeight: {
        'selected' : '75vh'
      }
      }
  }
  

}


