import { useEffect, useState } from "react"
import { type Mode, type Project, projects, site } from "./data"
import LocalTime from "./LocalTime"

const aboutPortrait = "/about.jpeg";
const heroPortrait = "/me.jpeg";

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={down ? "M12 4v16m0 0 6-6m-6 6-6-6" : "M7 17 17 7m0 0H8m9 0v9"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}
function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 2c1 30 7 42 46 48-36 5-44 16-46 48C47 67 38 56 4 50 39 44 47 33 50 2Z" />
    </svg>
  )
}
function Toggle({ mode, setMode }: { mode: Mode ;setMode: (m: Mode) => void }) {
  return (
    <div className="toggle" aria-label="Portfolio mode">
      {(["designer", "developer"] as const).map((m) => (
        <button
          type="button"
          key={m}
          aria-pressed={mode === m}
          className={mode === m ? "active" : ""}
          onClick={() => setMode(m)}
        >
          {m}
        </button>
      ))}
      <i className={mode} />
    </div>
  )
}
function Nav({ mode, setMode }: { mode: Mode ;setMode: (m: Mode) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">
          sneha<span>.</span>
        </a>
        <div className={`navlinks ${open ? "open" : ""}`}>
          {["work", "about", "playground", "contact"].map((x) => (
            <a href={`#${x}`} onClick={() => setOpen(false)} key={x}>
              {x}
            </a>
          ))}
          <Toggle mode={mode} setMode={setMode} />
        </div>
        <button
          className={`menu ${open ? "open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i />
          <i />
        </button>
      </nav>
    </header>
  )
}
function Hero({ mode }: { mode: Mode }) {
  return (
    <section className="hero shell" id="top">
      <div className="topline">
        <span className="eyebrow">
          <i /> Open to opportunities
        </span>
        <span className="mono">{site.location} . <LocalTime /></span>
      </div>
      <div className="hero-grid">
        <div>
          <p className="kicker">UI/UX DESIGNER · CREATIVE DEVELOPER</p>
          <h1>
            Designing digital experiences with a little more <em>feeling.</em>
          </h1>
          <div className="hero-copy">
            <p>
              I’m Sneha, a creative developer drawn to thoughtful design,
              playful details, and experiences that make sense to the people
              using them
            </p>
            <div>
              <a className="primary" href="#work">
                Explore selected work <Arrow />
              </a>
              <a className="textlink" href="#about">
                A little about me
              </a>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait">
            <img
              src={heroPortrait}
              alt="Creative professional in a neutral studio"
            />
          </div>
          <div className={`art-note ${mode}`}>
            <small>Currently exploring</small>
            <b>
              {mode === "designer"
                ? "Somewhere between Development & design"
                : "Interfaces with expressive code"}
            </b>
          </div>
          <span className="scribble">made with care ↝</span>
          <Star className="hero-star" />
        </div>
      </div>
      <a className="scroll" href="#work">
        Scroll to wander <Arrow down />
      </a>
    </section>
  )
}
function Visual({ p, mode }: { p: Project ;mode: Mode }) {
  return (
    
    <div className={`visual ${p.tone} ${mode}`} aria-hidden="true">
      
      {p.slug === "bloganiac" && (
        <div className="mock health">
          <aside>
            <b>O</b>
            <i />
            <i />
            <i />
          </aside>
          <main>
            <small>Good morning, Olivia</small>
            <h4>Your care, in one place.</h4>
            <div className="panels">
              <i />
              <i />
              <i />
            </div>
            <div className="chart">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </main>
          <label>
            Feeling better
            <br />
            <b>week by week</b>
          </label>
        </div>
      )}
      {p.slug === "organza" && (
        <div className="mock shop">
          <header>
            <b>ORGANZA</b>
            <span>new / edit / objects</span>
          </header>
          <div className="shop-img">
            <div />
          </div>
          <article>
            <small>THE SPRING EDIT</small>
            <h4>
              Objects for
              <br />
              slow living.
            </h4>
            <span>Discover the collection →</span>
          </article>
        </div>
      )}
      {p.slug === "sign-it-off" && (
        <div className="mock sign">
          <header>
            <b>signitoff_</b>
            <span>verification / 042</span>
          </header>
          <div className="docs">
            <article>
              <small>SOURCE 01</small>
              <b>Sneha</b>
              <i />
              <i />
            </article>
            <label>
              <b>96%</b>
              <small>
                VISUAL MATCH
                <br />
                SAMPLE DATA
              </small>
            </label>
            <article>
              <small>SOURCE 02</small>
              <b>Sneha</b>
              <i />
              <i />
            </article>
          </div>
        </div>
      )}
      {p.slug === "far-from-home" && (
        <div className="mock farm">
          <div className="phone">
            <small>Good morning</small>
            <h4>Fresh near you</h4>
            <div>
              <i />
              <i />
              <i />
            </div>
            <span>Browse today’s harvest →</span>
          </div>
          <article>
            <h4>12 growers</h4>
            <small>within your selected region</small>
            <b>
              ⌁　⌁
              <br />
              　⌁　⌁
            </b>
          </article>
        </div>
      )}
      {p.slug === "experiments" && (
        <div className="mock exp">
          <article>
            <small>STUDY NO. 08</small>
            <h4>
              form
              <br />
              <em>&</em> feeling
            </h4>
          </article>
          <b>✳</b>
          <label>
            motion
            <br />
            in the margins
          </label>
        </div>
      )}
      <span className="stamp">
        {mode === "designer" ? "FIG. / VISUAL STUDY" : "< BUILD / VIEW >"}
      </span>
    </div>
  )
}

function Work({ mode, open }: { mode: Mode; open: (p: Project) => void }) {
  return (
    <section className="section shell" id="work">
      <Heading
        index="02"
        label="Selected work"
        title={
          <>
            Selected work,
            <br />
            <em>made with intention.</em>
          </>
        }
        copy="A few things I’ve designed, built, and thought deeply about."
      />

      <div className="project-grid">
        {projects.map((p) => {
          const isDesigner = mode === "designer"

          const handleProjectClick = () => {
            if (isDesigner) {
              open(p)
            } else if (p.url) {
              window.open(p.url, "_blank", "noopener,noreferrer")
            }
          }

          return (
            <article className="project" key={p.slug}>
              <button
                type="button"
                onClick={handleProjectClick}
                aria-label={
                  isDesigner
                    ? `View ${p.name} case study`
                    : p.url
                      ? `Visit ${p.name} live project`
                      : `${p.name} is not deployed yet`
                }
                disabled={!isDesigner && !p.url}
              >
                <Visual p={p} mode={mode} />

                <div className="project-title">
                  <span className="mono">{p.number}</span>
                  <h3>{p.name}</h3>
                  <i>
                    <Arrow />
                  </i>
                </div>

                <p className="category">
                  {p.listingCategory ?? `${p.category} · ${p.year}`}
                </p>

                <p className="desc">{p.description}</p>

                <span className="mode-note">
                  {isDesigner
                    ? "Explore case study ↗"
                    : p.url
                      ? "View live project ↗"
                      : "Coming soon"}
                </span>
              </button>
            </article>
          )
        })}
      </div>

      <p className="disclaimer">
        Project narratives and outcomes are editable, illustrative placeholders
        until verified case-study evidence is added.
      </p>
    </section>
  )
}

function Heading({
  index,
  label,
  title,
  copy,
}: {
  index: string
  label: string
  title: React.ReactNode
  copy: string
}) {
  return (
    <div className="heading">
      <div>
        <span className="eyebrow">
          {index} / {label}
        </span>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  )
}
function About({ mode }: { mode: Mode }) {
  const design = [
    "UI/UX Design",
    "Visual Design",
    "Wireframing\u00a0\u00a0",
    "Prototyping,",
    "Design Systems,",
    "Frontend Development",
  ]
  const dev = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Responsive Development",
  ]
  return (
    <section className="about section" id="about">
      <div className="shell">
        <div className="about-head">
          <span className="eyebrow">03 / About</span>
          <div>
            <h2>
              A designer at heart,
              <br />
              <em>a developer by practice.</em>
            </h2>
            <div className="columns">
              <p>
                I enjoy the space where creativity meets problem-solving. I’m
                drawn to thoughtful interfaces, small visual details, colours
                that feel right, and products that make complicated things a
                little easier.
              </p>
              <p>
                My background in computer science helps me understand how
                experiences are built, while design keeps me curious about how
                they should feel for the people using them.
              </p>
            </div>
          </div>
        </div>
        <div className="collage">
          <div className="portrait-tall">
            <img
              src={aboutPortrait}
              alt="Portrait placeholder for Sneha Sharma"
            />
          </div>
          <blockquote>
            “Clarity can be warm.
            <br />
            Useful can be beautiful.”
          </blockquote>
          <div className="note">
            <Star />
            <small>Curious about</small>
            <b>
              type, stories,
              <br />
              tiny interactions
            </b>
          </div>
          <span className="tape">DESIGNER / MAKER / THINKER</span>
        </div>
        <div className="toolkit">
          <div>
            <span className="eyebrow">Toolkit / Approach</span>
            <h3>
              What I bring
              <br />
              to the table.
            </h3>
          </div>
          <Skills title="01 / Design" skills={design} />
          <Skills title="02 / Development" skills={dev} />
          <Skills
            title="03 / Tools"
            skills={[
              "Figma + FigJam",
              "Git + GitHub",
              "VS Code / Cursor",
              "Canva",
            ]}
          />
        </div>
        <div className="timeline">
          <span className="eyebrow">A short timeline</span>
          <div>
            <b>Now</b>
            <p>
              Designing thoughtful products and building expressive frontend
              experiences.
            </p>
          </div>
          <div>
            <b>Practice</b>
            <p>
              {mode === "designer"
                ? "Research, systems, interface craft, and prototypes."
                : "React architecture, responsive UI, and accessible interactions."}
            </p>
          </div>
          <div>
            <b>Foundation</b>
            <p>
              Computer science education — ready to replace with verified
              information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
function Skills({ title, skills }: { title: string ;skills: string[] }) {
  return (
    <div className="skills">
      <span>{title}</span>
      {skills.map((x) => (
        <b key={x}>{x}</b>
      ))}
    </div>
  )
}
const play = [
  ["Type & temperament", "typography", "type"],
  ["Botanical system", "illustration", "flower"],
  ["A study in stillness", "colour", "color"],
  ["Cursor choreography", "interaction", "motion"],
  ["Notes from elsewhere", "moodboard", "notes"],
]
function Playground() {
  const [selected, setSelected] = useState<number | null>(null)
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null)
    addEventListener("keydown", esc)
    return () => removeEventListener("keydown", esc)
  }, [])
  const glyph = (i: number) => ["Aa", "✳", "○", "↝", "01—05"][i]
  return (
    <section className="section shell playground" id="playground">
      <Heading
        index="04"
        label="Playground"
        title={
          <>
            Things I make
            <br />
            <em>just because.</em>
          </>
        }
        copy="Loose thoughts, visual tangents, and tiny experiments without a brief."
      />
      <div className="play-grid">
        {play.map((x, i) => (
          <button
            type="button"
            className={`play ${x[2]}`}
            onClick={() => setSelected(i)}
            key={x[0]}
          >
            <div>
              <span>{glyph(i)}</span>
            </div>
            <small>{x[1]}</small>
            <b>{x[0]}</b>
          </button>
        ))}
      </div>
      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded artwork"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="close"
            onClick={() => setSelected(null)}
          >
            Close ×
          </button>
          <button
            type="button"
            className="prev"
            aria-label="Previous artwork"
            onClick={(e) => {
              e.stopPropagation()
              setSelected((selected + 4) % 5)
            }}
          >
            ←
          </button>
          <div
            className={`light-art ${play[selected][2]}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span>{glyph(selected)}</span>
            </div>
            <small>{play[selected][1]} / exploratory sample</small>
            <h3>{play[selected][0]}</h3>
          </div>
          <button
            type="button"
            className="next"
            aria-label="Next artwork"
            onClick={(e) => {
              e.stopPropagation()
              setSelected((selected + 1) % 5)
            }}
          >
            →
          </button>
        </div>
      )}
    </section>
  )
}
function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="shell">
        <Star />
        <span className="eyebrow">05 / Get in touch</span>
        <h2>
          Whenever, wherever.
          <br />
          <em>We're meant to work together.</em>
        </h2>
        <p>
        I live by the inbox zero rule, so your message won’t be missed. 
        And hey, You’ll always get a reply with a smile, guaranteed.
        </p>
        <a
          className="email"
          href={`mailto:${site.email}`}
          aria-label={`Email ${site.email}`}          
        >
          snehasharma08012003@gmail.com <Arrow />
        </a>
        <div className="socials">
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer">
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  )
}
function CaseStudy({
  p,
  mode,
  close,
}: {
  p: Project
  mode: Mode
  close: () => void
}) {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  const sections = [
    [
      "01 / Overview",
      "Making complexity feel a little more human.",
      "This case study is an editable narrative scaffold. Replace the framing below with verified project context, collaborators, constraints, and evidence before publishing.",
    ],
    [
      "02 / Research & discovery",
      "Start with the questions, not the screens.",
      "Illustrative process: stakeholder conversations, domain review, journey mapping, and a close look at moments where people may need extra clarity or reassurance.",
    ],
    [
      "03 / Flows & structure",
      "A quiet, legible path through the product.",
      "Sample architecture is shown to demonstrate the intended case-study format, not to represent verified project research.",
    ],
    [
      "04 / Visual design",
      "A system with structure—and enough air.",
      "The interface direction balances typographic hierarchy, purposeful colour, generous spacing, and accessible interaction states.",
    ],
    [
      "05 / Technical implementation",
      "Designed with the build in mind.",
      `${p.development}. Final implementation notes should document confirmed architecture, integrations, performance work, and accessibility testing.`,
    ],
    [
      "06 / Challenges & learnings",
      "What I would carry forward.",
      "Add real trade-offs, team contributions, outcomes, and learnings here. No impact claims are included until supported by project evidence.",
    ],
  ]
  return (
    <main className="case">
      <nav className="case-nav shell">
        <button type="button" onClick={close}>
          ← Back to all work
        </button>
        <span className="wordmark">
          sneha<span>.</span>
        </span>
        <span className="mono">
          {p.number} / {p.year}
        </span>
      </nav>
      <header className="case-hero shell">
        <span className="eyebrow">{p.category}</span>
        <h1>{p.name}</h1>
        <p>{p.description}</p>
        <div className="facts">
          <div>
            <span>Role</span>
            <b>{p.role}</b>
          </div>
          <div>
            <span>Focus</span>
            <b>{mode === "designer" ? p.design : p.development}</b>
          </div>
          <div>
            <span>Status</span>
            <b>Illustrative sample</b>
          </div>
        </div>
      </header>
      <div className="case-visual shell">
        <Visual p={p} mode={mode} />
      </div>
      <div className="case-body shell">
        <aside>
          <span>IN THIS STORY</span>
          {sections.map((s, i) => (
            <a href={`#story-${i}`} key={s[0]}>
              {s[0].slice(5)}
            </a>
          ))}
        </aside>
        <article>
          {sections.map((s, i) => (
            <section id={`story-${i}`} key={s[0]}>
              <span className="eyebrow">{s[0]}</span>
              <h2>{s[1]}</h2>
              <p>{s[2]}</p>
              {i === 2 && (
                <div className="flow">
                  <span>Entry</span>
                  <i>→</i>
                  <span>Guided task</span>
                  <i>→</i>
                  <span>Review</span>
                  <i>→</i>
                  <span>Outcome</span>
                </div>
              )}
              {i === 4 && (
                <pre>
                  <code>{`type Experience = {\n  clear: true;\n  accessible: true;\n  considered: true;\n};`}</code>
                </pre>
              )}
            </section>
          ))}
        </article>
      </div>
      <footer className="case-next shell">
        <span>Continue exploring</span>
        <button type="button" onClick={close}>
          All selected work <Arrow />
        </button>
      </footer>
    </main>
  )
}
export default function App() {
  const [mode, setMode] = useState<Mode>("designer")
  const [active, setActive] = useState<Project | null>(
    () => projects.find((p) => location.hash === `#work/${p.slug}`) || null,
  )
  const open = (p: Project) => {
    history.pushState(null, "", `#work/${p.slug}`)
    setActive(p)
  }
  const close = () => {
    history.pushState(null, "", "#work")
    setActive(null)
    setTimeout(() => document.querySelector("#work")?.scrollIntoView(), 0)
  }
  if (active) return <CaseStudy p={active} mode={mode} close={close} />
  return (
    <>
      <Nav mode={mode} setMode={setMode} />
      <main>
        <Hero mode={mode} />
        <Work mode={mode} open={open} />
        <About mode={mode} />
        <Playground />
        <Contact />
      </main>
      <footer className="footer shell">
        <span className="wordmark">
          sneha<span>.</span>
        </span>
        <p>Thoughtfully designed, carefully built.</p>
        <span>
          © {new Date().getFullYear()} · <a href="#top">Back to top ↑</a>
        </span>
      </footer>
    </>
  )
}
