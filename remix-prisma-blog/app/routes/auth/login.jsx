import { useActionData, json, redirect } from 'remix';
import { db } from '~/utils/db.server';
import { login, register, createUserSession } from '~/utils/session.server';

const validateUsername = (username) => {
  console.log(typeof username, username.length);
  if (typeof username !== 'string' || username.length < 3) {
    return 'Username should be at least 3 characters long';
  }
};

const validatePassword = (password) => {
  console.log(typeof password, password.length);
  if (typeof password !== 'string' || password.length < 5) {
    return 'Password should be at least 5 characters long';
  }
};

const badRequest = (data) => {
  return json(data, { status: 400 });
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get('loginType');
  const username = form.get('username');
  const password = form.get('password');

  const fields = {
    loginType,
    username,
    password,
  };

  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };

  // Like the same as what is found in new.jsx checking if any of not undefined
  if (Object.values(fieldErrors).some(Boolean)) {
    console.log(fieldErrors);
    return badRequest({ fieldErrors, fields });
  }

  switch (loginType) {
    case 'login': {
      // Find user
      const user = await login({ username, password });

      // Check username and password match
      if (!user) {
        return badRequest({
          fields,
          fieldErrors: { username: 'Invalid Credentials' },
        });
      }

      // Create user session
      return createUserSession(user.id, '/posts');
    }

    case 'register': {
      // Check if user exists
      const userExists = await db.user.findFirst({
        where: {
          username,
        },
      });

      if (userExists) {
        return badRequest({
          fields,
          fieldErrors: {
            username: `User ${username} already exists`,
          },
        });
      }

      // Create user
      const user = await register({ username, password });
      if (!user) {
        return badRequest({
          fields,
          formError: 'Something went wrong trying to create the user',
        });
      }

      // Create user session
      return createUserSession(user.id, '/posts');
    }

    default: {
      return badRequest({
        fields,
        formError: 'Login type is not valid',
      });
    }
  }
};

function Login() {
  const actionData = useActionData();

  return (
    <div className="auth-container">
      <div className="page-header">
        <h1>Login</h1>
      </div>

      <div className="page-content">
        <form method="post">
          <fieldset>
            <legend>Login or Register</legend>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked={
                  !actionData?.fields?.loginType ||
                  actionData?.fields?.loginType === 'login'
                }
              />{' '}
              Login
            </label>
            <label>
              <input type="radio" name="loginType" value="register" /> Register
            </label>
          </fieldset>

          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={actionData?.fields?.username}
            />
            <div className="error">
              {actionData?.fieldErrors?.username &&
                actionData?.fieldErrors?.username}
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue={actionData?.fields?.password}
            />
            <div className="error">
              <div className="error">
                {actionData?.fieldErrors?.password &&
                  actionData?.fieldErrors?.password}
              </div>
            </div>
          </div>

          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
