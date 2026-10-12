import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";
import { Button } from "@/components/ui/button";
import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    seoPage({
      title: "Photo Gallery | Eagle Heights Montessori School",
      description:
        "See life at Eagle Heights Montessori School in Sebrepor & Tema — classrooms, outdoor play, reading, and school events from Nursery to JHS 1.",
      path: "/gallery",
    }),
  component: Gallery,
});

const photos: Array<{ src: string; alt: string }> = [
  {
    src: "/gallery/sims/sims-01.jpg",
    alt: "Eagle Heights graduates throwing purple caps in the air at the graduation ceremony",
  },
  {
    src: "/gallery/sims/sims-02.jpg",
    alt: "Eagle Heights pupils in yellow school uniforms joining hands in prayer",
  },
];

function Gallery() {
  return (
    <main>
      <PageHero
        eyebrow="School gallery"
        title="Life at Eagle Heights."
        intro="Classrooms, outdoor play, reading corners, and celebrations — a look inside Eagle Heights Montessori School, Sebrepor & Tema."
      />
      <Section eyebrow="Photo gallery" title="Moments at Eagle Heights.">
        {photos.length === 0 ? (
          <div className="grid place-items-center rounded-lg border border-ink/10 bg-surface p-12 text-center">
            <div>
              <p className="text-xl font-black">Our photo wall is being prepared.</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                We are adding fresh Eagle Heights Montessori School pictures. Please check back soon
                — or book a visit to see the school in person.
              </p>
              <Button
                asChild
                className="mt-6 rounded-none bg-action text-action-foreground hover:bg-action/90"
              >
                <Link to="/contact">Book a school visit</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="block aspect-square w-full overflow-hidden rounded-lg border border-ink/10 bg-surface"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </figure>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
