import { Suspense } from "react"
import { filos } from "@/data/filos"
import ListaConFiltros from "@/components/list/List"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de filos</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <ListaConFiltros initialItems={filos} />
      </Suspense>
    </main>
  )
}

