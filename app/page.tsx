import Link from "next/link";

const stats = [
  { value: "500+", label: "students mentored" },
  { value: "5+", label: "years teaching experience" },
];

const features = [
  { title: "Live and recorded classes", body: "Join live sessions or catch up anytime with recordings." },
  { title: "Exam technique focus", body: "Built around how markers actually score scripts." },
  { title: "1:1 mentorship calls", body: "Direct access to clear doubts and plan your attempt." },
  { title: "UK accounting background", body: "Real-world finalization experience behind every lesson." },
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@nishimalvi1412" },
  { label: "Instagram", href: "https://www.instagram.com/nishi.malvi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nishimalvi-1412a2001" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 flex justify-between items-center px-6 md:px-12 py-4 bg-[linear-gradient(135deg,var(--maroon-mid),var(--maroon-dark))]">
        <div className="font-display font-extrabold text-lg text-[var(--gold)] tracking-wide">
          NISHI MALVI
        </div>
        <nav className="flex items-center gap-6 md:gap-8">
          <a href="#subjects" className="hidden sm:inline text-white font-mono text-xs uppercase tracking-widest">
            Subjects
          </a>
          <a href="#about" className="hidden sm:inline text-white font-mono text-xs uppercase tracking-widest">
            About
          </a>
          <Link
            href="/book-a-call"
            className="bg-[var(--rust)] text-white rounded-full px-5 py-2 font-mono text-xs font-semibold uppercase tracking-widest"
          >
            Book a call
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex items-center justify-center gap-12 md:gap-16 px-6 md:px-12 py-16 md:py-24 flex-wrap bg-[linear-gradient(135deg,var(--maroon-mid),var(--maroon-dark))]">
        <div className="max-w-xl">
          <h1 className="font-display font-extrabold uppercase text-4xl md:text-5xl leading-[1.1] text-[var(--gold)] mb-5">
            Aim higher.
            <br />
            Score your best.
          </h1>
          <p className="text-lg md:text-xl font-semibold text-white mb-3">
            Less guessing. More strategy.{" "}
            <span className="text-[var(--rust)]">Better scores.</span>
          </p>
          <p className="text-base md:text-[17px] text-[var(--subtitle)] max-w-lg mb-8">
            Structured ACCA SBL mentorship built around drafting — the exact
            skill that decides whether you clear this paper.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#subjects"
              className="bg-[var(--gold)] text-[var(--maroon-dark)] rounded-full px-7 py-3.5 font-mono text-sm font-semibold"
            >
              View subjects
            </Link>
            <Link
              href="/book-a-call"
              className="bg-[var(--rust)] text-white rounded-full px-7 py-3.5 font-mono text-sm font-semibold"
            >
              Book a 1:1 call →
            </Link>
          </div>
        </div>

        <div>
          <div className="w-[240px] md:w-[280px] aspect-[4/5] rounded-xl border-[3px] border-[var(--gold)] overflow-hidden bg-[#333]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/nishi.png"
              alt="Nishi Malvi, ACCA trainer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-4 font-mono text-xs uppercase tracking-widest text-[var(--gold)]">
            Nishi — ACCA trainer
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="flex justify-center px-6 md:px-12 py-10 md:py-12 bg-[var(--maroon-dark)]">
        <div className="border border-[var(--gold)] rounded-[20px] p-3 flex flex-col gap-3 max-w-[600px] w-full">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-[var(--gold)]/40 rounded-[14px] px-6 py-4 flex justify-center items-baseline gap-2"
            >
              <span className="font-display font-extrabold text-2xl text-[var(--gold)]">
                {s.value}
              </span>
              <span className="font-mono text-[13px] uppercase tracking-wide text-white">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-12 py-16 md:py-24 text-center bg-[linear-gradient(180deg,#0A0818,#3A3560)]"
      >
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
          Meet your instructor, <span className="text-[var(--rust)]">Nishi</span>
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-white/80">
          I&apos;m a freelance ACCA trainer based in Ahmedabad, currently
          focused on Strategic Business Leader (SBL). My teaching background
          spans real UK accounting finalization experience, which shapes how
          I explain the standards in class.
        </p>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[linear-gradient(180deg,#3A3560,#F3F0FA)]">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[var(--ink)] text-center mb-10 md:mb-12">
          Why students choose Nishi
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[var(--gold)]/60 rounded-2xl p-7"
            >
              <h3 className="font-display font-extrabold text-lg text-[var(--rust)] mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-[var(--ink)]/70">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="px-6 md:px-12 py-16 md:py-24 bg-[var(--paper)]">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-center mb-2">
          What I teach
        </h2>
        <p className="text-center font-mono text-xs uppercase tracking-widest text-[var(--ink)]/50 mb-10 md:mb-12">
          Currently accepting students for
        </p>
        <div className="max-w-sm mx-auto border-2 border-[var(--gold)] rounded-2xl p-8 text-center">
          <div className="flex justify-center items-baseline gap-3 mb-3">
            <span className="font-mono font-bold text-[var(--rust)] text-base">
              SBL
            </span>
            <span className="font-mono text-[10px] uppercase text-[var(--ink)]/40">
              Strategic Professional
            </span>
          </div>
          <h3 className="font-display font-semibold text-2xl mb-4">
            Strategic Business Leader
          </h3>
          <p className="text-sm text-[var(--ink)]/70 mb-6">
            SBL is a drafting exam, not a knowledge test — I&apos;ll show you
            exactly how to structure every answer to hit the marks markers
            are actually looking for.
          </p>
          <Link
            href="/book-a-call"
            className="inline-block bg-[var(--rust)] text-white rounded-full px-6 py-3 font-mono text-sm font-semibold"
          >
            Book a 1:1 call →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-[var(--paper)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-8 text-center">
            What students say
          </h2>
          <div className="relative">
            <div className="absolute -top-3 right-2 md:right-6 rotate-[-8deg] border-4 border-[var(--rust)] text-[var(--rust)] px-3 py-1.5 md:px-4 md:py-2 font-mono text-[10px] md:text-sm uppercase tracking-widest bg-white rounded-lg z-10">
              Verified
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              {/* Screenshot placeholders — replace src with real testimonial screenshots */}
              <div className="bg-white border-2 border-[var(--gold)] rounded-2xl p-3 -rotate-1">
                <div className="aspect-[4/3] bg-[var(--ink)]/5 rounded-lg flex items-center justify-center text-[var(--ink)]/40 font-mono text-xs">
                  testimonial-screenshot-1.jpg
                </div>
              </div>
              <div className="bg-white border-2 border-[var(--gold)] rounded-2xl p-3 rotate-1">
                <div className="aspect-[4/3] bg-[var(--ink)]/5 rounded-lg flex items-center justify-center text-[var(--ink)]/40 font-mono text-xs">
                  testimonial-screenshot-2.jpg
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels / socials */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-[var(--paper)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-8">
            Follow along
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((s) => (
              
                key={s.label}
                href={s.href}
                className="border-2 border-[var(--rust)] text-[var(--ink)] rounded-full px-6 py-3 font-mono text-sm hover:bg-[var(--rust)] hover:text-white transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs teaser */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-[var(--paper)]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white border-2 border-[var(--gold)] rounded-2xl p-8">
          <div>
            <h2 className="font-display font-extrabold text-2xl mb-2">
              Job postings
            </h2>
            <p className="text-[var(--ink)]/70 max-w-xl">
              Roles relevant to ACCA-qualified and part-qualified candidates,
              posted regularly.
            </p>
          </div>
          <Link
            href="/jobs"
            className="bg-[var(--rust)] text-white rounded-full px-6 py-3 font-mono text-sm font-semibold whitespace-nowrap text-center"
          >
            View postings →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex flex-wrap gap-6 bg-[var(--maroon-dark)]">
        <Link href="/privacy" className="text-[var(--gold)] font-mono text-xs font-semibold uppercase tracking-widest">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-[var(--gold)] font-mono text-xs font-semibold uppercase tracking-widest">
          Terms of Service
        </Link>
        <Link href="/refund-policy" className="text-[var(--gold)] font-mono text-xs font-semibold uppercase tracking-widest">
          Refund Policy
        </Link>
      </footer>
    </main>
  );
}
