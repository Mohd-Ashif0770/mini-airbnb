PROMPT-1

You are the lead frontend engineer for this take-home assignment.

I have attached the assignment PDF. Before writing any code, study the PDF carefully and analyze the requirements.

Do NOT implement anything yet.

I want you to produce a detailed technical analysis covering:

1. Exact functional requirements
2. Required screens/views
3. Required interactions
4. Accessibility requirements
5. Animation/transition requirements
6. What is mandatory vs optional/bonus
7. Required submission artifacts
8. AI-native development requirements
9. Architecture diagram requirements
10. Deployment requirements
11. Important constraints and things that could cause disqualification

Then create an implementation strategy for a React + Vite frontend.

My goal is pixel-perfect reproduction of the provided reference website.

Important:
- Treat the assignment PDF as the source of truth for requirements.
- Do not invent requirements that aren't present in the PDF.
- Do not start coding yet.
- Do not add unnecessary technologies or dependencies.
- Prioritize visual fidelity and behavioral parity over backend functionality.
- We will implement the project incrementally and compare screenshots against the reference after each major section.

At the end, provide:
A. Requirements checklist
B. Recommended component architecture
C. State-management strategy
D. Implementation order
E. Screenshot-comparison strategy
F. Final submission checklist

PROMPTS: 2

We are now moving directly into implementation.

The attached screenshots are the visual source of truth for the Airbnb HOME/LISTING PAGE.

Build the homepage first. Do not work on the property-detail page, Photo Tour, or Lightbox yet.

Implement the following:

1. HEADER
- Expanded header state at the top of the page
- Compact/sticky header state after scrolling
- Airbnb logo
- Homes / Experiences / Services navigation
- NEW badges
- Become a host
- Globe icon
- Menu icon
- Expanded search bar
- Compact search bar
- Match the supplied screenshots as closely as possible

2. LISTING CAROUSEL SECTIONS

Implement reusable components:

HomePage
├── Header
├── ListingSection
│   └── ListingCard
├── ListingSection
│   └── ListingCard
├── ...
└── Footer

The screenshots show at least:

- "Places to stay in Pune"
- "Popular homes in North Goa"

Create additional listing sections only if needed to reproduce the visible homepage/reference.

Each ListingCard should support:

- Image
- Guest favourite badge
- Heart/favourite button
- Image pagination dots
- Property title
- Price text
- Rating
- Horizontal image carousel
- Previous/next image controls where visible

3. LISTING CAROUSEL BEHAVIOR

The section itself must support:

- Previous/next navigation
- Horizontal property cards
- Proper disabled states
- Smooth scrolling/transition
- Correct card spacing
- Correct image aspect ratio
- Rounded image corners

4. FOOTER

Implement the footer shown in the supplied screenshot:

Columns:
- Support
- Hosting
- Airbnb

Include:
- All visible links
- Copyright
- Privacy
- Terms
- Sitemap
- UK Modern Slavery Act
- Language
- Currency
- Social icons

5. DATA

Create deterministic local listing data under:

src/data/

Do not hardcode repeated listing markup directly inside App.jsx.

Create reusable ListingSection and ListingCard components.

Use local image assets if available. If suitable reference images are not available locally, use appropriate remote image URLs temporarily, but structure the data so they can easily be replaced.

6. RESPONSIBILITY

Use React state only where required:

- Header expanded/compact state
- Listing image index
- Favourite state
- Carousel position

Do NOT add Redux.

Do NOT add a backend or database.

Do NOT add new dependencies.

7. VISUAL PRIORITY

Match the screenshots in this order:

1. Overall page geometry
2. Header
3. Listing card dimensions
4. Image dimensions/cropping
5. Horizontal spacing
6. Typography
7. Colors
8. Borders/radius
9. Icons
10. Shadows
11. Hover/transition behavior

Use the supplied screenshots as the source of truth. Do not rely on generic Airbnb design assumptions when the screenshots show something different.

8. RESPONSIVE SCOPE

Desktop is the priority.

Target the supplied screenshot viewport (~1920px wide).

Do not spend time on mobile responsiveness yet.

9. CODE QUALITY

Keep the component structure clean:

src/
├── components/
│   ├── Header/
│   ├── ListingSection/
│   ├── ListingCard/
│   └── Footer/
├── data/
│   └── listings.js
├── pages/
│   └── HomePage.jsx
├── App.jsx
└── index.css

Avoid unnecessary abstraction.

10. AFTER IMPLEMENTATION

Run:

npm run lint
npm run build

Fix all errors.

Then give me:
- files created/modified
- what was implemented
- any remaining visual differences
- how to run the page

