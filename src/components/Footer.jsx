import { Link } from "react-router-dom";
import { companyInfo } from "../data/teamData";

const footerLinks = {
  Product: [
    { to: "/how-it-works", label: "How it Works" },
    { to: "/pricing", label: "Pricing" },
    { to: "/try-demo", label: "Try Demo" },
  ],
  Company: [
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 font-display font-bold text-lg text-white"
            >
              <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-xs">
                RMC
              </span>
              Review My Cafe
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Get Google reviews in 10 seconds. Built for cafés and restaurants.
            </p>
            {/* Company Address */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Address
              </p>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed max-w-xs">
                {companyInfo.address}
              </p>
            </div>
            {/* Company Email */}
            <div className="mt-4">
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-xs text-gray-400 hover:text-brand-400 transition-colors"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <p className="text-sm text-gray-500">
              © {currentYear} Review My Cafe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/review-my-cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-sm text-brand-400 font-semibold">
              Review My Cafe — Scan. Review. Grow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
