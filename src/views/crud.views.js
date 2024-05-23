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

let html = document.getElementById('root').innerHTML;
document.getElementById('root').innerHTML = html;
export default CrudView;
