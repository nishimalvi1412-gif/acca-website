export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 md:py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-3xl md:text-4xl mb-8">Privacy Policy</h1>
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]/60 mb-8">
        Last updated: [DATE — update this each time you edit the policy]
      </p>

      <div className="space-y-6 text-[var(--ink)]/90 leading-relaxed">
        <p>
          This policy explains what information is collected on this website,
          how it is used, and how it is protected. It applies to anyone who
          visits this site, books a call, or purchases a course.
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">What is collected</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name and email address, when you create an account or book a call</li>
          <li>Payment confirmation details from Razorpay (this site never sees or stores your card, UPI, or bank details directly — Razorpay processes and holds that)</li>
          <li>Course purchase history, tied to your account</li>
        </ul>

        <h2 className="font-display text-xl mt-8 mb-2">How it is used</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To give you access to courses you've purchased</li>
          <li>To contact you about the course, batch updates, or a call you've booked</li>
          <li>Never sold or shared with third parties for marketing</li>
        </ul>

        <h2 className="font-display text-xl mt-8 mb-2">Data storage</h2>
        <p>
          Account and purchase data is stored with Supabase. Payment
          processing is handled entirely by Razorpay under their own
          security standards — this site does not store card or bank
          details at any point.
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">Your rights</h2>
        <p>
          You can request access to, correction of, or deletion of your
          personal data by writing to [YOUR EMAIL]. Deletion requests for
          purchased-course data may be limited where records must be kept
          for payment/tax compliance.
        </p>

        <h2 className="font-display text-xl mt-8 mb-2">Contact</h2>
        <p>Questions about this policy: [YOUR EMAIL]</p>
      </div>
    </main>
  );
}
