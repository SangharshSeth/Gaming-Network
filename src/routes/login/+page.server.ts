import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
    const session = await event.locals.auth();
    console.log("how many times", session)
    if(session){
         throw redirect(303, "/profile")
    }
    return {
        success: true
    }
};