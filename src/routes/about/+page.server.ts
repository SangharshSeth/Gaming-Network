import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
    const session = await event.locals.auth();
    console.log("About:  how many times", session)
    if(!session){
        throw redirect(301, "/login")
    }
};