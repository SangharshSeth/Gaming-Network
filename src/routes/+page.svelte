<script lang="ts">
    import { fly } from "svelte/transition";
    import { Button } from "$lib/components/ui/button";
</script>

<div
    class="flex flex-row items-center content-center overflow-x-hidden w-full rounded-sm"
    in:fly={{ x: 100, duration: 500 }}
>
    <div
        class="flex flex-col gap-6 p-8 items-center h-screen justify-center w-full"
    >
        <div class="flex flex-row gap-6">
            <p class="font-bold font-Poppins text-7xl">The</p>
            <p class="font-bold font-Poppins text-7xl">Gaming</p>
            <p class="font-bold font-Poppins text-7xl">Social Network</p>
        </div>
        <div class="flex flex-row justify-between gap-4">
            <Button
                variant="secondary"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-nonefont-Poppins"
                href="/login">Sign Up</Button
            >
            <Button
                variant="destructive"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none font-Poppins"
                href="/login">Login</Button
            >
        </div>
    </div>
</div>
