"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Users, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Level = "baja" | "moderada" | "alta";

interface HourData {
  time: string;
  level: Level;
  percentage: number;
}

interface DayData {
  name: string;
  shortName: string;
  hours: HourData[];
  peakHour: string;
  quietHour: string;
}

const DAYS: DayData[] = [
  {
    name: "Martes",
    shortName: "Mar",
    peakHour: "14:00",
    quietHour: "11:00",
    hours: [
      { time: "10:30", level: "baja", percentage: 15 },
      { time: "11:00", level: "baja", percentage: 20 },
      { time: "12:00", level: "moderada", percentage: 45 },
      { time: "13:00", level: "moderada", percentage: 55 },
      { time: "14:00", level: "alta", percentage: 75 },
      { time: "15:00", level: "moderada", percentage: 50 },
      { time: "16:00", level: "baja", percentage: 30 },
      { time: "17:00", level: "baja", percentage: 20 },
      { time: "18:00", level: "baja", percentage: 25 },
      { time: "19:00", level: "baja", percentage: 15 },
    ],
  },
  {
    name: "Miércoles",
    shortName: "Mié",
    peakHour: "14:00",
    quietHour: "11:00",
    hours: [
      { time: "10:30", level: "baja", percentage: 15 },
      { time: "11:00", level: "baja", percentage: 25 },
      { time: "12:00", level: "moderada", percentage: 45 },
      { time: "13:00", level: "moderada", percentage: 60 },
      { time: "14:00", level: "alta", percentage: 80 },
      { time: "15:00", level: "moderada", percentage: 55 },
      { time: "16:00", level: "baja", percentage: 30 },
      { time: "17:00", level: "baja", percentage: 20 },
      { time: "18:00", level: "baja", percentage: 25 },
      { time: "19:00", level: "baja", percentage: 15 },
    ],
  },
  {
    name: "Jueves",
    shortName: "Jue",
    peakHour: "14:00",
    quietHour: "11:00",
    hours: [
      { time: "10:30", level: "baja", percentage: 20 },
      { time: "11:00", level: "baja", percentage: 25 },
      { time: "12:00", level: "moderada", percentage: 50 },
      { time: "13:00", level: "alta", percentage: 70 },
      { time: "14:00", level: "alta", percentage: 85 },
      { time: "15:00", level: "moderada", percentage: 60 },
      { time: "16:00", level: "moderada", percentage: 40 },
      { time: "17:00", level: "baja", percentage: 25 },
      { time: "18:00", level: "baja", percentage: 20 },
      { time: "19:00", level: "baja", percentage: 15 },
    ],
  },
  {
    name: "Viernes",
    shortName: "Vie",
    peakHour: "14:30",
    quietHour: "10:30",
    hours: [
      { time: "10:30", level: "baja", percentage: 20 },
      { time: "11:00", level: "moderada", percentage: 35 },
      { time: "12:00", level: "moderada", percentage: 55 },
      { time: "13:00", level: "alta", percentage: 80 },
      { time: "14:00", level: "alta", percentage: 95 },
      { time: "15:00", level: "alta", percentage: 75 },
      { time: "16:00", level: "moderada", percentage: 50 },
      { time: "17:00", level: "moderada", percentage: 40 },
      { time: "18:00", level: "moderada", percentage: 45 },
      { time: "19:00", level: "baja", percentage: 30 },
    ],
  },
  {
    name: "Sábado",
    shortName: "Sáb",
    peakHour: "14:00",
    quietHour: "10:30",
    hours: [
      { time: "10:30", level: "moderada", percentage: 30 },
      { time: "11:00", level: "moderada", percentage: 45 },
      { time: "12:00", level: "alta", percentage: 70 },
      { time: "13:00", level: "alta", percentage: 90 },
      { time: "14:00", level: "alta", percentage: 100 },
      { time: "15:00", level: "alta", percentage: 85 },
      { time: "16:00", level: "moderada", percentage: 60 },
      { time: "17:00", level: "moderada", percentage: 45 },
      { time: "18:00", level: "moderada", percentage: 40 },
      { time: "19:00", level: "baja", percentage: 25 },
    ],
  },
  {
    name: "Domingo",
    shortName: "Dom",
    peakHour: "13:30",
    quietHour: "10:30",
    hours: [
      { time: "10:30", level: "moderada", percentage: 35 },
      { time: "11:00", level: "moderada", percentage: 50 },
      { time: "12:00", level: "alta", percentage: 75 },
      { time: "13:00", level: "alta", percentage: 95 },
      { time: "14:00", level: "alta", percentage: 90 },
      { time: "15:00", level: "alta", percentage: 70 },
      { time: "16:00", level: "moderada", percentage: 50 },
      { time: "17:00", level: "moderada", percentage: 35 },
      { time: "18:00", level: "baja", percentage: 25 },
      { time: "19:00", level: "baja", percentage: 15 },
    ],
  },
];

const levelColors: Record<Level, string> = {
  baja: "bg-green-400",
  moderada: "bg-pox-gold",
  alta: "bg-pox-red",
};

const levelLabels: Record<Level, string> = {
  baja: "Tranquilo",
  moderada: "Moderado",
  alta: "Concurrido",
};

export default function HorariosPage() {
  const [selectedDay, setSelectedDay] = useState(0);
  const day = DAYS[selectedDay];

  return (
    <>
      <div className="bg-pox-red-dark py-12 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            ¿Cuándo Visitarnos?
          </h1>
          <p className="text-white/70">
            Consulta la afluencia estimada por día y hora para planear tu visita
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Day selector */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8">
          {DAYS.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setSelectedDay(i)}
              className={cn(
                "shrink-0 px-5 py-3 rounded-xl font-heading font-semibold transition-all",
                selectedDay === i
                  ? "bg-pox-red text-white shadow-lg"
                  : "bg-pox-cream text-pox-brown hover:bg-pox-red/10"
              )}
            >
              <span className="hidden sm:inline">{d.name}</span>
              <span className="sm:hidden">{d.shortName}</span>
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
          <h2 className="font-heading font-bold text-pox-brown text-xl mb-6">
            {day.name} — Nivel de afluencia
          </h2>

          <div className="space-y-3">
            {day.hours.map((hour) => (
              <div key={hour.time} className="flex items-center gap-3">
                <span className="text-sm text-pox-gray w-14 shrink-0 font-mono">
                  {hour.time}
                </span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500 flex items-center px-3",
                      levelColors[hour.level]
                    )}
                    style={{ width: `${hour.percentage}%` }}
                  >
                    <span className="text-white text-xs font-semibold whitespace-nowrap">
                      {hour.percentage > 30 ? levelLabels[hour.level] : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-6 text-xs text-pox-gray">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-green-400" /> Tranquilo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-pox-gold" /> Moderado
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-pox-red" /> Concurrido
            </span>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4">
            <TrendingDown className="text-green-600 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-heading font-bold text-green-800 text-lg mb-1">
                Recomendación
              </h3>
              <p className="text-green-700">
                Para una experiencia más tranquila, te recomendamos visitarnos los{" "}
                <strong>{day.name}</strong> a las <strong>{day.quietHour}</strong>.
                Tendrás más espacio, atención personalizada y podrás disfrutar sin prisas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={`/reservaciones`}
          >
            <Button size="lg">
              <Clock size={18} className="mr-2" />
              Reservar en horario tranquilo
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
