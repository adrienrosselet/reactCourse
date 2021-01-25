import React from 'react';
import './components.css';

export default class MessageField extends React.Component{
  state = {
      discussion: [{author: 'robot', message: 'hi I am mister robot'}],
      value: ''
  };

  handleSubmit = (event) => {
    this.setState(state => ({discussion: [...this.state.discussion,{author: 'pedro', message: state.value}], value: ''}));
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  handleKey = (event) => {
    if(event.key === 'Enter'){
      this.setState(state => ({discussion: [...this.state.discussion,{author: 'pedro', message: state.value}], value: ''}));
    }
  }

  componentDidUpdate() {
       if (this.state.discussion[this.state.discussion.length - 1].author !== 'robot') {
           setTimeout(() => {
             if(this.state.discussion[this.state.discussion.length - 1].author !== 'robot'){
               this.setState(state => ({
                   discussion: [ ...this.state.discussion, {author: 'robot', message: 'hi pedro!'} ] }))
             }
           },1500);
       }
   }

   renderMessage = (mess, index) => {
     return (<Message key={index} mes={mess.message} aut={mess.author} />)
   }

  render() {
    return (
    <div className='textFiels-div'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Message:
          <textarea value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKey}/>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      {this.state.discussion.map(this.renderMessage)}
    </div>
  );
  }
}

class Message extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    };
  }

  render() {
    let color1 = {
      backgroundColor: '#c0c0cc',
      textAlign: 'right',
      float: 'right'
    }
    if(this.props.aut === 'robot'){
      color1 = {
        backgroundColor: '#ececec',
        textAlign: 'left',
        float: 'left'
      };
    }
    return (

      <div className='message-div' style={color1}>
        <h2 className='message-author-span'>{this.props.aut}: </h2>
        <p className='message-p'>{this.props.mes} </p>

      </div>
    );
  }
}
