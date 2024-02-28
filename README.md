#  Coding Challenge 2: Simple HTTP Server in Node.js
This is the repository that contains the setup on node.js to run the simple HTTP server requested. 
## Setup
The setup requires nothing but having Node.js installed on your computer and downloading the files in this repository.
You can download Node.js [here](https://nodejs.org/en/download)  
You can go to to the Code button on this page and download the zip. Once the zip is downloaded you can go on with the instructions.
That's just for running the server though, if you want to handle the code in your editor, remember to install all the depencies 
with ```npm i```. The dependencies are Tailwind, Express and Nodemon.
## Instructions
Once you have the file unzipped on any directory on your computer you can proceed:
1. Open a terminal, you can go with either the one incorporated in Visual Code if you opened the folder there or use the CMD;
 
2. Once you opened either of those terminals you need to navigate to the root of the folder, where everything is located.
To do that you need to enter the line below, replacing "path/to/file" with the path relative to the folder you downloaded.
Usually the CMD starts you at the folder for the current user.
```
cd path/to/file
```

3. Once you are at the root of the folder, you can run finally the server:
```
node server
```
"server" being the name of the javascript file handling the requests and listening to the port.
Everything happening from now will be logged into the console.

4. Now go on any of your browsers and go to this url [http://localhost:3000/](http://localhost:3000/).
It's the port where the server was opened to.

5. Now that you are on the page you can either navigate through the links on the page, or
you can add these to the the original URL to navigate:
- The home at the root of the site "/";
- An about me page at "/about";
- A page about my previous projects at "/projects";
- And lastly for the intended pages, "/assignments" to get to the page storing the other assignments;
- Typing anything else in the url of the local server will lead you to the 404 error page, displayed for non existing pages;
