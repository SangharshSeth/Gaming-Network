<script lang="ts">

    import { fly } from "svelte/transition";
</script>

<div class="flex  flex-row items-center content-center overflow-x-hidden  w-full rounded-sm" in:fly={{x: 100, duration: 500}}>
    <div class="flex flex-col gap-6 p-8 items-center h-screen  justify-center w-full">
        <div class="flex flex-row gap-6">
            <p class="text-6xl"><span class="text-emerald-600">T</span>he</p>
            <p class="text-6xl"><span class="text-emerald-600">G</span>aming</p>
            <p class="text-6xl"><span class="text-emerald-600">S</span>ocial Network</p>
        </div>

        <a class="py-4 px-16 bg-emerald-600 rounded text-white" href="/login">Explore</a>
        
    </div>
    
</div>