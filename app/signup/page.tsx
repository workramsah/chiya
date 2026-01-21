"use client"

import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const [names, setNames] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handle(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    await authClient.signUp.email(
      {
        name: names,
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          console.log("making the request...")
        },
        onSuccess: () => {
          redirect("/dashboard")
        },
        onError: (ctx) => {
          alert(ctx.error.message)
          setLoading(false)
        },
      }
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 px-4">
      <form
        onSubmit={handle}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account 
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Join us and start your journey
          </p>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          required
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?
         <Link href="/signin"
            className="text-emerald-600 font-medium hover:underline ml-1"
          >
            Sign in
            </Link> 
        </p>
      </form>
    </div>
  )
}
