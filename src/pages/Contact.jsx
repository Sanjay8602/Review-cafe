import { useState } from "react";

const CONTACT_EMAIL = "rahul@reviewmycafe.in";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Send email via mailto link with form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=New Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900">
            Contact us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Questions about pricing, integration, or a demo for your café? We’re
            here to help.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center">
              <p className="font-display font-semibold text-brand-700">
                Thanks for reaching out.
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                We’ll get back to you shortly. For urgent requests, you can also
                email us directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="you@cafe.com"
                />
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business / Café name
                </label>
                <input
                  id="business"
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Your café or restaurant"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Tell us what you need—demo, pricing, integration..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
              >
                Send message
              </button>
            </form>
          )}
          <div className="mt-10 pt-10 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              You can also email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-brand-600 font-medium hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              for a direct response.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 text-center">
            How we support you
          </h2>
          <p className="mt-2 text-center text-gray-600 mb-12">
            We're committed to helping your café succeed with Review My Cafe.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Setup</h3>
              <p className="text-sm text-gray-600">
                Get started in minutes with our step-by-step onboarding guide.
                No technical skills required.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Priority Support
              </h3>
              <p className="text-sm text-gray-600">
                Dedicated support team ready to help with integration,
                customization, and troubleshooting.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
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
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast Response
              </h3>
              <p className="text-sm text-gray-600">
                We typically respond within 24 hours. Urgent requests get
                priority handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 text-center mb-12">
            Common questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What's the typical response time?
              </h3>
              <p className="text-gray-600 text-sm">
                We respond to all inquiries within 24 business hours. Most
                questions are answered same-day during business hours (9 AM - 6
                PM IST).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I schedule a demo?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! Use the contact form to request a demo and let us know your
                preferred time. We'll work with your schedule to find a time
                that works best.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer a free trial?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, we offer a 14-day free trial for new customers. No credit
                card required. You can test the full platform and see results
                before committing.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can you help with integration?
              </h3>
              <p className="text-gray-600 text-sm">
                Absolutely. Our team handles all integration work for you. We
                support integrations with POS systems, websites, mobile apps,
                and more.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What if I have multiple café locations?
              </h3>
              <p className="text-gray-600 text-sm">
                We support multi-location setups with a single dashboard. You
                can manage reviews across all your properties from one place
                with location-specific insights and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold">
            Ready to start collecting reviews?
          </h2>
          <p className="mt-4 text-brand-100">
            Join hundreds of cafés and restaurants already using Review My Cafe
            to grow their business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=I'd like to start with Review My Cafe&body=Hi Rahul,\n\nI'd like to know more about getting started with Review My Cafe for my café.\n\nLooking forward to hearing from you!`;
                window.location.href = mailtoLink;
              }}
              className="px-8 py-3 rounded-lg bg-white text-brand-600 font-medium hover:bg-gray-100 transition-colors"
            >
              Start free trial
            </button>
            <a
              href="/"
              className="px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
