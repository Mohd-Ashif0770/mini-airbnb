const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

export const vimanNagarListing = {
  id: "3",
  title: "Flat in Viman Nagar",
  subtitle: "2 guests · 1 bedroom · 1 bed · 1 bathroom",
  price: "₹5,250",
  rating: "5.0",
  reviews: "156 Reviews",
  gallery: [
    photo("photo-1600566753190-17f0baa2a6c3"),
    photo("photo-1600210492486-724fe5c67fb0"),
    photo("photo-1600585154340-be6161a56a0c"),
    photo("photo-1600607687920-4e2a09cf159d"),
    photo("photo-1600607688969-a5bfcd646154"),
  ],
  hostImage:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  sleepImage: photo("photo-1600210492486-724fe5c67fb0"),
};

export const listingReviews = [
  [
    "Sneha M.",
    "2 years on Airbnb",
    "Absolutely stunning place! Everything was spotless and the host was super responsive.",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
  ],
  [
    "James T.",
    "2 years on Airbnb",
    "Great location, very comfortable. The apartment had everything we needed and more.",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  ],
  [
    "Pooja K.",
    "2 years on Airbnb",
    "Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note.",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
  ],
  [
    "Arjun R.",
    "2 years on Airbnb",
    "Super convenient location and everything worked perfectly. Highly recommend!",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  ],
];
