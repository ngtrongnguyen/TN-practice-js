import PreLogin from './pages/PreLogin';
import Router from '../router/Router';

class CrudView {
  contructor() {
    this.app = document.querySelector('#root');
    this.main = document.createElement('div');
    this.main.classList.add('main');
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.container.innerHTML += PreLogin();
    this.router = new Router();
    this.initRoute();
  }

  initRoute() {
    this.router.addRoute('/', PreLogin());
  }
}

export default CrudView;
