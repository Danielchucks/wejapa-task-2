const http = require('http');
const fs = require('fs');

module.exports = http.createServer((req, res) => {
  //set header content type
  res.setHeader('Content-Type', 'application/json');

  let path = path.join(__dirname, 'public');

  switch (req.url) {
    case '/files':
      path += ``;
  }
});
