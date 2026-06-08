const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec, execFile } = require('child_process');

const PORT = 3000;
const ROOT_DIR = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.method === 'POST' && req.url === '/api/save') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        if (!payload.html) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing html field in request body' }));
          return;
        }

        const resumeHtmlPath = path.join(ROOT_DIR, 'pulkit_arora_resume.html');
        
        // Save HTML file
        fs.writeFileSync(resumeHtmlPath, payload.html, 'utf8');
        console.log('Saved pulkit_arora_resume.html successfully');

        // Compile PDF resume
        const buildPdfScript = path.join(ROOT_DIR, 'scripts', 'build-pdf.js');
        execFile('node', [buildPdfScript], (err, stdout, stderr) => {
          if (err) {
            console.error('PDF compilation failed:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to compile PDF', details: err.message }));
            return;
          }
          console.log(stdout);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: 'Resume saved and PDF compiled successfully!' }));
        });
      } catch (err) {
        console.error('Error handling save API:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error', details: err.message }));
      }
    });
    return;
  }

  // Handle Static File Serving
  let filePath = path.join(ROOT_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  
  // Prevent directory traversal
  const normalizedFilePath = path.normalize(filePath);
  const normalizedRootDir = path.normalize(ROOT_DIR);
  if (!normalizedFilePath.startsWith(normalizedRootDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(normalizedFilePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
      return;
    }

    const ext = path.extname(normalizedFilePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(normalizedFilePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}/resume_editor.html`;
  console.log(`\n======================================================`);
  console.log(`Resume Editor Server running at: ${url}`);
  console.log(`Press Ctrl+C to stop the server.`);
  console.log(`======================================================\n`);

  // Auto-open browser on Windows
  exec(`start ${url}`, (err) => {
    if (err) {
      console.log('Could not open browser automatically. Please open the link manually.');
    }
  });
});
