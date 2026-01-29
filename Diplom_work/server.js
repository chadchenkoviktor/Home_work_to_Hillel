const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: './public'
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Simple /login endpoint: accepts { email, login, password }
server.post('/login', (req, res) => {
  const { email, login, password } = req.body;
  const users = router.db.get('users').value();
  const identifier = email || login;
  const user = users.find(u => (u.email === identifier || u.login === identifier) && u.password === password);

  if (user) {
    const token = `fake-jwt-token-${user.id}`;
    return res.jsonp({ token });
  }

  return res.status(401).jsonp({ message: 'Invalid credentials' });
});

// Fallback to default json-server router
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
