import React from 'react';
import './header.css';

export default class Header extends React.Component{
  render(){
    return <h1>Chat :{this.props.chatId}</h1>
  }
}
