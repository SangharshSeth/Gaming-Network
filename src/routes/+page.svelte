<script lang="ts">

    import { fly } from "svelte/transition";
    import { Button } from "$lib/components/ui/button";
</script>

<div class="flex flex-row items-center content-center overflow-x-hidden  w-full rounded-sm" in:fly={{x: 100, duration: 500}}>
    <div class="flex flex-col gap-6 p-8 items-center h-screen  justify-center w-full">
        <div class="flex flex-row gap-6">
            <p class="text-slate-950 font-bold text-7xl">The</p>
            <p class="text-slate-950 font-bold text-7xl">Gaming</p>
            <p class="text-slate-950 font-bold text-7xl">Social Network</p>
        </div>

        <Button variant="outline" class="py-6 px-16 text-1xl border rounded-md bg-emerald-400 text-white hover:bg-emerald-500 hover:text-white" href="/login">EXPLORE</Button>
        
    </div>
    
</div>