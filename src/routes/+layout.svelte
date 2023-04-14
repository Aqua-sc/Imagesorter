<!-- Information in this file will be added to all pages. -->

<script>
    import Nav from "../components/nav.svelte"
</script>

<head>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
</head>

<body class=" bg-zinc-600" >
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