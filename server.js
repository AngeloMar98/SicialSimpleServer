// there are two solution, using express or vanilla node.js

// first we import require, then we initialize the app object to use and handle
// all the methods express offers

const express = require("express");
const app = express();

// we set a static path the pages will refer to use static files like stylesheets and images
// as we can see in the html files this will used as root to start and get the sources
app.use(express.static("public"));

// we listen to a port
app.listen(3000);

// this will be triggered at every request, so we can log every request method and URL
app.all("*", (req, _, next) => {
  console.log(`Request method: ${req.method}\nRequest URL: ${req.url} `);
  next();
});

// from here on we just handle every reuest one by one, they go in order so it'll stop as soon
// as it finds a match.
app.get("/", (req, res) => {
  res.sendFile("/views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("/views/about.html", { root: __dirname });
});

// we could redirect in case a path has a similar or old name
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.get("/projects", (req, res) => {
  res.sendFile("/views/projects.html", { root: __dirname });
});

app.get("/assignments", (req, res) => {
  res.sendFile("/views/assignments.html", { root: __dirname });
});

// this will be fired if none of the other paths are covered,
// it's made so we can use the 404.html page and tell the user the path doesn't exist
app.use((req, res) => {
  res.status(404).sendFile("/views/404.html", { root: __dirname });
});

// VANILLA NODE.JS SOLUTION
// import the tools we need, HTTP for creating a port and handling the requests,
// fs for reading and formatting the data for the writing

// const http = require("http");
// const fs = require("fs");

// first of all we create the server object and handle all the requests in the function
// used as parameter

// const server = http.createServer((req, res) => {
//   // return if the favicon.ico is requested, to avoid errors
//   if (req.url === "/favicon.ico") return;
//   // log the requested method and the url
//   console.log(`Request method: ${req.method}\nRequest URL: ${req.url} `);

//   // the type of content we'll give back, being a site we deliver the HTML pages
//   res.setHeader("Content-Type", `text/html`);

//   let path = "./views/";

//   // depending on the url we have a different page, if there is no case can we can handle
//   // we throw the 404 error

//   switch (req.url) {
//     case "/":
//
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/projects":
//
//       path += "projects.html";
//       res.statusCode = 200;
//       break;
//     case "/assignments":
//
//       path += "assignments.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   // fs searches the file, it'll throw an error if such file doesn't exist,
//   // or store in data if it does
//   fs.readFile(`${path}`, (err, data) => {
//     // the error is handled, it ends
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       // lastly if the page does exist we write and end the request with a positive response
//       res.write(data);
//       res.end();
//     }
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log(
//     "Listening for requests for the HTTP server, port 3000.\n Go to http://localhost:3000/ "
//   );
// });
