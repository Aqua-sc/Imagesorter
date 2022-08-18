<!-- Information in this file will be added to all pages. -->

<script>
    import Nav from "../components/nav.svelte"
</script>

<body class="bg-zinc-600" >
    <div>
        <Nav/>
    </div>
    <slot></slot>
</body>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities; 
       
</style> 