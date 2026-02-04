# Today's Manna - Daily Bible Verse App Design System

## 1. Design Philosophy

- **Theme**: Cute, Warm, Pastel, Emotional
- **Keywords**: "Cyber-Divine", Comfort, Meditation
- **Target Audience**: Users seeking daily spiritual comfort with a friendly, non-intimidating UI.

## 2. Color Palette (Tailwind Tokens)

### Brand Colors

- **Primary (Green)**: `#A5D6A7` (Soft healing green)
- **Primary Dark**: `#689F38` (Emphasis green)
- **Secondary (Purple)**: `#D1C4E9` (Mystical/Divine touch)
- **Accent (Orange)**: `#FFCC80` (Warmth)

### Manna Signature

- **Manna Yellow**: `#FFE082` (Bread of life, Warmth)
- **Manna Brown**: `#8D6E63` (Earth, Stability, Text)

### Functional Colors

- **Coral Pink (Gradient Start)**: `#FF8A80`
- **Coral Pink (Gradient End)**: `#FF5252`
- **Mission Background**: `#FFF0F3`
- **Interpretation Background**: `#E0F2F1`

## 3. Typography (Google Fonts KOR)

### Display / Headings

- **Font**: `Jua` (BM Jua)
- **Usage**: Titles, Buttons, Important Headings
- **Class**: `font-chunky`
- **Feel**: Friendly, thick, cute.

### Body Text

- **Font**: `Nanum Gothic`
- **Usage**: General UI text, explanations
- **Class**: `font-sans`

### Verse Text

- **Font**: `Gowun Dodum`
- **Usage**: Bible verses (Legible but stylized)
- **Class**: `font-verse`

## 4. UI Components & Effects

### Containers

- **Glassmorphism**: `bg-white/90 backdrop-blur-sm` (Used for verse cards)
- **Rounded Corners**: `rounded-[3.5rem]` (Extreme roundness for mobile frame feel)
- **Shadows**: Soft, diffuse shadows (`shadow-2xl`, `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`)

### Animations

- **Float**: Gentle floating for background elements (Cloud, Star).
  - `animate-float` (6s duration)
  - `animate-float-delayed` (8s duration)
- **Bounce**: `animate-bounce-gentle` for Mascot interactions.

## 5. Assets

- **Mascot**: "Manna-kun" (Yellow rounded character with brown features).
- **Icons**: Lucide React / Material Symbols (Rounded style).

## 6. Layout

- **Mobile First**: Fixed width `390px`, Height `844px` (iPhone 12/13/14 format).
- **Navigation**: Flow-based (Start -> Verse -> Detail).
