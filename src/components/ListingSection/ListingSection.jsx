import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ListingCard from "../ListingCard/ListingCard.jsx";

export default function ListingSection({ title, listings }) {
  const viewportRef = useRef(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setCanPrevious(viewport.scrollLeft > 4);
    setCanNext(
      viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 4,
    );
  };

  useEffect(() => {
    updateControls();
    const viewport = viewportRef.current;
    if (!viewport) return undefined;
    viewport.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    return () => {
      viewport.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const moveCarousel = (direction) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollBy({
      left: direction * viewport.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="listing-section page-container"
      aria-labelledby={`${title}-heading`}
    >
      <div className="section-heading-row">
        <h2 id={`${title}-heading`}>{title}</h2>
        <ChevronRight
          className="section-heading-arrow"
          size={30}
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <div className="carousel-controls">
          <button
            className="carousel-button"
            type="button"
            aria-label={`Previous ${title} listings`}
            disabled={!canPrevious}
            onClick={() => moveCarousel(-1)}
          >
            <ChevronLeft size={20} strokeWidth={1.8} />
          </button>
          <button
            className="carousel-button"
            type="button"
            aria-label={`Next ${title} listings`}
            disabled={!canNext}
            onClick={() => moveCarousel(1)}
          >
            <ChevronRight size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>
      <div className="listing-viewport" ref={viewportRef}>
        <div className="listing-track">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
