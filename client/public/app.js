(()=>{"use strict";class e{node;constructor(e=null,s="div",t="",n=""){const o=document.createElement(s);o.className=t,o.innerHTML=n,e&&e.append(o),this.node=o}destroy(){this.node.remove()}}class s extends e{constructor(s,t){super(s,"div","home-container"),new e(this.node,"h2","title","Messages:"),new e(this.node,"div","messages");const n=new e(this.node,"form","form"),o=new e(n.node,"input","msg-input");o.node.type="text",o.node.placeholder="your message...",this.model.getMessages()}}new WebSocket("ws://localhost:8080");class t{onSendMessage=new class{listeners;constructor(){this.listeners=[]}add(e){this.listeners.push(e)}remove(e){this.listeners=this.listeners.filter((s=>s!==e))}emit(e){this.listeners.forEach((s=>s(e)))}};constructor(){}getMessages(){return[]}}const n=document.body;console.log("root",n),new class extends e{homePage;chatModel;constructor(e){super(e,"div","main"),this.chatModel=new t,this.homePage=new s(this.node,this.chatModel)}}(n)})();