import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const load = async (event: any) => {

    const sessionId = event.cookies.get("sessionId");
    if (sessionId) {
        throw redirect(301, "/profile");
    }
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        console.log(formData)
        const email = formData.get("email");
        const passcode = formData.get("password");
        const response = await fetch("https://gaming-network-backend.onrender.com/auth/login", {
            body: JSON.stringify({
                "email": email,
                "password": passcode,
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            const sessionId = response.headers.get("Authorization");
            cookies.set("sessionId", sessionId?.split("Bearer ")[1] ?? "", {
                path: "/",
            });

            throw redirect(301, "/profile");
        }

        return {
            error: await response.text(),
        };

    }
}
