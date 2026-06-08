const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

let browserPath = '';
if (fs.existsSync(edgePath)) {
  browserPath = edgePath;
} else if (fs.existsSync(chromePath)) {
  browserPath = chromePath;
} else {
  console.error('Error: Could not find Microsoft Edge or Google Chrome in default Windows installation paths.');
  process.exit(1);
}

const inputPath = path.resolve(__dirname, '../pulkit_arora_resume.html');
const outputPath = path.resolve(__dirname, '../Pulkit Arora - Resume.pdf');
const userDataDir = path.resolve(__dirname, '../.browser-user-data-pdf');

const args = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--no-pdf-header-footer',
  `--user-data-dir=${userDataDir}`,
  `--print-to-pdf=${outputPath}`,
  `file:///${inputPath.replace(/\\/g, '/')}`
];

console.log(`Compiling resume PDF using browser: ${browserPath}...`);

execFile(browserPath, args, (error, stdout, stderr) => {
  if (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
  
  // Clean up user data directory if possible (it may be locked momentarily, so we ignore errors)
  setTimeout(() => {
    try {
      if (fs.existsSync(userDataDir)) {
        fs.rmSync(userDataDir, { recursive: true, force: true });
      }
    } catch (e) {
      // Ignore cleanup errors
    }
  }, 1000);

  console.log(`Success! PDF successfully built at: ${outputPath}`);
});
