
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "$env/static/private"
import GitHub from "@auth/core/providers/github"
import { SvelteKitAuth } from "@auth/sveltekit"

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })],
})