# 📜 AI Prompt Sequence & Development History

This document logs the complete prompt sequence and technical instructions executed using **Gemini 3.6 Flash** and **GPT 5.6 Luna** during the development of this pixel-perfect Airbnb Clone application.

---

## 📌 Development Milestones Overview

| Phase | Module / Area | Primary Goal & Scope |
| :--- | :--- | :--- |
| **Phase 1** | Requirement Analysis | Technical specification analysis, architecture design & checklist creation |
| **Phase 2** | Homepage Layout | Header search states, listing carousels, footer links, and local listing data |
| **Phase 3** | Property Listing Page | Sticky reservation card, section navigation tabs, guest favorite, reviews, vector map |
| **Phase 4** | Visual Reproduction | Pixel-perfect screenshot comparison, spacing & container width adjustments |
| **Phase 5** | Photo Tour Page | Thumbnail navigation, 11 categories, sticky left section descriptions |
| **Phase 6** | Lightbox & Animations | Full-screen single-photo modal, keyboard controls, 360° icon hover animation |
| **Phase 7** | Deployment & Cleanup | Vercel path fixes (`/images/`), `.gitignore` overhaul, production build verification |

---

## 🚀 Phase 1: Requirements Analysis & Strategy

### 💬 Prompt 1.1 — Technical Analysis & Component Architecture
> **Executed by**: Gemini 3.6 Flash & GPT 5.6 Luna

```text
You are the lead frontend engineer for this take-home assignment.

I have attached the assignment specification. Before writing any code, study the requirements carefully and analyze them. Do NOT implement anything yet.

Produce a detailed technical analysis covering:
1. Exact functional requirements
2. Required screens/views
3. Required interactions
4. Accessibility requirements
5. Animation/transition requirements
6. What is mandatory vs optional/bonus
7. Required submission artifacts
8. Architecture diagram requirements
9. Deployment requirements
10. Important constraints and disqualification risks

Then create an implementation strategy for a React + Vite frontend focused on pixel-perfect reproduction of the provided reference website.
```

---

## 🏠 Phase 2: Homepage & Core Layout Implementation

### 💬 Prompt 2.1 — Homepage Architecture & Components
> **Executed by**: GPT 5.6 Luna

```text
We are moving directly into implementation. The provided reference screenshots are the visual source of truth for the Airbnb HOME page.

Implement the following:

1. HEADER
- Expanded state at top of page
- Compact/sticky header state after scrolling
- Airbnb logo
- Homes / Experiences / Services navigation tabs with NEW badges
- Become a Host, Globe, and Menu buttons
- Expanded and compact search bars

2. LISTING CAROUSEL SECTIONS
- Reusable ListingSection and ListingCard components
- Sections: "Places to stay in Pune", "Popular homes in North Goa"
- Photo pagination dots, heart/favourite toggle, price, rating, guest favourite badge

3. FOOTER
- Multi-column footer (Support, Hosting, Airbnb)
- Legal sub-footer, language/currency selectors, and social media links

4. DATA & STATE
- Local deterministic data in src/data/
- React state for header search states, carousel positions, and favourites
- Clean component structure in src/components/
```

---

## 🏡 Phase 3: Property Detail Page (`/listing/:id`)

### 💬 Prompt 3.1 — Full Listing View Layout & Sticky Behavior
> **Executed by**: Gemini 3.6 Flash

```text
Build the complete single listing page for the route: /listing/:id

This is ONE long scrollable listing detail page featuring:

1. FIXED TOP NAVBAR
- Logo, Photos / Amenities / Reviews / Location links, price summary, and Reserve button.

2. HERO GALLERY
- 5-image layout (1 large left + 4 grid right) with "Show all photos" trigger button.

3. TWO-COLUMN LAYOUT & STICKY RESERVATION CARD
- Left: Title, Guest Favourite summary card, Host info, Highlights, Description, Sleep section, Amenities, Calendar.
- Right: Sticky reservation card (Price, dates, guests, cancellation banner, Check Availability button).
- CRITICAL: Sticky behavior must stop naturally when the user reaches the Guest Favourite / 5.0 rating section.

4. GUEST FAVOURITE & REVIEWS
- Large laurel wreath 5.0 score header, 6 category rating breakdown.
- Category filter pills and 2-column review cards with author avatars.

5. LOCATION & POLICIES
- Custom vector map with road networks, water bodies, and city labels.
- House Rules, Safety & Property, and Cancellation Policy sections.
```

