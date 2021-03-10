import React from 'react';
import './header.css';
import PushToggle from '../components/PushToggle';

export default class Header extends React.Component{
  render(){
    return (
      <div>
      <PushToggle />
      <h1 className='header-h1'>Chat :{this.props.chatId}</h1>
      </div>
    )
  }
}
