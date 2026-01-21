"use client"

import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"

export default function Accountlist() {
  const router = useRouter()

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value

    if (value === "logout") {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/signin")
          },
        },
      })
      return
    }

    if (value) {
      router.push(value)
    }
  }

  return (
    <div>
      <select
        defaultValue=""
        onChange={handleChange}
        className="bg-transparent outline-none border-none focus:ring-0 cursor-pointer"
      >
        <option value="" disabled>
          Account
        </option>
        <option value="/signup">Sign Up</option>
        <option value="/signin">Sign In</option>
        <option value="logout">Sign Out</option>
      </select>
    </div>
  )
}
