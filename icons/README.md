# Icon Usage Guide

## Generated Icons

This directory contains visually stunning SVG icons for the CSV JSON SQL Converter:

- **icon16.svg** - 16x16 favicon/browser icon
- **icon32.svg** - 32x32 standard icon
- **icon48.svg** - 48x48 app icon
- **icon128.svg** - 128x128 high-res icon

## Design Features

- **Gradient Background**: Purple to blue to pink gradient
- **Data Brackets**: Represent structured data formats
- **Conversion Arrow**: Shows data transformation
- **Data Points**: Visualize individual data elements
- **Glow Effects**: Subtle lighting for modern look
- **Pattern Overlay**: Subtle texture for depth

## Converting SVG to PNG

To convert these SVG icons to PNG format, you can use:

### Online Tools:
- [SVG to PNG Converter](https://cloudconvert.com/svg-to-png)
- [Convertio](https://convertio.co/svg-png/)

### Command Line:
```bash
# Using ImageMagick
convert icon128.svg icon128.png

# Using Inkscape
inkscape -w 128 -h 128 icon128.svg -o icon128.png
```

### Browser (for development):
You can also use these SVG files directly in HTML or convert them programmatically.

## Usage in Chrome Extension

Update your `manifest.json`:
```json
{
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

## Web App Usage

Use in HTML:
```html
<link rel="icon" href="icons/icon32.png" sizes="32x32" type="image/png">
```

Or use SVG directly:
```html
<img src="icons/icon128.svg" alt="CSV JSON SQL Converter" width="128" height="128">
```

## Download Instructions

1. **Download individual files**: Click on each SVG file above and use your browser's "Save As" function
2. **Download as ZIP**: Use GitHub's "Download ZIP" feature to get all icons at once
3. **Convert to PNG**: Use online converters to get PNG versions for the Chrome extension

The icons are ready for immediate use and download!
