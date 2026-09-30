import Header from "../components/Header/Header.jsx";
import ListingSection from "../components/ListingSection/ListingSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { listingSections } from "../data/listings.js";
import { useState } from "react";

export default function HomePage() {
  const [draftFilters, setDraftFilters] = useState({
    destination: "",
    when: "",
    guests: { Adults: 0, Children: 0, Infants: 0, Pets: 0 },
  });
  const [appliedFilters, setAppliedFilters] = useState(draftFilters);

  const updateSearchFilters = (changes) => {
    setDraftFilters((current) => ({ ...current, ...changes }));
  };

  const visibleSections = listingSections.filter((section) => {
    if (!appliedFilters.destination || appliedFilters.destination === "Nearby")
      return true;
    if (appliedFilters.destination.includes("Goa"))
      return section.id === "north-goa";
    if (appliedFilters.destination.includes("Pune"))
      return section.id === "pune";
    return true;
  });

  return (
    <>
      <Header
        searchFilters={draftFilters}
        onSearchChange={updateSearchFilters}
        onApplySearch={() => setAppliedFilters(draftFilters)}
      />
      <main>
        {visibleSections.map((section) => (
          <ListingSection key={section.id} {...section} />
        ))}
      </main>
      <Footer />
    </>
  );
}
