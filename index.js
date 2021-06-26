const express = require("express");
const path = require('path');

const server = express();

const serveHomePage = (req, res) =>{
    const homepageFilePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(homepageFilePath);
}

const serveprofilePage = (req, res) =>{
    const profilepageFilePath = path.join(__dirname, 'public', 'profile.html');
    res.sendFile(profilepageFilePath);
}
//routes
server.get('/', serveHomePage);
server.get('/profile', serveprofilePage);

server.listen(3000, () => console.log("server is ready"));