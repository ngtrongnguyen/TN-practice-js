import { Logo } from '../../resources/assets/img/Logo.png';

const PreLogin = () => {
  return `
<div class="crud-form-prelogin">
        <div class="form-head-login">
          <div class="form-login-title">
            <!-- <figure><img src = "${Logo}"></figure> -->
            <h1>Sign In</h1>
            <span> Enter your credentials to access your account</span>
          </div>
        </div>
        <div class="form-bottom-login">
          <form action="" class="form-login">
            <label for="userId">Email </label>
            <input
              type="text"
              name="username"
              id="userId"
              placeholder="Enter your Email"
            />

            <label for="password">Password </label>

            <input
              type="password"
              name="username"
              id="password"
              placeholder="Enter your Password"
            />

            <button>Sign in</button>
          </form>
          <p class="form-reset-pass">
            Forgot your password? <span>Reset password</span>
          </p>
        </div>
      </div>
      <div class="crud-form-register">
        <div class="form-head-register">
          <div class="form-register-title">
            <!-- <figure><img src = "${Logo}"></figure> -->
            <h1>Register</h1>
            <span> Enter your credentials to access your account</span>
          </div>
        </div>
        <div class="form-bottom-register">
          <form action="" class="form-register">
            <label for="userId">New Email </label>
            <input
              type="text"
              name="username"
              id="newuserId"
              placeholder="Enter your Email"
            />

            <label for="password">New Password </label>

            <input
              type="password"
              name="username"
              id="newpassword"
              placeholder="Enter your Password"
            />
            <label for="password">Confirm Password </label>

            <input
              type="password"
              name="username"
              id="cfpassword"
              placeholder="Enter your Password"
            />

            <button>Retrister</button>
          </form>
          <p class="form-reset-pass">
            Already have an account? <span class="return-login">Login</span>
          </p>
        </div>
      </div>

`;
};

export default PreLogin;
