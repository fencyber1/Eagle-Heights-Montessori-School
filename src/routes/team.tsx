import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/school-shared";
import { seoPage } from "@/lib/seo";
export const Route = createFileRoute("/team")({
  head: () =>
    seoPage({
      title: "Meet the Team — SIMS International School, Accra",
      description:
        "Meet SIMS International School's leadership and teaching team — dedicated Ghana curriculum educators at Ablekuma New Town, Accra, Ghana.",
      path: "/team",
    }),
  component: Team,
});
function Team() {
  return (
    <main>
      <PageHero
        eyebrow="Meet the team"
        title="Trust begins with the people who show up every day."
        intro="SIMS is led by an experienced educator, supported by caring trained teachers from Creche to JHS."
      />
      <Section eyebrow="Leadership" title="Led with experience.">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Head of School, SIMS — photo coming soon"
            >
              S
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Head of School</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Principal
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Our head leads SIMS with a passion for international education and the Ghana
                curriculum — guiding children from their first day in Creche to graduation day in
                JHS.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Proprietor, SIMS — photo coming soon"
            >
              S
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Proprietor</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Founder
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The proprietor founded SIMS in 1960 with a simple vision — a school where every
                child is known, loved, and challenged to shine.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="SIMS teaching team — photo coming soon"
            >
              S
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Teaching Team</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Subject educators
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Caring teachers in every class — from early-years educators to BECE coaches in JHS —
                who notice the whole child.
              </p>
            </div>
          </article>
        </div>
      </Section>
      <Section dark eyebrow="Our standard" title="Great teaching is personal.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Subject expertise that brings learning alive",
            "Pastoral attention that notices the whole child",
            "Ongoing development, reflection, and collaboration",
          ].map((x) => (
            <div key={x} className="rounded-lg border border-paper/15 bg-paper/10 p-6 font-bold">
              {x}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
