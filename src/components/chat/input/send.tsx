import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { BotMessageSquare } from "lucide-react";

interface SendMessageProps {
  onSendMessage: (message: string) => void; // Función para notificar al padre
  loading: boolean; // Estado de carga
  error: string | null; // Estado de error
  chatTerminado: boolean; // Estado para saber si el chat ha terminado
  reiniciarChat: () => void; // Función para reiniciar el chat
}

export default function SendMessage({
  onSendMessage,
  loading,
  error,
  chatTerminado,
  reiniciarChat,
}: SendMessageProps) {
  const handleResponse = (response: string) => {
    console.log("Enviando respuesta:", response);
    onSendMessage(response); 
  };

  return (
    <div className="p-4 border-t">
      <div className="max-w-4xl justify-center mx-auto flex gap-2">
        <AnimatePresence>
          {!chatTerminado ? (
            <motion.div
              key="botones-si-no"
              className="flex gap-2"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <Button
                  className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-4 py-2 rounded-full"
                  onClick={() => handleResponse("Sí")} // Enviar "Sí"
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
                  onClick={() => handleResponse("No")} // Enviar "No"
                  disabled={loading}
                >
                  {loading ? "Cargando..." : "No"}
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="boton-reiniciar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Button
                className="bg-[#4CAF50] hover:bg-[#45A049] text-white px-4 py-2 rounded-full"
                onClick={reiniciarChat}
              >
                Iniciar Nuevo Chat
                <BotMessageSquare className="ml-2" size={40}/>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && <div className="text-red-600 mt-4">{error}</div>}
    </div>
  );
}