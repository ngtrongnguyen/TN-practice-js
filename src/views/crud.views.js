import PreLogin from './pages/PreLogin';
import Router from '../router/Router';
export * from './components';
export * from './layouts';
export * from './pages';
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
    this.app.appendChild(this.main);
    //  append main into app
    this.main.appendChild(this.container);
    //  append container

    // show on PreLogin page into container
    this.container.innerHTML += PreLogin();
    this.router = new Router();
    this.initRoute();
  }

  initRoute() {
    this.router.addRoute('/', PreLogin());
  }
}

export default CrudView;