Do not stop at a planning response. Actually implement the homepage now.

## Prompt -3 (Single listing page)

Build the complete single listing page for the route:

/listing/:id

I have provided 6 reference screenshots of the same listing page at different scroll positions.

IMPORTANT:
These screenshots are the SOURCE OF TRUTH.
Do not redesign the UI.
Do not invent a different Airbnb layout.
Reproduce the screenshots as closely as possible in structure, dimensions, spacing, typography, positioning, and scroll behavior.

==================================================
PAGE OVERVIEW
==================================================

This is ONE long scrollable listing detail page.

The screenshots show different scroll positions of the same page:

1. Top of listing
2. Listing details / amenities
3. Calendar
4. Guest Favorite / ratings
5. Reviews
6. Location + policies

Implement all of these sections in ONE page.

Do NOT create separate routes for these sections.

The page should naturally scroll from:

Photos
↓
Listing information
↓
Host / highlights
↓
Description
↓
Where you'll sleep
↓
Amenities
↓
Availability calendar
↓
Guest Favorite
↓
Reviews
↓
Location
↓
House rules / policies
↓
Footer

==================================================
1. LISTING HEADER / NAVBAR
==================================================

At the top of the listing page, use the compact Airbnb listing navbar shown in the screenshots.

LEFT:
- Airbnb logo

CENTER/LEFT:
- Photos
- Amenities
- Reviews
- Location

The currently active section should have:
- darker text
- bottom border/underline

RIGHT:
- price summary
- rating/review summary
- red "Reserve" button

The navbar is fixed/sticky at the top while scrolling.

Important:
This is NOT the homepage navbar from the previous page.

Use the listing-page navbar shown in the supplied screenshots.

The navbar should remain approximately the same height as the reference.

==================================================
2. TOP LISTING SECTION
==================================================

At the top of the page:

Title:

"Flat in Viman Nagar"

Below/alongside the title:
- Share
- Saved

Then create the large 5-image photo gallery.

Gallery layout must match the reference:

LEFT:
- one large image occupying approximately 50% of the gallery width

RIGHT:
- four smaller images arranged as a 2 × 2 grid

Use the supplied/reference listing images.

Gallery:
- rounded corners
- no visible gaps except the thin separators shown in the reference
- object-fit: cover
- images must not be distorted

Bottom-right:
"Show all photos" button positioned over the gallery.

The gallery width and height should match the reference desktop proportions.

==================================================
3. MAIN CONTENT LAYOUT
==================================================

Below the gallery, use a two-column desktop layout.

LEFT:
Main listing information.

RIGHT:
Sticky reservation / Check Availability card.

Example structure:

┌─────────────────────────────────────────────┐
│ LEFT CONTENT              │ RIGHT CARD      │
│                           │                 │
│ Listing details           │ Rare find       │
│ Guest favourite           │                 │
│ Host                       │ ₹5,250 / night │
│ Highlights                │ Check-in        │
│ Description               │ Check-out       │
│ Sleep section             │ Guests          │
│ Amenities                 │ cancellation    │
│ Calendar                  │ availability    │
│                           │                 │
└─────────────────────────────────────────────┘

Match the exact proportions from the screenshots.

==================================================
4. STICKY CHECK AVAILABILITY CARD
==================================================

THIS IS VERY IMPORTANT.

The right-side reservation card must be STICKY while scrolling.

The card contains:

Top notice:

💎 Rare find! This place is usually booked.

Then:

₹5,250 / night

Check-in
Add date

Check-out
Add date

Guests
1 guest

Free cancellation available

Red button:

Check availability

Small text:

You won't be charged yet

Below the card:

Report this listing

==================================================
STICKY BEHAVIOR — CRITICAL
==================================================

The reservation card should NOT simply remain fixed for the entire page.

Its sticky behavior must match the screenshots.

When the user scrolls down:

TOP SECTION:
Reservation card stays visible on the right.

LISTING DETAILS:
Reservation card stays sticky.

AMENITIES:
Reservation card stays sticky.

CALENDAR:
Reservation card stays sticky.

GUEST FAVORITE:
The sticky behavior ENDS when the page reaches the Guest Favorite section.

After reaching the Guest Favorite section, the reservation card should no longer remain fixed to the viewport.

It should stop at the appropriate position and scroll away naturally.

In other words:

             RIGHT SIDE
                │
Photos         │
Details        │  STICKY CARD
Host           │  STICKY CARD
Highlights     │  STICKY CARD
Description    │  STICKY CARD
Sleep          │  STICKY CARD
Amenities      │  STICKY CARD
Calendar       │  STICKY CARD
───────────────┼────────────────
Guest Favorite │  ← STOP STICKY
Reviews        │
Location       │
Policies       │

