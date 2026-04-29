const http = require('http');

const server = http.createServer((req, res) => {
  // Redirect to example.com with 302 Found status
  res.writeHead(302, {
    'Location': 'http://localhost:5000/hackaicon_ethiack_1337_lmao'
  });
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Visit the URL and it will redirect to https://example.com with 302 status.');
});
