<script (lang="ts")>
    export let data;
    import { Button } from "$lib/components/ui/button";
    import { SignIn, SignOut } from "@auth/sveltekit/components";

</script>
<div style="margin-top: 100px;">
<p>About</p>

<a href="/">Home</a>
<Button variant="outline" class="w-full" on:click={() => SignOut()}
    >SignOut</Button
>
</div>