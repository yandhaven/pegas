import React from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
 
function WChat() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}
 
export default WChat;