Do NOT keep the reservation card sticky while scrolling through Reviews, Location, and Policies.

Implement this with proper CSS sticky/container boundaries rather than JavaScript scroll hacks if possible.

==================================================
5. LISTING INFORMATION
==================================================

After the gallery:

Title:

"Room in a private room in apartment"

Subtitle:

"2 guests · 1 bedrooms · 1 beds · 1 bathrooms"

Then a horizontal Guest Favourite information card:

Guest favourite

"One of the most loved homes on Airbnb,
according to guests"

5.0

★★★★★

156 Reviews

Match the reference layout.

==================================================
6. HOST SECTION
==================================================

Create:

Hosted by Priya

Superhost · December 2020

Use the circular host image shown in the reference.

Match:
- avatar size
- typography
- spacing
- divider lines

==================================================
7. HIGHLIGHTS
==================================================

Create the three listing highlights shown in the screenshot:

Designed for staying cool
Beat the heat with the A/C and ceiling fan.

Self check-in
Check yourself in with the lockbox.

Great location
Guests who stayed here in the past year loved the location.

Use appropriate small outline icons.

Match the vertical spacing and typography from the reference.

==================================================
8. DESCRIPTION
==================================================

Use:

"Luxurious private room in the heart of Viman Nagar, close to major shopping centers and airport. Quiet, safe, and beautifully maintained."

Then:

Show more >

Match the divider and spacing.

==================================================
9. WHERE YOU'LL SLEEP
==================================================

Heading:

Where you'll sleep

Show the bedroom image.

Below:

Bedroom 1

1 bed

Match the small rounded image and text positioning shown in the reference.

==================================================
10. AMENITIES
==================================================

Heading:

What this place offers

Show the amenities in the same multi-column arrangement as the reference.

Visible examples:

Wi-Fi
Air conditioning
Workspace

Button:

Show all 48 amenities

Use appropriate outline icons.

Do not make this section excessively tall.

==================================================
11. AVAILABILITY CALENDAR
==================================================

Heading:

1 night in Pune City

Dates:

17 Jul 2026 → 18 Jul 2026

Display two months side by side:

October 2026
November 2026

Include:
- weekday labels
- calendar dates
- next-month arrow
- Clear dates

Match the small typography and compact calendar dimensions shown in the screenshot.

The calendar should sit inside the left content column.

The reservation card remains sticky beside it.

==================================================
12. GUEST FAVORITE SECTION
==================================================

This section is VERY IMPORTANT because it is where the sticky reservation card stops.

Create a large centered rating section.

Show:

🌿 5.0 🌿

Guest favourite

"This home is a guest favourite based on ratings,
reviews and reliability"

How reviews work

Then six rating categories:

Cleanliness
4.9

Accuracy
4.9

Check-in
5.0

Communication
5.0

Location
4.9

Value
5.0

Use the same horizontal arrangement and separators as the reference.

At this point, the reservation card should no longer be sticky.

==================================================
13. REVIEW FILTERS
==================================================

Below Guest Favorite:

Pills/chips:

Accuracy 6
Cleanliness 8
Comfort 7
Condition 5
Hospitality 8
Location 5
Decor 3
Check-in 2

Include the right-arrow button.

Match pill height, border radius, border, font size and spacing.

==================================================
14. REVIEWS
==================================================

Create the two-column review layout shown in the reference.

Example reviews:

Sneha M.
2 years on Airbnb

★★★★★ · 2 weeks ago

"Absolutely stunning place! Everything was spotless and the host was super responsive."

Show more

James T.
2 years on Airbnb

★★★★★ · 2 weeks ago

"Great location, very comfortable. The apartment had everything we needed and more."

Show more

Pooja K.

"Perfect stay for our weekend trip. Clean, cozy and the host left a lovely welcome note."

Arjun R.

"Super convenient location and everything worked perfectly. Highly recommend!"

Use the appropriate avatar images.

==================================================
15. LOCATION
==================================================

Heading:

Where you'll be

Viman Nagar, Pune, India

Then show the large map area shown in the reference.

The map should:
- have rounded corners
- occupy the same width as the main content
- have the same approximate height
- show the location marker
- have zoom controls on the right

If an actual map implementation is already available in the project, use it.

Otherwise create a visually matching map placeholder using the available asset.

Do not allow the map to break the layout.

==================================================
16. BOTTOM INFORMATION
==================================================

Below the map, create three columns:

House rules

