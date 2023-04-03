const http = require('http');
const https = require('https');

module.exports = function proxy(url, req, res) {
  const isHttps = url.startsWith('https');
  const options = {
    hostname: url.split('/')[2],
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxyReq = (isHttps ? https : http).request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });
};
