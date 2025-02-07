"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import SpinnerWithText from "@/components/loading";
import { Trash2 } from "lucide-react";
import { useFetchFilos } from "@/app/home/consultar-filos/config/useData";
import { deleteFilo } from "@/app/home/consultar-filos/agregar/config/dataServices";

export default function ListaConFiltros() {
  const { items, loading, error, refetch } = useFetchFilos(); // Añadir refetch
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const itemsPerPage = 5;

  // Crear una lista con índices originales
  const itemsWithIndex = items.map((item, index) => ({ ...item, originalIndex: index }));

  // Filtrar y ordenar manteniendo los índices originales
  const filteredAndSortedItems = itemsWithIndex
    .filter((item) =>
      item.Phylum.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.Phylum.localeCompare(b.Phylum)
        : b.Phylum.localeCompare(a.Phylum)
    );

  console.log("Filtrados y ordenados:", filteredAndSortedItems);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleDescription = (phylum: string) => {
    setExpandedItem(expandedItem === phylum ? null : phylum);
  };

  const handleDelete = async (originalIndex: number) => {
    console.log("Deleting filo with original index:", originalIndex);
    const result = await deleteFilo(originalIndex);
    if (result.success) {
      console.log(result.message);
      refetch(); // Recargar los datos después de eliminar
    } else {
      console.error(result.message);
    }
  };

  if (loading) return <SpinnerWithText />;
  if (error) return <div>Error: {error}</div>;

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
        <Select
          onValueChange={(value) => setSortOrder(value as "asc" | "desc")}
        >
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
              key={item.originalIndex} // Usar el índice original como clave
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-100 p-2 rounded cursor-pointer flex justify-between items-center"
              onClick={() => toggleDescription(item.Phylum)}
            >
              <div>
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
              </div>
              <div className="min-w-[30px] flex justify-end">
                <Trash2
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.originalIndex); // Usar el índice original para eliminar
                  }}
                />
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <motion.div className="flex justify-center space-x-2">
        {Array.from(
          { length: Math.ceil(filteredAndSortedItems.length / itemsPerPage) },
          (_, i) => (
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
          )
        )}
      </motion.div>
    </div>
  );
}