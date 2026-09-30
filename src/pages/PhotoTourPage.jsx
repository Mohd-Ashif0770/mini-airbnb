import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Grid,
  Heart,
  Share2,
  X,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const thumbnails = [
  {
    id: "living-room",
    label: "Living room",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
    targetSection: "living-room",
  },
  {
    id: "full-kitchen",
    label: "Full kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80",
    targetSection: "full-kitchen",
  },
  {
    id: "dining-area",
    label: "Dining area",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=400&q=80",
    targetSection: "dining-area",
  },
  {
    id: "bedroom-1",
    label: "Bedroom 1",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80",
    targetSection: "bedroom-1",
  },
  {
    id: "bedroom-2",
    label: "Bedroom 2",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&q=80",
    targetSection: "bedroom-1",
  },
  {
    id: "bedroom-3",
    label: "Bedroom 3",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=400&q=80",
    targetSection: "bedroom-1",
  },
  {
    id: "full-bathroom-1",
    label: "Full bathroom 1",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80",
    targetSection: "full-bathroom-1",
  },
  {
    id: "full-bathroom-2",
    label: "Full bathroom 2",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=400&q=80",
    targetSection: "full-bathroom-1",
  },
  {
    id: "full-bathroom-3",
    label: "Full bathroom 3",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=400&q=80",
    targetSection: "full-bathroom-1",
  },
  {
    id: "balcony",
    label: "Balcony",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    targetSection: "balcony",
  },
  {
    id: "additional-photos",
    label: "Additional photos",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
    targetSection: "additional-photos",
  },
];

const tourSections = [
  {
    id: "living-room",
    title: "Living room",
    description:
      "Single bed · Books and reading material · TV · Cleaning available during stay · Patio or balcony · Private living room · Room-darkening blinds · Wifi ...",
    hasShowMore: true,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    description:
      "Cleaning available during stay · Cleaning products · Cooker · Cooking basics · Crockery and cutlery · Freezer",
    hasShowMore: false,
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "dining-area",
    title: "Dining area",
    description:
      "Dining table · Cleaning available during stay · Cleaning products · Wifi",
    hasShowMore: false,
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "bedroom-1",
    title: "Bedroom 1",
    description:
      "1 double bed · Lock on bedroom door · Room-darkening blinds · Extra pillows and blankets · Wifi",
    hasShowMore: false,
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "full-bathroom-1",
    title: "Full bathroom 1",
    description:
      "Hot water · Shower gel · Hair dryer · Shampoo · Cleaning products",
    hasShowMore: false,
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "balcony",
    title: "Balcony",
    description:
      "Wifi · Outdoor furniture · Cleaning available during stay · Clothes drying rack",
    hasShowMore: false,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  {
    id: "additional-photos",
    title: "Additional photos",
    description: "Decor details · Gated society view · Gated parking",
    hasShowMore: false,
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    ],
  },
];

export default function PhotoTourPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(true);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Flatten all tour photos into a single linear list for the Lightbox
  const allPhotos = tourSections.flatMap((section) =>
    section.images.map((url) => ({
      url,
      title: section.title,
    })),
  );

  const handleOpenLightbox = (imgUrl) => {
    const index = allPhotos.findIndex((item) => item.url === imgUrl);
    if (index !== -1) {
      setActivePhotoIndex(index);
    }
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrevPhoto = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev === 0 ? allPhotos.length - 1 : prev - 1,
      );
    }
  }, [activePhotoIndex, allPhotos.length]);

  const handleNextPhoto = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev + 1) % allPhotos.length);
    }
  }, [activePhotoIndex, allPhotos.length]);

  useEffect(() => {
    if (activePhotoIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleCloseLightbox();
      if (event.key === "ArrowLeft") handlePrevPhoto();
      if (event.key === "ArrowRight") handleNextPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handlePrevPhoto, handleNextPhoto]);

  const handleBack = () => {
    if (id) {
      navigate(`/listing/${id}`);
    } else {
      navigate(-1);
    }
  };

  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="photo-tour-page-wrapper">
      <header className="photo-tour-header">
        <div className="photo-tour-header-container">
          <button
            className="photo-tour-back-btn"
            type="button"
            onClick={handleBack}
            aria-label="Go back"
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>

          <div className="photo-tour-header-actions">
            <button type="button" className="photo-tour-header-btn">
              <Share2 size={15} />
              <span>Share</span>
            </button>
            <button
              type="button"
              className="photo-tour-header-btn"
              onClick={() => setIsSaved(!isSaved)}
            >
              <Heart
                size={15}
                fill={isSaved ? "#ff385c" : "none"}
                color={isSaved ? "#ff385c" : "#222222"}
              />
              <span>Saved</span>
            </button>
          </div>
        </div>
      </header>

      <main className="photo-tour-main">
        <section className="photo-tour-thumbnails-section">
          <h1>Photo tour</h1>
          <div className="photo-tour-thumbnails-grid">
            {thumbnails.map((thumb) => (
              <button
                key={thumb.id}
                type="button"
                className="thumbnail-card"
                onClick={() => scrollToSection(thumb.targetSection)}
              >
                <div className="thumbnail-img-frame">
                  <img src={thumb.image} alt={thumb.label} />
                </div>
                <span className="thumbnail-label">{thumb.label}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="photo-tour-content-sections">
          {tourSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="photo-tour-section"
            >
              <div className="photo-tour-left">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {section.hasShowMore && (
                  <button type="button" className="show-more-btn">
                    Show more
                  </button>
                )}
              </div>
              <div className="photo-tour-right">
                <div
                  className={`photo-tour-grid ${section.images.length === 1 ? "is-single" : ""}`}
                >
                  {section.images.map((imgUrl, idx) => (
                    <img
                      key={`${section.id}-${idx}`}
                      src={imgUrl}
                      alt={`${section.title} ${idx + 1}`}
                      className={
                        section.images.length === 1 ? "single-image" : ""
                      }
                      onClick={() => handleOpenLightbox(imgUrl)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {activePhotoIndex !== null && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true">
          <header className="lightbox-header">
            <button
              className="lightbox-grid-btn"
              type="button"
              onClick={handleCloseLightbox}
              aria-label="Back to grid"
            >
              <Grid size={18} />
            </button>
            <div className="lightbox-title">
              {allPhotos[activePhotoIndex].title}
            </div>
            <div className="lightbox-right">
              <span className="lightbox-counter">
                {activePhotoIndex + 1} of {allPhotos.length}
              </span>
              <button
                className="lightbox-close-btn"
                type="button"
                onClick={handleCloseLightbox}
                aria-label="Close photo view"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          <div className="lightbox-body">
            <button
              className="lightbox-arrow lightbox-arrow-left"
              type="button"
              onClick={handlePrevPhoto}
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="lightbox-img-container">
              <img
                src={allPhotos[activePhotoIndex].url}
                alt={allPhotos[activePhotoIndex].title}
              />
            </div>

            <button
              className="lightbox-arrow lightbox-arrow-right"
              type="button"
              onClick={handleNextPhoto}
              aria-label="Next photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