---

## 🎨 Phase 4: High-Fidelity Visual Alignment & Reproduction

### 💬 Prompt 4.1 — Pixel-Level Corrections against Reference
> **Executed by**: Gemini 3.6 Flash

```text
Fix ONLY the visible differences between the current implementation and the reference screenshot:

1. Priority 1 — ADD THE MISSING SECTION TAB BAR:
   Horizontal row immediately below photo gallery: Photos | Amenities | Reviews | Location.

2. Priority 2 — FIX THE RIGHT RESERVATION UI:
   Separate top "💎 Rare find!" badge card from main reservation card. Match button color (#ff385c), inputs, and "Report this listing" link.

3. Priority 3 — FIX PHOTO GALLERY:
   Exact 1 large + 4 grid photos layout with rounded corners and white separators.

4. Priority 4 — CONTAINER WIDTH & ALIGNMENT:
   Ensure Gallery → Section Tabs → Content share the exact same centered max-width container (1280px).
```

---

## 📷 Phase 5: Full-Screen Photo Tour Page (`/listing/:id/photo-tour`)

### 💬 Prompt 5.1 — Photo Tour Navigation & Sticky Content Flow
> **Executed by**: Gemini 3.6 Flash

```text
Build the photo tour page at /listing/:id/photo-tour triggered by the "Show all photos" button.

Structure:
1. MINIMAL HEADER: Fixed white header with Back arrow (<), Share, and Heart/Saved toggle.
2. THUMBNAIL GRID: 11 categories (Living room, Full kitchen, Dining area, Bedrooms, Bathrooms, Balcony, Additional photos) with smooth scroll links.
3. STICKY LEFT SECTION INFO: Section heading and description stay sticky on the left while scrolling through the right-side photo gallery, releasing naturally when the next section arrives.
4. IMAGE GALLERIES: Single large images and 2-column grids with 16px rounded corners.
```

---

## 🔍 Phase 6: Single-Photo Lightbox Viewer & UI Animations

### 💬 Prompt 6.1 — Interactive Lightbox Modal Viewer
> **Executed by**: Gemini 3.6 Flash

```text
Build a full-screen Lightbox single-photo viewer modal that opens when clicking any photo on the Photo Tour page.

Requirements:
- Top bar: Grid icon button (back to tour), photo title (e.g. "Bedroom 2"), counter ("12 of 23"), and Close button (✕).
- Floating Previous (<) and Next (>) arrow controls.
- Keyboard navigation: Left/Right arrow keys to switch photos, Escape key to exit.
```

### 💬 Prompt 6.2 — Icon Rotation Animation & Services Selector
> **Executed by**: Gemini 3.6 Flash

```text
1. On hovering over any tab in the navbar (Homes, Experiences, Services), rotate the icon 360° smoothly only on hover-in (transition: transform 500ms ease-in-out). On hover-out, reset instantly without repeating the rotation.
2. Update Homes icon to 🏡.
3. Make Services tab selectable showing the bottom active border indicator without navigating away.
```

---

## 🚀 Phase 7: Deployment & Optimization

### 💬 Prompt 7.1 — Path Corrections & Production Build
> **Executed by**: Gemini 3.6 Flash

```text
1. Fix image paths in HostLoginModal.jsx by replacing public\images\... with root-relative paths /images/... to prevent 404 errors on Vercel deployment.
2. Update .gitignore to cleanly ignore node_modules, build outputs, environment variables, logs, and temporary cache files.
3. Update README.md with Live Demo URL (https://mini-airbnb-kappa.vercel.app/), tech stack, project structure, and AI workflow documentation.
```