const express = require('express');
const {
  getAllPost,
  getPostById,
  updatePostById,
  addPost,
  deletePostById
} = require('../controllers/posts');
const validateId = require('../middleware/validateId');

const router = express.Router();

router.get('', getAllPost);

router.get('/:id', validateId, getPostById);

router.post('', addPost);

router.put('/:id', validateId, updatePostById);

router.delete('/:id', validateId, deletePostById);

module.exports = router;
