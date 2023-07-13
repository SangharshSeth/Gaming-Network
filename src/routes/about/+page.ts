import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({fetch}) => {
    const products = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = products.json()
    console.log(data);
    return {
        data: data
    }
};