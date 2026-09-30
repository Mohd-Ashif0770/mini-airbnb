import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ListingCard({ listing }) {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);
  const { images, title, price, rating, featured } = listing;

  const showPreviousImage = () => {
    setImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setImageIndex((current) => (current + 1) % images.length);
  };

  return (
    <article
      className="listing-card"
      onClick={(event) => {
        if (!event.target.closest("button")) navigate(`/listing/${listing.id}`);
      }}
    >
      <div className="listing-image-frame">
        <img className="listing-image" src={images[imageIndex]} alt={title} />
        {featured && <span className="favourite-badge">Guest favourite</span>}
        <button
          className={`heart-button ${isFavourite ? "is-favourite" : ""}`}
          type="button"
          aria-label={
            isFavourite
              ? `Remove ${title} from favourites`
              : `Add ${title} to favourites`
          }
          aria-pressed={isFavourite}
          onClick={() => setIsFavourite((current) => !current)}
        >
          <Heart
            size={27}
            fill={isFavourite ? "currentColor" : "rgba(34, 34, 34, 0.32)"}
            strokeWidth={2}
          />
        </button>
        <button
          className="image-control image-control-previous"
          type="button"
          aria-label={`Previous photo for ${title}`}
          onClick={showPreviousImage}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="image-control image-control-next"
          type="button"
          aria-label={`Next photo for ${title}`}
          onClick={showNextImage}
        >
          <ChevronRight size={18} />
        </button>
        <div
          className="image-dots"
          aria-label={`${imageIndex + 1} of ${images.length} photos`}
        >
          {images.map((_, index) => (
            <button
              className={`image-dot ${index === imageIndex ? "is-active" : ""}`}
              type="button"
              aria-label={`View photo ${index + 1}`}
              aria-current={index === imageIndex}
              key={`${listing.id}-photo-${index}`}
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="listing-details">
        <h3>{title}</h3>
        <p>
          <span className="listing-price">{price}</span>
          <span className="listing-rating">
            <span className="rating-separator">·</span>{" "}
            <span className="rating-star">★</span> {rating}
          </span>
        </p>
      </div>
    </article>
  );
}
