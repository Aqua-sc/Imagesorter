module.exports = {
  mode: 'jit',
  purge: [ './src/**/*.svelte' ],

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
        'selected' : '60vw'
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


