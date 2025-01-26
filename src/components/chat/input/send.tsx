// components/SendMessage.tsx

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendResponseToApi } from "@/app/home/chat/config/dataServices";

interface SendMessageProps {
  onSendMessage: (message: string) => void;
}

export default function SendMessage({ onSendMessage }: SendMessageProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleResponse = (response: string) => {
    sendResponseToApi(response, onSendMessage, setLoading, setError);
  };

  return (
    <div className="p-4 border-t">
      <div className="max-w-4xl mx-auto flex gap-2">
        <div className="relative flex-1">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pl-10 w-full bg-gray-100 border-0 text-center py-3 flex justify-center items-center"
          >
            <p className="text-gray-600">¡Responde las preguntas!</p>
          </motion.div>
        </div>
        <div className="flex gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Button
              className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-4 py-2 rounded-full"
              onClick={() => handleResponse("yes")}
              disabled={loading}
            >
              {loading ? "Cargando..." : "Sí"}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <Button
              className="bg-[#FF4B4B] hover:bg-[#D83D3D] text-white px-4 py-2 rounded-full"
              onClick={() => handleResponse("no")}
              disabled={loading}
            >
              {loading ? "Cargando..." : "No"}
            </Button>
          </motion.div>
        </div>
      </div>
      
      {error && <div className="text-red-600 mt-4">{error}</div>}
    </div>
  );
}
