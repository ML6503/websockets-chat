import Core from "./components/core.js";
import HomePage from "./components/homePage.js";


class Main extends Core {
  homePage;
  chatModel;

  constructor(parentNode) {
    super(parentNode, 'div', 'main');
  
    this.homePage = new HomePage(this.node);

  }
}

const root = document.body;

new Main(root);