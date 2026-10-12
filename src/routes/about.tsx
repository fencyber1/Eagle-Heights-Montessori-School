import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";

import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seoPage({
      title: "About Eagle Heights Montessori School in Tema & Sebrepor, Ghana",
      description:
        "Meet the mission and values behind Eagle Heights Montessori School — a Montessori-based school (Nursery to JHS 1) at Amsterdam Street, Sebrepor and Tema, Greater Accra Region where children learn through hands-on, loving education.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="A school should know your child — not just their name."
        intro="Eagle Heights is a warm, ambitious community where strong relationships give children the courage to stretch themselves — from Nursery to JHS 1."
      />
      <Section eyebrow="Our motto" title="Empowering Our Generation with Knowledge & Skills.">
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="font-serif text-2xl leading-relaxed">
            We believe children do their best learning when they feel secure enough to ask difficult
            questions, supported enough to try again, and inspired enough to care about the world
            beyond themselves.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Belonging before achievement",
              "Curiosity with discipline",
              "Character through service",
              "Opportunity for every learner",
            ].map((x) => (
              <div key={x} className="border-l-4 border-action bg-surface p-5 font-bold">
                {x}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section dark eyebrow="Our story" title="Rooted in Tema & Sebrepor. Ready for the future.">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-paper/70">
              Eagle Heights Montessori School is located on Amsterdam Street in Sebrepor, within the
              Kpone Katamanso Municipal District in the Greater Accra Region of Ghana, with an
              additional branch at PX9Q+HJQ, Tema. We offer Montessori-based early
              childhood and primary education — from Nursery to JHS 1 — without losing our personal
              character.
            </p>
          </div>
          <div className="rounded-lg border border-paper/15 bg-paper/10 p-7">
            <p className="font-serif text-2xl">
              “Our promise is simple: high expectations, human warmth, and a place where every child
              can make meaningful progress.”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div
                className="grid size-16 shrink-0 place-items-center rounded-full bg-action text-xl font-black text-action-foreground"
                role="img"
                aria-label="School leadership, Eagle Heights Montessori School"
              >
                E
              </div>
              <div>
                <p className="font-bold">School Leadership</p>
                <p className="text-sm text-paper/60">The Head · Eagle Heights Montessori School</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
