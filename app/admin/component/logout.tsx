"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function Logout(){
    async function handlelogout(){
        await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
               redirect("/signin")// redirect to login page
              },
            },
          });
    }
    return(
        <button onClick={handlelogout}>Logout</button>
    )
}