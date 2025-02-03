import { useState, useEffect } from "react";

interface FiloItem {
  Phylum: string;
  descripcion: string;
}

export const useFetchFilos = () => {
  const [items, setItems] = useState<FiloItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL_API}list_filos`;
        const response = await fetch(apiUrl, { method: "GET" });
        
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();
        console.log(data);
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

  return { items, loading, error };
};