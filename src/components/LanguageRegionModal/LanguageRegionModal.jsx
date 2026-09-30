import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

const suggestedLanguages = [
  ["English", "United Kingdom"],
  ["English", "United States"],
  ["हिन्दी", "भारत"],
  ["Español", "España"],
  ["मराठी", "भारत"],
];

const languageRegions = [
  ["English", "India"],
  ["Azərbaycan dili", "Azərbaycan"],
  ["Bahasa Indonesia", "Indonesia"],
  ["Bosanski", "Bosna i Hercegovina"],
  ["Català", "Espanya"],
  ["Čeština", "Česká republika"],
  ["Crnogorski", "Crna Gora"],
  ["Dansk", "Danmark"],
  ["Deutsch", "Deutschland"],
  ["Deutsch", "Österreich"],
  ["Deutsch", "Schweiz"],
  ["Deutsch", "Luxemburg"],
  ["Eesti", "Eesti"],
  ["English", "Australia"],
  ["English", "Canada"],
];

const currencies = [
  ["Indian Rupee", "INR", "₹"],
  ["United States Dollar", "USD", "$"],
  ["Euro", "EUR", "€"],
  ["British Pound", "GBP", "£"],
  ["Australian Dollar", "AUD", "A$"],
  ["Canadian Dollar", "CAD", "C$"],
  ["Japanese Yen", "JPY", "¥"],
  ["Singapore Dollar", "SGD", "S$"],
];

function RegionCard({ primary, secondary, symbol }) {
  return (
    <button className="region-card" type="button">
      <strong>{primary}</strong>
      <span>{secondary}</span>
      {symbol && <b>{symbol}</b>}
    </button>
  );
}

function LanguageContent() {
  const [translationEnabled, setTranslationEnabled] = useState(true);

  return (
    <div className="region-modal-content">
      <div className="translation-card">
        <div>
          <strong>Translation</strong>
          <span>
            Automatically translate descriptions and reviews to English.
          </span>
        </div>
        <button
          className={`translation-toggle ${translationEnabled ? "is-on" : ""}`}
          type="button"
          role="switch"
          aria-checked={translationEnabled}
          aria-label={
            translationEnabled ? "Turn translation off" : "Turn translation on"
          }
          onClick={() => setTranslationEnabled((enabled) => !enabled)}
        >
          <Check size={12} strokeWidth={4} className="translation-icon" />
        </button>
      </div>
      <h3 className="pt-2">Suggested languages and regions</h3>
      <div className="region-grid suggested-grid">
        {suggestedLanguages.map(([language, region]) => (
          <RegionCard
            key={`${language}-${region}`}
            primary={language}
            secondary={region}
          />
        ))}
      </div>
      <h3>Choose a language and region</h3>
      <div className="region-grid">
        {languageRegions.map(([language, region]) => (
          <RegionCard
            key={`${language}-${region}`}
            primary={language}
            secondary={region}
          />
        ))}
      </div>
    </div>
  );
}

function CurrencyContent() {
  return (
    <div className="region-modal-content currency-content">
      <h3>Choose a currency</h3>
      <div className="region-grid currency-grid">
        {currencies.map(([currency, code, symbol]) => (
          <RegionCard
            key={code}
            primary={currency}
            secondary={code}
            symbol={symbol}
          />
        ))}
      </div>
    </div>
  );
}

export default function LanguageRegionModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("language");

  useEffect(() => {
    if (!isOpen) {
      setActiveTab("language");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="region-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className="region-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="region-modal-title"
      >
        <header className="region-modal-header">
          <button
            className="region-modal-close"
            type="button"
            aria-label="Close language and region dialog"
            onClick={onClose}
          >
            <X size={18} strokeWidth={2} />
          </button>
          <div
            className="region-tabs"
            role="tablist"
            aria-label="Language and currency settings"
          >
            <button
              className={activeTab === "language" ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={activeTab === "language"}
              onClick={() => setActiveTab("language")}
            >
              Language and region
            </button>
            <button
              className={activeTab === "currency" ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={activeTab === "currency"}
              onClick={() => setActiveTab("currency")}
            >
              Currency
            </button>
          </div>
        </header>
        <h2 id="region-modal-title" className="sr-only">
          Language and currency settings
        </h2>
        {activeTab === "language" ? <LanguageContent /> : <CurrencyContent />}
      </section>
    </div>
  );
}
