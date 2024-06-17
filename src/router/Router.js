
class Router {
  constructor(root) {
    this.routes = [];
    this.currentRoute = null;
  }
  addRoute(path, component) {
    this.routes.push({ path, component });
  }
}

export default Router;
