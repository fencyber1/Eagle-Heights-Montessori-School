import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm, PageHero, Section } from "@/components/school-shared";
import { Button } from "@/components/ui/button";
import { JsonLd, faqSchema, seoPage } from "@/lib/seo";
export const Route = createFileRoute("/contact")({
  head: () =>
    seoPage({
      title: "Contact Admissions — Eagle Heights Montessori School, Tema & Sebrepor",
      description:
        "Contact Eagle Heights Montessori School at Amsterdam Street, Sebrepor & PX9Q+HJQ Tema — call +233 20 885 3140, WhatsApp, email, or send an enquiry. Mon–Sat open 24 hours, Sun closed.",
      path: "/contact",
    }),
  component: Contact,
});
function Contact() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Contact admissions"
        title="Let’s talk about what your child needs next."
        intro="Choose the way that feels easiest — call +233 20 885 3140, WhatsApp us, or visit us at Amsterdam Street, Sebrepor or PX9Q+HJQ, Tema."
      />
      <Section eyebrow="Get in touch" title="A helpful answer is one step away.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [Phone, "Call", "+233 20 885 3140", "tel:+233208853140"],
            [
              Mail,
              "Email",
              "info@eagleheightsmontessori.edu.gh",
              "mailto:info@eagleheightsmontessori.edu.gh",
            ],
            [
              MessageCircle,
              "WhatsApp",
              "Chat on WhatsApp — +233 20 885 3140",
              "https://wa.me/233208853140",
            ],
            [Clock, "Hours", "Mon–Sat · Open 24 hours · Sun Closed", "#hours"],
          ].map(([Icon, title, text, href]) => {
            const I = Icon as typeof Phone;
            return (
              <a
                key={title as string}
                href={href as string}
                className="rounded-lg border border-ink/10 bg-surface p-6 transition-transform hover:-translate-y-1"
              >
                <I className="size-6 text-action" />
                <h2 className="mt-4 text-lg font-black">{title as string}</h2>
                <p className="mt-2 break-words text-sm text-ink-soft">{text as string}</p>
              </a>
            );
          })}
        </div>
      </Section>
      <section className="bg-ink py-16 text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-action">Enquiry form</p>
            <h2 className="mt-2 text-3xl font-black">How can we help?</h2>
            <p className="mt-4 max-w-lg text-paper/70">
              Ask about availability, programs, fees, support, or visiting the school.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-paper/15 bg-paper/10 p-5">
                <MapPin className="size-5 text-action" />
                <p className="mt-3 font-bold">Eagle Heights Montessori School</p>
                <p className="mt-1 text-sm text-paper/60">
                  Sebrepor Branch: Amsterdam Street, Sebrepor, Kpone Katamanso, Greater Accra Region
                </p>
                <p className="mt-1 text-sm text-paper/60">
                  Tema Branch: PX9Q+HJQ, Unnamed Road, Tema
                </p>
                <p className="mt-1 text-sm text-paper/60">
                  Mon–Sat · Open 24 hours · Sun Closed
                </p>
                <a
                  href="tel:+233208853140"
                  className="mt-2 block text-sm font-bold text-paper hover:text-action"
                >
                  +233 20 885 3140
                </a>
                <Button asChild variant="link" className="mt-2 px-0 text-paper">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Amsterdam+Street+Sebrepor+Kpone+Katamanso+Greater+Accra"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open directions (Sebrepor)
                  </a>
                </Button>
                <Button asChild variant="link" className="mt-1 px-0 text-paper">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=PX9Q%2BHJQ+Unnamed+Road+Tema+Ghana"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open directions (Tema)
                  </a>
                </Button>
              </div>
              <div className="rounded-lg border border-paper/15 bg-paper/10 p-5">
                <Clock className="size-5 text-action" />
                <p className="mt-3 font-bold">School hours</p>
                <p className="mt-1 text-sm text-paper/60">Monday – Saturday: Open 24 hours</p>
                <p className="mt-1 text-sm text-paper/60">Sunday: Closed</p>
                <p className="mt-1 text-sm text-paper/60">Phone: +233 20 885 3140</p>
                <a
                  href="tel:+233208853140"
                  className="mt-2 block text-sm font-bold text-paper hover:text-action"
                >
                  +233 20 885 3140
                </a>
                <Button asChild variant="link" className="mt-2 px-0 text-paper">
                  <Link to="/admissions">View admissions steps</Link>
                </Button>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <Section eyebrow="Next step" title="Prefer to understand the process first?">
        <Button asChild className="rounded-none bg-action text-action-foreground">
          <Link to="/admissions">View admissions steps</Link>
        </Button>
      </Section>
    </main>
  );
}
