import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";
import { Button } from "@/components/ui/button";
import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    seoPage({
      title: "Photo Gallery | SIMS International School",
      description:
        "See life at SIMS International School at Ablekuma New Town, Accra, Ghana — classrooms, outdoor play, reading, and school events from Creche to JHS.",
      path: "/gallery",
    }),
  component: Gallery,
});

// TODO: add SIMS photos to public/gallery/sims/ as
// sims-01.jpg, sims-02.jpg, ... then point `photos` at them:
//   const photos = Array.from({ length: N }, (_, i) => ({
//     src: `/gallery/sims/sims-${String(i + 1).padStart(2, "0")}.jpg`,
//     alt: `SIMS International School gallery photo ${i + 1}`,
//   }));
const photos: Array<{ src: string; alt: string }> = [];

function Gallery() {
  return (
    <main>
      <PageHero
        eyebrow="School gallery"
        title="Life at SIMS."
        intro="Classrooms, outdoor play, reading corners, and celebrations — a look inside SIMS International School, Ablekuma New Town, Accra."
      />
      <Section eyebrow="Photo gallery" title="New photos coming soon.">
        {photos.length === 0 ? (
          <div className="grid place-items-center rounded-lg border border-ink/10 bg-surface p-12 text-center">
            <div>
              <p className="text-xl font-black">Our photo wall is being prepared.</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                We are adding fresh SIMS International School pictures. Please check back soon — or
                book a visit to see the school in person.
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
