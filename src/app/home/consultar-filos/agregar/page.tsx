"use client"

import { useState } from "react"
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
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  }

  return (
    <div className="pt-8">
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Formulario del Organismo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nivelOrganizacion">Nivel de organización</Label>
            <Select onValueChange={handleSelectChange("nivelOrganizacion")}>
              <SelectTrigger id="nivelOrganizacion">
                <SelectValue placeholder="Selecciona el nivel de organización" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Si">Si</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tipoSimetria">Tipo de simetría</Label>
            <Select onValueChange={handleSelectChange("tipoSimetria")}>
              <SelectTrigger id="tipoSimetria">
                <SelectValue placeholder="Selecciona el tipo de simetría" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="capasGerminales">Capas germinales</Label>
            <Select onValueChange={handleSelectChange("capasGerminales")}>
              <SelectTrigger id="capasGerminales">
                <SelectValue placeholder="Selecciona las capas germinales" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="segmentacion">Segmentación</Label>
            <Select onValueChange={handleSelectChange("segmentacion")}>
              <SelectTrigger id="segmentacion">
                <SelectValue placeholder="¿Es segmentado?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cavidadCorporal">Cavidad corporal</Label>
            <Select onValueChange={handleSelectChange("cavidadCorporal")}>
              <SelectTrigger id="cavidadCorporal">
                <SelectValue placeholder="¿Tiene cavidad corporal?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sistemaDigestivo">Sistema digestivo</Label>
            <Select onValueChange={handleSelectChange("sistemaDigestivo")}>
              <SelectTrigger id="sistemaDigestivo">
                <SelectValue placeholder="¿Tiene sistema digestivo?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sistemaNervioso">Sistema nervioso</Label>
            <Select onValueChange={handleSelectChange("sistemaNervioso")}>
              <SelectTrigger id="sistemaNervioso">
                <SelectValue placeholder="¿Tiene sistema nervioso?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sistemaCorporal">Sistema corporal</Label>
            <Select onValueChange={handleSelectChange("sistemaCorporal")}>
              <SelectTrigger id="sistemaCorporal">
                <SelectValue placeholder="¿Tiene sistema corporal?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reproduccionSexual">Reproducción sexual</Label>
            <Select onValueChange={handleSelectChange("reproduccionSexual")}>
              <SelectTrigger id="reproduccionSexual">
                <SelectValue placeholder="¿Tiene reproducción sexual?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reproduccionAsexual">Reproducción asexual</Label>
            <Select onValueChange={handleSelectChange("reproduccionAsexual")}>
              <SelectTrigger id="reproduccionAsexual">
                <SelectValue placeholder="¿Tiene reproducción asexual?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="habitatTerrestre">Hábitat Terrestre</Label>
            <Select onValueChange={handleSelectChange("reproduccionSexual")}>
              <SelectTrigger id="reproduccionSexual">
                <SelectValue placeholder="¿Hábitat terrestre?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reproduccionSexual">Hábitat marino</Label>
            <Select onValueChange={handleSelectChange("reproduccionSexual")}>
              <SelectTrigger id="reproduccionSexual">
                <SelectValue placeholder="¿Hábitat marino?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reproduccionSexual">Parasito</Label>
            <Select onValueChange={handleSelectChange("reproduccionSexual")}>
              <SelectTrigger id="reproduccionSexual">
                <SelectValue placeholder="¿Es un parasito?" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Si">Si</SelectItem>
              <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="md:col-span-2 mt-4">
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

