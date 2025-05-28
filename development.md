# NameCardAI - Development Specification

## 🛠 Tech Stack & Architecture

### Core Framework
- **Next.js 15.3.2** with App Router
- **React 19** with Server Components
- **Tailwind CSS v4** for styling
- **JavaScript** (no TypeScript for MVP speed)

### 3D/AR Libraries
- **Three.js** - 3D rendering and AR overlays
- **@react-three/fiber** - React integration for Three.js
- **@react-three/drei** - Useful helpers and components

### Animation & Effects
- **GSAP** - Professional animations and ScrollTrigger
- **Framer Motion** - React-specific animations
- **Lottie React** - Micro-animations and icons

### Demo Engine
- **Phaser 3** - 2D interactive demos and simulations
- **React-Phaser** - Integration layer

### Utilities
- **QR Code Generator** - qrcode.js for QR generation
- **LocalStorage** - Client-side data persistence
- **JSON** - Simulated backend data

## 📱 Application Structure

### Core Pages (Priority Order)
1. **HomePage** (`/`) - Landing and hero experience
2. **DemoPage** (`/demo`) - Interactive AR card simulation
3. **PitchDeckPage** (`/pitch`) - Investor presentation
4. **WhyUsPage** (`/why-us`) - Competitive advantages
5. **LandingPage** (`/landing`) - Conversion-focused entry
6. **RoadmapPage** (`/roadmap`) - Product timeline
7. **SignUpPage** (`/signup`) - User registration simulation

### Component Architecture
```
src/
├── app/
│   ├── page.js (HomePage)
│   ├── demo/page.js
│   ├── pitch/page.js
│   ├── why-us/page.js
│   ├── landing/page.js
│   ├── roadmap/page.js
│   ├── signup/page.js
│   ├── layout.js
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Navigation.js
│   ├── ui/
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Modal.js
│   │   └── Input.js
│   ├── sections/
│   │   ├── HeroSection.js
│   │   ├── FeaturesSection.js
│   │   ├── PricingSection.js
│   │   ├── TestimonialsSection.js
│   │   └── CTASection.js
│   ├── 3d/
│   │   ├── ARCard.js
│   │   ├── Scene3D.js
│   │   └── CardRenderer.js
│   ├── demo/
│   │   ├── DemoEngine.js
│   │   ├── CardSimulator.js
│   │   └── InteractiveDemo.js
│   └── effects/
│       ├── ParallaxScroll.js
│       ├── MatrixEffect.js
│       ├── TypingEffect.js
│       └── ParticleSystem.js
├── lib/
│   ├── data/
│   │   ├── cards.json
│   │   ├── testimonials.json
│   │   └── features.json
│   ├── utils/
│   │   ├── qr-generator.js
│   │   ├── storage.js
│   │   └── animations.js
│   └── constants/
│       ├── effects.js
│       └── config.js
└── public/
    ├── assets/
    │   ├── images/
    │   ├── videos/
    │   ├── 3d-models/
    │   └── audio/
    └── favicon.ico
```

## 🎨 Design System & Effects

### Visual Effects Pool (Randomized Assignment)
Each section gets ONE effect from this pool:

1. **Matrix Digital Rain** - Falling green characters
2. **3D Tilt on Hover** - Perspective transform on mouse movement
3. **Audio-Responsive Visuals** - Bars/waves that react to ambient sound
4. **Scroll-Triggered Animations** - Elements animate in on scroll
5. **Typing Text Effect** - Text appears character by character
6. **Particle Smoke** - Floating particle systems
7. **Fireflies/Orbs** - Glowing moving particles
8. **Image Carousel** - Auto-rotating content showcase
9. **Mini Demo Loop** - Continuous micro-animations
10. **Parallax Layers** - Background elements move at different speeds

### Color Palette (Futuristic AI Theme)
```css
:root {
  --primary-cyan: #00f5ff;
  --primary-purple: #8b5cf6;
  --accent-green: #10b981;
  --accent-orange: #f59e0b;
  --dark-bg: #0a0a0a;
  --dark-surface: #1a1a1a;
  --dark-border: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --gradient-primary: linear-gradient(135deg, #00f5ff, #8b5cf6);
  --gradient-accent: linear-gradient(135deg, #10b981, #f59e0b);
}
```

### Typography
- **Headings**: Inter or Poppins (futuristic, clean)
- **Body**: System fonts for performance
- **Code/Tech**: JetBrains Mono for technical elements

### Responsive Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

## 🏠 HomePage Sections (Detailed)

### 1. Hero Section
- **Effect**: Mini Demo Loop + 3D Tilt
- **Content**: 
  - Animated logo with brand name
  - Main headline: "Your Name. Reinvented."
  - Subheadline: "AR-enhanced digital business cards that work everywhere"
  - CTA buttons: "Try Demo" + "Get Started"
  - Background: Animated AR card preview

### 2. Problem/Solution Section
- **Effect**: Scroll-triggered animations
- **Content**:
  - Split layout: Problem (left) vs Solution (right)
  - Statistics: "7B+ cards printed, 88% thrown away"
  - Visual comparison: Paper vs AR cards