Check-in: 3:00 PM - 10:00 PM
Checkout before 11:00 AM
Max guests: 2
No parties or events allowed

Safety & property

Smoke detector installed
Carbon monoxide alarm
First aid kit available
Pool safety gate not present

Cancellation policy

Free cancellation before check-in date.

Review the Host's full cancellation policy which applies even
if you cancel for illness or disruptions.

Match the spacing, typography and divider from the reference.

==================================================
17. DESKTOP CONTAINER
==================================================

IMPORTANT:

Use a stable centered desktop content container.

Do NOT use viewport-based sizing that causes the listing page to become too wide at 100% browser zoom.

Use the same container philosophy already established on the homepage.

The listing content should remain centered.

At the target desktop viewport, the content width should match the supplied screenshots.

The two-column content should be contained inside this same centered container.

Do NOT make the page depend on Chrome zoom.

It must look correct at 100% browser zoom.

==================================================
18. RESPONSIVE BEHAVIOR
==================================================

Desktop is the primary target because the supplied screenshots are desktop references.

Do not sacrifice desktop accuracy for unnecessary responsive abstractions.

However, keep the page usable on smaller screens.

At mobile/tablet:
- gallery should become responsive
- two-column layout should collapse
- reservation card should adapt appropriately
- horizontal navigation should remain usable

But FIRST match the desktop reference exactly.

==================================================
19. TYPOGRAPHY
==================================================

Use the existing project font/system.

Match the reference's:
- font sizes
- font weights
- line heights
- heading hierarchy
- muted text colors

Do not arbitrarily increase font sizes.

The reference is relatively compact.

==================================================
20. DIVIDERS AND SPACING
==================================================

Use subtle horizontal dividers between the major sections.

Match the vertical rhythm carefully.

Do not add excessive padding.

The screenshots show a compact Airbnb-style layout.

==================================================
21. IMPORTANT IMPLEMENTATION RULES
==================================================

Do NOT:
- create a completely new design
- change the existing homepage
- modify the existing homepage navbar
- change routes unrelated to /listing/:id
- add unnecessary animations
- add unnecessary JavaScript scroll listeners
- use browser zoom assumptions
- make the reservation card permanently fixed
- keep the reservation card sticky after Guest Favorite
- invent additional sections
- change the supplied content unnecessarily

DO:
- create reusable components
- keep the page data-driven
- use the existing project's styling approach
- reuse existing assets where available
- maintain clean React component structure

Suggested component structure:

ListingPage
├── ListingNavbar
├── ListingGallery
├── ListingContent
│   ├── ListingIntro
│   ├── GuestFavoriteSummary
│   ├── HostInfo
│   ├── ListingHighlights
│   ├── Description
│   ├── SleepingArrangement
│   ├── Amenities
│   ├── AvailabilityCalendar
│   ├── GuestFavorite
│   ├── ReviewFilters
│   ├── Reviews
│   ├── Location
│   └── Policies
└── ReservationCard

==================================================
22. VISUAL VALIDATION
==================================================

After implementation, compare the page against ALL supplied screenshots.

Do not only check the first viewport.

Scroll through the entire page and verify:

1. Top gallery matches
2. Listing title matches
3. Share/Saved positions match
4. Two-column layout matches
5. Reservation card matches
6. Reservation card becomes sticky correctly
7. Reservation card remains visible through calendar
8. Reservation card STOPS being sticky at Guest Favorite
9. Guest Favorite matches
10. Reviews match
11. Location/map matches
12. Bottom policies match
13. Header remains sticky
14. Container width remains correct at 100% browser zoom
15. No horizontal overflow
16. No unexpected layout shifts

The six screenshots represent the target visual states of the same page.

The final implementation should reproduce those states as closely as possible.

Do not stop when the page is structurally complete.

Perform a final visual comparison and adjust:
- widths
- heights
- margins
- padding
- typography
- borders
- alignment
- sticky positioning
- section spacing

until the implementation closely matches the reference screenshots.

## Prompt -4 
IMPORTANT: We need to FIX the existing /listing/:id page, NOT redesign it.

I have provided two screenshots:

SCREENSHOT 1 = EXACT REFERENCE
SCREENSHOT 2 = CURRENT LUNA IMPLEMENTATION

Use Screenshot 1 as the ONLY visual source of truth.

The current implementation has major visual differences. Fix them carefully.

==================================================
1. LISTING SECTION TAB BAR — MISSING
==================================================

This is the most obvious missing element.

In the reference, immediately BELOW the photo gallery there is a horizontal section navigation:

Photos     Amenities     Reviews     Location

It is positioned inside the main content container.

Reference behavior:

