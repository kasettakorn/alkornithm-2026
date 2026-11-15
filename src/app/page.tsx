import { ThemeToggle } from "@/components/theme-toggle";
import { CurrentYear } from "@/components/layout/current-year";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
  "PHP", "Python", "Flutter", "Tailwind CSS", "Computer Vision",
];

const projects = [
  {
    number: "01",
    type: "COMPUTER VISION · RESEARCH",
    title: "Nam Dok Mai Mango Classification",
    description:
      "An image-based deep learning project exploring the classification of sweet, not-sweet, and unripe Nam Dok Mai mangoes.",
    stack: ["Python", "YOLO", "Computer Vision"],
    href: "https://github.com/kasettakorn",
  },
  {
    number: "02",
    type: "WEB DEVELOPMENT",
    title: "ALKORNITHM Online Judge",
    description:
      "A programming practice platform with problem management, code submission, and an automated judging workflow.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    href: "https://github.com/kasettakorn/MCS-CU",
  },
  {
    number: "03",
    type: "PERSONAL · OPEN SOURCE",
    title: "ALKORNITHM",
    description:
      "A personal space for software projects, experiments, notes, and writing about technology.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Ghost CMS"],
    href: "https://github.com/kasettakorn/alkornithm-2026",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
          <a href="#" className="font-mono text-lg font-bold tracking-tight">
            ALKORNITHM<span className="text-muted-foreground">.</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://github.com/kasettakorn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-muted"
            >
              GitHub ↗
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
        <p className="mb-8 font-mono text-xs tracking-[0.24em] text-muted-foreground">
          SOFTWARE DEVELOPER · TECHNOLOGY ENTHUSIAST
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
          Building ideas
          <br />
          into <span className="text-muted-foreground">digital</span>
          <br />
          experiences<span className="text-muted-foreground">.</span>
        </h1>
        <div className="mt-10 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-7 text-muted-foreground">
            I’m Ronnakorn — a full-stack developer interested in thoughtful
            software, web technologies, and applied computer science.
          </p>
          <a href="#projects" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground">
            Explore my work <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>Based in Thailand</span>
          <span>Full-stack development</span>
          <span>Computer science</span>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">01 / ABOUT</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Curious by nature.<br />Developer by craft.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              I enjoy turning complex problems into useful, well-crafted
              applications. My work spans frontend and backend development,
              with a growing interest in machine learning and computer vision.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I hold a B.Sc. in Computer Science from King Mongkut’s University
              of Technology North Bangkok and an M.Sc. in Computer Science from
              Chulalongkorn University.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border px-3 py-2 font-mono text-xs text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">02 / SELECTED WORK</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Things I’ve worked on.</h2>
          </div>
          <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            More on GitHub ↗
          </a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <article key={project.number} className="group grid gap-6 py-8 md:grid-cols-[72px_1fr_auto] md:items-start">
              <span className="font-mono text-sm text-muted-foreground">{project.number}</span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{project.type}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{project.title}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-muted px-3 py-1.5 font-mono text-[11px] text-muted-foreground">{item}</span>
                  ))}
                </div>
              </div>
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`} className="text-xl text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground">↗</a>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">03 / EXPERIENCE</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Where I’ve been.</h2>
          </div>
          <div className="border-t border-border">
            <div className="grid gap-2 border-b border-border py-7 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-xl font-medium">Full Stack Developer · AIS Team</h3>
                <p className="mt-1 text-muted-foreground">Cube SoftTech Co., Ltd.</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">OCT 2022 — PRESENT</p>
            </div>
            <div className="grid gap-2 border-b border-border py-7 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-xl font-medium">Co-operative Education</h3>
                <p className="mt-1 text-muted-foreground">SCG Chemicals Co., Ltd.</p>
                <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Developed a Health Surveillance Tracking System (Return to Work), awarded a project gold medal.</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">MAY — NOV 2019</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">04 / GET IN TOUCH</p>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
          Have an idea? <span className="text-muted-foreground">Let’s make it happen.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/ronnakorn-hompoa-5b45b9208/" target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted">LinkedIn ↗</a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span className="font-mono font-semibold tracking-tight text-foreground">ALKORNITHM.</span>
          <span>May the bug be with you.</span>
          <span>© <CurrentYear /> ALKORNITHM. Built with curiosity.</span>
        </div>
      </footer>
    </main>
  );
}
