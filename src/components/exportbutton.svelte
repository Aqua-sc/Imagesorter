<script>
    import JSZip from 'jszip';
    import FileSaver from 'file-saver'
    import { gallarray } from "../stores/galleryImages";

    let files=[]
    gallarray.subscribe((data) => {
        files = data;
    })

    function download() {
        let zip = new JSZip();
        files.forEach(a => zip.file(`${a.categoryValue.name}/${a.file.name}`, a.file));
        zip.generateAsync({ type:  'blob'}).then(function (content) {
            FileSaver.saveAs(content, 'download.zip');
        })
    }
</script>




<label> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded" on:click={download} title="Download"> 
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z" fill="rgba(255,255,255,1)"/>
        </svg> 
    </button>
</label>