import React from 'react';

export default class MessageField extends React.Component{
  state = {
      discussion: [{author: 'robot', message: 'hi I am mister robot'}],
      value: ''
  };

  handleSubmit = (event) => {
    this.setState({discussion: [...this.state.discussion,{author: 'pedro', message: this.state.value}]});
    this.setState({value: ''});
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  componentDidUpdate() {
       if (this.state.discussion[this.state.discussion.length - 1].author !== 'robot') {
           setTimeout(() =>
                   this.setState({
                       discussion: [ ...this.state.discussion, {author: 'robot', message: 'hi pedro!'} ] }),
               600);
       }
   }


  render() {
    let messageCompo = this.state.discussion.map((mess, index) => (<Message key={index} mes={mess.message} aut={mess.author} />));

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Message:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      {messageCompo}
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

    return (
      <div>
        <p><span style={{color: '#0f9f9f'}}>{this.props.aut}: </span>{this.props.mes} </p>

      </div>
    );
  }
}
