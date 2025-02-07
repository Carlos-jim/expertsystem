export const sendFiloData = async <T>(formData: T) => {
  console.log("Enviando datos a la API:", formData);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}new_filo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      const responseData = await response.json()
      if (!response.ok) {
        throw new Error(responseData.message || "Error al enviar los datos")
      }
      return { success: true, message: "Datos enviados con éxito" }
    } catch (error) {
      if (error instanceof Error) {
        return { success: false, message: `Error: ${error.message}` }
      } else {
        return { success: false, message: "Unknown error" }
      }
    }
  }

  export const deleteFilo = async (index: number) => {
    console.log("Requesting to delete filo with index:", index)
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}delete_filo`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index: index }),
      });
  
      console.log("Respuesta del servidor:", response);
  
      const responseData = await response.json();
      console.log("Datos de respuesta del servidor:", responseData);
  
      if (!response.ok) {
        throw new Error(responseData.message || "Error al eliminar el filo");
      }
  
      return { success: true, message: "Filo eliminado exitosamente" };
    } catch (error) {
      if (error instanceof Error) {
        return { success: false, message: `Error: ${error.message}` };
      } else {
        return { success: false, message: "Unknown error" };
      }
    }
  };
  