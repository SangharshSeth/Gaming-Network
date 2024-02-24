<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import '@fontsource-variable/dm-sans'
    import '@fontsource-variable/inter'
    import "../app.css";
</script>

<div class="flex flex-col min-h-screen">
    <main class="flex-1">
        <slot />
    </main>
    <Footer />
</div>
