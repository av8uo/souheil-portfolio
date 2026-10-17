import { Fragment } from "react";
import Image from "next/image";
import { AgentTerminal, HeroVideo, LineReveal, Reveal, RotatingWords } from "@/components/motion";
import {
  UPWORK_URL,
  certifications,
  education,
  languages,
  process,
  projects,
  services,
  stack,
} from "@/lib/data";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#agents", label: "AI Agents" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

const marqueeItems = stack.flatMap((g) => g.items);

function SectionHeader({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <Reveal className="mb-16 grid gap-6 border-t border-border pt-6 md:grid-cols-[200px_1fr]">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {index} — {label}
      </p>
      <h2 className="max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-6xl">{title}</h2>
    </Reveal>
  );
}

function Serif({ children }: { children: React.ReactNode }) {
  return <span className="font-serif italic tracking-normal">{children}</span>;
}

function PrimaryButton({ label = "Hire me on Upwork" }: { label?: string }) {
  return (
    <a
      href={UPWORK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-full bg-foreground py-3.5 pl-7 pr-3.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
    >
      {label}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:rotate-[-45deg]">
        →
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <a href="#" className="text-sm font-medium tracking-tight text-white">
            Souheil<span className="text-white/50"> / Studio</span>
          </a>
          <nav className="hidden gap-9 text-sm text-white/70 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="text-sm text-white underline-offset-4 hover:underline">
            Let&apos;s talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end">
        <HeroVideo src="/hero.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-32 sm:px-8 sm:pb-14">
          <Reveal>
            <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Available for new projects
            </p>
          </Reveal>
          <h1 className="text-[13vw] leading-[0.95] tracking-[-0.04em] sm:text-[8.5vw] lg:text-[7rem]">
            <LineReveal
              lines={[
                "Apps, built",
                <Fragment key="l2">
                  with <Serif>intelligence.</Serif>
                </Fragment>,
              ]}
            />
          </h1>

          <div className="mt-10 grid gap-8 border-t border-border pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal delay={0.4}>
              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                Full-stack developer and AI Agents Architect. I design and build{" "}
                <span className="text-foreground">
                  <RotatingWords words={["iOS apps", "Android apps", "web apps", "SaaS products", "AI agents"]} />
                </span>
                <br className="hidden sm:block" /> from first sketch to launch. English, French and Arabic.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <PrimaryButton />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border py-5" aria-label="Technologies">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee flex w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center whitespace-nowrap text-sm text-muted">
                <span className="px-8 text-faint">/</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="mx-auto max-w-7xl px-5 py-32 sm:px-8 sm:py-44">
        <Reveal>
          <p className="max-w-5xl text-3xl leading-[1.2] tracking-tight sm:text-5xl">
            One developer for the whole product: <span className="text-muted">design, frontend, backend</span> and{" "}
            <Serif>the AI that makes it smarter.</Serif>{" "}
            <span className="text-muted">No hand-offs, no gaps, one person accountable from day one to launch.</span>
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-32 sm:px-8">
        <SectionHeader
          index="01"
          label="Services"
          title={
            <>
              Everything your product <Serif>needs.</Serif>
            </>
          }
        />
        <div className="border-b border-border">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className="group grid gap-4 border-t border-border py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[200px_1fr_1.2fr] md:gap-8">
                <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <div>
                  <p className="leading-relaxed text-muted">{s.text}</p>
                  <p className="mt-4 font-mono text-xs text-faint">{s.tags.join("  ·  ")}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI agents */}
      <section id="agents" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-32 sm:px-8">
        <SectionHeader
          index="02"
          label="AI Agents"
          title={
            <>
              Your app, watched over by <Serif>AI agents.</Serif>
            </>
          }
        />
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">
              Most developers use AI on the side. I build with it at the core, inside your product and inside the
              way I maintain it.
            </p>
            <dl className="mt-10 border-b border-border">
              {[
                ["Monitoring agents", "Crashes and errors are analysed automatically, and I'm alerted instantly with the likely cause."],
                ["In-product agents", "Assistants that take real actions in your app: search, book, plan, update data."],
                ["Grounded answers", "RAG assistants that answer only from your approved content, with sources."],
                ["Safe by design", "Guardrails, permissions and server-side checks so agents never overstep."],
              ].map(([title, text]) => (
                <div key={title} className="grid gap-2 border-t border-border py-5 sm:grid-cols-[180px_1fr]">
                  <dt className="text-sm">{title}</dt>
                  <dd className="text-sm leading-relaxed text-muted">{text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15}>
            <AgentTerminal />
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-32 sm:px-8">
        <SectionHeader
          index="03"
          label="Selected work"
          title={
            <>
              Private <Serif>projects.</Serif>
            </>
          }
        />
        <div className="border-b border-border">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className="group grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr_1fr] md:gap-8">
                <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl tracking-tight sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">{p.client}</p>
                </div>
                <div>
                  <p className="leading-relaxed text-muted">{p.text}</p>
                  <p className="mt-4 font-mono text-xs text-faint">{p.stack.join("  ·  ")}</p>
                </div>
                <figure className="md:col-span-2 md:col-start-2">
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      width={1600}
                      height={1195}
                      unoptimized
                      sizes="(min-width: 1280px) 1000px, (min-width: 768px) 75vw, 100vw"
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-xs text-faint">Interface illustration</figcaption>
                </figure>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 text-sm text-faint">
            Built for private clients. Names and code stay confidential; details are available on request.
          </p>
        </Reveal>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-32 sm:px-8">
        <SectionHeader
          index="04"
          label="Process"
          title={
            <>
              A clear process, <Serif>no surprises.</Serif>
            </>
          }
        />
        <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <li key={p.step} className="bg-background p-8">
              <Reveal delay={(i % 3) * 0.08}>
                <span className="font-serif text-5xl italic text-faint">{i + 1}</span>
                <h3 className="mt-6 text-lg">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-7xl px-5 pb-32 sm:px-8">
        <SectionHeader
          index="05"
          label="Stack"
          title={
            <>
              Modern, proven <Serif>tools.</Serif>
            </>
          }
        />
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g) => (
            <Reveal key={g.group}>
              <p className="border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {g.group}
              </p>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-32 sm:px-8">
        <SectionHeader
          index="06"
          label="About"
          title={
            <>
              Credentials & <Serif>languages.</Serif>
            </>
          }
        />
        <div className="grid gap-10 md:grid-cols-3">
          <Reveal>
            <p className="border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Certifications
            </p>
            <ul className="mt-5 space-y-5">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p>{c.name}</p>
                  <p className="text-sm text-muted">
                    {c.provider} · {c.date}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Education
            </p>
            <p className="mt-5">{education.school}</p>
            <p className="text-sm text-muted">{education.program}</p>
            <p className="text-sm text-muted">{education.years}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Languages
            </p>
            <ul className="mt-5 space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between">
                  <span>{l.name}</span>
                  <span className="text-sm text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-32 sm:px-8 sm:py-44">
          <Reveal>
            <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted">Have an idea?</p>
            <h2 className="text-[13vw] leading-[0.95] tracking-[-0.04em] sm:text-[8vw] lg:text-[7.5rem]">
              Let&apos;s build
              <br />
              <Serif>something great.</Serif>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-muted">
                Send me your idea and I&apos;ll reply with the right questions, a clear plan and an honest estimate.
              </p>
              <PrimaryButton label="Start your project" />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-8 font-mono text-xs text-faint sm:flex-row sm:px-8">
          <p>© 2026 Souheil</p>
          <p>Full-stack developer & AI Agents Architect</p>
        </div>
      </footer>
    </main>
  );
}
