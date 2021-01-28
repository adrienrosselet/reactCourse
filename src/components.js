import React from 'react';
import './components.css';


export default class MessageField extends React.Component{
  // state = {
  //     discussion: [ {author: 'robot', message: 'hi I am mister robot'],
  //
  //     value: ''
  // };
  state = {
       chats: {
           1: {title: 'Чат 1', messageList: [1]},
           2: {title: 'Чат 2', messageList: [2]},
           3: {title: 'Чат 3', messageList: []},
       },
       messages: {
           1: { text: "Привет!", sender: 'bot' },
           2: { text: "Здравствуйте!", sender: 'bot' },
       },
       value: '',
   };
   handleSendMessage = (message, sender) => {
       const { messages, chats, value } = this.state;
       const { chatId } = this.props;

       if (value.length > 0 || sender === 'bot') {
           const messageId = Object.keys(messages).length + 1;
           this.setState({
               messages: {...messages,
                   [messageId]: {text: message, sender: sender}},
               chats: {...chats,
                   [chatId]: { ...chats[chatId],
                       messageList: [...chats[chatId]['messageList'], messageId]
                   }
               },
           })
       }
       if (sender === 'me') {
           this.setState({ value: '' })
       }
   };

  handleSubmit = (event) => {
    this.handleSendMessage(this.state.value, 'me')
    //this.setState(state => ([this.props.chatId]: [...state.discussion,{author: 'pedro', message: state.value}], value: ''}));
    event.preventDefault();
  };

  // handleChange = (event) => {
  //   this.setState({value: event.target.value});
  // };
  handleChange = (event) => {
       this.setState({ value: event.target.value });
   };
  handleKey = (event) => {
    if(event.key === 'Enter'){
      this.handleSendMessage(this.state.value, 'me')
      //this.setState(state => ([this.props.chatId]: [...state.discussion,{author: 'pedro', message: state.value}], value: ''}));
    }
  }

  // componentDidUpdate() {
  //      if (this.state.discussion[this.state.discussion.length - 1].author !== 'robot') {
  //          setTimeout(() => {
  //            if(this.state.discussion[this.state.discussion.length - 1].author !== 'robot'){
  //              this.setState(state => ({
  //                  discussion: [ ...state.discussion, {author: 'robot', message: 'hi pedro!'} ] }))
  //            }
  //          },1500);
  //      }
  //  }
   componentDidUpdate(prevProps, prevState) {
       const { messages } = this.state;
       if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
           Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
           setTimeout(() =>
               this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
       }
   }
   handleAddChat = () => {
     const newChatId = Object.keys(this.state.chats).length + 2;
     //const newChatId = 4;
     this.setState({
         chats: {...this.state.chats,
             [newChatId]: {title: 'Чат '+ newChatId, messageList: [newChatId]}
         },
     })
     //console.log(this.state.chats);

    }

   renderMessage = (messId, index) => {
     return (<Message key={index} mes={this.state.messages[messId].text } aut={this.state.messages[messId].sender} />)
   }

  render() {
    return (
    <div className='textFiels-div'>
    <button onClick={this.handleAddChat}>Add chat</button>
      <form onSubmit={this.handleSubmit}>
        <label>
          Message:
          <textarea value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKey}/>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      {this.state.chats[this.props.chatId].messageList.map(this.renderMessage)}
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
  selectClassName = () => {
    let style1 = 'message-div';
    if(this.props.aut !== 'me'){
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
