import Link from "next/link";

const subjects = [
  { code: "FA", name: "Financial Accounting", level: "Applied Knowledge" },
  { code: "MA", name: "Management Accounting", level: "Applied Knowledge" },
  { code: "BT", name: "Business & Technology", level: "Applied Knowledge" },
  { code: "TX", name: "Taxation", level: "Applied Skills" },
  { code: "FR", name: "Financial Reporting", level: "Applied Skills" },
  { code: "FM", name: "Financial Management", level: "Applied Skills" },
  { code: "AA", name: "Audit & Assurance", level: "Applied Skills" },
  { code: "ATX", name: "Advanced Taxation", level: "Strategic Professional" },
  { code: "SBL", name: "Strategic Business Leader", level: "Strategic Professional" },
  { code: "SBR", name: "Strategic Business Reporting", level: "Strategic Professional" },
];

const socials = [
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b-2 border-[var(--ink)] px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--verified)] mb-4">
            ACCA Tuition — Ahmedabad
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Exam answers that read like they were written by someone who's
            already passed.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-[var(--ink)]/80 mb-8">
            Structured prep across ten ACCA papers, from Applied Knowledge
            through Strategic Professional. Built around how markers actually
            score scripts, not just what's in the syllabus.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#subjects"
              className="font-mono text-sm px-6 py-3 bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--verified)] transition-colors"
            >
              View subjects
            </Link>
            <Link
              href="/book-a-call"
              className="font-mono text-sm px-6 py-3 border-2 border-[var(--ink)] hover:border-[var(--verified)] hover:text-[var(--verified)] transition-colors"
            >
              Book a 1:1 call →
            </Link>
          </div>
        </div>
      </section>

      {/* Subjects — ledger style */}
      <section id="subjects" className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl mb-2">Papers taught</h2>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]/60 mb-8">
            Ledger of current offerings
          </p>

          <div className="border-t-2 border-[var(--ink)]">
            {subjects.map((s) => (
              <Link
                href={`/subjects/${s.code.toLowerCase()}`}
                key={s.code}
                className="flex items-center justify-between py-4 border-b border-[var(--ink)]/30 hover:bg-[var(--ink)]/5 transition-colors group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-[var(--verified)] w-12">
                    {s.code}
                  </span>
                  <span className="font-display text-lg md:text-xl">
                    {s.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-[var(--ink)]/50 uppercase tracking-wide group-hover:text-[var(--verified)]">
                  {s.level} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with stamp */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-[var(--ink)] text-[var(--paper)]">
        <div className="max-w-4xl relative">
          <h2 className="font-display text-2xl md:text-3xl mb-8">
            What students say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Screenshot placeholders — replace src with real testimonial screenshots */}
            <div className="bg-[var(--paper)] p-3 -rotate-1">
              <div className="aspect-[4/3] bg-[var(--ink)]/10 flex items-center justify-center text-[var(--ink)]/40 font-mono text-xs">
                testimonial-screenshot-1.jpg
              </div>
            </div>
            <div className="bg-[var(--paper)] p-3 rotate-1">
              <div className="aspect-[4/3] bg-[var(--ink)]/10 flex items-center justify-center text-[var(--ink)]/40 font-mono text-xs">
                testimonial-screenshot-2.jpg
              </div>
            </div>
          </div>

          {/* Signature stamp element */}
          <div className="absolute -top-2 right-4 md:right-12 rotate-[-8deg] border-4 border-[var(--verified)] text-[var(--verified)] px-4 py-2 font-mono text-xs md:text-sm uppercase tracking-widest opacity-90">
            Verified
          </div>
        </div>
      </section>

      {/* Channels / socials */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl mb-8">
            Follow along
          </h2>
          <div className="flex flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-mono text-sm px-5 py-2.5 border-2 border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs teaser */}
      <section className="px-6 md:px-12 py-16 md:py-20 border-t-2 border-[var(--ink)]">
        <div className="max-w-4xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-2">
              Job postings
            </h2>
            <p className="text-[var(--ink)]/70 max-w-xl">
              Roles relevant to ACCA-qualified and part-qualified candidates,
              posted regularly.
            </p>
          </div>
          <Link
            href="/jobs"
            className="font-mono text-sm px-6 py-3 bg-[var(--rust)] text-[var(--paper)] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            View postings →
          </Link>
        </div>
      </section>

      {/* Footer — legal links live here, required for Razorpay activation */}
      <footer className="px-6 md:px-12 py-8 border-t border-[var(--ink)]/30 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink)]/60">
        <Link href="/privacy" className="hover:text-[var(--verified)]">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-[var(--verified)]">
          Terms of Service
        </Link>
        <Link href="/refund-policy" className="hover:text-[var(--verified)]">
          Refund Policy
        </Link>
      </footer>
    </main>
  );
}
