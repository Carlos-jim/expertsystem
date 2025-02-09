
import { SetStateAction } from "react";

interface Message {
  sender: 'BOT' | 'YO';
  text: string;
}

export const handleSendMessage = (
  newMessage: string,
  currentQuestionIndex: number,
  setUserResponses: (value: SetStateAction<number[]>) => void,
  setMessages: (value: SetStateAction<Message[]>) => void,
  setCurrentQuestionIndex: (value: SetStateAction<number>) => void,
  preguntas: { id: number; pregunta: string; respuesta: null }[]
) => {
  const respuestaNumerica = newMessage === "Sí" ? 1 : 0;
  setUserResponses((prevResponses) => [...prevResponses, respuestaNumerica]);

  setMessages((prevMessages) => [...prevMessages, { sender: "YO", text: newMessage }]);

  // Condición para omitir la pregunta 1 si se responde a la pregunta 0
  if (currentQuestionIndex === 0 && respuestaNumerica === 0) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 1
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 1
    return;
  }
  if (currentQuestionIndex === 1 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 1]); // Agregar un 0 para la pregunta 2
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 2
    return;
  }
  if (currentQuestionIndex === 1 && respuestaNumerica === 0) {
    setUserResponses((prevResponses) => [1, ...prevResponses,]); // Agregar un 0 para la pregunta 3
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 3
    return;
  }
  if (currentQuestionIndex === 2 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[2] = 0; // Reemplazamos el valor en el índice 2 con 0
      updatedResponses[0] = 1;
      return updatedResponses;
    });
    setCurrentQuestionIndex((prevIndex) => prevIndex + 0); // Avanzamos dos preguntas
  }  
  if (currentQuestionIndex === 3 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [
      ...prevResponses.slice(0, 3), // Mantén las respuestas previas hasta la posición 4 (no incluidas)
      0, // Insertamos el 0 en la posición 4
      ...prevResponses.slice(3), // Mantenemos las respuestas posteriores a la posición 4
    ]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Avanzamos dos preguntas
    return;
  }
  if (currentQuestionIndex === 4 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[4] = 0;
      updatedResponses[3] = 1;
      return updatedResponses;
    });
    setCurrentQuestionIndex((prevIndex) => prevIndex + 0); // Avanzamos dos preguntas
  }
  if (currentQuestionIndex === 8 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [
      ...prevResponses.slice(0, 8), // Mantén las respuestas previas hasta la posición 4 (no incluidas)
      0, // Insertamos el 0 en la posición 4
      ...prevResponses.slice(8), // Mantenemos las respuestas posteriores a la posición 4
    ]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Avanzamos dos preguntas
    return;
  }
  if (currentQuestionIndex === 9 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[9] = 0;
      updatedResponses[8] = 1;
      return updatedResponses;
    });
    setCurrentQuestionIndex((prevIndex) => prevIndex + 0); // Avanzamos dos preguntas
  }
  if (currentQuestionIndex === 10 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [
      ...prevResponses.slice(0, 10), // Mantén las respuestas previas hasta la 위치 4 (no incluidas)
      0, // Insertamos el 0 en la  4
      ...prevResponses.slice(10), // Mantenemos las respuestas posteriores a la 위치 4
    ]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Avanzamos dos preguntas
    return
  }
  if (currentQuestionIndex === 11 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[11] = 0;
      updatedResponses[10] = 1;
      return updatedResponses;
    });
    setCurrentQuestionIndex((prevIndex) => prevIndex + 0); // Avanzamos dos preguntas
  }
  
  
  
  









  if (currentQuestionIndex === 8 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 3
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 3
    return;
  }


  // Condición para omitir la pregunta 12 si se responde "Sí" a la pregunta 11
  if (currentQuestionIndex === 10 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 12
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 12
    return;
  }

  // Condición para omitir la pregunta 7 si se responde "Sí" a la pregunta 6
  if (currentQuestionIndex === 5 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 7
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 7
    return;
  }
  if (currentQuestionIndex === 12 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0,0]); // Agregar un 0 para la pregunta 7
    setCurrentQuestionIndex((prevIndex) => prevIndex + 3); // Saltar la pregunta 7
    return;
  }

  // Condición para omitir las preguntas 15 y 16 si se responde "Sí" a la pregunta 14
  if (currentQuestionIndex === 13 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para las preguntas 15 y 16
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar las preguntas 15 y 16
    return;
  }

  if (currentQuestionIndex === 14 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses]); 
    setCurrentQuestionIndex((prevIndex) => prevIndex + 0); 
  }

  if (currentQuestionIndex === 15 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0 ,0]); 
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); 
  }

  if (currentQuestionIndex === 16 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0 ]); 
    setCurrentQuestionIndex((prevIndex) => prevIndex + 0); 
  }

  // Avanzar a la siguiente pregunta en caso contrario
  if (currentQuestionIndex < preguntas.length - 1) {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }
};