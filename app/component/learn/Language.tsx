
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Language() {
  return (
    
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" className="text-black" />
      </SelectTrigger>
      <SelectContent className="bg-white text-black">
        <SelectGroup>
          <SelectLabel>Languae</SelectLabel>
          <SelectItem value="apple">English</SelectItem>
          <SelectItem value="banana">Japnese</SelectItem>
          <SelectItem value="blueberry">Nepali</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    
  )
}
