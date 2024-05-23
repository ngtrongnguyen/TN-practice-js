import { Logo } from '../../resources/assets/img/Logo.png';

const PreLogin = () => {
  return `
<div class = "crud-form-prelogin">
  <div class = "form-head-login">
    <div class = "form-login-title">
        <figure><img src = "${Logo}"></figure>
        <p>Sign In</p>
        <span> Enter your credentials to access your account</span>   
    </div>
  </div >
  <div class ="form-bottom-login>
    <form action="" class="form-login">
            <label for="userId"><span> Email  </span></label>
            <input type="text" name="username" id="userId" placeholder="Enter your Email">

            <label for="password"><span> Password </span></label>

            <input type="password" name="username" id="password" placeholder="Enter your Password">

            <button>Login</button>
    </form>
    <p class="form-reset-pass">
            Forgot your password? <span>Reset password</span>
    </p>
   </div>
</div>

`;
};

export default PreLogin;
