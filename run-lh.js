const { execSync, spawn } = require('child_process');
const fs = require('fs');

console.log('Starting Next.js app on port 3001...');
const server = spawn('npx.cmd', ['next', 'start', '-p', '3001'], { stdio: 'ignore', detached: true });
server.unref();

console.log('Waiting for server to start...');
setTimeout(() => {
  console.log('Running Lighthouse...');
  try {
    execSync('npx.cmd lighthouse http://localhost:3001/ --chrome-flags="--headless" --output json --output-path ./lhreport-fixed.json', { stdio: 'inherit' });
    
    const lh = JSON.parse(fs.readFileSync('./lhreport-fixed.json', 'utf8'));
    console.log('--- RESULTS ---');
    console.log('NEW PERFORMANCE SCORE:', lh.categories.performance.score * 100);
    console.log('NEW LCP:', lh.audits['largest-contentful-paint'].displayValue);
    console.log('NEW TBT:', lh.audits['total-blocking-time'].displayValue);
    console.log('NEW FCP:', lh.audits['first-contentful-paint'].displayValue);
  } catch (e) {
    console.log('Error running lighthouse', e);
  }
  
  try { execSync('npx.cmd kill-port 3001'); } catch (e) {}
  process.exit(0);
}, 10000);
