"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Robot from "../../../public/logo/robot.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExpertSystem() {
  const [hasMounted, setHasMounted] = useState(false);

  // Este efecto asegura que las animaciones solo se apliquen después de que el componente esté montado
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Esto permite la animación al cambiar de página
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-white">
        <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Este es el mejor sistema experto que podrás encontrar
              </motion.h2>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-lg text-gray-600 pb-6"
              >
                Ten una maravillosa charla con nuestro sistema experto
              </motion.p>
              <div className="flex flex-col space-y-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    scale: { duration: 0.6, ease: "backOut" },
                    opacity: { duration: 0.6 },
                  }}
                >
                  <Link href={"/home/chat"}>
                    <Button className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-6 py-2 rounded-full">
                      <p className="font-bold">Comencemos</p>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    scale: { duration: 0.6, ease: "backOut" },
                    opacity: { duration: 0.6 },
                  }}
                >
                  <Link href={"/home/consultar-filos"}>
                    <Button className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-9 py-2 rounded-full">
                      <p className="font-bold">Consultar</p>
                      <ArrowLeft className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={Robot}
                alt="Robot"
                height={450}
                width={450}
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
