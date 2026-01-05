import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function Products() {
  return (
    <Select>
      <SelectTrigger
        className="
          h-16
          font-bold
          px-0 
          bg-transparent 
          border-none 
          text-black
          shadow-none 
          focus:ring-0 
          focus:ring-offset-0
          hover:bg-transparent
        "
      >
        <SelectValue className="text-black" placeholder="Products" />
      </SelectTrigger>

      <SelectContent className="bg-[#DDDDDD] text-black border border-gray-700">
        <SelectItem value="p1" className="text-black">Product 1</SelectItem>
        <SelectItem value="p2">Product 2</SelectItem>
        <SelectItem value="p3">Product 3</SelectItem>
      </SelectContent>
    </Select>
  )
}
