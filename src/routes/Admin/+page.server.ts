import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default:async ({ cookies, request }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        if(email == "admin@demo.com" && password == "Helloworld"){
            cookies.set("access","true", { path: "/", sameSite: "strict" });
            throw redirect(302, "/Admin/Dashboard"); 
        }    
        return{
            email,
            message: "Email or password is not valid",
        };
    },
};

