const Comment = require('../models/Comments');

const comments = [
  {
    user_id: 1,
    blog_id: 1,
    comment_text:
      'It has been simply incredibly generous with you to provide openly what exactly many individuals would’ve marketed for an ebook to end up making some cash for their end, primarily given that you could have tried it in the event you wanted.',
  },

  {
    user_id: 2,
    blog_id: 1,
    comment_text:
      'Your good knowledge and kindness in playing with all the pieces were very useful. I don’t know what I would have done if I had not encountered such a step like this.',
  },

  {
    user_id: 3,
    blog_id: 1,
    comment_text:
      'I simply wanted to write down a quick word to say thanks to you for those wonderful tips and hints you are showing on this site.',
  },

  {
    user_id: 4,
    blog_id: 1,
    comment_text:
      'I have to voice my passion for your kindness giving support to those people that should have guidance on this important matter.',
  },

  {
    user_id: 1,
    blog_id: 2,
    comment_text:
      'Thanks for one marvelous posting! I enjoyed reading it; you are a great author.I will make sure to bookmark your blog and may come back someday. I want to encourage that you continue your',
  },

  {
    user_id: 2,
    blog_id: 2,
    comment_text:
      'Appreciating the persistence you put into your blog and detailed information you provide',
  },
  {
    user_id: 3,
    blog_id: 2,
    comment_text:
      'Simply wish to say your article is as astonishing. The clarity in your post is simply great, and I could assume you are an expert on this subject. Well with your permission let me grab your RSS feed to keep updated with forthcoming post. Thanks a million and please keep up the gratifying work.',
  },
  {
    user_id: 4,
    blog_id: 2,
    comment_text:
      'Do you mind if I quote a couple of your posts as long as I provide credit and sources back to your blog? My blog is in the same niche as yours, and my users would benefit from some of the information you provide here. Please let me know if this ok with you. Thank you.',
  },
  {
    user_id: 1,
    blog_id: 3,
    comment_text:
      'Does your blog have a contact page? I’m having problems locating it but, I’d like to shoot you an email. I’ve got some recommendations for your blog you might be interested in hearing.',
  },

  {
    user_id: 2,
    blog_id: 3,
    comment_text: 'Great stuff!!',
  },
  {
    user_id: 3,
    blog_id: 3,
    comment_text: 'Very informative, thank you.',
  },
  {
    user_id: 4,
    blog_id: 3,
    comment_text: 'Enjoyed this alot, looking forward to your next blog',
  },
];

const seedComments = async () => {
  await Comment.destroy({
    where: {},
  });
  await Comment.bulkCreate(comments);

  console.log('✅ Comments');
};

module.exports = seedComments;
