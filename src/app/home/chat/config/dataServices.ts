export const sendResponsesToApi = async (responses: { input: number[] }) => {
  console.log("Enviando respuestas a la API:", responses);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responses),
    });

    const responseData = await response.json();
    console.log("Respuesta del servidor:", responseData);

    if (!response.ok) {
      throw new Error(responseData.message || "Error al enviar las respuestas");
    }

    return responseData;
  } catch (error) {
    throw error;
  }
};