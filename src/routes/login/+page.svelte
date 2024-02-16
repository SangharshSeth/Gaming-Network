<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { fly } from "svelte/transition";

    import { page } from "$app/stores";
    console.log($page.data.session, "Login Page")

</script>

<title> Login </title>
<meta
    content="This is a Signup Page for Learning App Developed by Sangharsh Seth"
    name="description"
/>

<div
    class=" mt-48 border rounded-md sm: mx-auto sm: w-full sm: max-w-md h-full"
    in:fly={{ y: 50, duration: 1000 }}
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
                                class="text-emerald-700"
                                href="/forgot">Reset Here.</a
                            ></label
                        >
                    </div>
                    <button
                        class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 mt-1 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div
                class="bg-white py-8 px-6 flex justify-between gap-4 w-full rounded-xl sm:px-10"
            >
                <Button
                    class="w-full"
                    variant="outline"
                    on:click={() => signIn("github")}>Github</Button
                >
                <Button variant="outline" class="w-full" on:click={() => signOut()}
                    >SignOut</Button
                >
            </div>
        </div>
    </div>
</div>
