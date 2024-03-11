<script lang="ts">
    import '@fontsource-variable/dm-sans'
    import '@fontsource-variable/inter'
    import SideNavBar from "$lib/SideNavBar.svelte";
</script>

<div class="flex flex-row min-w-screen">
    <SideNavBar/>
    <main class="flex-1">
        <slot />
    </main>
</div>