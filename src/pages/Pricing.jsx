import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Contact us",
    description: "For single-location cafés and small restaurants.",
    features: [
      "✓ One location",
      "✓ Your logo on review page",
      "✓ QR code + link generation",
      "✓ Human-written reviews",
      "✓ Email support",
      "✓ Basic analytics",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "Contact us",
    description: "For multiple outlets or higher review volume.",
    features: [
      "✓ Multiple locations",
      "✓ Custom branding",
      "✓ Priority review writing",
      "✓ Advanced analytics dashboard",
      "✓ Dedicated support",
      "✓ API access",
      "✓ Volume discounts",
    ],
    cta: "Contact sales",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large chains and custom requirements.",
    features: [
      "✓ Unlimited locations",
      "✓ Full white-label solution",
      "✓ Premium content service",
      "✓ Real-time analytics",
      "✓ Dedicated account manager",
      "✓ Custom integrations",
      "✓ SLA guarantee",
    ],
    cta: "Contact us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900">
            Simple, affordable pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Flexible subscription plans for cafés and restaurants of all sizes.
            No hidden fees.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 p-8 transition-all ${
                  plan.highlighted
                    ? "border-brand-500 bg-brand-50/50 shadow-lg scale-105"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-brand-500 text-white text-xs font-medium">
                    Most Popular
                  </span>
                )}
                <h2 className="font-display text-xl font-semibold text-gray-900">
                  {plan.name}
                </h2>
                <p className="mt-1 text-brand-600 font-medium text-lg">
                  {plan.price}
                </p>
                <p className="mt-3 text-gray-600 text-sm">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <span className="text-brand-500 font-bold mt-0.5">✓</span>
                      <span>{feature.replace("✓ ", "")}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-brand-500 text-white hover:bg-brand-600"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-amber-50 border border-brand-200 p-8">
              <h3 className="font-display text-xl font-semibold text-gray-900">
                What's included in all plans?
              </h3>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  "QR code generation & tracking",
                  "Review flow management",
                  "Content generation by humans",
                  "Analytics & conversion metrics",
                  "Secure cloud hosting (AWS)",
                  "Multi-café dashboard",
                  "Google policy compliance",
                  "Redirect to Google reviews",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <span className="text-brand-600 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
