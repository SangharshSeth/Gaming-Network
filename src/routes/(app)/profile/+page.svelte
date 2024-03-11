<script lang="ts">
    export let data;

    import { page } from "$app/stores";
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { signIn, signOut } from "@auth/sveltekit/client";

    $:user = data.session;
</script>

<div style="margin-top: 100px;" class="mx-72">
    {#if user?.user?.name}
    <Card.Root class="w-[380px] flex flex-col justify-center items-center">
        <Card.Header>
          <Card.Title>{user.user.name}</Card.Title>
          <Card.Description>{user.user.email}</Card.Description>
        </Card.Header>
        <Card.Content>
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="{user.user.image}" class="rounded-full" height="160px" width="160px"/>
        </Card.Content>
        <Card.Content>
            {#if user}
            <Button variant="outline" class="w-full" on:click={() => signOut()}
                >SignOut</Button
            >
            {/if}
        </Card.Content>
      </Card.Root>
    {/if}
</div>
