import React from 'react';
//import PropTypes from 'prop-types';
import './style.css';

export default class Message extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    };
  }
  selectClassName = () => {
    let style1 = 'message-div';
    if(this.props.aut !== 'adri'){
      style1 = 'message-div2';
    }
    return style1;
  }
  render() {

    return (
      <div className='mess-div'>
        <div className={this.selectClassName()}>
          <h2 className='message-author-span'>{this.props.aut}: </h2>
          <p className='message-p'>{this.props.mes} </p>
        </div>
      </div>
    );
  }
}
