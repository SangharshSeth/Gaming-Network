import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
export const actions: Actions = {
    login: async ({request}) => {
        const formData = await request.formData();
        console.log(formData)
        const email = formData.get("email");
        const passcode = formData.get("password");
        let platform = [];
        const response = await fetch("http://localhost:8080/auth/login", {
            body: JSON.stringify({
                "email": email,
                "password": passcode,
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