"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ListaConFiltrosProps = {
  initialItems: string[]
}

export default function ListaConFiltros({ initialItems }: ListaConFiltrosProps) {
  const [items] = useState(initialItems)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const itemsPerPage = 5

  // Filtrar y ordenar items
  const filteredAndSortedItems = items
    .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.localeCompare(b)
      } else {
        return b.localeCompare(a)
      }
    })

  // Calcular items para la página actual
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAndSortedItems.slice(indexOfFirstItem, indexOfLastItem)

  // Cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Buscar filo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select onValueChange={(value) => setSortOrder(value as "asc" | "desc")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">A-Z</SelectItem>
            <SelectItem value="desc">Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ul className="space-y-2">
        {currentItems.map((item, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(filteredAndSortedItems.length / itemsPerPage) }, (_, i) => (
          <Button key={i} onClick={() => paginate(i + 1)} variant={currentPage === i + 1 ? "default" : "outline"}>
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}
