const { Router } = require('express');

const {
  getSingleComment,
  createComment,
  updateComment,
  deleteComment,
} = require('../../controllers/api/comments');

router.get('/:id', getSingleComment);

router.post('/', createComment);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);
