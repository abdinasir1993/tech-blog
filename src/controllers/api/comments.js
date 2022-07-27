const moment = require('moment');

const comment = require('../../models/Comments');

const createComment = async (req, res) => {
  try {
    const { blog_id, comment_text, date_created } = req.body;

    const userId = req.session.user.id;

    await comment.create({
      blog_id,
      userId,
      comment_text,
      date_created,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create comment | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const deleteComment = async (req, res) => {};

module.exports = { createComment, deleteComment };