Photos
────────
Amenities
Reviews
Location

The "Photos" tab is active at the current scroll position.

Implement this tab bar.

Requirements:
- It must exist directly below the gallery.
- It must span the same content width as the listing content.
- It has a thin bottom border/divider.
- "Photos" has a black bottom underline.
- The other tabs have normal text.
- Font size and spacing must match the reference.
- Do NOT make these tabs look like buttons/cards.
- Do NOT use large padding.
- Keep the tab bar compact.

The tab bar should also be sticky/visible according to the listing page behavior established earlier.

IMPORTANT:
The tab bar in the reference is NOT the same as the top navbar.

There are TWO navigation systems:

1. Fixed listing navbar at the very top:
   Airbnb | Photos | Amenities | Reviews | Location | price | Reserve

2. Section navigation below the gallery:
   Photos | Amenities | Reviews | Location

Do not confuse these two.

==================================================
2. TOP LISTING NAVBAR
==================================================

The current navbar is too different from the reference.

Match Screenshot 1.

Reference:

LEFT:
Airbnb logo

CENTER/LEFT:
Photos
Amenities
Reviews
Location

RIGHT:
₹11,550
for 2 nights
★ 5.0
156 Reviews
Reserve

The right side is compact.

Do NOT use the large price/card treatment from the current implementation.

The navbar should remain compact and approximately the same height as Screenshot 1.

The "Reserve" button is a small red rounded button.

==================================================
3. PHOTO GALLERY
==================================================

The current gallery is using the wrong images/layout/content compared with the reference.

Use the same listing images shown in the reference.

Reference gallery:

┌──────────────────────┬──────────┬──────────┐
│                      │          │          │
│                      │  image   │  image   │
│     LARGE IMAGE      ├──────────┼──────────┤
│                      │  image   │  image   │
│                      │          │          │
└──────────────────────┴──────────┴──────────┘

The LEFT image is approximately half the gallery width.

The RIGHT side contains four images in a 2 × 2 arrangement.

There should be thin white separators between images.

The gallery has rounded corners.

Bottom-right:
"Show all photos"

The gallery must match the reference dimensions.

Do NOT replace the reference listing images with unrelated property images.

==================================================
4. CONTENT WIDTH
==================================================

The main listing content in the current implementation is too small/narrow compared with the reference.

Use one centered desktop container.

The gallery, section tabs, left content and right reservation column must align to the same overall container.

Do NOT use arbitrary different widths for each section.

The reference has approximately:

LEFT CONTENT                  RIGHT CARD
───────────────               ───────────
~480px                        ~220px

with a consistent gap between them.

The overall content is centered.

==================================================
5. LISTING TITLE SECTION
==================================================

Immediately below the section tab bar:

Room in a private room in apartment

Then:

2 guests · 1 bedrooms · 1 beds · 1 bathrooms

Match:
- font size
- weight
- line height
- vertical spacing
- divider position

The current implementation is too compressed.

==================================================
6. GUEST FAVOURITE SUMMARY CARD
==================================================

The reference has a horizontal bordered card.

It contains three sections:

LEFT:
Guest
favourite

with the decorative guest-favourite icon.

CENTER:
"One of the most loved homes on Airbnb,
according to guests"

RIGHT:
5.0
★★★★★
156 Reviews

There are vertical separators between these sections.

The current implementation is close conceptually but dimensions and typography are wrong.

Match Screenshot 1 exactly.

==================================================
7. HOST SECTION
==================================================

Reference:

[avatar] Hosted by Priya
        Superhost · December 2020

Use the correct host avatar from the reference.

The current Luna avatar is visually different.

Match:
- avatar size
- position
- text size
- spacing
- divider

==================================================
8. HIGHLIGHTS
==================================================

Use exactly these three:

Designed for staying cool
Beat the heat with the A/C and ceiling fan.

Self check-in
Check yourself in with the lockbox.

Great location
Guests who stayed here in the past year loved the location.

Each row contains:
- small outline icon
- bold heading
- smaller description

Match the vertical spacing from Screenshot 1.

Do not use filled/colored icons that visually differ from the reference.

==================================================
9. DESCRIPTION
==================================================

Use exactly:

Luxurious private room in the heart of Viman Nagar, close to major shopping centers and airport. Quiet, safe, and beautifully maintained.

Then:

Show more >

Match the reference width and line wrapping.

==================================================
10. RIGHT RESERVATION SECTION — CRITICAL
==================================================

The current reservation UI is significantly different from the reference.

Do NOT reuse the current card styling blindly.

Rebuild it to match Screenshot 1.

The right column contains TWO separate boxes:

