# 🏡 Airbnb Clone — Pixel-Perfect Listing & Photo Tour

A high-fidelity, pixel-perfect clone of an Airbnb property listing page, full-screen photo tour, and interactive single-photo Lightbox viewer. Built using **React 19**, **Vite**, **Tailwind CSS**, and **Lucide Icons** through an advanced **AI-assisted development workflow**.

🌐 **Live Demo**: [https://mini-airbnb-kappa.vercel.app/](https://mini-airbnb-kappa.vercel.app/)

---

## 🌟 Features & Views

### 🏠 1. Listing Page (`/listing/:id`)

- **Main Header & Search**: Expanded search bar (_Where_, _When_, _Who_) with interactive dropdowns and smooth 360° hover rotation on category icons (_Homes_, _Experiences_, _Services_).
- **Sticky Scroll Navbar**: Automatically slides down on scroll with section navigation links (_Photos_, _Amenities_, _Reviews_, _Location_), listing price summary, and Reserve action button.
- **Hero Photo Gallery**: 5-photo layout (1 main large photo + 4 grid photos) with rounded corners and a _"Show all photos"_ trigger button.
- **Reservation Sidebar**: Sticky reservation card featuring price per night, date selection, guest counter, free cancellation badge, check availability action, and _Rare Find_ indicator.
- **Guest Favourite Section**: Laurel wreath SVG header with 6 category breakdown scores (_Cleanliness_, _Accuracy_, _Check-in_, _Communication_, _Location_, _Value_).
- **Reviews & Ratings**: Category filter pills (_Accuracy 6_, _Cleanliness 8_, etc.) and user review cards.
- **Interactive Location Map**: Custom vector map showing coastlines, major roads, and city markers (_Viman Nagar, Pune, Mumbai, Thane, etc._) with zoom controls.
- **Policies & Footer**: House rules, safety features, cancellation policy, and footer with social media icons (_Facebook_, _X_, _Instagram_).

### 📷 2. Photo Tour Page (`/listing/:id/photo-tour`)

- **Minimal Top Header**: Fixed header featuring back navigation (`<`), Share button, and Heart/Saved state toggle.
- **Category Thumbnail Navigation**: 11-category grid (_Living room_, _Full kitchen_, _Dining area_, _Bedrooms_, _Bathrooms_, _Balcony_, _Additional photos_) with smooth anchor scrolling.
- **Sticky Section Info**: Section titles and subtext remain sticky on the left while scrolling through the right-side photo gallery.

### 🔍 3. Single-Photo Lightbox Viewer

- **Modal Overlay**: Opens seamlessly from any image on the Photo Tour page.
- **Interactive Top Bar**: Grid icon button to return to tour, photo category title, counter (`12 of 23`), and Close (`✕`) button.
- **Keyboard & Navigation**: Left (`←`) and Right (`→`) arrow buttons with full keyboard navigation and Escape (`Esc`) key exit.

---

## 🤖 AI-Assisted Workflow & Agents Used

This project was engineered using a multi-agent AI development workflow:

1. **Gemini 3.6 Flash** _(Primary Coding & Refinement Agent)_:
   - Executed pixel-perfect visual alignment matching reference screenshots.
   - Built the Lightbox modal, sticky scrolling behaviors, vector map graphics, and keyboard navigation.
   - Performed continuous linting, build checks, and code optimizations.

2. **GPT 5.6 Luna** _(Architecture & Component Structuring)_:
   - Initial scaffolding of project routes and core React component hierarchy.
   - Drafted initial layout and baseline UI definitions.

> _Full prompt history and iteration steps are documented in [`PROMPTS.md`](./PROMPTS.md)._

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Routing**: React Router 7
- **Styling**: Tailwind CSS v4 + Custom CSS Design System
- **Icons**: Lucide React
- **Notifications**: Sonner

---

## 📁 Project Structure

```
airbnb-clone/
├── public/
│   └── images/              # Static logo and icon assets
├── src/
│   ├── components/
│   │   ├── Footer/          # Site footer component
│   │   ├── Header/          # Main header & search bar
│   │   ├── HostLoginModal/  # Host login modal
│   │   ├── LanguageRegionModal/ # Language & currency modal
│   │   ├── ListingCard/     # Reusable listing card
│   │   ├── ListingSection/  # Section grouping listing cards
│   │   ├── MenuDropdown/    # User menu dropdown
│   │   └── SearchDropdown/  # Search filter dropdowns
│   ├── data/
│   │   ├── experiences.js   # Experiences mock data
│   │   ├── listingDetails.js # Detailed listing data
│   │   └── listings.js      # Main listing feed data
│   ├── pages/
│   │   ├── HomePage.jsx     # Explore home page
│   │   ├── ExperiencesPage.jsx # Experiences page
│   │   ├── ListingPage.jsx  # Property listing detail page
│   │   └── PhotoTourPage.jsx # Full-screen photo tour & lightbox
│   ├── App.jsx              # Route definitions
│   ├── index.css            # Global styles & design tokens
│   └── main.jsx             # Entry point
├── architecture-diagram.pdf # High-level architecture diagram
├── assignment.md            # Project specifications & scope
├── PROMPTS.md               # AI prompt sequence log
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Local Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd airbnb-clone
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📄 Deliverables & Documentation

- **Architecture Diagram**: See [`architecture-diagram.pdf`](./architecture-diagram.pdf) (visual PDF diagram), [`architecture-diagram.html`](./architecture-diagram.html), and [`ARCHITECTURE.md`](./ARCHITECTURE.md) for full architectural documentation.
- **AI Prompt Log**: See [`PROMPTS.md`](./PROMPTS.md) for the complete sequence of prompts used during development.

---

## 🛡️ License

This project is created for educational and evaluation purposes.
