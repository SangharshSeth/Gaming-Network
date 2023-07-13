import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
export const actions: Actions = {
    signup: async ({request}) => {
        const formData = await request.formData();
        console.log(formData)
        throw redirect(301, '/user')
    }
}