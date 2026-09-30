import { Globe2 } from "lucide-react";

const columns = [
  {
    title: "Support",
    links: [
      "Help Center",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighborhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Airbnb-friendly apartments",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-columns page-container">
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => (
              <a href="#footer" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom page-container">
        <div className="footer-legal">
          <span>© 2026 Airbnb, Inc.</span>
          <span>·</span>
          <a href="#footer">Privacy</a>
          <span>·</span>
          <a href="#footer">Terms</a>
          <span>·</span>
          <a href="#footer">Sitemap</a>
          <span>·</span>
          <a href="#footer">UK Modern Slavery Act</a>
        </div>
        <div className="footer-preferences">
          <button type="button" className="pref-btn">
            <Globe2 size={16} />
            <span>English (US)</span>
          </button>
          <button type="button" className="pref-btn">
            <span className="currency-symbol">$</span>
            <span>USD</span>
          </button>
          <div className="social-links">
            <a
              href="#footer"
              aria-label="Facebook"
              className="social-icon-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#footer" aria-label="X" className="social-icon-link">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#footer"
              aria-label="Instagram"
              className="social-icon-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
