"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessToast } from "@/components/toast/success"
import { ErrorToast } from "@/components/toast/error"
import { sendFiloData } from "@/app/home/consultar-filos/agregar/config/dataServices"

export default function FormularioCaracteristicas() {
  const [formData, setFormData] = useState({
    filo: "",
    descripcion: "",
    caracteristicas: Array(23).fill(0),
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (index: number) => (value: string) => {
    setFormData((prev) => {
      const updatedCaracteristicas = [...prev.caracteristicas]
      updatedCaracteristicas[index] = parseInt(value, 10)
      return { ...prev, caracteristicas: updatedCaracteristicas }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
  
    const result = await sendFiloData(formData)
    setMessage(result.message)
    
    if (result.success) {
      SuccessToast();
      setFormData({ filo: "", descripcion: "", caracteristicas: Array(23).fill(0) })
    } else {
      ErrorToast();
    }
    
    setLoading(false)
  }
  return (
    <motion.div className="pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div className="w-full max-w-4xl mx-auto" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle>Formulario del Organismo</CardTitle>
          </CardHeader>
          <CardContent>
            {message && <div className={`p-2 rounded ${message.startsWith("Error") ? "bg-red-200" : "bg-green-200"}`}>{message}</div>}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="filo">Nombre del Filo</Label>
                <Input id="filo" name="filo" value={formData.filo} onChange={handleInputChange} placeholder="Ingrese el nombre del filo" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleInputChange} placeholder="Ingrese una descripción" />
              </div>
              {["¿Tiene tejidos?", "¿Tiene órganos?", "¿Tiene sistema de órganos?", "¿Tiene simetria radial?", "¿Tiene simetria bilateral?", "¿Tiene dos capas germinales?", "¿Tiene 3 capas germinales?", "¿Está segmentado?", "¿Es seudocelomado?", "¿Es celomado?", "¿Tiene un sistema digestivo incompleto?", "¿Tiene un sistema digestivo completo?", "¿Tiene sistema nervioso difuso?", "¿Tiene sistema nervioso ganglionar?", "¿Tiene sistema nervioso central?", "¿Tiene esqueleto interno?", "¿Tiene esqueleto externo?", "¿Tiene soporte hidrostático?", "¿Se reproduce sexualmente?", "¿Se reproduce asexualmente?", "¿Su hábitat es terrestre?", "¿Su hábitat es acuático?", "¿Es parasitario?"].map((label, index) => (
                <motion.div key={index} className="space-y-2" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <Label>{label}</Label>
                  <Select onValueChange={handleSelectChange(index)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Sí</SelectItem>
                      <SelectItem value="0">No</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              ))}
              <motion.div className="md:col-span-2 mt-4 flex justify-end" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }}>
                <Button type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
