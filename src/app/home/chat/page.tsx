'use client';
import { useState, useRef, useEffect } from "react";
import SendMessage from "@/components/chat/input/send";
import { preguntas } from "@/base_conocimiento/phylum_data";
import { sendResponsesToApi } from "./config/dataServices";

interface Message {
  sender: 'BOT' | 'YO';
  text: string;
}

interface Respuesta {
  Phylum: string;
  descripcion: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [respuesta, setRespuesta] = useState<Respuesta | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Efecto para hacer la primera pregunta al cargar el componente
  useEffect(() => {
    if (currentQuestionIndex < preguntas.length) {
      const pregunta = preguntas[currentQuestionIndex].pregunta;
      setMessages((prevMessages) => [...prevMessages, { sender: "BOT", text: pregunta }]);
    }
  }, [currentQuestionIndex]);

  // Efecto para enviar respuestas cuando se completa el cuestionario
  useEffect(() => {
    if (userResponses.length === preguntas.length) {
      sendUserResponsesToApi();
    }
  }, [userResponses]);

  // Efecto para mostrar la respuesta del servidor cuando esté disponible
  useEffect(() => {
    if (respuesta) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "BOT",
          text: `El Phylum es ${respuesta.Phylum}. Descripción: ${respuesta.descripcion}`,
        },
      ]);
    }
  }, [respuesta]);

  // Efecto para desplazar el chat hacia abajo cuando se agregan nuevos mensajes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSendMessage = (newMessage: string) => {
    const respuestaNumerica = newMessage === "Sí" ? 1 : 0;
    setUserResponses((prevResponses) => [...prevResponses, respuestaNumerica]);

    setMessages((prevMessages) => [...prevMessages, { sender: "YO", text: newMessage }]);

    if (currentQuestionIndex < preguntas.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const sendUserResponsesToApi = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await sendResponsesToApi({ input: userResponses });
      setRespuesta(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Hubo un problema al enviar las respuestas.");
      throw error;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1 overflow-y-auto p-6 space-y-4" ref={containerRef}>
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === "YO" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] md:max-w-[60%] rounded-lg p-4 shadow-md transition-all ${
                message.sender === "YO" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
              }`}
            >
              <div className="font-semibold text-sm mb-2">{message.sender}</div>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        <div className="pt-4">
          <SendMessage onSendMessage={handleSendMessage} loading={loading} error={error} />
        </div>
      </main>
    </div>
  );
}