// import the tools we need, HTTP for creating a port and handling the requests,
// fs for reading and formatting the data for the writing
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url !== "/favicon.ico") {
    // log the requested method and the url
    console.log(`Request method: ${req.method}\nRequest URL: ${req.url} `);

    // the type of content we'll give back, being a site we deliver the HTML pages
    res.setHeader("Content-Type", `text/html`);

    let path = "./views/";

    // depending on the url we have a different page, if there is no case can we can handle
    // we throw the 404 error

    switch (req.url) {
      case "/":
      case "/index.html":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
      case "/about.html":
        path += "about.html";
        res.statusCode = 200;
        break;
      case "/projects":
      case "/projects.html":
        path += "projects.html";
        res.statusCode = 200;
        break;
      case "/assignments":
      case "/assignments.html":
        path += "assignments.html";
        res.statusCode = 200;
        break;
      default:
        path += "404.html";
        res.statusCode = 404;
        break;
    }

    // fs searches the file, it'll throw an error if such file doesn't exist,
    // or store in data if it does
    fs.readFile(`${path}`, (err, data) => {
      // the error is handled, it ends
      if (err) {
        console.log(err);
        res.end();
      } else {
        // lastly if the page does exist we write and end the request with a positive response
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests for the HTTP server, port 3000");
});
