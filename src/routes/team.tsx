import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/school-shared";
import { seoPage } from "@/lib/seo";
export const Route = createFileRoute("/team")({
  head: () =>
    seoPage({
      title: "Meet the Team — Eagle Heights Montessori School, Tema & Sebrepor",
      description:
        "Meet Eagle Heights Montessori School's leadership and teaching team — dedicated Montessori educators for Nursery to JHS 1 in Sebrepor & Tema, Greater Accra.",
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
        intro="Eagle Heights is led by an experienced educator, supported by caring trained teachers from Nursery to JHS 1."
      />
      <Section eyebrow="Leadership" title="Led with experience.">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Head of School, Eagle Heights — photo coming soon"
            >
              E
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Head of School</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Principal
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Our head leads Eagle Heights with a passion for Montessori education — guiding
                children from their first day in Nursery to JHS 1.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Proprietor, Eagle Heights — photo coming soon"
            >
              E
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Proprietor</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Founder
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The proprietor founded Eagle Heights with a simple vision — a school where every
                child is known, loved, and challenged to shine.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg border border-ink/10 bg-surface">
            <div
              className="grid aspect-[4/5] w-full place-items-center bg-ink text-5xl font-black text-paper"
              role="img"
              aria-label="Eagle Heights teaching team — photo coming soon"
            >
              E
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">Teaching Team</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-action">
                Subject educators
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Caring teachers in every class — from early-years educators to Primary and JHS 1
                coaches — who notice the whole child.
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
