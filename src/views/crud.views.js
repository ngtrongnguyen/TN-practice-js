import PreLogin from './pages/PreLogin';
import Router from '../router/Router';

class CrudView {
  contructor() {
    // The root element
    this.app = document.querySelector('#root');
    // add class main
    this.main = document.createElement('div');
    this.main.classList.add('main');
    // add class container
    this.container = document.createElement('div');
    this.container.classList.add('container');
    // append container
    this.main.appendChild(this.container);
    //  append main into app
    this.app.appendChild(this.main);

    // show on PreLogin page into container
    this.container.outerHTML += PreLogin();
    this.router = new Router();
    this.initRoute();
  }

  initRoute() {
    this.router.addRoute('/', PreLogin());
  }
}

export default CrudView;
