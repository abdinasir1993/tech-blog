const moment = require('moment');
const Blog = require('../../models/Blog');

const getAllBlogs = async (req, res) => {
  try {
    const data = await Blog.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Blogs | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Blog.findByPk(id);

    if (!data) {
      console.log(`[ERROR]: Blog not found`);

      return res.status(404).json({ success: false, error: 'Blog not found' });
    }

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get single Blog | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: 'Failed to get single Blog' });
  }
};

const createBlog = async (req, res) => {
  try {
    const { blog_title, blog_description, blog_text } = req.body;

    const user_id = req.session.user.id;

    await Blog.create({
      user_id,
      blog_title,

      blog_text,
      blog_description,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Blog | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getMyBlog = async (req, res) => {};

const updateBlog = async (res, req) => {};

const deleteBlog = async (res, req) => {};

module.exports = {
  getAllBlogs,
  createBlog,
  getSingleBlog,
  getMyBlog,
  updateBlog,
  deleteBlog,
};
