import React from 'react';
import Header from './header';
import ChatList from './chatList';
import MessageField from './components';
import './layout.css';

export default class Layout extends React.Component{
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
