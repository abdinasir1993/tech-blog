const moment = require('moment');

const { Comments } = require('../../models');

const createComment = async (req, res) => {
  try {
    const { blog_id, comment_text } = req.body;

    const user_id = req.session.user.id || 1;

    await Comments.create({
      blog_id,
      user_id,
      comment_text,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create comment | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const deleteComment = async (req, res) => {};

module.exports = { createComment, deleteComment };
