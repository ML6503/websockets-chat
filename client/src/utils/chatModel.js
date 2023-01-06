import WS_URL from "../../config.js";
export default class ChatModel { 
  ws;
 
  constructor(setMessages) {
    const websocket = new WebSocket(`${WS_URL? WS_URL : 'ws://localhost:8080'}`);
    this.ws = websocket;
    this.messages  = [];
    this.setMessages = setMessages;
    this.ws.addEventListener('message', e => {     
      const isOwnMsg = false;
      e.data.text().then(text => this.addMessage({text, isOwnMsg}));
   
    });
  }

  addMessage(msg) {
    this.messages.push(msg);
    this.setMessages(this.messages);
  }

  getMessages() {
       return this.messages;
  }

  sendMessage(text) {
    console.log('own message:', text);
    const isOwnMsg = true
    this.ws.send(text);  

    this.addMessage({text, isOwnMsg});
    console.log('send messages own', this.messages );
    this.setMessages(this.messages);

  }

}
