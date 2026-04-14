"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-pox-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="section-label text-center mb-3 text-pox-red">Preguntas Frecuentes</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-pox-brown text-center mb-2 tracking-tight">
            Resolvemos tus dudas
          </h2>
          <div className="section-divider mb-12" />
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl overflow-hidden border border-pox-brown/10 shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-pox-brown hover:text-pox-red transition-colors"
                  aria-expanded={openIndex === i}
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 ml-2 transition-transform duration-300",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-pox-brown/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
