const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSVGtoPNG() {
  const sizes = [16, 32, 48, 128];

  for (const size of sizes) {
    const svgPath = path.join(__dirname, 'icons', `icon${size}.png`); // Note: files are named .png but contain SVG content
    const pngPath = path.join(__dirname, 'icons', `icon${size}.png`);

    try {
      // Read the SVG content (which is stored in files named .png)
      const svgContent = fs.readFileSync(svgPath, 'utf8');

      // Convert SVG to PNG using Sharp
      await sharp(Buffer.from(svgContent))
        .png()
        .resize(size, size)
        .toFile(pngPath + '.temp'); // Create temporary file first

      // Replace the original file with the PNG version
      fs.renameSync(pngPath + '.temp', pngPath);

      console.log(`✅ Converted icon${size}.png to actual PNG format`);
    } catch (error) {
      console.error(`❌ Error converting icon${size}.png:`, error.message);
    }
  }

  console.log('🎉 All icons converted to PNG format!');
}

convertSVGtoPNG().catch(console.error);
