const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Читаем db.json
const dbPath = path.join(__dirname, 'db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // GET /products
  if (pathname === '/products' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(db.products || []));
    return;
  }

  // POST /login
  if (pathname === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { email, login, password } = JSON.parse(body);
        const identifier = email || login;
        const user = (db.users || []).find(u =>
          (u.email === identifier || u.login === identifier) && u.password === password
        );

        if (user) {
          const token = `fake-jwt-token-${user.id}`;
          res.writeHead(200);
          res.end(JSON.stringify({ token }));
        } else {
          res.writeHead(401);
          res.end(JSON.stringify({ message: 'Invalid credentials' }));
        }
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Bad request' }));
      }
    });
    return;
  }

  // 404
  res.writeHead(404);
  res.end(JSON.stringify({ message: 'Not found' }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n✅ API Server running on http://localhost:${PORT}`);
  console.log(`📌 POST /login - для аутентификации`);
  console.log(`📌 GET /products - список товаров\n`);
});
