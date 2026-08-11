export default function Terms() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 md:py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-3xl md:text-4xl mb-8">Terms of Service</h1>
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]/60 mb-8">
        Last updated: [DATE — update this each time you edit the terms]
      </p>

      <div className="space-y-6 text-[var(--ink)]/90 leading-relaxed">
        <h2 className="font-display text-xl mt-8 mb-2">What you're buying</h2>
        <p>
          Purchasing a course on this site grants one individual (the
          account holder) access to that course's materials. Access is
          personal and non-transferable — it may not be shared, resold, or
          used to create derivative teaching material without written
          permission.
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">Access duration</h2>
        <p>
          [DEFINE THIS: e.g. "Access is granted until the exam sitting the
          course was built for" or "Access is granted for 12 months from
          purchase." Undefined access duration is a common source of later
          disputes — pick one and state it.]
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">1:1 calls</h2>
        <p>
          Calls booked through this site are subject to the availability
          shown at booking. Rescheduling and cancellation terms: [DEFINE —
          e.g. "may be rescheduled once with 24 hours' notice."]
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">No guarantee of exam outcome</h2>
        <p>
          Course materials and 1:1 sessions are prepared in good faith to
          support ACCA exam preparation. They do not guarantee any specific
          exam result.
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">Refunds</h2>
        <p>See the separate Refund Policy page.</p>

        <h2 className="font-display text-xl mt-8 mb-2">Contact</h2>
        <p>[YOUR EMAIL]</p>
      </div>
    </main>
  );
}
