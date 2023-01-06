export default class Core {
   node;

   constructor(
    parentNode = null,
    tagName = 'div',
    className = '',
    textContent = ''
   ) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = textContent;
    parentNode && parentNode.append(element);
    this.node = element;
   }

   destroy() {
    this.node.remove();
   }

}
