"use client";

import { useState, useMemo } from "react";
import { TrendingDown, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { trackEvent, EVENTS } from "@/lib/analytics";

type Level = "baja" | "moderada" | "alta";

interface HourData {
  time: string;
  level: Level;
  percentage: number;
}

interface DayData {
  name: string;
  shortName: string;
  dayIndex: number; // 0=domingo, 1=lunes, 2=martes...
  hours: HourData[];
  peakHour: string;
  quietHour: string;
}

const DAYS: DayData[] = [
  {
    name: "Martes", shortName: "Mar", dayIndex: 2,
    peakHour: "14:00", quietHour: "11:00",
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
    name: "Miercoles", shortName: "Mie", dayIndex: 3,
    peakHour: "14:00", quietHour: "11:00",
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
    name: "Jueves", shortName: "Jue", dayIndex: 4,
    peakHour: "14:00", quietHour: "11:00",
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
    name: "Viernes", shortName: "Vie", dayIndex: 5,
    peakHour: "14:30", quietHour: "10:30",
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
    name: "Sabado", shortName: "Sab", dayIndex: 6,
    peakHour: "14:00", quietHour: "10:30",
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
    name: "Domingo", shortName: "Dom", dayIndex: 0,
    peakHour: "13:30", quietHour: "10:30",
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

function getInitialDayIndex(): number {
  if (typeof window === "undefined") return 0;
  const jsDay = new Date().getDay();
  const idx = DAYS.findIndex((d) => d.dayIndex === jsDay);
  return idx >= 0 ? idx : 0;
}

function checkIsOpenNow(): boolean {
  const now = new Date();
  const jsDay = now.getDay();
  if (jsDay === 1) return false;
  const totalMin = now.getHours() * 60 + now.getMinutes();
  const openMin = 10 * 60 + 30;
  const closeMin = jsDay === 5 || jsDay === 6 ? 21 * 60 : 20 * 60 + 30;
  return totalMin >= openMin && totalMin <= closeMin;
}

function findCurrentLevel(day: DayData): HourData | null {
  const now = new Date();
  const totalMin = now.getHours() * 60 + now.getMinutes();
  for (let i = day.hours.length - 1; i >= 0; i--) {
    const [hh, mm] = day.hours[i].time.split(":").map(Number);
    if (totalMin >= hh * 60 + mm) return day.hours[i];
  }
  return null;
}

export default function HorariosPage() {
  const [selectedDay, setSelectedDay] = useState(getInitialDayIndex);

  const day = DAYS[selectedDay];

  const todayIdx = useMemo(() => getInitialDayIndex(), []);
  const isToday = selectedDay === todayIdx;
  const openNow = useMemo(() => isToday ? checkIsOpenNow() : false, [isToday]);
  const currentLevel = useMemo(() => isToday ? findCurrentLevel(day) : null, [isToday, day]);

  const quietWhatsAppUrl = `https://wa.me/${BRAND.whatsappFull}?text=${encodeURIComponent(`Hola, quiero reservar para el ${day.name} a las ${day.quietHour} en Poxahuac`)}`;

  return (
    <>
      <div className="bg-pox-red-dark py-12 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight">
            Horarios y Afluencia
          </h1>
          <p className="text-white/70">
            Consulta la afluencia estimada por dia y hora para planear tu visita
          </p>

          {isToday && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className={cn("w-3 h-3 rounded-full animate-pulse", openNow ? "bg-green-400" : "bg-red-400")} />
              <span className="text-sm font-semibold">
                {openNow
                  ? `Abierto ahora${currentLevel ? ` — ${levelLabels[currentLevel.level]}` : ""}`
                  : "Cerrado en este momento"
                }
              </span>
            </div>
          )}
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
        <FadeIn>
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
            <h2 className="font-heading font-bold text-pox-brown text-xl mb-6">
              {day.name} — Nivel de afluencia
            </h2>

            <div className="space-y-3">
              {day.hours.map((hour) => {
                const isCurrent = isToday && currentLevel?.time === hour.time;
                return (
                  <div key={hour.time} className={cn("flex items-center gap-3", isCurrent && "bg-pox-gold/10 -mx-2 px-2 py-1 rounded-lg")}>
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
                    {isCurrent && (
                      <span className="text-xs font-semibold text-pox-gold whitespace-nowrap">Ahora</span>
                    )}
                  </div>
                );
              })}
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
        </FadeIn>

        {/* Recommendation */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4">
            <TrendingDown className="text-green-600 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-heading font-bold text-green-800 text-lg mb-1">
                Recomendacion
              </h3>
              <p className="text-green-700">
                Para una experiencia mas tranquila, te recomendamos visitarnos los{" "}
                <strong>{day.name}</strong> a las <strong>{day.quietHour}</strong>.
                Tendras mas espacio, atencion personalizada y podras disfrutar sin prisas.
              </p>
            </div>
          </div>
        </div>

        {/* CTA - WhatsApp */}
        <div className="text-center mb-12">
          <a
            href={quietWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent(EVENTS.CTA_CLICK, { label: "horarios-reservar-whatsapp" })}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-4 px-8 rounded-xl transition-colors text-lg"
          >
            <MessageCircle size={20} />
            Reservar {day.name} a las {day.quietHour}
          </a>
        </div>

        {/* SEO Content Block */}
        <div className="bg-pox-cream rounded-2xl p-6 sm:p-8">
          <h2 className="font-heading font-bold text-pox-brown text-lg mb-3">
            Horarios de Poxahuac en Amecameca
          </h2>
          <div className="text-pox-gray text-sm leading-relaxed space-y-3">
            <p>
              <strong>Poxahuac</strong> abre de martes a domingo en {BRAND.address.city}, {BRAND.address.state}.
              Nuestro horario es: martes a jueves de 10:30 a 20:30, viernes y sabado de 10:30 a 21:00,
              y domingos de 10:30 a 20:30. <strong>Los lunes permanecemos cerrados.</strong>
            </p>
            <p>
              Los dias de menor afluencia son <strong>martes y miercoles por la manana</strong> — ideales
              para una experiencia mas tranquila y atencion personalizada. Los fines de semana son los
              mas concurridos, especialmente <strong>sabado de 13:00 a 15:00</strong>, cuando el restaurante
              alcanza su maxima capacidad.
            </p>
            <p>
              Si planeas visitar Poxahuac en fin de semana, te recomendamos llegar temprano (antes de las 12:00)
              o reservar con anticipacion por WhatsApp. Entre semana, cualquier horario es bueno para disfrutar
              sin esperas de nuestro pozole tradicional con maiz cacahuazintle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
