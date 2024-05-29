class CrudView {
  contructor() {
    this.app = document.querySelector('#root');
  }
}
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

export default CrudView;
