
import { redirect } from "@sveltejs/kit";

export const load = async (event: any) => {

    const sessionId = event.cookies.get("sessionId");
    if (!sessionId) {
        throw redirect(301, "/login");
    }
    else {
        return {
            "data": event.cookies.get("sessionId")
        }
    }
};

