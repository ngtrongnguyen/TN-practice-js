import Model from '../model/crud.model';
import CrudView from '../views/crud.views';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

export default Controller;
