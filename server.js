/**
 * Financial Literacy & UPI Safety Awareness - Educational Website
 * MIT Chhatrapati Sambhajinagar | Community Engagement Project (CEP)
 * 
 * Local Development & Network Server (Zero-Dependency Node.js HTTP Server)
 * - Binds to 0.0.0.0 so you can test on your computer AND on your mobile phone via local Wi-Fi.
 * - Auto-detects local IPv4 addresses.
 * - Zero external npm dependencies required: works instantly with just 'npm start' or 'node server.js'.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const BASE_DIR = path.resolve(__dirname);

// Supported MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=UTF-8',
  '.md': 'text/markdown; charset=UTF-8'
};

// Helper: Get all active local IPv4 addresses
function getNetworkAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }
  return addresses;
}

// Request Handler
function handleRequest(req, res) {
  // Normalize URL and prevent path traversal
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const safePath = path.normalize(path.join(BASE_DIR, pathname));

  // Security check: ensure path stays inside workspace
  if (!safePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden: Access denied.');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Check if directory index exists
      if (stats && stats.isDirectory()) {
        const indexPath = path.join(safePath, 'index.html');
        if (fs.existsSync(indexPath)) {
          serveFile(indexPath, res);
          return;
        }
      }

      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><title>404 Not Found</title></head>
        <body style="font-family: sans-serif; padding: 3rem; text-align: center;">
          <h2>404 - File Not Found</h2>
          <p>The requested file <code>${pathname}</code> was not found on this server.</p>
          <a href="/">← Return to Homepage</a>
        </body>
        </html>
      `);
      return;
    }

    serveFile(safePath, res);
  });
}

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Read and serve with zero-cache headers for instant updates
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end(`500 Internal Server Error: ${err.message}`);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(content);
  });
}

// Start server with fallback to next port if occupied
function startServer(port) {
  const server = http.createServer(handleRequest);

  server.listen(port, '0.0.0.0', () => {
    const networkIps = getNetworkAddresses();

    console.log('\n================================================================');
    console.log('  Financial Literacy & UPI Safety Awareness - CEP Website');
    console.log('  MIT Chhatrapati Sambhajinagar (SY B.Tech 2026-27)');
    console.log('================================================================');
    console.log(`\n  > Local:            http://localhost:${port}/`);
    
    if (networkIps.length > 0) {
      networkIps.forEach(ip => {
        console.log(`  > Network (Mobile): http://${ip}:${port}/`);
      });
      console.log('\n  Tip: Connect your phone to the same Wi-Fi network and open the');
      console.log('       Network URL in your mobile browser to test on your phone!');
    } else {
      console.log(`  > Network:          http://127.0.0.1:${port}/`);
    }

    console.log('\n  Press Ctrl+C to stop the server.\n');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} is currently in use. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);

