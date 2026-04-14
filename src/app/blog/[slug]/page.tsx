import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, MapPin, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { getBlogPostSchema, getBreadcrumbSchema } from "@/lib/schema";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://poxahuac.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const schema = getBlogPostSchema(post);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "https://poxahuac.com" },
    { name: "Blog", url: "https://poxahuac.com/blog" },
    { name: post.title, url: `https://poxahuac.com/blog/${slug}` },
  ]);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[300px] sm:h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pox-brown via-pox-brown/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-3 transition-colors"
            >
              <ArrowLeft size={16} />
              Volver al blog
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-white/60 text-sm mt-3">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("es-MX", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <span className="mx-1">·</span>
              {post.author}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article content */}
          <article className="lg:col-span-2">
            <div
              className="prose prose-lg max-w-none text-pox-cream/70
                prose-headings:font-heading prose-headings:text-pox-cream
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-strong:text-pox-cream
                prose-a:text-pox-gold prose-a:no-underline hover:prose-a:underline
                prose-li:marker:text-pox-gold"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* Keywords */}
            <div className="mt-10 pt-6 border-t border-pox-gold/20">
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-pox-dark-surface rounded-full text-xs text-pox-cream/70 border border-pox-gold/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-pox-dark-surface rounded-2xl p-6 sticky top-[90px] border border-pox-gold/20">
              <h3 className="font-heading font-bold text-pox-cream mb-4">
                Visítanos
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 text-pox-cream/70">
                  <MapPin size={16} className="text-pox-gold shrink-0 mt-0.5" />
                  {BRAND.address.full}
                </div>
                <div className="flex items-start gap-2 text-pox-cream/70">
                  <Clock size={16} className="text-pox-gold shrink-0 mt-0.5" />
                  {BRAND.hoursDisplay}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Link href="/reservaciones" className="block">
                  <Button className="w-full" size="sm">
                    Reservar Mesa
                  </Button>
                </Link>
                <Link href="/menu" className="block">
                  <Button variant="outline" className="w-full" size="sm">
                    Ver Menú
                  </Button>
                </Link>
              </div>

              {/* Mini map */}
              <div className="mt-4 rounded-xl overflow-hidden h-[150px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d-98.7631!3d19.1258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPoxahuac!5e0!3m2!1ses!2smx`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Ubicación de Poxahuac"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

function formatContent(markdown: string): string {
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(new RegExp('(<li>.*<\\/li>)', 's'), '<ul>$1</ul>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo])/gm, (match) => match ? `<p>${match}` : match)
    .trim();
}
