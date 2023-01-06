import Core from "./core.js";
import ChatModel from "../utils/chatModel.js";

export default class HomePage extends Core {
   input;

  constructor(parentNode) {
    super(parentNode, 'div', 'home-container');
    this.model =  new ChatModel(this.setMessages);;
    this.title = new Core(this.node, 'h2', 'title', 'Chat:');
    this.messagesWrapper = new Core(this.node, 'div', 'incoming-messages');
    this.form = new Core(this.node, 'form', 'form');
   
    this.input = new Core(this.form.node, 'input','msg-input');
   
    this.form.node.onsubmit = (ev) => this.onFormSubmit(ev, this.input.node.value);
    this.input.node.type = 'text';
    this.input.node.placeholder = 'your message...';
    this.showMessages();
  }

  setMessages = (messages) => {
  
    this.messagesWrapper.node.innerHTML = '';
    messages.map(m => {
      const messageRow = new Core(this.messagesWrapper.node, 'div', 'message-row')
      const oneMessage = new Core(messageRow.node, 'div', 'message', m.text);
      messageRow.node.classList.add(`${m.isOwnMsg ? 'own-message' : 'incoming-message'}`);

    });
  }

  showMessages (){
    const msgArray = this.model.getMessages();
    this.setMessages(msgArray);   
  }

  onFormSubmit(ev, inputValue) {
    ev.preventDefault();
    console.log('inputValue: ', inputValue);
    this.model.sendMessage(inputValue);
    this.input.node.value = '';
    this.showMessages();
  }
}
