// const http = require("http");
// import http from "http";

// const server = http.createServer((request, response));
// console.log(request);
// response.end("hello")

// server.listen(4400)

import express from "express"

const app = express();
const port = 4400;

app.listen(port, () => {
  console.log("server ajillaa");
});
