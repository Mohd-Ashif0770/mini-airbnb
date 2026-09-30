import { useState } from "react";
import { MapPin } from "lucide-react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { experiences } from "../data/experiences.js";
import { Sparkle, ChefHat, Star } from "lucide-react";

const initialSearchFilters = {
  destination: "",
  when: "",
  guests: { Adults: 0, Children: 0, Infants: 0, Pets: 0 },
};

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="experience-image-wrap">
        <img src={experience.image} alt={experience.title} />
        <span>NEW EXPERIENCE</span>
      </div>
      <div className="experience-meta">
        <span className="experience-location">
          <MapPin size={16} strokeWidth={1.8} /> {experience.location}
        </span>
        <span className="experience-location">
          <Star fill="true" size={16} strokeWidth={1.8} /> {experience.rating} ({experience.reviews})
        </span>
      </div>
      <h3>{experience.title}</h3>
      <p>{experience.description}</p>
      <strong>
        From {experience.price} <small>/ person</small>
      </strong>
    </article>
  );
}

export default function ExperiencesPage() {
  const [searchFilters, setSearchFilters] = useState(initialSearchFilters);

  return (
    <>
      <Header
        searchFilters={searchFilters}
        onSearchChange={(changes) =>
          setSearchFilters((current) => ({ ...current, ...changes }))
        }
        onApplySearch={() => undefined}
      />
      <main className="experiences-page">
        <section
          className="experience-hero"
          aria-labelledby="experience-hero-title"
        >
          <img
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80"
            alt="Experiences banner"
          />
          <div className="experience-hero-content">
            <span className="experience-eyebrow">
              <Sparkle className="w-4 h-4" /> INTRODUCING EXPERIENCES
            </span>
            <h1 id="experience-hero-title" className="font-medium">
              One-of-a-kind activities hosted <br /> by locals
            </h1>
            <p>
              Meet local hosts around the world, learn a new skill,
              <br />
              or explore unique hidden destinations.
            </p>
          </div>
        </section>
        <section
          className="experience-list"
          aria-labelledby="experience-list-title"
        >
          <h2 id="experience-list-title">
            <ChefHat className="w-6 h-6 text-red-500" /> Browse unique
            experiences
          </h2>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
