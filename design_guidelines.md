# Design Guidelines: "3-Months-Daya-Pepi" Romantic Treasure Hunt

## Design Approach
Reference-based romantic, interactive storytelling experience with modern, clean aesthetic. No background images - colorful animated gradients throughout.

## Visual Identity

### Color Palette
- Warm pink-red-beige gradient combinations
- Flowing, animated gradient transitions
- Nostalgic, romantic color treatments
- Vibrant, colorful sections throughout

### Typography
- Modern, beautiful web fonts (Google Fonts)
- Romantic but not kitschy
- Clear hierarchy for story text, location headers, and interactive elements
- Font sizes: Large for headers (location names), readable for story text

### Cursor & Micro-interactions
- Custom cursor: small heart icon
- Smooth, gentle animations on all interactions
- Color changes on hover for hidden link words
- Flowing gradient animations

## Layout System

### Spacing
Tailwind units: p-4, p-6, p-8, m-4, m-6 for consistent spacing throughout

### Main Page Structure

**Header:**
- Top counter: "Открити спомени: X / 6" (real-time update)
- Clean, minimal navigation bar

**Story Section:**
- 8 location stories with emoji markers (📍 and 📅)
- Hidden clickable words within story text (not in titles)
- Hover effect: color change on hidden words
- Flowing text layout with comfortable reading width

**Bottom Navigation (Polence):**
- 6 small location buttons (Несебър, Созопол, София, Варна, Банско, Плевен)
- 1 large "Любими спомени" button (7th button)
- Beautiful alignment, no underlines
- Locked/unlocked states with visual indicators
- Buttons unlock as pages are discovered

### Secret Location Pages

**Gallery Layout:**
- 6-image grid gallery per location
- Scrollable horizontal roller for large image viewing
- Left/right navigation arrows
- "Назад към историята" button below gallery

**Bansko Special Feature:**
- Interactive 6-piece puzzle (drag-and-drop)
- Shuffled image pieces to arrange correctly
- Success state unlocks the page

**Sozopol Special:**
- Additional text section about Street Place burgers below gallery

### Quiz Page

**Layout:**
- 15 open-ended questions (single column)
- Input fields for each answer
- Real-time or submit-based validation
- Counter: "Верни отговори: Y / 15"
- "Продължи" button appears after all correct answers

**Question Types:**
- Text inputs (case-insensitive matching)
- Coordinate input with tolerance (to second-to-last digit: 42.65952X, 27.72586X)
- Dropdown selection for favorite memory

### Secret Final Page

**Layout:**
- Centered congratulatory text
- YouTube video embed (responsive)
- "Сега си погледни телефона" message below video
- Romantic, celebratory design treatment

## Component Library

### Buttons
- Primary: Large, rounded, gradient backgrounds
- Secondary: Smaller location buttons
- Locked state: Grayed out, non-clickable visual
- Unlocked state: Full color, hover animations
- No underlines, clean modern appearance

### Cards/Sections
- Flowing gradient backgrounds per section
- Soft shadows or glows for depth
- Rounded corners (border-radius: 12-16px)
- Smooth color transitions between sections

### Image Galleries
- Grid layout (3 columns on desktop, responsive stack)
- Lightbox/modal for enlarged viewing
- Horizontal scroll for mobile-friendly browsing
- Smooth scroll animations

### Forms (Quiz)
- Clean input fields with subtle borders
- Focus states with color highlights
- Error/success states for validation
- Comfortable spacing between questions

## Animations

### Page Transitions
- Smooth React Router transitions
- Fade in/out effects
- Gentle slide animations for new content

### Gradient Animations
- Flowing, animated background gradients
- Smooth color transitions
- Subtle pulse or wave effects

### Interactive Elements
- Hover: Smooth color changes (hidden words, buttons)
- Click: Gentle scale or brightness feedback
- Loading states: Soft pulsing or shimmer effects

## Responsive Design

### Breakpoints
- Mobile: Single column, stacked elements
- Tablet: 2-column grids where appropriate
- Desktop: Full layout with horizontal scrolling galleries

### Mobile Optimizations
- Touch-friendly button sizes (min 44x44px)
- Swipe gestures for image galleries
- Simplified navigation for Polence menu

## Images

**Placeholder Images Required:**
- 6 images per location (48 total placeholders)
- 1 puzzle image for Bansko
- All images will be replaced by user
- Use romantic, couple-themed stock photos as placeholders
- Aspect ratio: 4:3 or 16:9 for consistency

**YouTube Embed:**
- Placeholder video ID
- Responsive 16:9 aspect ratio container

## Accessibility
- Semantic HTML for all content
- Focus indicators for keyboard navigation
- Alt text for all placeholder images
- Sufficient color contrast despite romantic palette

## Performance
- Optimized images (lazy loading)
- Smooth animations without jank
- Fast page transitions
- LocalStorage for instant state persistence