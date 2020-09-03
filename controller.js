const http = require('http');
const route = require('./route');
const url = require('url');

module.exports = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  //Endpoints
  if (reqUrl.pathname == '/' && req.method == 'GET') {
    route.homePage(req, res);
  } else if (reqUrl.pathname == '/new' && req.method == 'GET') {
    //const reqUrl = url.parse(req.url, true);
    console.log('You want to Create a new file document!!!');
  }
});

// const createFile = () => {
//   const reqUrl = url.parse(req.url, true);
// };
