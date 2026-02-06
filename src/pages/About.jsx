import { Link } from "react-router-dom";

const highlights = [
  "Faster reviews — customers finish in ~10 seconds instead of 2–3 minutes",
  "Higher conversion — simple checkpoints mean more guests actually submit",
  "Improved Google ranking and local search visibility",
  "Ease of use for both customers and café staff",
  "Reviews written by a professional content team, not AI — for authenticity and Google policy compliance",
];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-gray-900">
            About Review My Cafe
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Review My Cafe is a QR-based SaaS platform that helps cafés and
            restaurants collect more Google reviews quickly, easily, and
            authentically. The goal is simple: reduce the effort required from
            customers and increase review conversion for businesses.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We built this because most customers leave happy — but never
            actually leave a review. Traditional review methods take too long,
            require typing, confuse customers, and staff can't follow up. As a
            result, cafés lose visibility, trust, and potential customers.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900">
            The Problem
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Getting authentic Google reviews is hard. While your café might
            serve amazing food and provide great service, converting happy
            customers into actual Google reviews is nearly impossible using
            traditional methods.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-red-50 border border-red-200">
            <h3 className="font-semibold text-gray-900">
              Traditional review methods:
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>• Take 2-3 minutes per review (too long)</li>
              <li>• Require customers to type detailed feedback</li>
              <li>• Confuse customers with unclear instructions</li>
              <li>• Staff can't follow up or track progress</li>
              <li>• Result: Very low conversion rates</li>
            </ul>
          </div>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12">
            Our Solution
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Review My Cafe makes the process simple, fast, and frictionless.
            Customers just scan a QR code, tap quick checkpoints, and submit.
            Done in under 10 seconds.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-green-50 border border-green-200">
            <h3 className="font-semibold text-gray-900">How we do it:</h3>
            <ol className="mt-3 space-y-2 text-gray-600">
              <li>
                <strong>1. Scan QR</strong> — Customers scan the QR at your café
              </li>
              <li>
                <strong>2. Quick Feedback</strong> — They select food, service,
                ambience, and value for money
              </li>
              <li>
                <strong>3. Smart Draft</strong> — Our system creates a natural,
                human-friendly review
              </li>
              <li>
                <strong>4. Human Review</strong> — Our content team refines it
                for authenticity and compliance
              </li>
              <li>
                <strong>5. Post to Google</strong> — Customer gets redirected to
                post the review instantly
              </li>
            </ol>
          </div>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12">
            Key Benefits
          </h2>
          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-brand-500 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12">
            Our Approach to Content
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Reviews are written by a{" "}
            <strong>professional content writing team</strong>, not AI. This is
            crucial because:
          </p>
          <div className="mt-4 space-y-3 text-gray-600">
            <div className="flex gap-3">
              <span className="text-brand-600">•</span>
              <span>
                <strong>Authenticity:</strong> Real writers create reviews that
                sound natural and genuine
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-600">•</span>
              <span>
                <strong>Google Compliance:</strong> Our team ensures every
                review follows Google's policies—no risk of removal
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-600">•</span>
              <span>
                <strong>Brand Safety:</strong> We use language that resonates
                with both customers and search engines
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-600">•</span>
              <span>
                <strong>Trustworthiness:</strong> Potential customers can tell
                the difference between AI-written and human-written reviews
              </span>
            </div>
          </div>

          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12">
            Business Model
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We offer a simple <strong>paid subscription</strong> with
            affordable, transparent pricing for cafés and restaurants of all
            sizes. No long-term lock-in, no hidden fees.
          </p>
          <div className="mt-4 p-6 rounded-2xl bg-gradient-to-r from-brand-50 to-amber-50 border border-brand-200">
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> Flexible pricing based
                on locations and volume
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> Dedicated feedback
                flow with your café logo
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> Professional support
                team
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> No setup fees,
                month-to-month flexibility
              </li>
            </ul>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white">
            <h3 className="font-display font-semibold text-lg">In One Line</h3>
            <p className="mt-2 text-brand-100">Scan → Answer → Submit → Grow</p>
            <p className="mt-4 text-brand-100">
              Review My Cafe turns happy customers into real Google reviews in
              seconds.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 leading-relaxed">
              Ready to see it in action? Try our{" "}
              <Link
                to="/try-demo"
                className="text-brand-600 font-medium hover:underline"
              >
                interactive demo
              </Link>{" "}
              or{" "}
              <Link
                to="/contact"
                className="text-brand-600 font-medium hover:underline"
              >
                contact us
              </Link>{" "}
              to discuss your café's needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
