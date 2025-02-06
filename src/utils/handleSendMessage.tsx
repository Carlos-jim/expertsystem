
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
  
    // Condición para omitir la pregunta 12 si se responde "Sí" a la pregunta 11
    if (currentQuestionIndex === 10 && respuestaNumerica === 1) {
      setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 12
      setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 12
      return;
    }

    if (currentQuestionIndex == 8 && respuestaNumerica === 1) {
      setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 12
      setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 12
      return;
    }

    if (currentQuestionIndex == 4 && respuestaNumerica === 1) {
      setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 12
      setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 12
      return;
    }
  
    // Condición para omitir la pregunta 17 si se responde "Sí" a la pregunta 16
    if (currentQuestionIndex === 15 && respuestaNumerica === 1) {
      setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 17
      setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 17
      return;
    }
  
    // Condición para omitir la pregunta 7 si se responde "Sí" a la pregunta 6
    if (currentQuestionIndex === 5 && respuestaNumerica === 1) {
      setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 7
      setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 7
      return;
    }
  
    // Condición para omitir la pregunta 22 si se responde "Sí" a la pregunta 21
    if (currentQuestionIndex === 20 && respuestaNumerica === 1) {
      setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 22
      setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 22
      return;
    }
  
    // Condición para omitir la pregunta 20 si se responde "Sí" a la pregunta 19
    if (currentQuestionIndex === 18 && respuestaNumerica === 1) {
      setUserResponses((prevResponses) => [...prevResponses, 0]); // Agregar un 0 para la pregunta 20
      setCurrentQuestionIndex((prevIndex) => prevIndex + 2); // Saltar la pregunta 20
      return;
    }
  
    // Avanzar a la siguiente pregunta en caso contrario
    if (currentQuestionIndex < preguntas.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };