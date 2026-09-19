import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const wpMediaJsonPath = path.join(rootDir, 'wp_media.json');
const assetsTsPath = path.join(rootDir, 'src/data/assets.ts');
const targetDir = path.join(rootDir, 'public/assets');
const srcAssetsDir = path.join(rootDir, 'src/assets');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Read wp_media.json
const wpMedia = JSON.parse(fs.readFileSync(wpMediaJsonPath, 'utf8'));

// Read assets.ts to find any additional URLs
const assetsTs = fs.readFileSync(assetsTsPath, 'utf8');
const urlsInAssets = [...assetsTs.matchAll(/https:\/\/jalsaudaipur\.com\/wp-content\/uploads\/[^\s',]+/g)].map(m => m[0]);

// Collect all unique URLs
const urlMap = new Map();

for (const item of wpMedia) {
  if (item.url && typeof item.url === 'string') {
    const filename = path.basename(new URL(item.url).pathname);
    urlMap.set(filename, item.url);
  }
}

for (const url of urlsInAssets) {
  const filename = path.basename(new URL(url).pathname);
  if (!urlMap.has(filename)) {
    urlMap.set(filename, url);
  }
}

const items = Array.from(urlMap.entries()).map(([filename, url]) => ({ filename, url }));
console.log(`Total media items to download: ${items.length}`);

function downloadFile(url, destPath, retries = 3) {
  return new Promise((resolve, reject) => {
    // If file already exists and is non-empty, check if valid
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
      return resolve({ status: 'already_exists', size: fs.statSync(destPath).size });
    }

    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 30000
    }, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        res.resume();
        return downloadFile(redirectUrl, destPath, retries - 1).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        res.resume();
        if (retries > 0) {
          console.warn(`[Retry] ${path.basename(destPath)} HTTP ${res.statusCode}. Retrying...`);
          return setTimeout(() => {
            downloadFile(url, destPath, retries - 1).then(resolve).catch(reject);
          }, 1500);
        }
        return reject(new Error(`HTTP ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close(() => {
          const stat = fs.statSync(destPath);
          resolve({ status: 'downloaded', size: stat.size });
        });
      });

      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    });

    req.on('timeout', () => {
      req.destroy();
      if (retries > 0) {
        setTimeout(() => downloadFile(url, destPath, retries - 1).then(resolve).catch(reject), 1500);
      } else {
        reject(new Error('Timeout'));
      }
    });

    req.on('error', (err) => {
      if (retries > 0) {
        setTimeout(() => downloadFile(url, destPath, retries - 1).then(resolve).catch(reject), 1500);
      } else {
        reject(err);
      }
    });
  });
}

async function run() {
  const concurrency = 6;
  let index = 0;
  let completed = 0;
  let failed = 0;
  let totalBytes = 0;

  async function worker() {
    while (index < items.length) {
      const current = items[index++];
      const destPath = path.join(targetDir, current.filename);
      try {
        const res = await downloadFile(current.url, destPath);
        completed++;
        totalBytes += res.size;
        console.log(`[${completed}/${items.length}] OK (${(res.size / 1024).toFixed(1)} KB): ${current.filename}`);
      } catch (err) {
        failed++;
        console.error(`[FAILED] ${current.filename} from ${current.url}: ${err.message}`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  console.log(`\n============================`);
  console.log(`Download complete!`);
  console.log(`Total: ${items.length}, Completed: ${completed}, Failed: ${failed}`);
  console.log(`Total Downloaded Size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved in: ${targetDir}`);
  console.log(`============================\n`);

  // Mirror/link to src/assets
  try {
    if (!fs.existsSync(srcAssetsDir)) {
      fs.symlinkSync(targetDir, srcAssetsDir, 'dir');
      console.log(`Created symlink src/assets -> public/assets`);
    } else {
      console.log(`src/assets already exists.`);
    }
  } catch (e) {
    console.warn(`Could not create symlink, creating directory copy instead: ${e.message}`);
    if (!fs.existsSync(srcAssetsDir)) {
      fs.mkdirSync(srcAssetsDir, { recursive: true });
    }
    for (const item of items) {
      const src = path.join(targetDir, item.filename);
      const dest = path.join(srcAssetsDir, item.filename);
      if (fs.existsSync(src) && !fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    }
  }
}

run();
