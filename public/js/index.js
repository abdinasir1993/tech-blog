const signupForm = $('#signup-form');
const loginForm = $('#login-form');

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);

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

      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign('/dashboard');
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

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
  };

  const response = await fetch('/auth/logout', options);
  if (response.status !== 204) {
    console.error('Logout failed');
  } else {
    window.location.replace('/');
  }
};