### 3. 3-Step Process Section
- **Effect**: Typing text effect
- **Content**:
  - Step 1: Create your AR card
  - Step 2: Share via QR/NFC/Camera
  - Step 3: Amaze with 3D experience

### 4. MVP Feature Preview
- **Effect**: Parallax scroll with 3D layers
- **Content**:
  - 3D card renderer preview
  - Multiple sharing methods demo
  - AR overlay simulation
  - Real-time customization

### 5. Competitor Comparison
- **Effect**: Matrix digital rain background
- **Content**:
  - Feature comparison table
  - "Only platform with AR" highlight
  - Competitive advantages

### 6. Testimonials & Social Proof
- **Effect**: Fireflies/orbs floating
- **Content**:
  - User testimonials with photos
  - Usage statistics
  - Company logos (simulated)

### 7. Pricing Plans
- **Effect**: 3D tilt on hover for each plan
- **Content**:
  - Free, Pro, Premium, Enterprise tiers
  - Feature comparison
  - "Most Popular" badge

### 8. Trust Building
- **Effect**: Audio-responsive visuals
- **Content**:
  - Security features
  - Privacy guarantees
  - Technology partnerships

### 9. Feature Carousel
- **Effect**: Auto-rotating carousel
- **Content**:
  - AR card examples
  - Different industries
  - Customization options

### 10. CTA Section
- **Effect**: Particle smoke
- **Content**:
  - "Start Your AR Journey"
  - Email signup
  - Social links

## 🎮 DemoPage Specifications

### Demo Levels/Layers (3-10 levels)

#### Level 1: Basic Card View
- Static 3D business card
- Hover interactions
- Basic information display

#### Level 2: AR Overlay
- Camera simulation (fake video feed)
- AR card appears over "face"
- Basic animations

#### Level 3: Interactive Elements
- Clickable contact buttons
- Social media links
- Download vCard simulation

#### Level 4: Customization Panel
- Change card colors/themes
- Upload profile photo simulation
- Edit contact information

#### Level 5: Sharing Methods
- Generate QR code
- NFC simulation
- Copy link functionality

#### Level 6: Advanced AR
- Multiple card styles
- 3D avatar integration
- Intro video overlay

#### Level 7: Analytics Dashboard
- Scan statistics
- Engagement metrics
- Contact tracking

#### Level 8: Team Features
- Multiple card management
- Brand consistency tools
- Bulk sharing options

#### Level 9: Integration Simulation
- CRM sync preview
- Calendar integration
- Email automation

#### Level 10: Future Features
- AI-powered recommendations
- Voice introduction
- Holographic projection preview

### Demo Engine Implementation
- **Phaser 3** for 2D interactive elements
- **Three.js** for 3D card rendering
- **LocalStorage** for saving demo progress
- **JSON data** for simulated backend responses

## 📦 Package Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.3.2",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.95.0",
    "gsap": "^3.12.0",
    "framer-motion": "^11.0.0",
    "phaser": "^3.70.0",
    "qrcode": "^1.5.0",
    "lottie-react": "^2.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  }
}
```

## 🚀 Development Phases

### Phase 1: Foundation (Current)
- [x] Project setup with Next.js 15
- [x] Documentation creation
- [ ] Install core dependencies
- [ ] Setup Tailwind configuration
- [ ] Create basic layout components

### Phase 2: HomePage Development
- [ ] Hero section with AR preview
- [ ] Problem/solution sections
- [ ] Feature showcase
- [ ] Pricing plans
- [ ] Testimonials

### Phase 3: DemoPage Development
- [ ] 3D card renderer
- [ ] AR simulation
- [ ] Interactive demo levels
- [ ] Sharing functionality
- [ ] Analytics preview

### Phase 4: Polish & Effects
- [ ] Add visual effects to all sections
- [ ] Responsive design testing
- [ ] Performance optimization
- [ ] Cross-browser testing

### Phase 5: Additional Pages
- [ ] Pitch deck page
- [ ] Why us page
- [ ] Roadmap page
- [ ] Signup simulation

## 🔧 Configuration Files

### Tailwind Config
- Custom color palette
- Animation utilities
- Component classes
- Responsive utilities

### Next.js Config
- Image optimization
- Static file serving
- Build optimization
- Development settings

### GSAP Config
- ScrollTrigger setup
- Animation presets
- Performance settings

## 📊 Performance Targets

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Additional Metrics
- **Bundle Size**: < 500KB initial load
- **3D Rendering**: 60fps on modern devices
- **Mobile Performance**: Lighthouse score > 90

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Responsive design on mobile/desktop
- [ ] All animations play smoothly
- [ ] 3D elements render correctly
- [ ] Demo functionality works
- [ ] Forms submit properly (simulated)
- [ ] Navigation works across all pages

### Browser Compatibility
- Chrome 90+ (primary)
- Firefox 88+ (secondary)
- Safari 14+ (secondary)
- Edge 90+ (tertiary)

### Device Testing
- iPhone 12/13/14 series
- Samsung Galaxy S21/S22
- iPad Pro
- Desktop 1920x1080
- Desktop 2560x1440
