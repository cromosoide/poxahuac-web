import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const BASE = "https://poxahuac.com";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

// Solo páginas indexables. Se excluyen a propósito:
// - /lp/*  → landing pages con noindex
// - /herramientas/insumos → herramienta interna (disallow en robots.txt)
// - /api/* → endpoints
const staticPages: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/menu", priority: 0.9, changeFrequency: "monthly" },
  { path: "/reservaciones", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ubicacion", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nosotros", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/herramientas/horarios", priority: 0.6, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}
