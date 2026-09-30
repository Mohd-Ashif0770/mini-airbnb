const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;

const puneImages = [
  image("photo-1600607687920-4e2a09cf159d"),
  image("photo-1600210492486-724fe5c67fb0"),
  image("photo-1600566753190-17f0baa2a6c3"),
  image("photo-1600607688969-a5bfcd646154"),
];

const goaImages = [
  image("photo-1613490493576-7fde63acd811"),
  image("photo-1600585154340-be6161a56a0c"),
  image("photo-1600047509807-ba8f99d2cdde"),
  image("photo-1600585154526-990dced4db0d"),
];

const createListing = (id, title, price, rating, images, featured = true) => ({
  id,
  title,
  price,
  rating,
  featured,
  images,
});

export const listingSections = [
  {
    id: "pune",
    title: "Places to stay in Pune",
    listings: [
      createListing(
        "1",
        "Flat in Pashan",
        "₹4,087 for 2 nights",
        "4.96",
        puneImages,
      ),
      createListing(
        "2",
        "Flat in Wadgaon Sheri",
        "₹5,136 for 2 nights",
        "4.93",
        [puneImages[1], puneImages[3], puneImages[0], puneImages[2]],
      ),
      createListing("3", "Flat in Viman Nagar", "₹5,250 for 2 nights", "4.96", [
        puneImages[2],
        puneImages[0],
        puneImages[3],
        puneImages[1],
      ]),
      createListing(
        "4",
        "Flat in Viman Nagar",
        "₹10,000 for 2 nights",
        "4.89",
        [goaImages[1], puneImages[0], goaImages[2], puneImages[2]],
        false,
      ),
      createListing(
        "5",
        "Hotel in Wakad",
        "₹3,390 for 2 nights",
        "4.88",
        [goaImages[0], goaImages[2], goaImages[3], goaImages[1]],
        false,
      ),
      createListing("6", "Flat in Viman Nagar", "₹7,760 for 2 nights", "5.00", [
        puneImages[3],
        puneImages[2],
        puneImages[0],
        goaImages[1],
      ]),
      createListing(
        "7",
        "Flat in Wadgaon Sheri",
        "₹4,577 for 2 nights",
        "4.99",
        [puneImages[1], puneImages[0], puneImages[2], puneImages[3]],
      ),
      createListing(
        "8",
        "Apartment in Kharadi",
        "₹6,245 for 2 nights",
        "4.91",
        [puneImages[0], goaImages[1], puneImages[3], puneImages[2]],
      ),
      createListing("9", "Home in Baner", "₹8,100 for 2 nights", "4.87", [
        puneImages[2],
        puneImages[1],
        goaImages[0],
        puneImages[0],
      ]),
    ],
  },
  {
    id: "north-goa",
    title: "Popular homes in North Goa",
    listings: [
      createListing(
        "10",
        "Flat in Candolim",
        "₹10,999 for 2 nights",
        "4.93",
        goaImages,
      ),
      createListing("11", "Flat in Nerul", "₹12,896 for 2 nights", "4.94", [
        goaImages[1],
        goaImages[3],
        goaImages[0],
        goaImages[2],
      ]),
      createListing("12", "Apartment in Ca...", "₹8,296 for 2 nights", "4.98", [
        puneImages[0],
        puneImages[1],
        puneImages[2],
        goaImages[3],
      ]),
      createListing("13", "Flat in Anjuna", "₹7,989 for 2 nights", "4.92", [
        puneImages[1],
        goaImages[2],
        puneImages[3],
        goaImages[0],
      ]),
      createListing(
        "14",
        "Apartment in Ca...",
        "₹20,339 for 2 nights",
        "4.94",
        [
          image("photo-1500530855697-b586d89ba3ee"),
          goaImages[0],
          goaImages[1],
          image("photo-1470252649378-9c29740c9fa8"),
        ],
      ),
      createListing("15", "Villa in Anjuna", "₹19,988 for 2 nights", "4.97", [
        goaImages[2],
        goaImages[1],
        goaImages[3],
        goaImages[0],
      ]),
      createListing("16", "Villa in Anjuna", "₹30,108 for 2 nights", "5.00", [
        goaImages[3],
        goaImages[2],
        goaImages[1],
        goaImages[0],
      ]),
      createListing("17", "Home in Assagao", "₹17,200 for 2 nights", "4.89", [
        goaImages[1],
        goaImages[0],
        goaImages[3],
        goaImages[2],
      ]),
      createListing("18", "Villa in Siolim", "₹24,450 for 2 nights", "4.96", [
        goaImages[0],
        goaImages[3],
        goaImages[1],
        goaImages[2],
      ]),
    ],
  },
];
