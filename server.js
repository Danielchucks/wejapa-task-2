const http = require('http');
const url = require('url');
const route = require('./route');

const port = 3000 || process.env.PORT;

const server = require('./controller');

// const server = http.createServer((req, res) => {
//   const reqUrl = url.parse(req.url, true);

//   if (req.method === "GET" && reqUrl === "/new") {
//     res.write("Hello World, welcome to Wejapa Internships");
//     res.end();
//   } else {
//     res.end("Error 404!!!, PAGE NOT FOUND");
//   }
// });

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
