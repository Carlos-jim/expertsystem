
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

  if (currentQuestionIndex === 8 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 3
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 3
    return;
  }

  if (currentQuestionIndex === 3 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); 
    return;
  }

  if (currentQuestionIndex === 1 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 2
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 2
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
    setUserResponses((prevResponses) => [...prevResponses, 0, 0]); // Agregar un 0 para las preguntas 15 y 16
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar las preguntas 15 y 16
    return;
  }

  if (currentQuestionIndex === 14 && respuestaNumerica === 1) {
    setUserResponses((prevResponses) => [...prevResponses, 0]); 
    setCurrentQuestionIndex((prevIndex) => prevIndex + 2); 
  }

  // Avanzar a la siguiente pregunta en caso contrario
  if (currentQuestionIndex < preguntas.length - 1) {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }
};