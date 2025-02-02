export const sendFiloData = async (formData: any) => {
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
      return { success: false, message: `Error: ${error.message}` }
    }
  }