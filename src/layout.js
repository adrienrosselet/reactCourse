import React from 'react';
import Header from './header';
import ChatList from './chatList';
import MessageField from './components';
import './layout.css';

export default class Layout extends React.Component{

  // addChat = (title) => {
  //   const { chats } = this.state;
  //
  //   const chatId = Object.keys(chats).length + 1;
  //   this.setState({
  //       chats: {...chats,
  //           [chatId]: {title: title, messageList: []}},
  //   })
  // };

  render(){
    return (
    <div className='layout-div'>
      <Header chatId={ this.props.chatId } />
      <MessageField chatId={ this.props.chatId } />
      <ChatList/>
    </div>
    );
  }
}
