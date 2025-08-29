# 🎨 Restaurant Color Palette Guide

## Overview
This document outlines the new color palette designed specifically for restaurant websites. The colors are warm, appetizing, and create a welcoming atmosphere that encourages customers to explore your food offerings.

## 🟠 Primary Colors (Warm & Appetizing)

### Primary Palette
- **Primary-50**: `#fef7f0` - Very light warm cream
- **Primary-100**: `#fdecd4` - Light warm cream
- **Primary-200**: `#fbd5a8` - Soft warm peach
- **Primary-300**: `#f8b871` - Medium warm orange
- **Primary-400**: `#f59338` - Rich warm orange
- **Primary-500**: `#f2751a` - Vibrant warm orange (main brand color)
- **Primary-600**: `#e35a0f` - Deep warm orange
- **Primary-700**: `#bc4310` - Rich deep orange
- **Primary-800**: `#963514` - Dark warm brown
- **Primary-900**: `#7a2e14` - Very dark warm brown

**Usage**: Main brand color, primary buttons, highlights, call-to-action elements

## 🔴 Accent Colors (Rich & Complementary)

### Accent Palette
- **Accent-50**: `#fdf4f3` - Very light warm pink
- **Accent-100**: `#fbe8e6` - Light warm pink
- **Accent-200**: `#f7d1cd` - Soft warm pink
- **Accent-300**: `#f0b0a8` - Medium warm pink
- **Accent-400**: `#e68578` - Rich warm pink
- **Accent-500**: `#d96b5c` - Vibrant warm pink
- **Accent-600**: `#c55547` - Deep warm pink (main accent)
- **Accent-700**: `#a44439` - Rich deep pink
- **Accent-800**: `#873a32` - Dark warm pink
- **Accent-900**: `#71332d` - Very dark warm pink

**Usage**: Secondary buttons, error messages, highlights, complementary elements

## 🟤 Warm Neutral Colors (Sophisticated & Readable)

### Warm Neutral Palette
- **Warm-50**: `#fafaf9` - Very light warm gray
- **Warm-100**: `#f5f5f4` - Light warm gray
- **Warm-200**: `#e7e5e4` - Soft warm gray
- **Warm-300**: `#d6d3d1` - Medium warm gray
- **Warm-400**: `#a8a29e` - Medium warm gray
- **Warm-500**: `#78716c` - Rich warm gray
- **Warm-600**: `#57534e` - Deep warm gray
- **Warm-700**: `#44403c` - Dark warm gray
- **Warm-800**: `#292524` - Very dark warm gray
- **Warm-900**: `#1c1917` - Almost black warm gray

**Usage**: Text, backgrounds, borders, subtle elements

## 🍽️ Food-Inspired Colors (Special Purpose)

### Food Palette
- **Food-spice**: `#d97706` - Warm orange (spices)
- **Food-herb**: `#059669` - Fresh green (herbs)
- **Food-cream**: `#fef3c7` - Light cream (dairy)
- **Food-honey**: `#f59e0b` - Golden honey (sweet)
- **Food-berry**: `#dc2626` - Rich red (fruits)
- **Food-earth**: `#92400e` - Deep brown (earth)

**Usage**: Food categories, special highlights, seasonal elements

## 🎯 Usage Guidelines

### 1. Primary Elements
- **Main Navigation**: Use `bg-gradient-primary` for navbar
- **Primary Buttons**: Use `btn-primary` class
- **Brand Elements**: Use `text-primary-600` for logos and main text
- **Call-to-Action**: Use `bg-primary-500` or `bg-primary-600`

### 2. Secondary Elements
- **Secondary Buttons**: Use `btn-secondary` class
- **Accent Elements**: Use `btn-accent` class
- **Food Buttons**: Use `btn-food` class for food-related actions
- **Error Messages**: Use `text-accent-600` for errors

### 3. Text & Content
- **Main Headings**: Use `text-warm-900`
- **Subheadings**: Use `text-warm-600`
- **Body Text**: Use `text-warm-800`
- **Muted Text**: Use `text-warm-500`

### 4. Backgrounds & Cards
- **Page Background**: Use `bg-warm-50`
- **Card Backgrounds**: Use `card` class
- **Hover Effects**: Use `card-hover` class
- **Gradients**: Use `bg-gradient-primary`, `bg-gradient-accent`, or `bg-gradient-warm`

## 🚀 CSS Classes Available

### Button Classes
```css
.btn-primary      /* Primary action buttons */
.btn-secondary    /* Secondary action buttons */
.btn-accent       /* Accent action buttons */
.btn-food         /* Food-related buttons */
```

### Text Classes
```css
.text-primary     /* Primary brand text */
.text-accent      /* Accent text */
.heading          /* Main headings */
.subheading       /* Subheadings */
```

### Background Classes
```css
.bg-gradient-primary  /* Primary gradient background */
.bg-gradient-accent   /* Accent gradient background */
.bg-gradient-warm     /* Warm gradient background */
```

### Component Classes
```css
.card           /* Basic card styling */
.card-hover     /* Card with hover effects */
.input          /* Form input styling */
.label          /* Form label styling */
.error          /* Error message styling */
.success        /* Success message styling */
```

## 🎨 Color Psychology for Restaurants

### Why These Colors Work
1. **Warm Oranges**: Stimulate appetite, create energy, feel welcoming
2. **Rich Reds**: Increase heart rate, create excitement, associated with food
3. **Warm Neutrals**: Provide sophistication, ensure readability, feel premium
4. **Food Colors**: Create immediate food associations, enhance appetite appeal

### Best Practices
- Use primary colors for main actions and branding
- Use accent colors sparingly for highlights and special elements
- Use warm neutrals for text and subtle backgrounds
- Use food colors for category indicators and special promotions
- Maintain good contrast ratios for accessibility

## 🔧 Implementation Examples

### Navigation Bar
```jsx
<nav className="bg-gradient-primary shadow-lg">
  <span className="text-white font-bold">Restaurant Name</span>
</nav>
```

### Product Card
```jsx
<div className="card card-hover">
  <h3 className="text-warm-900">Product Name</h3>
  <p className="text-warm-600">Description</p>
  <button className="btn-primary">Add to Cart</button>
</div>
```

### Call-to-Action
```jsx
<button className="btn-primary text-lg px-6 py-3">
  Order Now
</button>
```

This color palette creates a warm, appetizing, and professional appearance that's perfect for restaurant websites while maintaining excellent readability and user experience.
