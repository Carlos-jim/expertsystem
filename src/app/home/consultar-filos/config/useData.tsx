// src/hooks/useItems.ts
import { useState, useEffect } from "react";
import { fetchItems } from "./dataServices";

interface FiloItem {
  Phylum: string;
  descripcion: string;
}

export const useItems = () => {
  const [items, setItems] = useState<FiloItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const itemsPerPage = 5;

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        setError("Error al obtener los datos");
        throw error
      } finally {
        setLoading(false);
      }
    };
    loadItems();
  }, []);

  const filteredAndSortedItems = items
    .filter((item) => item.Phylum.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.Phylum.localeCompare(b.Phylum) : b.Phylum.localeCompare(a.Phylum)));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    loading,
    error,
    currentItems,
    currentPage,
    paginate,
    setSearchTerm,
    setSortOrder,
    setCurrentPage,
  };
};