BOX 1 — RARE FIND

Small bordered rounded rectangle:

💎 Rare find! This place is usually booked.

It should be approximately the same width and height as the reference.

There should be a small gap between this box and the reservation card.

--------------------------------------------------

BOX 2 — RESERVATION CARD

Reference:

₹5,250 / night

Then a bordered date/guest input area.

CHECK-IN              CHECK-OUT
Add date              Add date

---------------------------------

GUESTS
1 guest                         ˅

Then:

Free cancellation available

Then a large RED button:

Check availability

Then:

You won't be charged yet

The card has:
- white background
- subtle border
- subtle shadow
- rounded corners
- compact internal padding

Do NOT make the card too tall.

Do NOT make the input boxes oversized.

Do NOT use the current Luna card dimensions.

==================================================
11. RESERVATION CARD WIDTH
==================================================

The right reservation card should be approximately the same width as the reference.

It should NOT be stretched.

It should align with the right edge of the main listing content.

The "Rare find" box and reservation card should have exactly the same width.

==================================================
12. REPORT THIS LISTING
==================================================

Below the reservation card:

⚑ Report this listing

Small gray/underlined text.

Position it exactly below the card as in the reference.

==================================================
13. STICKY BEHAVIOR
==================================================

Keep the behavior from the previous specification.

The reservation column should remain sticky while scrolling through:

Listing title
Guest favourite summary
Host
Highlights
Description
Where you'll sleep
Amenities
Calendar

The reservation card must STOP being sticky when the page reaches:

Guest Favorite / 5.0 rating section.

Do NOT keep it sticky through:
- Guest Favorite
- Reviews
- Location
- Policies

The sticky behavior should be implemented using the layout/container boundaries rather than a permanent fixed card.

==================================================
14. IMPORTANT DIFFERENCE BETWEEN CURRENT AND REFERENCE
==================================================

Current Luna screenshot has:

Gallery
↓
Title
↓
Guest favourite
↓
Host
↓
Highlights

But the reference has:

Gallery
↓
SECTION TAB BAR
   Photos | Amenities | Reviews | Location
↓
Title
↓
Guest favourite
↓
Host
↓
Highlights

The section tab bar MUST be restored.

==================================================
15. VISUAL SCALE
==================================================

The current implementation is generally too small in some areas and incorrectly scaled in others.

Do not simply increase everything.

Match the reference proportionally.

Pay particular attention to:

- gallery height
- gallery width
- section-tab height
- title font size
- guest-favourite card height
- reservation card width
- reservation card internal spacing
- button height
- divider positions
- right-column gap

==================================================
16. DO NOT CHANGE
==================================================

Do NOT change:
- route
- React architecture unnecessarily
- existing functionality
- homepage
- homepage navbar
- existing data model
- unrelated components
- colors unless needed to match the reference

Do NOT create a new design.

Do NOT add extra UI.

Do NOT remove sections that were already implemented.

Fix the existing page.

==================================================
17. VISUAL VALIDATION
==================================================

After implementation, compare the page against Screenshot 1 at the SAME browser viewport and 100% zoom.

Check these items individually:

✓ Listing navbar
✓ Airbnb logo
✓ navbar tabs
✓ price/reserve section
✓ gallery dimensions
✓ gallery image arrangement
✓ Show all photos button
✓ SECTION TAB BAR BELOW GALLERY
✓ Photos active underline
✓ Listing title
✓ subtitle
✓ Guest Favourite summary
✓ Host section
✓ Three highlights
✓ Description
✓ Rare Find box
✓ ₹5,250 reservation card
✓ Check-in / Check-out fields
✓ Guests field
✓ Free cancellation box
✓ Check availability button
✓ Report this listing
✓ left/right column alignment
✓ sticky reservation behavior

Do NOT consider the task complete just because all elements exist.

The final page should visually match Screenshot 1, not merely contain the same information.

==================================================
FINAL PRIORITY
==================================================

Fix these FIRST, in this exact order:

1. Add the missing Photos / Amenities / Reviews / Location tab section below the gallery.
2. Fix the right reservation card to match the reference.
3. Fix the gallery images and 5-image layout.
4. Fix the overall two-column width/alignment.
5. Fix typography and spacing.
6. Verify sticky reservation behavior.

Use Screenshot 1 as the pixel-level visual reference.


## PROMPT -5 (Image comparision)

I will provide two screenshots:

Screenshot 1 = REFERENCE UI
Screenshot 2 = CURRENT UI

Your task is to modify the existing implementation so that the CURRENT UI matches the REFERENCE UI as closely as possible.

