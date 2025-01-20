'use client'
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import SendMessage from "@/components/chat/input/send";

interface Message {
  sender: 'BOT' | 'YO';
  text: string;
}

export default function ChatInterface() {
  const [messages] = useState<Message[]>([
    {
      sender: 'YO',
      text: 'Lorema maka lasla la sw ulsa pa urtira. Lorema maka lasla la sw ulsa pa urtira. Lorema maka lasla la sw ulsa pa urtira'
    },
    {
      sender: 'BOT',
      text: 'Lorema maka lasla la sw ulsa pa urtira'
    },
    {
      sender: 'YO',
      text: 'Lorema maka lasla la sw ulsa pa urtira'
    }
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.2, // Intervalo entre animaciones
        }
      );
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-1 overflow-y-auto p-6 space-y-4" ref={containerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === 'YO' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] md:max-w-[60%] rounded-lg p-4 ${
                message.sender === 'YO' ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              {message.sender === 'BOT' && (
                <div className="font-semibold text-sm mb-1">BOT</div>
              )}
              {message.sender === 'YO' && (
                <div className="font-semibold text-sm mb-1 text-right">YO</div>
              )}
              <p className="text-gray-800">{message.text}</p>
            </div>
          </div>
        ))}
      </main>

      <SendMessage></SendMessage>
    </div>
  );
}
