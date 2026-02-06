import { Link } from "react-router-dom";

const features = [
  {
    title: "10 seconds, not 3 minutes",
    description:
      "Customers complete a quick checklist instead of writing a full review. Your backend turns it into a polished Google review.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Higher review conversion",
    description:
      "Simple checkpoints (food, service, ambience, value) mean more guests actually leave a review.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Human-written reviews",
    description:
      "Professional content writing team reviews every submission for authenticity and Google policy compliance.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
  },
  {
    title: "Better Google visibility",
    description:
      "Authentic, compliant reviews improve local search ranking and build customer trust.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Multi-location support",
    description:
      "Scale across multiple cafés or restaurants with centralized analytics and management.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2.121 2.121 0 01-4.242 0m4.242 0V9.5m0 0a2.121 2.121 0 00-4.242 0m4.242 0V21m-4.242 0H5m3.661-12a2.121 2.121 0 01-4.242 0m4.242 0a2.121 2.121 0 00-4.242 0"
        />
      </svg>
    ),
  },
  {
    title: "Analytics dashboard",
    description:
      "Track conversion metrics, review generation, and customer feedback—all in real-time.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "10 sec", label: "Average review time" },
  { value: "Higher", label: "Conversion rate" },
  { value: "Organic", label: "Human-written reviews" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(234,117,29,0.15),_transparent)]" />
        <div className="relative w-full max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            Turn happy customers into{" "}
            <span className="text-brand-600">Google reviews</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
            Collect authentic Google reviews in just 10 seconds using our
            QR-based smart review system — built specially for cafés and
            restaurants.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/try-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gray-900 text-white font-medium text-base hover:bg-gray-800 transition-colors"
            >
              Try Demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-brand-600 text-white font-medium text-base hover:bg-brand-700 transition-colors"
            >
              Book Demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-brand-600">
                  {value}
                </p>
                <p className="mt-1 text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center">
            Why cafés choose us
          </h2>
          <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
            Less friction for customers, more reviews for you, and content that
            fits Google’s guidelines.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {features.map(({ title, description, icon }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-200/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="mt-4 font-display font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900">
            Ready to grow your café?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start collecting authentic Google reviews today. No credit card
            required for the demo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/try-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Try Free Demo
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