IMPORTANT:
- Screenshot 1 is the single source of truth.
- Do NOT redesign the reference.
- Do NOT create your own interpretation of the design.
- Do NOT change the intended functionality.
- Do NOT replace existing functionality unless it is required to visually match the reference.
- Preserve the existing React/component structure wherever possible.

First, carefully compare both screenshots and identify ALL visual differences, including:

- Overall layout
- Container width
- Content positioning
- Horizontal alignment
- Vertical alignment
- Element dimensions
- Header/navbar
- Navigation
- Images
- Image sizes and cropping
- Typography
- Font sizes
- Font weights
- Line heights
- Colors
- Borders
- Border radius
- Shadows
- Buttons
- Icons
- Spacing
- Margins
- Padding
- Gaps
- Section heights
- Grid/column sizes
- Responsive behavior
- Sticky/fixed elements
- Scroll behavior

Then modify the existing code to reproduce the REFERENCE UI.

IMPORTANT IMPLEMENTATION RULES:

1. Do not make random visual changes.
2. Do not compensate for incorrect dimensions using browser zoom.
3. Do not use arbitrary viewport-based sizing if it causes the layout to differ from the reference.
4. Keep the layout centered and use appropriate max-width/container rules.
5. Preserve existing content and functionality unless the reference clearly requires a change.
6. Reuse existing assets when they correspond to the reference.
7. Do not introduce unnecessary dependencies.
8. Do not rewrite the entire application if the existing structure can be corrected with targeted changes.
9. Do not modify unrelated pages/components.
10. Do not stop after making the page "similar".

After implementing the changes, perform another visual comparison between:

REFERENCE → Screenshot 1
CURRENT → Screenshot 2

Then fix the remaining differences.

The final result should look as close to Screenshot 1 as possible at the SAME viewport size and 100% browser zoom.

Treat this as a visual reproduction task, not a design task.

REFERENCE SCREENSHOT = source of truth.
CURRENT SCREENSHOT = code that needs to be fixed.

## PROMPT -6 (Photo tour page)
I am providing 4 screenshots of the PHOTO TOUR page.

These screenshots are the REFERENCE UI and represent different scroll positions of the same page.

Build this page at:

/listing/:id/photo-tour

The page should open when the user clicks the "Show all photos" button from the existing /listing/:id page.

IMPORTANT:
The 4 screenshots are the SINGLE SOURCE OF TRUTH.

Do not redesign the page.
Do not create your own layout.
Do not make it "similar".
Reproduce the reference UI as accurately as possible.

==================================================
PAGE STRUCTURE
==================================================

The page consists of:

1. Minimal top header
2. Photo tour thumbnail section
3. Photo-tour content sections
4. Sticky left-side section information
5. Image gallery on the right side

The page is vertically scrollable.

==================================================
1. TOP HEADER
==================================================

At the very top:

- White background
- Very thin bottom border
- Back arrow at the far left
- "Share" at the top-right
- Heart icon + "Saved" at the top-right
- Header height must match the screenshots
- Keep the header minimal
- Do NOT use the normal listing-page navbar here

The header should remain fixed/sticky at the top while scrolling, exactly like the reference.

==================================================
2. PHOTO TOUR THUMBNAIL SECTION
==================================================

Immediately below the header, create:

"Photo tour"

Below the heading, display the thumbnail navigation.

The thumbnails should be arranged exactly like the reference:

Living room
Full kitchen
Dining area
Bedroom 1
Bedroom 2
Bedroom 3
Full bathroom 1
Full bathroom 2
Full bathroom 3
Balcony
Additional photos

Each thumbnail contains:

- Image
- Rounded corners
- Small label below the image
- Correct spacing
- Correct thumbnail dimensions

Match the reference screenshot for:

- Number of columns
- Thumbnail width/height
- Gaps
- Heading position
- Text size
- Overall container width

Do NOT make the thumbnails unnecessarily large.

==================================================
3. MAIN PHOTO TOUR CONTENT
==================================================

After the thumbnail section, create these sections in this exact order:

1. Living room
2. Full kitchen
3. Dining area
4. Balcony
5. Additional photos

Each section contains:

LEFT COLUMN:
- Section heading
- Description
- "Show more" where present

RIGHT COLUMN:
- Image gallery/grid

The overall content width, column widths and gap must match the reference screenshots.

==================================================
4. MOST IMPORTANT — STICKY LEFT CONTENT
==================================================

This behavior is CRITICAL.

Look carefully at the reference screenshots.

The LEFT section content is sticky while the images on the RIGHT are being scrolled.

For example:

LIVING ROOM

