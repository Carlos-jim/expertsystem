"use client"
import { Suspense } from "react";
import { filos } from "@/data/filos";
import ListaConFiltros from "@/components/list/List";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"

export default function ConsultarFilos() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex space-x-4 items-center justify-between mb-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4"
        >
          Lista de filos
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/home/consultar-filos/agregar">
            <Button className="bg-[#8A4FFF] hover:bg-[#7B45E7] text-white px-6 py-2 rounded-full">
              <p className="font-bold">Agregar filo</p>
              <CirclePlus className="ml-2 h-8 w-8" />
            </Button>
          </Link>
        </motion.div>
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <ListaConFiltros initialItems={filos} />
      </Suspense>
    </main>
  );
}