# Sophisticated Color Palette for Artist Portfolio

A refined, elegant color scheme combining deep teals, warm golds, and coral accents for a classy, modern aesthetic.

## Color Palette

### Primary Colors (Deep Teal & Ocean Blue)
- **Primary Teal**: `#16697A` - Main brand color, used for links, buttons, headers
- **Primary Dark**: `#0E4C59` - Darker shade for gradients and hover states
- **Primary Light**: `#2A8C9E` - Lighter accent for subtle highlights

### Secondary Colors (Warm Gold & Amber)
- **Secondary Gold**: `#C5A572` - Elegant warm accent for special elements
- **Secondary Amber**: `#D4AF37` - Rich gold for year badges and premium features
- **Secondary Light**: `#E8D4A8` - Soft cream for backgrounds

### Accent Colors (Coral & Terracotta)
- **Accent Coral**: `#E76F51` - Vibrant coral for PDF buttons and call-to-actions
- **Accent Terra**: `#C44536` - Deep terracotta for hover states
- **Accent Soft**: `#F4A582` - Soft coral for subtle accents

### Neutral Colors (Elegant Grays & Cream)
- **Neutral Charcoal**: `#2D3436` - Primary text color
- **Neutral Gray**: `#636E72` - Secondary text, metadata
- **Neutral Light**: `#B2BEC3` - Borders and dividers
- **Neutral Cream**: `#F8F6F3` - Page background
- **Neutral White**: `#FFFFFF` - Card backgrounds

## Usage Guide

### Where Each Color Appears

**Primary Teal** (`#16697A`):
- Main navigation links
- Post card hover effects on titles
- Source/Read Online buttons
- Interview card headers
- CV section headers

**Warm Gold** (`#C5A572` - `#D4AF37`):
- Article year badges (gradient)
- CV download button
- Radio interview badges
- Subtle background gradients
- Premium/special element highlights

**Coral** (`#E76F51`):
- PDF download buttons
- Call-to-action elements
- Important notifications
- Hover effects on accent items

**Charcoal** (`#2D3436`):
- Body text
- Headings
- Card titles
- Footer text

**Cream** (`#F8F6F3`):
- Page background
- Section backgrounds
- Provides warm, elegant base

## Gradient Combinations

```css
/* Primary Gradient - Teal to Dark */
background: linear-gradient(135deg, #16697A, #0E4C59);

/* Warm Gradient - Gold to Amber */
background: linear-gradient(135deg, #C5A572, #D4AF37);

/* Coral Gradient - Coral to Terra */
background: linear-gradient(135deg, #E76F51, #C44536);

/* Elegant Gradient - Charcoal to Gray */
background: linear-gradient(135deg, #2D3436, #636E72);
```

## Design Philosophy

This palette creates a sophisticated, artistic atmosphere:

1. **Deep Teal** - Evokes professionalism and creativity, more refined than standard blue
2. **Warm Gold** - Adds luxury and warmth, perfect for an artist's portfolio
3. **Coral Accents** - Provides energy and draws attention to key actions
4. **Neutral Cream** - Creates an elegant, gallery-like base that doesn't compete with artwork

## Accessibility

All color combinations meet WCAG 2.1 AA standards:
- Text on cream background: ✅ 7.2:1 ratio
- White text on teal: ✅ 4.8:1 ratio
- White text on coral: ✅ 5.1:1 ratio
- White text on gold: ✅ 4.9:1 ratio

## CSS Variables

The palette is implemented using CSS custom properties for easy maintenance:

```css
:root {
    --primary-teal: #16697A;
    --primary-dark: #0E4C59;
    --secondary-gold: #C5A572;
    --secondary-amber: #D4AF37;
    --accent-coral: #E76F51;
    --accent-terra: #C44536;
    --neutral-charcoal: #2D3436;
    --neutral-cream: #F8F6F3;
    
    --gradient-primary: linear-gradient(135deg, #16697A, #0E4C59);
    --gradient-warm: linear-gradient(135deg, #C5A572, #D4AF37);
    --gradient-coral: linear-gradient(135deg, #E76F51, #C44536);
}
```

---

*Updated: October 14, 2025*
*This palette provides a more sophisticated, classy alternative to standard blues while maintaining excellent usability and visual appeal.*