LEFT:
Living room
description
Show more

RIGHT:
multiple living-room images

While scrolling through the living-room images:

- The "Living room" heading and description remain visible/sticky on the left.
- The right-side images continue moving upward.

When the Living room image section reaches its end:

- The sticky Living room content must naturally move upward.
- The next section's content ("Full kitchen") takes its place.
- The Full kitchen heading/description then becomes sticky while its images are being viewed.

The same behavior continues:

Living room
    ↓
Full kitchen
    ↓
Dining area
    ↓
Balcony
    ↓
Additional photos

IMPORTANT:
Do NOT implement a global fixed left sidebar.

The left content must be STICKY WITHIN ITS OWN SECTION.

The sticky behavior should naturally stop at the bottom of the corresponding section.

Conceptually, use the equivalent of:

section {
    position: relative;
}

.left-content {
    position: sticky;
    top: appropriateHeaderOffset;
}

But implement it correctly so each section takes over from the previous section.

Do NOT allow the Living room text to remain visible while Full kitchen or Dining area images are being displayed.

==================================================
5. IMAGE GRID
==================================================

The right side contains the images for each section.

Match the reference exactly.

Images should:

- Have rounded corners
- Maintain their aspect ratios
- Have consistent gaps
- Be positioned according to the reference
- Not be stretched unnaturally
- Not be cropped differently from the reference

The number and arrangement of images should match the screenshots.

For example, the Living room section has multiple images arranged vertically/two-column style.

Full kitchen, Dining area, Balcony and Additional photos should use the same layout logic shown in the reference.

Use the existing listing image data/assets if they already exist in the project.

Do NOT replace existing assets with random images.

==================================================
6. SECTION SEPARATORS
==================================================

Between sections:

- Add the subtle horizontal divider shown in the reference.
- Match its width and position.
- Match the vertical spacing before and after the divider.

==================================================
7. EXACT DIMENSIONS
==================================================

The desktop layout must match the reference at:

100% browser zoom.

Do NOT depend on browser zoom such as 90% to make the layout fit.

Pay particular attention to:

- Main container max-width
- Left/right margins
- Header height
- Photo tour heading position
- Thumbnail dimensions
- Thumbnail gaps
- Main content width
- Left column width
- Right gallery width
- Column gap
- Image dimensions
- Section spacing
- Divider positions

Do not use arbitrary large widths such as 90vw if they cause the layout to differ from the reference.

The content should remain centered exactly like the reference.

==================================================
8. RESPONSIVENESS
==================================================

The screenshots represent the desktop design.

First reproduce the desktop UI pixel-perfectly.

Do not sacrifice the desktop layout to create a different responsive design.

If responsive behavior already exists in the application, preserve it without breaking the desktop implementation.

==================================================
9. ROUTING
==================================================

Add/use:

/listing/:id/photo-tour

The "Show all photos" button on:

/listing/:id

must navigate to:

/listing/:id/photo-tour

Use the existing listing ID and existing listing data.

Do not create hardcoded navigation unrelated to the existing routing system.

==================================================
10. DO NOT BREAK EXISTING UI
==================================================

Do not modify unrelated pages.

Do not change:

- Homepage
- Listing details page layout
- Existing navbar
- Existing listing data
- Existing API behavior
- Existing authentication
- Existing components unless required for this feature

Only make the changes necessary for the photo-tour page and the Show all photos navigation.

==================================================
11. VISUAL VERIFICATION
==================================================

After implementation, compare the page against ALL FOUR reference screenshots.

Treat them as four scroll positions of the SAME page.

Verify:

Screenshot 1:
- Header
- Photo tour title
- Thumbnail navigation
- Beginning of Living room section

Screenshot 2:
- Living room → Full kitchen transition
- Sticky left content behavior
- Image positioning

Screenshot 3:
- Full kitchen → Dining area transition
- Sticky behavior
- Section spacing

Screenshot 4:
- Balcony
- Additional photos
- Bottom section spacing

Do not just compare the first viewport.

The complete scrolling experience must match the reference.

==================================================
FINAL REQUIREMENT
==================================================

This is a PIXEL-PERFECT REPRODUCTION task.

REFERENCE SCREENSHOTS = SOURCE OF TRUTH.

Analyze the screenshots yourself and determine the differences.

Do not ask me to manually describe the differences.

Implement the page, then visually inspect your implementation and correct:

- spacing
- sizing
- positioning
- typography
- image dimensions
- grid layout
- sticky behavior
- section transitions
- header
- borders
- shadows
- border radius
- alignment

Keep refining until the implementation closely matches the four reference screenshots at 100% browser zoom.