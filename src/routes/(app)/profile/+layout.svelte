<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import '@fontsource-variable/dm-sans'
    import '@fontsource-variable/inter'
    import "../../app.css";
    import Header from "$lib/Header.svelte";
    import SideNavBar from "$lib/SideNavBar.svelte";
</script>

<div class="flex flex-row min-w-screen">
    <SideNavBar/>
    <main class="flex-1">
        <slot />
    </main>
</div>