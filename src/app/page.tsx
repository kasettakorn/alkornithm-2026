import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Briefcase, Code2, Cpu, FolderKanban, Mail, MapPin, NotebookPen, Play, Sparkles, Terminal, UserRound } from "lucide-react";
import { GithubLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { ThemeToggle } from "@/components/theme-toggle";
import { CurrentYear } from "@/components/layout/current-year";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "YouTube", href: "#youtube" },
  { label: "Writing", href: "/blog" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];
const skills = [
  { name: "TypeScript", logo: "typescript" },
  { name: "JavaScript", logo: "javascript" },
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "nextdotjs" },
  { name: "Node.js", logo: "nodedotjs" },
  { name: "PHP", logo: "php" },
  { name: "Python", logo: "python" },
  { name: "Flutter", logo: "flutter" },
  { name: "Tailwind CSS", logo: "tailwindcss" },
  { name: "Computer Vision", logo: null },
];
const projects = [
  { number: "01", category: "FULL-STACK / EDUCATION", title: "ALKORNITHM Online Judge", description: "A programming practice platform with problem management, code submissions, and an automated judging workflow.", stack: ["React", "TypeScript", "Node.js", "MongoDB"], href: "https://github.com/kasettakorn/MCS-CU", icon: Code2 },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-terminal-accent/20">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 shadow-sm shadow-black/[0.02] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="font-mono text-lg font-bold tracking-tight">ALKORNITHM<span className="text-terminal-accent">.</span></Link>
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-terminal-accent hover:text-terminal-accent"><GithubLogo size={16} /></a>
            </div>
          </div>
          <nav aria-label="Main navigation" className="flex items-center gap-5 overflow-x-auto pb-1 font-mono text-[11px] text-muted-foreground md:pb-0">
            {navigation.map((item, index) => <Link key={item.label} href={item.href} className="shrink-0 transition-colors hover:text-terminal-accent"><span className="mr-1 text-terminal-accent/70">0{index + 1}.</span>{item.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs transition-colors hover:border-terminal-accent hover:text-terminal-accent"><GithubLogo size={14} /> GitHub <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </header>

      <section className="showcase-section terminal-grid relative isolate border-b border-border">
        <div className="mx-auto grid min-h-[calc(90vh-76px)] max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
          <div className="relative z-10">
            <p className="mb-7 flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground"><span className="size-2 rounded-full bg-terminal-accent shadow-[0_0_12px_var(--terminal-accent)]" />~/alkornithm <span className="text-terminal-accent">$</span> whoami</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl md:text-7xl xl:text-[5.5rem]">I build software<br />that makes ideas<br /><span className="text-terminal-accent">work.</span><span className="terminal-caret ml-1 inline-block h-[0.78em] w-[3px] translate-y-1 bg-terminal-accent" /></h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">I’m Ronnakorn — a full-stack developer interested in thoughtful software, web technologies, and applied computer science.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="#projects" className="inline-flex items-center gap-2 rounded-md bg-terminal-accent px-5 py-3 font-mono text-xs font-semibold text-terminal-accent-foreground transition-transform hover:-translate-y-0.5">./view-projects <ArrowUpRight size={15} /></Link>
              <Link href="#contact" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-terminal-accent">./contact <ArrowDown size={14} /></Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"><span className="inline-flex items-center gap-2"><MapPin size={12} /> Bangkok, Thailand</span><span>Full-stack development</span><span>Computer vision</span></div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-2xl border border-terminal-accent/10" />
            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/5">
              <div className="flex items-center justify-between border-b border-border px-4 py-3"><div className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-[#f87171]" /><span className="size-2.5 rounded-full bg-[#fbbf24]" /><span className="size-2.5 rounded-full bg-terminal-accent" /></div><span className="font-mono text-[10px] text-muted-foreground">profile.ts</span><Terminal size={14} className="text-muted-foreground" /></div>
              <div className="space-y-6 p-5 font-mono text-xs leading-6 sm:p-7">
                <div><p className="text-muted-foreground"><span className="text-terminal-accent">❯</span> whoami</p><p className="mt-1 pl-4 text-base font-semibold text-foreground">Ronnakorn Hompoa</p><p className="pl-4 text-muted-foreground">Software Developer</p></div>
                <div><p className="text-muted-foreground"><span className="text-terminal-accent">❯</span> cat focus.txt</p><ul className="mt-2 space-y-1 pl-4 text-muted-foreground"><li><span className="mr-2 text-terminal-accent">+</span>Full-stack engineering</li><li><span className="mr-2 text-terminal-accent">+</span>Computer vision & AI</li><li><span className="mr-2 text-terminal-accent">+</span>Building useful products</li></ul></div>
                <div><p className="text-muted-foreground"><span className="text-terminal-accent">❯</span> education --list</p><div className="mt-3 space-y-3 pl-4">
                  <div className="flex items-center gap-3">
                    <img src="/images/logos/chula.png" alt="Chulalongkorn University mark" loading="lazy" className="size-10 shrink-0 object-contain" />
                    <div><p><span className="text-terminal-accent">M.Sc.</span> Computer Science</p><p className="text-muted-foreground">Chulalongkorn University</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/logos/kmutnb.png" alt="KMUTNB mark" loading="lazy" className="size-10 shrink-0 object-contain" />
                    <div><p><span className="text-terminal-accent">B.Sc.</span> Computer Science</p><p className="text-muted-foreground">King Mongkut's University of Technology North Bangkok (KMUTNB)</p></div>
                  </div>
                </div></div>
                <div className="border-t border-border pt-4 text-muted-foreground"><span className="text-terminal-accent">❯</span> keep going for Ph.D.<span className="terminal-caret inline-block h-3.5 w-1.5 translate-y-[2px] bg-terminal-accent" /></div>
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-[10px] tracking-widest text-muted-foreground">{"// MAY THE BUG BE WITH YOU."}</p>
          </div>
        </div>
      </section>

      <section id="about" className="showcase-section scroll-mt-28 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
          <div className="lg:sticky lg:top-32 lg:self-start"><p className="section-kicker inline-flex items-center gap-2"><UserRound size={13} aria-hidden="true" />01 / ABOUT</p><h2 className="section-heading mt-5">A little context<br />behind the code.</h2><p className="mt-6 max-w-xs font-mono text-xs leading-6 text-muted-foreground">Curiosity-driven engineering<br /><span className="text-terminal-accent">{"// always learning, always building"}</span></p></div>
          <div><p className="max-w-3xl text-lg leading-8 text-muted-foreground">I enjoy turning complex problems into useful, well-crafted applications. My work spans frontend and backend development, with a growing interest in machine learning and computer vision.</p><div className="mt-9"><p className="mb-4 font-mono text-xs text-terminal-accent">$ tech-stack --list</p><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="group flex min-h-14 items-center gap-3 rounded-md border border-border bg-muted/30 px-3 py-2.5 transition-all hover:border-terminal-accent/60 hover:bg-muted/60">
                {skill.logo ? (
                  <img src={"/images/logos/" + skill.logo + ".svg"} alt="" aria-hidden="true" loading="lazy" className={skill.logo === "nextdotjs" ? "size-5 shrink-0 object-contain dark:invert" : "size-5 shrink-0 object-contain"} />
                ) : (
                  <Cpu size={20} aria-hidden="true" className="shrink-0 text-muted-foreground transition-colors group-hover:text-terminal-accent" />
                )}
                <span className="font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">{skill.name}</span>
              </div>
            ))}
          </div></div></div>
        </div>
      </section>

      <section id="projects" className="showcase-section scroll-mt-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker inline-flex items-center gap-2"><FolderKanban size={13} aria-hidden="true" />02 / SELECTED WORK</p><h2 className="section-heading mt-5">Projects in production.</h2><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">A selection of ideas shaped into useful tools, experiments, and products.</p></div><a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-terminal-accent">ls -la github <ArrowUpRight size={14} /></a></div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => { const Icon = project.icon; return <article key={project.number} className="group relative flex min-h-[370px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm shadow-black/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-terminal-accent/50 hover:shadow-2xl hover:shadow-terminal-accent/10 sm:p-8"><div className="flex items-start justify-between"><span className="font-mono text-xs text-terminal-accent">{project.number} / 03</span><Icon size={19} className="text-muted-foreground transition-colors group-hover:text-terminal-accent" /></div><p className="mt-10 font-mono text-[9px] tracking-[0.16em] text-muted-foreground">{project.category}</p><h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="font-mono text-[10px] text-muted-foreground">#{item.replaceAll(" ", "")}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" aria-label={project.title + " repository"} className="mt-7 inline-flex items-center gap-2 border-t border-border pt-4 font-mono text-xs text-foreground transition-colors group-hover:text-terminal-accent">view_repository <ArrowUpRight size={14} /></a></article>; })}
          </div>
        </div>
      </section>

      <section id="experience" className="showcase-section scroll-mt-28 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
          <div><p className="section-kicker inline-flex items-center gap-2"><Briefcase size={13} aria-hidden="true" />03 / EXPERIENCE</p><h2 className="section-heading mt-5">The path<br />so far.</h2><p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">The teams, projects, and opportunities that have shaped how I build software.</p></div>
          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-8 left-[19px] top-8 w-px bg-border" />
            <div className="space-y-8">
              <article className="group relative rounded-2xl border border-border bg-card p-5 pl-16 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-terminal-accent/40 sm:p-6 sm:pl-16">
                <div className="absolute left-0 top-1 z-10 flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-white p-1"><img src="/images/logos/cubesofttech.png" alt="Cube SoftTech mark" loading="lazy" className="max-h-full max-w-full object-contain" /></div>
                <div className="pb-2">
                  <div className="mb-3 flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] text-terminal-accent">CURRENT ROLE</span><span className="font-mono text-[10px] text-muted-foreground">OCT 2022 — PRESENT</span></div>
                  <h3 className="text-lg font-semibold">Full Stack Developer · AIS Team</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Cube SoftTech Co., Ltd.</p>
                </div>
              </article>
              <article className="group relative rounded-2xl border border-border bg-card p-5 pl-16 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-terminal-accent/40 sm:p-6 sm:pl-16">
                <div className="absolute left-0 top-1 z-10 flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-white p-1"><img src="/images/logos/scg.png" alt="SCG mark" loading="lazy" className="max-h-full max-w-full object-contain" /></div>
                <div className="pb-2">
                  <div className="mb-3 flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] text-terminal-accent">CO-OPERATIVE EDUCATION</span><span className="font-mono text-[10px] text-muted-foreground">MAY — NOV 2019</span></div>
                  <h3 className="text-lg font-semibold">SCG Chemicals Co., Ltd.</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">Developed a Health Surveillance Tracking System (Return to Work), recognized with a project gold medal.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="youtube" className="scroll-mt-28 overflow-hidden border-b border-border bg-muted/20">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="section-kicker inline-flex items-center gap-2"><YoutubeLogo size={13} aria-hidden="true" />04 / BEYOND THE CODE</p>
              <h2 className="section-heading mt-5">Press play.<br />Explore ALKORNITHM.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">A little more of what I create, learn, and share — beyond the screen of an editor.</p>
          </div>

          <div className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-[#101014] text-white shadow-2xl shadow-black/10">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-36 -z-10 size-[28rem] rounded-full bg-red-600/25 blur-[100px] transition-opacity duration-700 group-hover:opacity-90" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 size-[24rem] rounded-full bg-orange-500/10 blur-[100px]" />
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-[#ff0033] shadow-lg shadow-red-950/40"><YoutubeLogo size={25} aria-hidden="true" /></span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">The official channel</p>
                    <p className="mt-1 text-sm font-semibold tracking-wide text-white">ALKORNITHM <span className="font-normal text-white/40">/ @alkornithm</span></p>
                  </div>
                </div>

                <h3 className="mt-10 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl">Ideas are better<br />when <span className="text-[#ff526f]">shared.</span></h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/60">Welcome to my corner of YouTube. Join me for videos, experiments, and stories from the world of ALKORNITHM.</p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="https://www.youtube.com/@alkornithm" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#ff0033] px-5 py-3.5 font-mono text-xs font-semibold text-white shadow-lg shadow-red-950/30 transition-all hover:-translate-y-1 hover:bg-[#e6002e] hover:shadow-xl"> <Play size={14} fill="currentColor" /> EXPLORE CHANNEL <ArrowUpRight size={14} /></a>
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40"><Sparkles size={13} /> Create · Learn · Share</span>
                </div>
              </div>

              <a href="https://www.youtube.com/@alkornithm" target="_blank" rel="noreferrer" aria-label="Visit the ALKORNITHM YouTube channel" className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-t border-white/10 p-6 sm:min-h-[360px] lg:border-l lg:border-t-0 lg:p-10">
                <div aria-hidden="true" className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
                <div className="absolute left-7 top-7 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">/ channel_preview</div>
                <div className="relative w-full max-w-[520px] rotate-[-2deg] transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.02]">
                  <div className="overflow-hidden rounded-xl border border-white/15 bg-[#19191f] shadow-2xl shadow-black/50">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                      <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#ff526f]" /><span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-white/20" /></div>
                      <span className="font-mono text-[9px] tracking-widest text-white/40">ALKORNITHM.TV</span>
                      <YoutubeLogo size={15} className="text-[#ff526f]" />
                    </div>
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,0,51,.35),transparent_45%),linear-gradient(135deg,#28202a_0%,#121218_55%,#35121d_100%)]">
                      <div aria-hidden="true" className="absolute -right-8 -top-12 size-56 rounded-full border border-white/10" />
                      <div aria-hidden="true" className="absolute -right-2 -top-6 size-44 rounded-full border border-white/10" />
                      <div aria-hidden="true" className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="relative flex size-20 items-center justify-center rounded-full border border-white/30 bg-[#ff0033] text-white shadow-[0_0_60px_rgba(255,0,51,0.45)] transition-transform duration-300 group-hover:scale-110 sm:size-24"><Play size={31} fill="currentColor" className="ml-1" /></div>
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                        <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">Welcome to</p><p className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">ALKORNITHM<span className="text-[#ff526f]">.</span></p></div>
                        <span className="rounded border border-white/20 bg-black/20 px-2 py-1 font-mono text-[9px] text-white/70">PLAY ▶</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3"><span className="font-mono text-[10px] text-white/65">@alkornithm</span><span className="font-mono text-[9px] text-white/35">YOUTUBE CHANNEL</span></div>
                  </div>
                </div>
                <span className="absolute bottom-6 right-7 font-mono text-[9px] tracking-widest text-white/30">CLICK TO VISIT ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="writing" className="showcase-section border-b border-border"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:items-center"><div><p className="section-kicker inline-flex items-center gap-2"><NotebookPen size={13} aria-hidden="true" />05 / WRITING</p><h2 className="section-heading mt-5">Notes from the terminal.</h2></div><div className="flex flex-col gap-5 rounded-2xl border border-border bg-card/80 p-6 shadow-sm shadow-black/[0.03] sm:flex-row sm:items-center sm:justify-between sm:p-8"><p className="max-w-lg text-sm leading-7 text-muted-foreground">Technical notes, experiments, research updates, and lessons learned while building things.</p><Link href="/blog" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3.5 font-mono text-xs font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-terminal-accent hover:text-terminal-accent-foreground">cd /blog <ArrowUpRight size={14} /></Link></div></div></section>

      <section id="publications" className="showcase-section scroll-mt-28 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-28">
          <div><p className="section-kicker inline-flex items-center gap-2"><BookOpen size={13} aria-hidden="true" />06 / PUBLICATIONS</p><h2 className="section-heading mt-5">Research &amp;<br />publications.</h2></div>
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-lg shadow-black/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-terminal-accent/50 hover:shadow-xl sm:p-10"><div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-terminal-accent/5 blur-3xl transition-colors group-hover:bg-terminal-accent/10" />
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded border border-terminal-accent/30 bg-terminal-accent/10 px-2 py-1 font-mono text-[10px] text-terminal-accent">IEEE XPLORE</span>
              <span className="font-mono text-[10px] text-muted-foreground">RESEARCH PUBLICATION</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight sm:text-2xl">Image-Based Classification of Sweet and Not-Sweet Mangoes Using a Deep Learning Model</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">Research on image-based deep learning for classifying Nam Dok Mai mango sweetness. Explore the published paper and its bibliographic details on IEEE Xplore.</p>
            <a href="https://ieeexplore.ieee.org/document/11101023/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-t border-border pt-4 font-mono text-xs text-foreground transition-colors hover:text-terminal-accent">view_publication <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <section id="contact" className="showcase-section scroll-mt-28 border-b border-border">
        <p className="section-kicker inline-flex items-center gap-2"><Mail size={13} aria-hidden="true" />07 / GET IN TOUCH</p>
        <div className="relative mt-7 grid gap-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-muted/70 via-card to-background p-7 shadow-xl shadow-black/[0.03] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"><div><h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">Have a good idea?<br /><span className="text-terminal-accent">Let’s build it.</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">I’m always interested in thoughtful projects, interesting engineering challenges, and conversations about technology.</p></div><div className="flex flex-wrap gap-3"><a href="https://www.linkedin.com/in/ronnakorn-hompoa-5b45b9208/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-terminal-accent px-5 py-3 font-mono text-xs font-semibold text-terminal-accent-foreground transition-transform hover:-translate-y-0.5"><LinkedinLogo size={14} /> connect --linkedin</a><a href="https://www.linkedin.com/in/ronnakorn-hompoa-5b45b9208/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="inline-flex size-11 items-center justify-center rounded-md border border-border transition-colors hover:border-terminal-accent hover:text-terminal-accent"><LinkedinLogo size={16} /></a><a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex size-11 items-center justify-center rounded-md border border-border transition-colors hover:border-terminal-accent hover:text-terminal-accent"><GithubLogo size={16} /></a></div></div>
      </section>

      <footer className="border-t border-border bg-muted/20"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 font-mono text-[10px] text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between"><Link href="/" className="font-bold tracking-tight text-foreground">ALKORNITHM<span className="text-terminal-accent">.</span></Link><span>May the bug be with you.</span><span>© <CurrentYear /> ALKORNITHM · Built with curiosity.</span></div></footer>
    </main>
  );
}
