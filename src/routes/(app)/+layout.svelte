<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import '@fontsource-variable/dm-sans'
    import '@fontsource-variable/inter'
    import "../app.css";
    import Header from "$lib/Header.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1">
        <slot />
    </main>
    <!-- <Footer /> -->
</div>