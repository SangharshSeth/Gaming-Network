import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const load = async (event: any) => {

    const sessionId = event.cookies.get("sessionId");
    if (sessionId) {
        throw redirect(301, "/profile");
    }
};

export const actions: Actions = {
    signup: async ({request}) => {
        const formData = await request.formData();
        console.log(formData)
        const email = formData.get("email");
        const passcode = formData.get("password");
        let platform = [];
        formData.get("pcgaming") === "on"? platform.push("pc"): "";
        formData.get("xbox") === "on"? platform.push("xbox"): "";
        formData.get("playstation") === "on"? platform.push("playstation"): "";
        const response = await fetch("https://gaming-network-backend.onrender.com/auth/signup", {
            body: JSON.stringify({
                "email": email,
                "password": passcode,
                "platform": platform
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        const headers = await response.headers;
        console.log(result)
        console.log(headers)
        throw redirect(301, '/')

    }
}