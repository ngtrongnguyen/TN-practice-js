import { Input } from './input';
import { createContainer } from '../../utils';
import { Form } from './Form';

export class LoginForm extends Form {
  constructor() {
    // leading class name: form-login

    super();

    // global container
    this.container = createContainer('crud-form-prelogin');

    // container 1 children --------------------
    // 1. Title
    this.title = document.createElement('h1');
    this.title.className = 'form-login-title';
    this.title.textContent = 'Sign In';

    // container 1
    this.container1 = createContainer('form-head-login', this.title);

    // form children --------------------
    // 1. Email input field
    this.emailInput = new Input(
      {
        placeholder: 'Email',
        required: true,
        onchange: () => handleEmailFormat(this.emailInput.input),
      },
      'form-input',
    );
    // 2. Password input field
    this.passwordInput = new Input(
      {
        placeholder: 'Password',
        required: true,
        type: 'password',
        onchange: () => handlePasswordFormat(this.passwordInput.input),
      },
      'form-input',
    );

    // 4. Login button
    this.loginButton = new Button(
      'email login',
      null,
      chevronForwardIcon,
      buttonVariants.secondary.filled,
      buttonSizes.lg,
      '',
      () => {},
    );

    // add elements to form
    this.form.append(
      this.emailInput.render(),
      this.passwordInput.render(),
      this.keepLoggedCheckbox.render(),
      this.loginButton.render(),
    );

    this.otherMethods = new OtherMethods();

    // remind
    this.remind = document.createElement('p');

    this.termAndCondition = new Link('#');
    this.termAndCondition.link.className = 'form-link';
    this.termAndCondition.link.textContent = 'Terms & Conditions';
    this.remind.append(
      "By clicking 'Log In' you agree to our website ",
      this.termAndCondition.render(),
      '.',
    );

    this.register = document.createElement('p');

    this.registerLink = new Link('/register');
    this.registerLink.link.className = 'form-link';
    this.registerLink.link.textContent = 'Register';
    this.register.append('Need an account? ', this.registerLink.render());

    // add elements to global container
    this.container.append(
      this.container1,
      this.form,
      this.otherMethods.render(),
      this.remind,
      this.register,
    );
  }

  render() {
    return this.container;
  }
}
