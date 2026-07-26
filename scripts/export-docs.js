'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'out');
const docsDir = path.join(root, 'docs');
const docsCname = path.join(docsDir, 'CNAME');

function removeDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (fullPath === docsCname) continue;
    if (entry.isDirectory()) {
      removeDir(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  const remaining = fs.readdirSync(dir);
  if (remaining.length === 0) {
    fs.rmdirSync(dir);
  }
}

function copyRecursive(source, target) {
  const entries = fs.readdirSync(source, { withFileTypes: true });
  if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function main() {
  if (!fs.existsSync(outDir)) {
    console.error('Export output directory not found:', outDir);
    process.exit(1);
  }

  if (fs.existsSync(docsDir) && !fs.statSync(docsDir).isDirectory()) {
    fs.unlinkSync(docsDir);
  }

  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  removeDir(docsDir);
  copyRecursive(outDir, docsDir);

  if (fs.existsSync(docsCname)) {
    const cnameContents = fs.readFileSync(docsCname, 'utf8');
    fs.writeFileSync(docsCname, cnameContents, 'utf8');
  }

  console.log('Copied exported site from out/ to docs/.');
}

main();
