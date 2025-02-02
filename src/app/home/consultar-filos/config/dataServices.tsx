interface ApiResponse {
    [key: string]: {
      Phylum: string;
      descripcion: string;
    };
  }
  
  // Función para obtener los items
  export const fetchItems = async (): Promise<{ Phylum: string; descripcion: string }[]> => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL_API}list_filos`;
      const response = await fetch(apiUrl, { method: "GET" });
  
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
  
      // Ahora tipamos explícitamente la respuesta
      const data: ApiResponse = await response.json();
  
      // Mapeamos los valores para crear una lista con los items correctos
      return Object.values(data).map((item) => ({
        Phylum: item.Phylum,
        descripcion: item.descripcion,
      }));
    } catch (error) {
      throw error;
    }
  };
  