"use client";

import { useState } from "react";
import { Calculator, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Ingredient {
  name: string;
  unit: string;
  perPerson: number;
}

const INGREDIENTS: Record<string, Ingredient[]> = {
  "Pozole Rojo": [
    { name: "Maíz pozolero", unit: "kg", perPerson: 0.1 },
    { name: "Chile guajillo", unit: "kg", perPerson: 0.015 },
    { name: "Chile ancho", unit: "kg", perPerson: 0.01 },
    { name: "Ajo", unit: "cabezas", perPerson: 0.05 },
    { name: "Orégano", unit: "g", perPerson: 2 },
  ],
  "Pozole Blanco": [
    { name: "Maíz pozolero", unit: "kg", perPerson: 0.1 },
    { name: "Ajo", unit: "cabezas", perPerson: 0.05 },
    { name: "Cebolla", unit: "pzas", perPerson: 0.1 },
  ],
  Proteínas: [
    { name: "Pollo (pechuga)", unit: "kg", perPerson: 0.15 },
    { name: "Cerdo (maciza)", unit: "kg", perPerson: 0.15 },
  ],
  Guarniciones: [
    { name: "Lechuga", unit: "pzas", perPerson: 0.15 },
    { name: "Rábano", unit: "manojos", perPerson: 0.1 },
    { name: "Tostadas", unit: "paquetes", perPerson: 0.2 },
    { name: "Crema", unit: "litros", perPerson: 0.03 },
    { name: "Queso fresco", unit: "kg", perPerson: 0.02 },
    { name: "Limón", unit: "kg", perPerson: 0.02 },
    { name: "Cebolla picada", unit: "kg", perPerson: 0.02 },
    { name: "Orégano seco", unit: "g", perPerson: 1 },
    { name: "Chile piquín", unit: "g", perPerson: 0.5 },
  ],
};

export default function InsumosPage() {
  const [personas, setPersonas] = useState(50);
  const [pctRojo, setPctRojo] = useState(60);
  const [pctBlanco, setPctBlanco] = useState(25);
  const [pctAntojitos, setPctAntojitos] = useState(15);
  const [copied, setCopied] = useState(false);

  const personasRojo = Math.round((personas * pctRojo) / 100);
  const personasBlanco = Math.round((personas * pctBlanco) / 100);

  function calculateAmount(perPerson: number, count: number): string {
    const total = perPerson * count;
    if (total < 1 && perPerson < 1) {
      return total < 0.01 ? total.toFixed(3) : total.toFixed(2);
    }
    return total.toFixed(1);
  }

  function generateList(): string {
    const lines: string[] = [
      `📋 LISTA DE INSUMOS — Poxahuac`,
      `👥 ${personas} personas estimadas`,
      `🔴 Pozole Rojo: ${pctRojo}% (${personasRojo} personas)`,
      `⚪ Pozole Blanco: ${pctBlanco}% (${personasBlanco} personas)`,
      `🌮 Antojitos: ${pctAntojitos}%`,
      ``,
      `--- POZOLE ROJO ---`,
    ];

    INGREDIENTS["Pozole Rojo"].forEach((ing) => {
      lines.push(`• ${ing.name}: ${calculateAmount(ing.perPerson, personasRojo)} ${ing.unit}`);
    });

    lines.push(``, `--- POZOLE BLANCO ---`);
    INGREDIENTS["Pozole Blanco"].forEach((ing) => {
      lines.push(`• ${ing.name}: ${calculateAmount(ing.perPerson, personasBlanco)} ${ing.unit}`);
    });

    lines.push(``, `--- PROTEÍNAS ---`);
    INGREDIENTS["Proteínas"].forEach((ing) => {
      lines.push(`• ${ing.name}: ${calculateAmount(ing.perPerson, personasRojo + personasBlanco)} ${ing.unit}`);
    });

    lines.push(``, `--- GUARNICIONES ---`);
    INGREDIENTS["Guarniciones"].forEach((ing) => {
      lines.push(`• ${ing.name}: ${calculateAmount(ing.perPerson, personas)} ${ing.unit}`);
    });

    return lines.join("\n");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(generateList());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
            Herramienta interna — Calcula ingredientes por número de comensales
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
          <h2 className="font-heading font-bold text-pox-brown text-lg mb-6">
            Configuración
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-pox-brown mb-2">
                Personas esperadas: <span className="text-pox-red text-xl">{personas}</span>
              </label>
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={personas}
                onChange={(e) => setPersonas(Number(e.target.value))}
                className="w-full accent-pox-red"
              />
              <div className="flex justify-between text-xs text-pox-gray">
                <span>10</span>
                <span>200</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-pox-brown mb-1">
                  🔴 % Pozole Rojo
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pctRojo}
                  onChange={(e) => setPctRojo(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-pox-brown mb-1">
                  ⚪ % Pozole Blanco
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pctBlanco}
                  onChange={(e) => setPctBlanco(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-center font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-pox-brown mb-1">
                  🌮 % Antojitos
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pctAntojitos}
                  onChange={(e) => setPctAntojitos(Number(e.target.value))}
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-center font-bold"
                />
              </div>
            </div>

            {pctRojo + pctBlanco + pctAntojitos !== 100 && (
              <p className="text-orange-500 text-sm font-semibold">
                ⚠️ Los porcentajes suman {pctRojo + pctBlanco + pctAntojitos}% (deben sumar 100%)
              </p>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-bold text-pox-brown text-lg">
              Lista de Insumos
            </h2>
            <Button onClick={copyToClipboard} variant="outline" size="sm">
              {copied ? (
                <>
                  <Check size={16} className="mr-1" /> Copiado
                </>
              ) : (
                <>
                  <Copy size={16} className="mr-1" /> Copiar lista
                </>
              )}
            </Button>
          </div>

          {Object.entries(INGREDIENTS).map(([category, ingredients]) => {
            const count =
              category === "Pozole Rojo"
                ? personasRojo
                : category === "Pozole Blanco"
                ? personasBlanco
                : category === "Proteínas"
                ? personasRojo + personasBlanco
                : personas;

            return (
              <div key={category} className="mb-6">
                <h3 className="font-heading font-semibold text-pox-red text-sm uppercase tracking-wider mb-3">
                  {category}{" "}
                  <span className="text-pox-gray font-normal normal-case">
                    ({count} personas)
                  </span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-2 text-pox-gray font-normal">Ingrediente</th>
                        <th className="text-right py-2 text-pox-gray font-normal">Por persona</th>
                        <th className="text-right py-2 text-pox-brown font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.map((ing) => (
                        <tr key={ing.name} className="border-b border-gray-50">
                          <td className="py-2 text-pox-brown">{ing.name}</td>
                          <td className="py-2 text-right text-pox-gray">
                            {ing.perPerson} {ing.unit}
                          </td>
                          <td className="py-2 text-right font-bold text-pox-red">
                            {calculateAmount(ing.perPerson, count)} {ing.unit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
