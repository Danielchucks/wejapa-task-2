const fs = require('fs');
const url = require('url');

const homePage = (req, res) => {
  let response = {
    text: 'Welcome to the Very First pure Node js API for Note Application',
  };
  const reqUrl = url.parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};

const createFile = (req, res) => {
  const reqUrl = url.parse(req.url, true);
};

module.exports = {
  homePage,
};
