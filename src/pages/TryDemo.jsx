import { useState } from "react";
import { Link } from "react-router-dom";

const feedbackCategories = [
  {
    id: "food",
    label: "Food quality",
    options: ["Excellent", "Good", "Okay", "Needs improvement"],
  },
  {
    id: "service",
    label: "Service",
    options: ["Outstanding", "Friendly", "Average", "Slow"],
  },
  {
    id: "ambience",
    label: "Ambience / vibe",
    options: ["Loved it", "Nice", "Okay", "Too noisy"],
  },
  {
    id: "value",
    label: "Value for money",
    options: ["Great deal", "Fair", "Pricey", "Not worth it"],
  },
];

export default function TryDemo() {
  const [selections, setSelections] = useState(
    Object.fromEntries(feedbackCategories.map(({ id }) => [id, ""])),
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function chooseOption(categoryId, option) {
    setSelections((prev) => ({ ...prev, [categoryId]: option }));
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const allSelected = feedbackCategories.every(({ id }) => selections[id]);
    if (!allSelected || !message.trim()) {
      setError("Please answer all sections and write your review.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  const answeredCount = feedbackCategories.filter(
    ({ id }) => selections[id],
  ).length;
  const progress = Math.round(
    ((answeredCount + (message.trim() ? 1 : 0)) /
      (feedbackCategories.length + 1)) *
      100,
  );

  if (submitted) {
    return (
      <section className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="max-w-xl w-full text-center rounded-3xl border border-brand-100 bg-white shadow-xl p-8">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-sm">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold text-gray-900">
            Thanks for sharing your experience
          </h2>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">
            Your demo response has been captured. In production, this gets
            transformed into an authentic, human-written Google review draft.
          </p>
          <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4 text-left">
            <p className="text-sm text-gray-500 mb-2">Your selections:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {feedbackCategories.map(({ id, label }) => (
                <li
                  key={id}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="font-medium">{label}</span>
                  <span className="text-brand-700">{selections[id]}</span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                <span className="font-medium">Review text</span>
                <span className="text-brand-700">Added</span>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-brand-600 font-medium hover:underline"
          >
            Back to home
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
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-[#f8f6f2] py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(234,117,29,0.12),transparent_40%),radial-gradient(circle_at_85%_12%,rgba(17,24,39,0.08),transparent_35%)]" />

      <div className="relative mx-auto flex w-full max-w-[430px] justify-center px-4">
        <div className="w-full rounded-[2rem] border-4 border-slate-900 bg-slate-900 p-1.5 shadow-[0_18px_50px_rgba(2,6,23,0.35)]">
          <div className="overflow-hidden rounded-[1.6rem] bg-white">
            <div className="bg-gradient-to-r from-[#4f1605] to-[#8a3313] px-4 py-3.5 text-white">
              <div className="text-center">
                <p className="font-display text-2xl leading-none font-bold">
                  Cafe Delicioso
                </p>
                <p className="mt-1 text-[11px] text-orange-100">
                  Quick Guest Feedback
                </p>
              </div>
            </div>

            <div className="border-b border-gray-100 px-4 py-3">
              <h2 className="text-center font-display text-[1.85rem] font-bold leading-tight text-slate-900">
                Share your experience
              </h2>
              <p className="mt-0.5 text-center text-sm text-slate-500">
                Takes only 10 seconds
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-h-[67vh] space-y-3 overflow-y-auto px-4 py-3"
            >
              {feedbackCategories.map(({ id, label, options }) => (
                <div key={id}>
                  <p className="font-display text-[1.75rem] font-semibold leading-none text-slate-900">
                    {label}:
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {options.map((option) => {
                      const isActive = selections[id] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => chooseOption(id, option)}
                          className={`rounded-xl border px-2 py-2 text-sm font-semibold transition-all ${
                            isActive
                              ? "border-brand-600 bg-brand-600 text-white"
                              : "border-slate-300 bg-white text-slate-700 hover:border-brand-400 hover:text-brand-700"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div>
                <p className="font-display text-[1.75rem] font-semibold leading-none text-slate-900">
                  Review:
                </p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your review..."
                  rows="3"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-brand-500 focus:outline-none"
                />
              </div>

              {error ? (
                <p className="text-sm font-medium text-red-600">{error}</p>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 py-2.5 font-display text-xl font-semibold text-white shadow-md transition-all hover:from-brand-700 hover:to-brand-600"
              >
                Submit review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
