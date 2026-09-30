import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Flag,
  Heart,
  Home,
  KeyRound,
  MapPin,
  MessageSquare,
  Minus,
  Monitor,
  Plus,
  Share2,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Tag,
  Wifi,
} from "lucide-react";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import { listingReviews, vimanNagarListing } from "../data/listingDetails.js";

function ListingNavbar() {
  return (
    <nav className="listing-navbar">
      <div className="listing-navbar-shell">
        <a className="listing-brand" href="/" aria-label="Airbnb home">
          <img src="/images/airbnb-logo.jpg" alt="Airbnb" />
        </a>
        <div className="listing-nav-links">
          <a className="is-active" href="#photos">
            Photos
          </a>
          <a href="#amenities">Amenities</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location</a>
        </div>
        <div className="listing-nav-summary">
          <span>
            <strong>₹11,550</strong>
            <small>for 2 nights</small>
          </span>
          <span>
            <strong>★ 5.0</strong>
            <small>· 156 Reviews</small>
          </span>
          <button type="button">Reserve</button>
        </div>
      </div>
    </nav>
  );
}

function Gallery({ listing }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const listingId = id || listing.id;

  const goToPhotoTour = () => {
    navigate(`/listing/${listingId}/photo-tour`);
  };

  return (
    <section
      className="listing-gallery"
      id="photos"
      aria-label="Property photos"
    >
      <img
        className="gallery-main"
        src={listing.gallery[0]}
        alt="Viman Nagar apartment living room"
        onClick={goToPhotoTour}
        style={{ cursor: "pointer" }}
      />
      <div className="gallery-side">
        {listing.gallery.slice(1).map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Property photo ${index + 2}`}
            onClick={goToPhotoTour}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      <button className="show-all-photos" type="button" onClick={goToPhotoTour}>
        ▦ &nbsp; Show all photos
      </button>
    </section>
  );
}

function SectionTabs() {
  return (
    <nav className="section-tabs" aria-label="Listing sections">
      <div className="section-tabs-container">
        <a href="#photos" className="tab-link is-active">
          Photos
        </a>
        <a href="#amenities" className="tab-link">
          Amenities
        </a>
        <a href="#reviews" className="tab-link">
          Reviews
        </a>
        <a href="#location" className="tab-link">
          Location
        </a>
      </div>
    </nav>
  );
}

function GuestFavoriteSummary() {
  return (
    <section className="guest-summary">
      <div className="guest-summary-label">
        <span>♧</span>
        <strong>
          Guest
          <br />
          favourite
        </strong>
        <span>♧</span>
      </div>
      <p>
        One of the most loved homes on Airbnb,
        <br />
        according to guests
      </p>
      <div className="guest-summary-score">
        <strong>5.0</strong>
        <span>★★★★★</span>
        <a href="#reviews">156 Reviews</a>
      </div>
    </section>
  );
}

function HostSection() {
  return (
    <section className="listing-host section-divider">
      <img src={vimanNagarListing.hostImage} alt="Priya" />
      <div>
        <h3>Hosted by Priya</h3>
        <p>Superhost · December 2020</p>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    [
      ShieldCheck,
      "Designed for staying cool",
      "Beat the heat with the A/C and ceiling fan.",
    ],
    [KeyRound, "Self check-in", "Check yourself in with the lockbox."],
    [
      MapPin,
      "Great location",
      "Guests who stayed here in the past year loved the location.",
    ],
  ];
  return (
    <section className="listing-highlights section-divider">
      {items.map((item) => {
        const HighlightIcon = item[0];
        const title = item[1];
        const text = item[2];
        return (
          <div key={title}>
            <HighlightIcon size={19} strokeWidth={1.7} />
            <span>
              <strong>{title}</strong>
              <small>{text}</small>
            </span>
          </div>
        );
      })}
    </section>
  );
}

function Amenities() {
  const items = [
    [Wifi, "Wi-Fi"],
    [ShieldCheck, "Air conditioning"],
    [Monitor, "Workspace"],
    [KeyRound, "Lockbox"],
  ];
  return (
    <section className="listing-amenities section-divider" id="amenities">
      <h2>What this place offers</h2>
      <div>
        {items.map((item) => {
          const AmenityIcon = item[0];
          const label = item[1];
          return (
            <span key={label}>
              <AmenityIcon size={18} />
              {label}
            </span>
          );
        })}
      </div>
      <button type="button">Show all 48 amenities</button>
    </section>
  );
}

function CalendarMonth({ name, days, offset }) {
  return (
    <div className="listing-month">
      <h4>{name}</h4>
      <div className="listing-weekdays">
        <span>SU</span>
        <span>MO</span>
        <span>TU</span>
        <span>WE</span>
        <span>TH</span>
        <span>FR</span>
        <span>SA</span>
      </div>
      <div className="listing-days">
        {Array.from({ length: offset + days }, (_, index) => (
          <span key={`${name}-${index}`}>
            {index < offset ? "" : index - offset + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

function AvailabilityCalendar() {
  return (
    <section className="availability-calendar section-divider">
      <h2>1 night in Pune City</h2>
      <p>17 Jul 2026 → 18 Jul 2026</p>
      <div className="listing-months">
        <CalendarMonth name="October 2026" days={31} offset={4} />
        <CalendarMonth name="November 2026" days={30} offset={0} />
        <button className="calendar-next-button" type="button">
          <ChevronRight size={16} />
        </button>
      </div>
      <button className="clear-dates" type="button">
        Clear dates
      </button>
    </section>
  );
}

function ReservationCard() {
  return (
    <aside className="reservation-column">
      <div className="rare-find-box">
        <span className="rare-find-icon">💎</span>
        <div>
          <strong>Rare find!</strong> This place is usually booked.
        </div>
      </div>

      <div className="reservation-card">
        <div className="reservation-price">
          <span className="price-amount">₹5,250</span>
          <span className="price-period"> / night</span>
        </div>

        <div className="reservation-fields">
          <div className="dates-row">
            <div className="field-cell">
              <span className="field-label">CHECK-IN</span>
              <span className="field-value">Add date</span>
            </div>
            <div className="field-cell border-l">
              <span className="field-label">CHECK-OUT</span>
              <span className="field-value">Add date</span>
            </div>
          </div>
          <div className="guests-row">
            <div>
              <span className="field-label">GUESTS</span>
              <span className="field-value dark">2 guests</span>
            </div>
            <ChevronDown size={18} className="chevron-icon" />
          </div>
        </div>

        <div className="free-cancellation-banner">
          Free cancellation available
        </div>

        <button className="check-availability-btn" type="button">
          Check availability
        </button>

        <p className="not-charged-note">You won&apos;t be charged yet</p>
      </div>

      <button className="report-listing-btn" type="button">
        <Flag size={14} />
        <span>Report this listing</span>
      </button>
    </aside>
  );
}

function LaurelBranch({ isRight = false }) {
  return (
    <svg
      width="36"
      height="68"
      viewBox="0 0 36 68"
      fill="currentColor"
      style={{
        transform: isRight ? "scaleX(-1)" : "none",
        color: "#222222",
      }}
      aria-hidden="true"
    >
      <path d="M32 66C22 54 12 38 12 20C12 10 18 2 24 0C17 4 8 18 8 34C8 50 18 62 32 66Z" />
      <path d="M28 52c-7-2-11-9-9-16 2-7 9-5 9 16z" />
      <path d="M22 38c-7-2-11-9-9-16 2-7 9-5 9 16z" />
      <path d="M16 24c-7-2-11-9-9-16 2-7 9-5 9 16z" />
      <path d="M16 10c-5-4-8-10-6-15 3-5 8-1 6 15z" />
      <path d="M24 2c-5-3-7-7-5-11 3-3 7 0 5 11z" />
    </svg>
  );
}

function GuestFavorite() {
  const ratings = [
    {
      label: "Cleanliness",
      value: "4.9",
      renderIcon: () => (
        <Sparkles size={24} strokeWidth={1.5} className="rating-icon" />
      ),
    },
    {
      label: "Accuracy",
      value: "4.9",
      renderIcon: () => (
        <CheckCircle2 size={24} strokeWidth={1.5} className="rating-icon" />
      ),
    },
    {
      label: "Check-in",
      value: "5.0",
      renderIcon: () => (
        <KeyRound size={24} strokeWidth={1.5} className="rating-icon" />
      ),
    },
    {
      label: "Communication",
      value: "5.0",
      renderIcon: () => (
        <MessageSquare size={24} strokeWidth={1.5} className="rating-icon" />
      ),
    },
    {
      label: "Location",
      value: "4.9",
      renderIcon: () => (
        <MapPin size={24} strokeWidth={1.5} className="rating-icon" />
      ),
    },
    {
      label: "Value",
      value: "5.0",
      renderIcon: () => (
        <Tag size={24} strokeWidth={1.5} className="rating-icon" />
      ),
    },
  ];
  return (
    <section className="guest-favorite section-divider">
      <div className="favorite-score-container">
        <LaurelBranch />
        <span className="favorite-score-num">5.0</span>
        <LaurelBranch isRight />
      </div>
      <h2>Guest favourite</h2>
      <p>
        This home is a guest favourite based on ratings,
        <br />
        reviews and reliability
      </p>
      <a href="#reviews" className="how-reviews-work-link">
        How reviews work
      </a>
      <div className="rating-grid">
        {ratings.map(({ label, value, renderIcon }) => (
          <div key={label} className="rating-col">
            <span className="rating-label">{label}</span>
            <strong className="rating-value">{value}</strong>
            {renderIcon()}
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const filters = [
    {
      label: "Accuracy 6",
      renderIcon: () => <CheckCircle2 size={16} strokeWidth={1.8} />,
    },
    {
      label: "Cleanliness 8",
      renderIcon: () => <Sparkles size={16} strokeWidth={1.8} />,
    },
    {
      label: "Comfort 7",
      renderIcon: () => <Home size={16} strokeWidth={1.8} />,
    },
    {
      label: "Condition 5",
      renderIcon: () => <ShieldCheck size={16} strokeWidth={1.8} />,
    },
    {
      label: "Hospitality 8",
      renderIcon: () => <Smile size={16} strokeWidth={1.8} />,
    },
    {
      label: "Location 5",
      renderIcon: () => <MapPin size={16} strokeWidth={1.8} />,
    },
    {
      label: "Decor 3",
      renderIcon: () => <Heart size={16} strokeWidth={1.8} />,
    },
    {
      label: "Check-in 2",
      renderIcon: () => <KeyRound size={16} strokeWidth={1.8} />,
    },
  ];
  return (
    <section className="listing-reviews section-divider" id="reviews">
      <div className="review-filters">
        {filters.map(({ label, renderIcon }) => (
          <button type="button" key={label} className="filter-pill">
            {renderIcon()}
            <span>{label}</span>
          </button>
        ))}
        <button
          type="button"
          className="filter-next-btn"
          aria-label="Next filters"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <div className="reviews-grid">
        {listingReviews.map(([name, meta, quote, image]) => (
          <article key={name} className="review-card">
            <div className="review-author">
              <img src={image} alt={name} />
              <div>
                <strong>{name}</strong>
                <small>{meta}</small>
              </div>
            </div>
            <div className="review-stars">
              <span className="star-symbols">★★★★★</span>
              <small>· 2 weeks ago</small>
            </div>
            <p>{quote}</p>
            <button type="button" className="show-more-review">
              Show more &gt;
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function LocationAndPolicies() {
  return (
    <>
      <section className="listing-location section-divider" id="location">
        <h2>Where you&apos;ll be</h2>
        <p className="location-subtitle">Viman Nagar, Pune, India</p>
        <div className="listing-map">
          <svg
            viewBox="0 0 1000 440"
            className="map-svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Land background */}
            <rect width="1000" height="440" fill="#f3f3f0" />

            {/* Ocean / Water body on left coast */}
            <path
              d="M 0 0 L 260 0 C 270 40, 250 80, 260 120 C 270 160, 280 200, 270 240 C 260 280, 310 320, 310 360 C 310 390, 290 420, 280 440 L 0 440 Z"
              fill="#d2dade"
            />

            {/* Major & minor road lines */}
            <g stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9">
              <path d="M 270 120 Q 400 150 600 120 T 900 100" />
              <path d="M 280 240 Q 450 260 700 230 T 1000 210" />
              <path d="M 310 360 Q 500 370 750 340 T 1000 320" />
              <path d="M 260 120 L 310 360" />
              <path d="M 450 50 L 520 400" />
              <path d="M 650 40 L 720 420" />
              <path d="M 850 30 L 900 410" />
            </g>
            <g stroke="#e2e1dc" strokeWidth="2" fill="none">
              <path d="M 270 120 Q 400 150 600 120 T 900 100" />
              <path d="M 280 240 Q 450 260 700 230 T 1000 210" />
              <path d="M 310 360 Q 500 370 750 340 T 1000 320" />
              <path d="M 260 120 L 310 360" />
              <path d="M 450 50 L 520 400" />
              <path d="M 650 40 L 720 420" />
              <path d="M 350 100 L 500 220" />
              <path d="M 550 140 L 700 280" />
              <path d="M 400 300 L 600 400" />
            </g>

            {/* City & Location Text Labels */}
            <g
              fill="#484848"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="11"
              fontWeight="600"
            >
              <text x="275" y="70">
                BOISAR
              </text>
              <text x="275" y="120">
                Palghar
              </text>
              <text x="355" y="140">
                Wada
              </text>
              <text x="410" y="80">
                Khodala
              </text>
              <text x="460" y="110">
                Choti
              </text>
              <text x="635" y="40">
                Kopargaon
              </text>
              <text x="800" y="35">
                CH
              </text>
              <text x="800" y="48">
                SAM
              </text>
              <text x="540" y="50">
                Sinnar
              </text>
              <text x="538" y="180">
                AKOLE
              </text>
              <text x="578" y="165">
                Sangamner
              </text>
              <text x="674" y="150">
                Shrirampur
              </text>
              <text x="750" y="120">
                Gangapur
              </text>
              <text x="335" y="210">
                Umberpada
              </text>
              <text x="390" y="210">
                Shahapur
              </text>
              <text x="275" y="235">
                VASAI-VIRAR
              </text>
              <text x="330" y="280">
                BHIWANDI
              </text>
              <text x="348" y="305">
                ULHASNAGAR
              </text>
              <text x="316" y="318">
                THANE
              </text>
              <text x="290" y="360" fontSize="12" fontWeight="700">
                MUMBAI
              </text>
              <text x="512" y="275">
                Junnar
              </text>
              <text x="685" y="305">
                AHILYANAGAR
              </text>
              <text x="678" y="225">
                Rahuri
              </text>
              <text x="716" y="225">
                Sonai
              </text>
              <text x="788" y="285">
                Pathardi
              </text>
              <text x="772" y="370">
                Kada
              </text>
              <text x="515" y="380">
                Khed
              </text>
            </g>
          </svg>

          <div className="map-controls">
            <button type="button" aria-label="Zoom in">
              +
            </button>
            <button type="button" aria-label="Zoom out">
              −
            </button>
            <button type="button" aria-label="Map info" className="info-btn">
              ⓘ
            </button>
          </div>
        </div>
      </section>
      <section className="listing-policies">
        <div>
          <h3>House rules</h3>
          <p>Check-in: 3:00 PM - 10:00 PM</p>
          <p>Checkout before 11:00 AM</p>
          <p>Max guests: 2</p>
          <p>No parties or events allowed</p>
        </div>
        <div>
          <h3>Safety &amp; property</h3>
          <p>Smoke detector installed</p>
          <p>Carbon monoxide alarm</p>
          <p>First aid kit available</p>
          <p>Pool safety gate not present</p>
        </div>
        <div>
          <h3>Cancellation policy</h3>
          <p>Free cancellation before check-in date.</p>
          <p>
            Review the Host&apos;s full cancellation policy which applies even
            if you cancel for illness or disruptions.
          </p>
        </div>
      </section>
    </>
  );
}

export default function ListingPage() {
  const [showListingNav, setShowListingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowListingNav(window.scrollY > 150);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      {showListingNav && <ListingNavbar />}
      <main className="listing-detail-page">
        <div className="listing-title-row">
          <h1>Flat in Viman Nagar</h1>
          <div>
            <button type="button">
              <Share2 size={14} /> Share
            </button>
            <button type="button">
              <Heart size={14} /> Saved
            </button>
          </div>
        </div>
        <Gallery listing={vimanNagarListing} />
        <SectionTabs />
        <div className="listing-layout">
          <div className="listing-main">
            <section className="listing-intro">
              <h2>Room in a private room in apartment</h2>
              <p>2 guests · 1 bedroom · 1 bed · 1 bathroom</p>
            </section>
            <GuestFavoriteSummary />
            <HostSection />
            <Highlights />
            <section className="listing-description section-divider">
              <p>
                Luxurious private room in the heart of Viman Nagar, close to
                major shopping centers and airport. Quiet, safe, and beautifully
                maintained.
              </p>
              <button type="button">Show more &nbsp;›</button>
            </section>
            <section className="sleep-section section-divider">
              <h2>Where you&apos;ll sleep</h2>
              <img src={vimanNagarListing.sleepImage} alt="Bedroom" />
              <strong>Bedroom 1</strong>
              <span>1 bed</span>
            </section>
            <Amenities />
            <AvailabilityCalendar />
          </div>
          <ReservationCard />
        </div>
        <GuestFavorite />
        <Reviews />
        <LocationAndPolicies />
      </main>
      <Footer />
    </>
  );
}
