<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { fly } from "svelte/transition";
    import GithubLogo from 'svelte-radix/GithubLogo.svelte'
    import { page } from "$app/stores";
    console.log($page.data.session, "Login Page");
</script>

<title> Login </title>
<meta
    content="This is a Signup Page for Learning App Developed by Sangharsh Seth"
    name="description"
/>

<div
    class=" mt-24 border rounded-md sm: mx-auto sm: w-full sm: max-w-md h-full bg-white"
    in:fly={{ x: 100, duration: 500 }}
>
    <div class="py-6 px-6 shadow-inner rounded-xl sm:px-10">
        <div class="sm: mx-auto sm: w-full sm: max-w-md">
            <form
                class="mb-0 space-y-6 flex flex-col flex-1 h-full"
                method="POST"
            >
                <div class="mt-0 mb-0 flex flex-col gap-4">
                    <div>
                        <label
                            class="text-sm font-medium text-gray-700"
                            for="email"
                        >
                            Email
                        </label>
                        <input
                            class="w-full bg-[#f2f2f2]
                              border-gray-300 px-4 py-3 rounded shadow-sm outline-none"
                            id="email"
                            name="email"
                            placeholder="user@mail.com"
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <label
                            class="text-sm font-medium text-gray-700"
                            for="password"
                        >
                            Password
                        </label>
                        <input
                            class="w-full bg-[#f2f2f2] outline-none px-4 py-3 rounded shadow-sm"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            type="password"
                        />
                    </div>
                    <div
                        class="flex flex-row gap-1 items-center content-center"
                    >
                        <label
                            class="text-gray-700 text-sm font-medium"
                            for="terms"
                            id="terms"
                            >Forgot your Password? <a
                                class="text-md text-neutral-50 font-Poppins"
                                href="/forgot">Reset Here.</a
                            ></label
                        >
                    </div>
                    <Button
                        class="text-md  inline-flex items-center justify-center h-12 px-6 font-Poppins  py-2   rounded"
                    >
                        Submit
                    </Button>
                    <div class="flex items-center justify-center mt-2">
                        <div class="border-b border-slate-950 w-1/3"></div>
                        <div class="mx-4 text-slate-900">OR</div>
                        <div class="border-b border-slate-950 w-1/3"></div>
                    </div>

                    <Button
                        class="text-md  inline-flex items-center justify-center h-12 px-6 font-Poppins  py-2  mt-1 rounded"
                        on:click={() => signIn("github")}> <GithubLogo class="mr-2 h-4 w-4" /> Login With Github</Button
                    >
                </div>
            </form>
        </div>
    </div>
</div>
