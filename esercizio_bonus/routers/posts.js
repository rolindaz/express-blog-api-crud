const express = require('express');
const router = express.Router();
const posts = require('../data/postsList');
const postController = require('../controllers/postController');

/* Create CRUD routes */

// Create - Store

router.post('/', postController.store);

// Read - Index

router.get('/', postController.index);

// Read - Show

router.get('/:id', postController.show);

// Update - Update

router.put('/:id', postController.update);

// Update - Modify

router.patch('/:id', postController.modify);

// Delete - Destroy

router.delete('/:id', postController.destroy);

module.exports = router;