import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { Testimonials } from "@/components/sections/Testimonials";
import { MapSection } from "@/components/sections/MapSection";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { FAQ } from "@/components/sections/FAQ";
import { faqs } from "@/data/faqs";
import { getFAQSchema } from "@/lib/schema";

export default function HomePage() {
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <Hero />
      <Features />
      <FeaturedDishes />
      <Testimonials />
      <MapSection />
      <InstagramFeed />
      <FAQ />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
