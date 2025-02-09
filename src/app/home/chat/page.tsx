'use client';
import { useState, useRef, useEffect } from "react";
import SendMessage from "@/components/chat/input/send";
import { preguntas } from "@/base_conocimiento/phylum_data";
import { sendResponsesToApi } from "./config/dataServices";
import { handleSendMessage } from "@/utils/handleSendMessage";

interface Message {
  sender: 'BOT' | 'YO';
  text: string;
  img?: string; // Propiedad opcional para la imagen
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
  const [chatTerminado, setChatTerminado] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentQuestionIndex < preguntas.length) {
      const pregunta = preguntas[currentQuestionIndex].pregunta;
      const img = preguntas[currentQuestionIndex].img;
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "BOT", text: pregunta, img },
      ]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (userResponses.length === preguntas.length + 1) {
      sendUserResponsesToApi();
    }
  }, [userResponses]);

  useEffect(() => {
    if (respuesta) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "BOT",
          text: `El Phylum es ${respuesta.Phylum}. Descripción: ${respuesta.descripcion}`,
        },
      ]);
      setChatTerminado(true);
    }
  }, [respuesta]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
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

  const reiniciarChat = () => {
    setMessages([]);
    setCurrentQuestionIndex(0);
    setUserResponses([]);
    setRespuesta(null);
    setChatTerminado(false);
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
              {message.img && (
                <div className="mt-2">
                  <img
                    src={message.img}
                    alt="Imagen de la pregunta"
                    className="rounded-lg w-full h-auto"
                    onLoad={scrollToBottom} // Llamar scrollToBottom cuando la imagen cargue
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="pt-4">
          <SendMessage
            onSendMessage={(newMessage) =>
              handleSendMessage(
                newMessage,
                currentQuestionIndex,
                setUserResponses,
                setMessages,
                setCurrentQuestionIndex,
                preguntas
              )
            }
            loading={loading}
            error={error}
            chatTerminado={chatTerminado}
            reiniciarChat={reiniciarChat}
          />
        </div>
      </main>
    </div>
  );
}
