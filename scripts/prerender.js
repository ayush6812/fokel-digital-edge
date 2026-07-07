import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/the-gallery-of-impact',
  '/the-execution-engine',
  '/built-for-impact',
  '/work/homelane',
  '/work/wtc-2026',
  '/work/genes-lecoanet-hemant',
  '/work/sab-properties',
  '/work/22workspace',
  '/work/corporate-buildcon',
  '/work/homeshark',
  '/work/aurum-education',
  '/work/prithivi-grid',
  '/blog/strategic-partner',
  '/blog/integrated-ecosystem',
  '/blog/real-estate-seo-india',
  '/blog/b2b-lead-generation-autopilot',
  '/blog/brand-identity-startups',
  '/blog/ai-agents-marketing-india',
  '/blog/local-seo-delhi-guide',
  '/blog/luxury-brand-marketing-india',
  '/blog/edtech-content-marketing-india',
  '/blog/infrastructure-branding-india',
  '/privacy-policy'
];

const distDir = path.resolve(__dirname, '../dist');
const port = 3005;

async function prerender() {
  console.log('Starting prerender script...');
  const app = express();
  app.use(express.static(distDir));
  
  // Fallback for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = app.listen(port, async () => {
    console.log(`Server started on port ${port} for prerendering...`);
    
    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      for (const route of routes) {
        console.log(`Prerendering ${route}...`);
        const page = await browser.newPage();
        
        // Suppress console logs from the page to keep terminal clean
        page.on('console', () => {});
        
        await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Ensure hydration/render has actually happened
        await page.waitForSelector('#root > div', { timeout: 10000 }).catch(() => {});
        
        const html = await page.content();
        
        // Determine the directory and file path
        let routePath = path.join(distDir, route);
        if (route === '/') {
          routePath = distDir;
        } else {
          fs.mkdirSync(routePath, { recursive: true });
        }
        
        fs.writeFileSync(path.join(routePath, 'index.html'), html);
        await page.close();
        console.log(`Successfully prerendered ${route}`);
      }
      
      console.log('Prerendering complete!');
    } catch (err) {
      console.error('Error during prerendering:', err);
      process.exitCode = 1;
    } finally {
      if (browser) await browser.close();
      server.close();
    }
  });
}

prerender();
