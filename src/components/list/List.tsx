"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import SpinnerWithText from "@/components/loading"

export default function ListaConFiltros() {
  const [items, setItems] = useState<{ Phylum: string, descripcion: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const itemsPerPage = 5

  interface FiloItem {
    Phylum: string;
    descripcion: string;
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL_API}list_filos`;
        const response = await fetch(apiUrl, { method: "GET" });
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        const phylumList = Object.values(data as { [key: string]: FiloItem }).map((item) => ({
          Phylum: item.Phylum,
          descripcion: item.descripcion,
        }));
        setItems(phylumList);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const filteredAndSortedItems = items
    .filter((item) => item.Phylum.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.Phylum.localeCompare(b.Phylum) : b.Phylum.localeCompare(a.Phylum)))

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAndSortedItems.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const toggleDescription = (phylum: string) => {
    setExpandedItem(expandedItem === phylum ? null : phylum)
  }

  if (loading) return <SpinnerWithText></SpinnerWithText>
  if (error) return <div>Error: {error}</div>

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

      <motion.ul className="space-y-2">
        <AnimatePresence>
          {currentItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-100 p-2 rounded cursor-pointer"
              onClick={() => toggleDescription(item.Phylum)}
            >
              {item.Phylum}
              {expandedItem === item.Phylum && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-700"
                >
                  {item.descripcion}
                </motion.p>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <motion.div className="flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(filteredAndSortedItems.length / itemsPerPage) }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Button
              onClick={() => paginate(i + 1)}
              variant={currentPage === i + 1 ? "default" : "outline"}
            >
              {i + 1}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
