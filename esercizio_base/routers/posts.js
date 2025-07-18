const express = require('express');
const router = express.Router();
const posts = require('../data/postsList');

/* Create CRUD routes */

// Create - Store

router.post('/', (req, res)=>{
  console.log('You can add a new post here');
  res.send("Let's create a new post!");
});

// Read - Index

router.get('/', (req, res)=>{
  console.log("Here's the posts' list");
  res.json(posts);
});

// Read - Show

router.get('/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  console.log(`Here's the post number ${id}`);
  const post = posts.find(post => post.id === id);
  res.json(post);
});

// Update - Update

router.put('/:id', (req, res)=>{
  const id = req.params.id;
  console.log(`Let's edit the post with id: ${id}`);
  res.send(`Let's edit the post with id: ${id}`);
});

// Update - Modify

router.patch('/:id', (req, res)=>{
  const id = req.params.id;
  console.log(`Let's edit something about the post with id: ${id}`);
  res.send(`Let's edit something about the post with id: ${id}`);
});

// Delete - Destroy

router.delete('/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  console.log(`Let's delete the post with id: ${id}`);
  const post = posts.find(post => post.id === id);
  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  res.sendStatus(204);
});

module.exports = router;