"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handle(e: any) {
        e.preventDefault();
        const { data, error } = await authClient.signIn.email({
            
            email,
            /**
             * The user password
             */
            password,
            /**
             * A URL to redirect to after the user verifies their email (optional)
             */
            callbackURL: "/admin/cart",
            /**
             * remember the user session after the browser is closed. 
             * @default true
             */
            rememberMe: false
        }, {
            //callbacks
        });
        console.log("data",data)
    }
    return (
        <>
           <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  <form
    onSubmit={handle}
    className="bg-white w-[360px] p-8 rounded-2xl shadow-2xl space-y-6"
  >
    <h1 className="text-3xl font-bold text-center text-gray-800">
      Welcome Back 
    </h1>
    <p className="text-center text-sm text-gray-500">
      Please login to your account
    </p>

    <div className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300"
    >
      Login
    </button>
      <Link href="/signup">
    <p className="text-center text-sm text-gray-500">
      Don’t have an account?
      <span className="text-indigo-600 font-medium cursor-pointer hover:underline ml-1">
        Sign up
      </span>
    </p></Link>
  </form>
</div>

        </>
    )
}