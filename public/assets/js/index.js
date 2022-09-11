const errorText = $('#error-text');
const signupForm = $('#signup-form');
const loginForm = $('#login-form');
const createBlogForm = $('#create-blog-form');
const addComment = $('#add-comment');
const logoutBtn = $('#logout-btn');

const handleSignup = async (event) => {
  event.preventDefault();

  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const confirmPassword = $('#confirmPassword').val();

  errorText.empty();

  if (firstName && lastName && email && password && confirmPassword) {
    if (password === confirmPassword) {
      try {
        const payload = {
          firstName,
          lastName,
          email,
          password,
        };

        console.log(payload);

        const response = await fetch('/auth/signup', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.success) {
          window.location.assign('/login');
        } else {
          errorText.append(
            `<p class="text-danger">Failed to create account</p>`
          );
        }
      } catch (error) {
        errorText.append(`<p class="text-danger">Failed to create account</p>`);
      }
    } else {
      errorText.append(`<p class="text-danger">Passwords do not match</p>`);
    }
  } else {
    errorText.append(`<p class="text-danger">Please complete all fields</p>`);
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $('#email').val();
  const password = $('#password').val();

  errorText.empty();

  if (email && password) {
    try {
      const payload = {
        email,
        password,
      };

      const response = await fetch('auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(payload);

      const data = await response.json();

      if (data.success) {
        window.location.assign('/');
      } else {
        errorText.append(`<div class="alert alert-danger" role="alert">
          failed to login!
        </div>`);
      }
    } catch (error) {
      errorText.append(`<div class="alert alert-danger" role="alert">
        failed to login!
      </div>`);
    }
  } else {
    errorText.append(`<div class="alert alert-danger" role="alert">
      Please complete all fields!
    </div>`);
  }
};

const handleLogout = async (event) => {
  event.preventDefault();

  console.log('click');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
  };

  const response = await fetch('auth/logout', options);
  if (response.status !== 204) {
    console.error('Logout failed');
  } else {
    window.location.replace('/');
  }
};

const handleCreateBlog = async (event) => {
  event.preventDefault();

  console.log('click');

  const blog_title = $('#blog-title').val();

  const blog_description = $('#blog-description').val();

  const blog_text = $('#blog-text1').val();

  if (blog_title && blog_description && blog_text) {
    try {
      const payload = {
        blog_title,
        blog_description,
        blog_text,
      };
      console.log(payload);

      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign('/');
      } else {
        errorText.append('Failed to create a new blog2. Please try again.');
      }
    } catch (error) {
      errorText.append('Failed to create a new blog1. Please try again.');
    }
  }
};
const handleCreateComment = async (event) => {
  event.preventDefault();
  const comment_text = $('#comment-text').val();

  console.log(comment_text);

  if (comment_text) {
    try {
      const url = window.location.pathname;
      const blog_id = url.substring(url.lastIndexOf('/') + 1);

      const payload = {
        comment_text,
        blog_id,
      };
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'content-Type': 'application/json',
        },
      });
      const data = await response.json();

      console.log(data);
      if (data.success) {
        window.location.reload();
      } else {
        errorText.append('Failed to create a new comment1. Please try again.');
      }
    } catch (error) {
      errorText.append('Failed to create a new comment2. Please try again.');
    }
  }
};

addComment.click(handleCreateComment);
createBlogForm.submit(handleCreateBlog);
signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
logoutBtn.click(handleLogout);
