"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import { getFAQSchema } from "@/lib/schema";
import type { PageFaq } from "@/data/page-faqs";

interface PageFAQProps {
  title?: string;
  faqs: PageFaq[];
}

// FAQs específicas por página con su FAQPage schema (AEO).
// Variante oscura para las páginas internas; el home usa FAQ.tsx.
export function PageFAQ({ title = "Preguntas frecuentes", faqs }: PageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-14 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-center mb-10 tracking-tight">
            {title}
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-pox-dark-surface rounded-xl overflow-hidden border border-pox-gold/20">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-white hover:text-pox-gold transition-colors"
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className={cn(
                        "shrink-0 ml-2 transition-transform duration-300 text-pox-gold",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-white/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
