const steps = [
  {
    step: 1,
    title: "Scan QR",
    description:
      "Customers scan the QR code placed on tables, bills, counters, or posters. A lightweight web page opens instantly with zero friction—no app download required, no login required.",
  },
  {
    step: 2,
    title: "Quick Feedback",
    description:
      "They select their experience for food quality, service, ambience/vibe, and value for money. They give a star rating. The whole thing takes about 10 seconds.",
  },
  {
    step: 3,
    title: "Smart Review Draft",
    description:
      "Based on the selected checkpoints, our system prepares a natural, human-friendly review draft structured to sound authentic and conversational.",
  },
  {
    step: 4,
    title: "Human Content Review",
    description:
      "Our professional content writing team reviews and refines every draft to ensure clarity, authenticity, Google policy compliance, and brand-safe language.",
  },
  {
    step: 5,
    title: "Post to Google",
    description:
      "The customer is redirected to their café's Google review page with the review content ready to post. They click submit and the review goes live instantly.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900">
            How Review My Cafe Works
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            From QR scan to live Google review in five simple steps. Scan →
            Answer → Post → Grow
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-500 text-white font-display font-bold flex items-center justify-center">
                  {step}
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-gray-900">
                    {title}
                  </h2>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-amber-50/50 border border-brand-200">
            <h3 className="font-display text-lg font-semibold text-gray-900">
              Why this process works
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex gap-2">
                <span className="text-brand-600 mt-0.5">•</span>
                <span>
                  <strong>Zero friction</strong> — Customers finish in under 10
                  seconds instead of 2-3 minutes
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600 mt-0.5">•</span>
                <span>
                  <strong>Higher conversion</strong> — Simple checkpoints = more
                  guests actually submit
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600 mt-0.5">•</span>
                <span>
                  <strong>Authentic content</strong> — Human-written reviews
                  that sound natural and comply with Google policies
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600 mt-0.5">•</span>
                <span>
                  <strong>Better SEO</strong> — More authentic reviews improve
                  local search ranking and visibility
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
