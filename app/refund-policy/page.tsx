export default function RefundPolicy() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 md:py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-3xl md:text-4xl mb-8">Refund Policy</h1>
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]/60 mb-8">
        Last updated: [DATE]
      </p>

      <div className="space-y-6 text-[var(--ink)]/90 leading-relaxed">
        <p className="p-4 bg-[var(--rust)]/10 border-l-4 border-[var(--rust)] font-mono text-sm">
          PLACEHOLDER — replace this whole block with your actual policy
          before going live. Razorpay requires a stated refund policy;
          it can legitimately say "no refunds," but it must say something.
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">Digital course access</h2>
        <p>
          [PICK ONE:
          <br />— "All course purchases are final. No refunds once access is
          granted." (simplest, common for pre-recorded digital content)
          <br />— "Refund available within X days of purchase if less than
          Y% of course material has been accessed."
          <br />— some other rule specific to how you deliver access.]
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">1:1 calls</h2>
        <p>
          [PICK ONE: "Fully refundable if cancelled 24+ hours in advance" /
          "Non-refundable but reschedulable once" / your own rule.]
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">How to request</h2>
        <p>Email [YOUR EMAIL] with your order ID.</p>
      </div>
    </main>
  );
}
