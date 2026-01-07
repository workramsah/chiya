"use client"

import { IoIosSearch } from "react-icons/io";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function Drawer() {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    console.log("Searching:", search)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="bg-[#DDDDDD] text-black "><IoIosSearch className="h-[21px] w-[21px] "/></Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSearch} className="grid gap-4">
          <Input
            placeholder="Type to search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button type="submit">
            Search
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
