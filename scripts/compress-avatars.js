import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const avatarsDir = path.join(__dirname, '../public/avatars');

// A mapping for explicit renaming, otherwise just change extension
const nameMapping = {
  'ChatGPT Image May 22, 2026, 03_09_56 AM.png': 'skills-avatar.webp',
  'ChatGPT Image May 22, 2026, 03_11_04 AM.png': 'contact-avatar.webp',
  'about-avatar.png': 'about-avatar.webp',
  'hero-section-avatar.png': 'hero-avatar.webp',
  'project-section-avatar.png': 'projects-avatar.webp'
};

async function processAvatars() {
  console.log('Starting avatar compression and conversion to WebP...');
  
  if (!fs.existsSync(avatarsDir)) {
    console.error(`Directory not found: ${avatarsDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(avatarsDir);

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(avatarsDir, file);
      
      const newFileName = nameMapping[file] || file.replace(/\.(png|jpe?g)$/i, '.webp');
      const outputPath = path.join(avatarsDir, newFileName);

      console.log(`Processing: ${file} -> ${newFileName}`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        console.log(`✅ Success: ${newFileName}`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }
  }
  
  console.log('Done!');
}

processAvatars();
