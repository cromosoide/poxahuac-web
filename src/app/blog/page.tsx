import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: "Blog — Pozole, Amecameca y Tradiciones Mexicanas",
  description:
    "Lee sobre la historia del pozole, turismo en Amecameca, la ruta de los volcanes y las tradiciones de la región. Blog de Poxahuac Restaurante.",
  alternates: { canonical: "https://poxahuac.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-pox-red-dark py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-3 tracking-tight">
            Blog
          </h1>
          <p className="text-white/70 text-lg">
            Historias, tradiciones y guías de Amecameca y la región de los volcanes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-pox-gray/60 text-xs mb-2">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("es-MX", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2 className="font-heading font-bold text-pox-brown text-lg leading-snug group-hover:text-pox-red transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-pox-gray text-sm mt-2 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-3 text-pox-red text-sm font-semibold">
                      Leer más →
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </>
  );
}
