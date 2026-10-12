import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/school-shared";
import { StageTabs, TabsContent, type StageTab } from "@/components/stage-tabs";

import { seoPage } from "@/lib/seo";

export const Route = createFileRoute("/programs")({
  head: () =>
    seoPage({
      title: "Programs & Curriculum — Nursery to JHS 1 | Eagle Heights Montessori School",
      description:
        "Explore Eagle Heights Montessori School's Montessori-based early childhood and primary education — Nursery, Kindergarten, Primary and JHS 1 in Sebrepor & Tema, Greater Accra Region.",
      path: "/programs",
    }),
  component: Programs,
});

const stages = [
  [
    "Nursery",
    "Gentle first steps · Ages 2 – 3",
    [
      "Warm, attentive care",
      "Sensory play and discovery",
      "Music, rhymes, and movement",
      "Outdoor air and gentle routines",
    ],
  ],
  [
    "Kindergarten",
    "Confident little explorers · Ages 4 – 5",
    [
      "Phonics and early language",
      "Numbers through play",
      "Art, colour, and creativity",
      "Sharing, manners, and independence",
    ],
  ],
  [
    "Lower Primary",
    "Strong foundations · Primary 1 – 3",
    [
      "English and Mathematics foundations",
      "Science and ICT discovery",
      "French and creative arts",
      "Reading fluency and good study habits",
    ],
  ],
  [
    "Upper Primary",
    "Growing independence · Primary 4 – 6",
    [
      "Sound literacy and numeracy",
      "Science, ICT and French",
      "History, creative arts and RME",
      "Leadership, service and good character",
    ],
  ],
  [
    "JHS 1",
    "Ready for the next step · JHS 1",
    [
      "English, Maths, Science and ICT foundations",
      "French, RME and career technology",
      "Reading fluency and good study habits",
      "Guidance and counselling",
    ],
  ],
];

function Programs() {
  return (
    <main>
      <PageHero
        eyebrow="Programs & curriculum"
        title="Learning that grows with your child."
        intro="Eagle Heights Montessori School offers Montessori-based early childhood and primary education — hands-on, self-directed learning in the early years, growing into strong academics from Nursery to JHS 1."
      />
      <Section eyebrow="Learning pathways" title="A gentle journey from Nursery to JHS 1.">
        <StageTabs
          tabs={
            [
              { value: "early-years", label: "Early Years" },
              { value: "primary", label: "Primary" },
              { value: "jhs", label: "JHS 1" },
            ] satisfies Array<StageTab>
          }
        >
          {[
            { value: "early-years", indexes: [0, 1] },
            { value: "primary", indexes: [2, 3] },
            { value: "jhs", indexes: [4] },
          ].map((group) => (
            <TabsContent key={group.value} value={group.value} className="mt-8">
              <div className="grid gap-5 md:grid-cols-2">
                {group.indexes.map((i) => {
                  const [name, ages, items] = stages[i];
                  return (
                    <article
                      key={name as string}
                      className="rounded-lg border border-ink/10 bg-surface p-6"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-action">
                        {name as string}
                      </p>
                      <h2 className="mt-2 text-2xl font-black">{ages as string}</h2>
                      <ul className="mt-5 grid gap-2 text-sm text-ink-soft">
                        {(items as string[]).map((item) => (
                          <li key={item}>→ {item}</li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </StageTabs>
      </Section>
      <Section eyebrow="Our curriculum" title="Montessori-based, child-centred.">
        <p className="max-w-3xl leading-relaxed text-ink-soft">
          In Nursery and Kindergarten, children learn through practical life, sensorial work, language
          and mathematics — every step through play and discovery. From Primary to JHS 1, strong
          foundations in literacy, numeracy and character take centre stage, taught with the same
          hands-on Montessori spirit.
        </p>
        <h3 className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-action">
          Early years focus
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["Practical life", "Care of self and environment, grace and courtesy."],
            ["Sensorial & culture", "Exploring the senses, nature and the world."],
            ["Language & number", "Phonics, reading readiness and early mathematics."],
          ].map(([name, text], i) => (
            <article key={name} className="rounded-lg border border-ink/10 bg-surface p-6">
              <p className="text-3xl font-black text-trust">{i + 1}</p>
              <h4 className="mt-3 text-lg font-extrabold">{name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-action">
          Primary & JHS 1 subjects
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            [
              "Literacy & languages",
              "English Language and French — reading, writing and expression.",
            ],
            ["Mathematics & science", "Number work, thinking skills and practical science."],
            ["Digital & creative", "ICT, Creative Arts and Career Technology."],
            [
              "Character & society",
              "History, Religious & Moral Education, and Physical Education.",
            ],
          ].map(([name, text], i) => (
            <article key={name} className="rounded-lg border border-ink/10 bg-surface p-6">
              <p className="text-3xl font-black text-trust">{i + 4}</p>
              <h4 className="mt-3 text-lg font-extrabold">{name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section dark eyebrow="Beyond lessons" title="Every child needs more than one way to shine.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Create", "Art, music, dance, storytelling, and creative play."],
            ["Play", "Sports, clubs, movement, and joyful exercise."],
            ["Grow", "Manners, leadership, service, and kind habits."],
          ].map(([h, p]) => (
            <article key={h} className="rounded-lg border border-paper/15 bg-paper/10 p-6">
              <h3 className="text-xl font-black">{h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{p}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
