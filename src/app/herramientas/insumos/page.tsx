"use client";

import { useState } from "react";
import { Calculator, Copy, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

interface Ingredient {
  name: string;
  unit: string;
  perPerson: number;
  costPerUnit: number;
}

const INGREDIENTS: Record<string, Ingredient[]> = {
  "Pozole Rojo": [
    { name: "Maiz pozolero", unit: "kg", perPerson: 0.1, costPerUnit: 45 },
    { name: "Chile guajillo", unit: "kg", perPerson: 0.015, costPerUnit: 180 },
    { name: "Chile ancho", unit: "kg", perPerson: 0.01, costPerUnit: 200 },
    { name: "Ajo", unit: "cabezas", perPerson: 0.05, costPerUnit: 15 },
    { name: "Oregano", unit: "g", perPerson: 2, costPerUnit: 0.5 },
  ],
  "Pozole Blanco": [
    { name: "Maiz pozolero", unit: "kg", perPerson: 0.1, costPerUnit: 45 },
    { name: "Ajo", unit: "cabezas", perPerson: 0.05, costPerUnit: 15 },
    { name: "Cebolla", unit: "pzas", perPerson: 0.1, costPerUnit: 12 },
  ],
  "Pozole Verde": [
    { name: "Maiz pozolero", unit: "kg", perPerson: 0.1, costPerUnit: 45 },
    { name: "Chile poblano", unit: "kg", perPerson: 0.04, costPerUnit: 60 },
    { name: "Pepita de calabaza", unit: "kg", perPerson: 0.015, costPerUnit: 220 },
    { name: "Cilantro", unit: "manojos", perPerson: 0.1, costPerUnit: 10 },
    { name: "Epazote", unit: "manojos", perPerson: 0.05, costPerUnit: 8 },
    { name: "Ajo", unit: "cabezas", perPerson: 0.05, costPerUnit: 15 },
  ],
  Proteinas: [
    { name: "Pollo (pechuga)", unit: "kg", perPerson: 0.15, costPerUnit: 110 },
    { name: "Cerdo (maciza)", unit: "kg", perPerson: 0.15, costPerUnit: 130 },
  ],
  Guarniciones: [
    { name: "Lechuga", unit: "pzas", perPerson: 0.15, costPerUnit: 18 },
    { name: "Rabano", unit: "manojos", perPerson: 0.1, costPerUnit: 12 },
    { name: "Tostadas", unit: "paquetes", perPerson: 0.2, costPerUnit: 25 },
    { name: "Crema", unit: "litros", perPerson: 0.03, costPerUnit: 55 },
    { name: "Queso fresco", unit: "kg", perPerson: 0.02, costPerUnit: 90 },
    { name: "Limon", unit: "kg", perPerson: 0.02, costPerUnit: 40 },
    { name: "Cebolla picada", unit: "kg", perPerson: 0.02, costPerUnit: 25 },
    { name: "Oregano seco", unit: "g", perPerson: 1, costPerUnit: 0.5 },
    { name: "Chile piquin", unit: "g", perPerson: 0.5, costPerUnit: 1.2 },
  ],
  "Salsa Roja": [
    { name: "Chile de arbol", unit: "kg", perPerson: 0.005, costPerUnit: 250 },
    { name: "Tomate rojo", unit: "kg", perPerson: 0.03, costPerUnit: 30 },
    { name: "Ajo", unit: "cabezas", perPerson: 0.02, costPerUnit: 15 },
    { name: "Sal", unit: "g", perPerson: 1, costPerUnit: 0.02 },
  ],
  "Salsa Verde": [
    { name: "Tomate verde", unit: "kg", perPerson: 0.03, costPerUnit: 25 },
    { name: "Chile serrano", unit: "kg", perPerson: 0.008, costPerUnit: 45 },
    { name: "Cilantro", unit: "manojos", perPerson: 0.05, costPerUnit: 10 },
    { name: "Cebolla", unit: "pzas", perPerson: 0.03, costPerUnit: 12 },
    { name: "Ajo", unit: "cabezas", perPerson: 0.02, costPerUnit: 15 },
  ],
};

export default function InsumosPage() {
  const [personas, setPersonas] = useState(50);
  const [pctRojo, setPctRojo] = useState(50);
  const [pctBlanco, setPctBlanco] = useState(25);
  const [pctVerde, setPctVerde] = useState(10);
  const [pctAntojitos, setPctAntojitos] = useState(15);
  const [copied, setCopied] = useState(false);

  const personasRojo = Math.round((personas * pctRojo) / 100);
  const personasBlanco = Math.round((personas * pctBlanco) / 100);
  const personasVerde = Math.round((personas * pctVerde) / 100);
  const totalPozole = personasRojo + personasBlanco + personasVerde;

  function calculateAmount(perPerson: number, count: number): string {
    const total = perPerson * count;
    if (total < 1 && perPerson < 1) {
      return total < 0.01 ? total.toFixed(3) : total.toFixed(2);
    }
    return total.toFixed(1);
  }

  function calculateCost(perPerson: number, count: number, costPerUnit: number): number {
    return perPerson * count * costPerUnit;
  }

  function getCountForCategory(category: string): number {
    switch (category) {
      case "Pozole Rojo": return personasRojo;
      case "Pozole Blanco": return personasBlanco;
      case "Pozole Verde": return personasVerde;
      case "Proteinas": return totalPozole;
      case "Salsa Roja":
      case "Salsa Verde":
        return personas;
      default: return personas;
    }
  }

  function getTotalCost(): number {
    let total = 0;
    for (const [category, ingredients] of Object.entries(INGREDIENTS)) {
      const count = getCountForCategory(category);
      for (const ing of ingredients) {
        total += calculateCost(ing.perPerson, count, ing.costPerUnit);
      }
    }
    return total;
  }

  function generateList(): string {
    const lines: string[] = [
      `LISTA DE INSUMOS — Poxahuac`,
      `${personas} personas estimadas`,
      `Pozole Rojo: ${pctRojo}% (${personasRojo} personas)`,
      `Pozole Blanco: ${pctBlanco}% (${personasBlanco} personas)`,
      `Pozole Verde: ${pctVerde}% (${personasVerde} personas)`,
      `Antojitos: ${pctAntojitos}%`,
      ``,
    ];

    for (const [category, ingredients] of Object.entries(INGREDIENTS)) {
      const count = getCountForCategory(category);
      lines.push(`--- ${category.toUpperCase()} ---`);
      for (const ing of ingredients) {
        const amount = calculateAmount(ing.perPerson, count);
        const cost = calculateCost(ing.perPerson, count, ing.costPerUnit);
        lines.push(`• ${ing.name}: ${amount} ${ing.unit} (~$${cost.toFixed(0)})`);
      }
      lines.push(``);
    }

    lines.push(`COSTO TOTAL ESTIMADO: $${getTotalCost().toFixed(0)} MXN`);
    return lines.join("\n");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(generateList());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function shareWhatsApp() {
    const text = encodeURIComponent(generateList());
    window.open(`https://wa.me/${BRAND.whatsappFull}?text=${text}`, "_blank");
  }

  const totalPct = pctRojo + pctBlanco + pctVerde + pctAntojitos;

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="bg-pox-brown py-12 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator size={28} />
            <h1 className="text-3xl font-heading font-bold">
              Estimador de Insumos
            </h1>
          </div>
          <p className="text-white/70 text-sm">
            Herramienta interna — Calcula ingredientes por numero de comensales
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Controls */}
        <div className="bg-pox-dark-surface rounded-2xl border border-pox-gold/20 p-6 sm:p-8 mb-8">
          <h2 className="font-heading font-bold text-pox-cream text-lg mb-6">
            Configuracion
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-pox-cream mb-2">
                Personas esperadas: <span className="text-pox-red text-xl">{personas}</span>
              </label>
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={personas}
                onChange={(e) => setPersonas(Number(e.target.value))}
                className="w-full accent-pox-gold"
              />
              <div className="flex justify-between text-xs text-pox-cream/70">
                <span>10</span>
                <span>200</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-pox-cream mb-1">
                  % Pozole Rojo
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pctRojo}
                  onChange={(e) => setPctRojo(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-pox-gold/30 rounded-lg text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-pox-cream mb-1">
                  % Pozole Blanco
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pctBlanco}
                  onChange={(e) => setPctBlanco(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-pox-gold/30 rounded-lg text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-pox-cream mb-1">
                  % Pozole Verde
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pctVerde}
                  onChange={(e) => setPctVerde(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-pox-gold/30 rounded-lg text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-pox-cream mb-1">
                  % Antojitos
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pctAntojitos}
                  onChange={(e) => setPctAntojitos(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-pox-gold/30 rounded-lg text-center font-bold"
                />
              </div>
            </div>

            {totalPct !== 100 && (
              <p className="text-orange-500 text-sm font-semibold">
                Los porcentajes suman {totalPct}% (deben sumar 100%)
              </p>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="bg-pox-dark-surface rounded-2xl border border-pox-gold/20 p-6 sm:p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="font-heading font-bold text-pox-cream text-lg">
              Lista de Insumos
            </h2>
            <div className="flex gap-2">
              <Button onClick={shareWhatsApp} variant="outline" size="sm">
                <MessageCircle size={16} className="mr-1" /> WhatsApp
              </Button>
              <Button onClick={copyToClipboard} variant="outline" size="sm">
                {copied ? (
                  <><Check size={16} className="mr-1" /> Copiado</>
                ) : (
                  <><Copy size={16} className="mr-1" /> Copiar</>
                )}
              </Button>
            </div>
          </div>

          {Object.entries(INGREDIENTS).map(([category, ingredients]) => {
            const count = getCountForCategory(category);
            let categoryCost = 0;

            return (
              <div key={category} className="mb-6">
                <h3 className="font-heading font-semibold text-pox-red text-sm uppercase tracking-wider mb-3">
                  {category}{" "}
                  <span className="text-pox-cream/70 font-normal normal-case">
                    ({count} personas)
                  </span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-pox-gold/20">
                        <th className="text-left py-2 text-pox-cream/70 font-normal">Ingrediente</th>
                        <th className="text-right py-2 text-pox-cream/70 font-normal">Por persona</th>
                        <th className="text-right py-2 text-pox-cream font-semibold">Total</th>
                        <th className="text-right py-2 text-pox-cream/70 font-normal">Costo est.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.map((ing) => {
                        const cost = calculateCost(ing.perPerson, count, ing.costPerUnit);
                        categoryCost += cost;
                        return (
                          <tr key={ing.name} className="border-b border-pox-gold/10">
                            <td className="py-2 text-pox-cream">{ing.name}</td>
                            <td className="py-2 text-right text-pox-cream/70">
                              {ing.perPerson} {ing.unit}
                            </td>
                            <td className="py-2 text-right font-bold text-pox-red">
                              {calculateAmount(ing.perPerson, count)} {ing.unit}
                            </td>
                            <td className="py-2 text-right text-pox-cream/70">
                              ${cost.toFixed(0)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="border-t border-pox-gold/30">
                        <td colSpan={3} className="py-2 text-right text-sm font-semibold text-pox-cream">Subtotal {category}:</td>
                        <td className="py-2 text-right font-bold text-pox-cream">${categoryCost.toFixed(0)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            );
          })}

          {/* Grand Total */}
          <div className="mt-4 pt-4 border-t-2 border-pox-gold/20 flex items-center justify-between">
            <span className="font-heading font-bold text-pox-cream text-lg">Costo Total Estimado</span>
            <span className="font-heading font-bold text-pox-red text-2xl">${getTotalCost().toFixed(0)} MXN</span>
          </div>
          <p className="text-pox-cream/70 text-xs mt-2">
            * Precios estimados de referencia. Pueden variar segun proveedor y temporada.
          </p>
        </div>
      </div>
    </>
  );
}
