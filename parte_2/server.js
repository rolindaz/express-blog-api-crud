const express = require('express');
const port = process.env.port;
const postsRouter = require('./routers/posts');

const app = express();

// Set server listener

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

// Set homepage route

app.get('/', (req, res)=>{
    console.log("Welcome to the blog!");
    res.send("Welcome to the blog!");
});

// Point the prefixes for the routes with the use method

app.use('/api/posts', postsRouter);