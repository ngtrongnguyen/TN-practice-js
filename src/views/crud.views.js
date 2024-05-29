import PreLogin from './pages/PreLogin';
import Router from '../router/Router';

class CrudView {
  contructor() {
    this.app = document.querySelector('#root');
    this.router = new Router();
    this.initRoute();
  }

  initRoute() {
    this.router.addRoute('/', PreLogin());
  }
}

export default CrudView;
