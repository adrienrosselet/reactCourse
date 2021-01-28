import React from 'react';
import Header from './header';
import ChatList from './chatList';
import MessageField from './components';
import './components.css';

export default class Layout extends React.Component{
  render(){
    return (
    <div className='layout-div'>
      <Header/>
      <MessageField />
      <ChatList/>
    </div>
    );
  }
}
