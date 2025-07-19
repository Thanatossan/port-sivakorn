# Dark Mode Implementation

This portfolio now includes a dark mode toggle feature that allows users to switch between light and dark themes.

## Features

- **Automatic Theme Persistence**: The selected theme is saved to localStorage and persists across browser sessions
- **Smooth Transitions**: All theme changes include smooth CSS transitions for a polished user experience
- **Responsive Design**: The theme toggle works seamlessly across all device sizes
- **Accessible**: The toggle button includes proper ARIA labels for screen readers

## Components Added

### 1. ThemeContext (`src/contexts/ThemeContext.js`)
- Manages the global theme state using React Context
- Handles localStorage persistence
- Applies theme attribute to document root

### 2. ThemeToggle (`src/components/common/themeToggle.jsx`)
- Toggle button component with sun/moon icons
- Smooth animations and hover effects
- Responsive design

### 3. Updated CSS Variables (`src/data/styles.css`)
- Light mode and dark mode color schemes
- Consistent color variables across all components

## Usage

The theme toggle appears in the navigation bar and can be clicked to switch between light and dark modes. The theme preference is automatically saved and restored when the user returns to the site.

## CSS Variables

The implementation uses CSS custom properties (variables) for theming:

### Light Mode
- `--background-color`: #ffffff
- `--surface-color`: #fafafa
- `--text-primary`: #27272a
- `--text-secondary`: #65656d

### Dark Mode
- `--background-color`: #18181b
- `--surface-color`: #27272a
- `--text-primary`: #f4f4f5
- `--text-secondary`: #a1a1aa

## Technical Details

- Uses `data-theme` attribute on document root for theme switching
- CSS variables enable automatic theme switching across all components
- Theme state is managed globally through React Context
- localStorage ensures theme persistence across sessions
