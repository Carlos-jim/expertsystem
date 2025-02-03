import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SendMessageProps {
  onSendMessage: (message: string) => void; // Función para notificar al padre
  loading: boolean; // Estado de carga
  error: string | null; // Estado de error
}

export default function SendMessage({ onSendMessage, loading, error }: SendMessageProps) {
  const handleResponse = (response: string) => {
    onSendMessage(response); // Notificar al padre con la respuesta del usuario
  };

  return (
    <div className="p-4 border-t">
      <div className="max-w-4xl justify-center mx-auto flex gap-2">
        <div className="flex gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Button
              className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-4 py-2 rounded-full"
              onClick={() => handleResponse("Sí")} // Enviar "yes"
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
              onClick={() => handleResponse("No")} // Enviar "no"
              disabled={loading}
            >
              {loading ? "Cargando..." : "No"}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mostrar errores si existen */}
      {error && <div className="text-red-600 mt-4">{error}</div>}
    </div>
  );
}
