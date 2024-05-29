import CrudView from '../views/crud.views';

class CrudController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

export default CrudController;
