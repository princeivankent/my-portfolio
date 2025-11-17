const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'my-portfolio', 'browser', 'index.html');

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');

  // Replace the base href with the correct GitHub Pages path
  content = content.replace(
    /<base href="[^"]*">/,
    '<base href="/my-portfolio/">'
  );

  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('✅ Fixed base href to /my-portfolio/');
} else {
  console.error('❌ index.html not found at', indexPath);
  process.exit(1);
}
