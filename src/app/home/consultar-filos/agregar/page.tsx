"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function FormularioCaracteristicas() {
  const [formData, setFormData] = useState({
    nivelOrganizacion: "",
    tipoSimetria: "",
    capasGerminales: "",
    segmentacion: "",
    cavidadCorporal: "",
    sistemaDigestivo: "",
    sistemaNervioso: "",
    sistemaCorporal: "",
    reproduccionSexual: "",
  })

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <motion.div
      className="pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Formulario del Organismo</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { id: "nivelOrganizacion", label: "Nivel de organización" },
                { id: "tipoSimetria", label: "Tipo de simetría" },
                { id: "capasGerminales", label: "Capas germinales" },
                { id: "segmentacion", label: "Segmentación" },
                { id: "cavidadCorporal", label: "Cavidad corporal" },
                { id: "sistemaDigestivo", label: "Sistema digestivo" },
                { id: "sistemaNervioso", label: "Sistema nervioso" },
                { id: "sistemaCorporal", label: "Sistema corporal" },
                { id: "reproduccionSexual", label: "Reproducción sexual" },
                { id: "reproduccionAsexual", label: "Reproducción asexual" },
                { id: "habitatTerrestre", label: "Hábitat terrestre" },
                { id: "habitatMarino", label: "Hábitat marino" },
                { id: "parasito", label: "Parasito" },
              ].map(({ id, label }, index) => (
                <motion.div
                  key={id}
                  className="space-y-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Label htmlFor={id}>{label}</Label>
                  <Select onValueChange={handleSelectChange(id)}>
                    <SelectTrigger id={id}>
                      <SelectValue placeholder={`Selecciona ${label.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Si">Si</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              ))}
              <motion.div
                className="md:col-span-2 mt-4 flex justify-end"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Button type="submit">Enviar</Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
