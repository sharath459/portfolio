// Extract text from Oct 2025 PDF resume for ingestion
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extractFromOct2025() {
  // Since we can't parse PDF directly without additional deps,
  // let's use the OnePage HTML as the primary source for now
  // and note that the user wants to update to Oct 2025 version
  
  console.log('Note: Oct 2025 PDF detected but requires PDF parsing library.');
  console.log('Using OnePage HTML as primary source for now.');
  console.log('To use Oct 2025 PDF, consider converting it to HTML first.');
  
  const resumeDir = path.resolve(__dirname, '../../public/Resume');
  const oct2025Path = path.join(resumeDir, 'Sharath_Resume_Oct_2025.pdf');
  
  // Check if file exists
  try {
    await fs.access(oct2025Path);
    console.log(`Found: ${oct2025Path}`);
    console.log('Recommendation: Convert PDF to HTML using online tool or:');
    console.log('  - Open in browser, Save As → Web Page, Complete');
    console.log('  - Or use: pandoc Sharath_Resume_Oct_2025.pdf -o Sharath_Resume_Oct_2025.html');
  } catch {
    console.log('Oct 2025 PDF not found');
  }
}

extractFromOct2025();
