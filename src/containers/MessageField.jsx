import React from 'react';
import './MessageField.css';
import Message from '../components/Message';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import { resetChat } from '../actions/chatActions';
import { resetMessage, loadMessages } from '../actions/messageActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadChats } from '../actions/chatActions';

class MessageField extends React.Component{
  static propTypes = {
       chatId: PropTypes.number.isRequired,
       messages: PropTypes.object.isRequired,
       chats: PropTypes.object.isRequired,
       sendMessage: PropTypes.func.isRequired,
       isLoading: PropTypes.bool.isRequired,

   };
  state = {
       value: '',
   };

   componentDidMount() {
       //this.props.loadMessages();
       this.props.loadChats();
   }


   //handleSendMessage = (message, sender) => {
       //const { messages, chats, value, chatId } = this.props;
       //const { chatId } = this.props;

       // if (value.length > 0 || sender === 'bot') {
       //     const messageId = Object.keys(messages).length + 1;
       //     this.setState({
       //         messages: {...messages,
       //             [messageId]: {text: message, sender: sender}},
       //         chats: {...chats,
       //             [chatId]: { ...chats[chatId],
       //                 messageList: [...chats[chatId]['messageList'], messageId]
       //             }
       //         },
       //     })
       // }
       // if (sender === 'me') {
       //     this.setState({ value: '' })
       // }
   //     this.props.sendMessage(this.state.value, 'adri');
   // };
   handleSendMessage = (message, sender) => {
        if (this.state.value.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'adri') {
            this.setState({ value: '' });
        }
    };

  handleSubmit = (event) => {
    //this.props.sendMessage(this.state.value, 'adri');
    this.handleSendMessage(this.state.value, 'adri');
    //this.setState({ value: '' });

    //this.handleSendMessage(this.state.value, 'me')
    //this.setState(state => ([this.props.chatId]: [...state.discussion,{author: 'pedro', message: state.value}], value: ''}));
    event.preventDefault();
  };

  // handleChange = (event) => {
  //      this.setState({ [event.target.name]: event.target.value });
  //  };
  handleChange = (event) => {
       this.setState({ value: event.target.value });
   };
   // handleKeyUp = (event) => {
   //      if (event.keyCode === 13) { // Enter
   //          this.handleSendMessage(this.state.input, 'adri');
   //      }
   //  };
  handleKey = (event) => {
    if(event.key === 'Enter'){
      //this.props.sendMessage(this.state.value, 'adri');
      this.handleSendMessage(this.state.value, 'adri');
      //this.setState({ value: '' });

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

   // componentDidUpdate(prevProps, prevState) {
   //     const { messages } = this.state;
   //     if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
   //         Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
   //         setTimeout(() =>
   //             this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
   //     }
   // }

   // handleAddChat = () => {
   //   const newChatId = Object.keys(this.state.chats).length + 2;
   //   //const newChatId = 4;
   //   this.setState({
   //       chats: {...this.state.chats,
   //           [newChatId]: {title: 'Чат '+ newChatId, messageList: [newChatId]}
   //       },
   //   })
   //   //console.log(this.state.chats);
   //
   //  }

   //renderMessage = (messId, index) => {
     //console.log(messObj.messageList[]);//ca rends un array avec l'id des messages
     //console.log(this.props.chatId);//ca rends l id du chat actuel
     //console.log(messId);
     //return (<Message key={index} mes={this.props.messages[messId].text } aut={this.props.messages[messId].sender} />)
   //}
   resetAll = () => {
     this.props.resetChat();
     this.props.resetMessage();
   }
  render() {
    if (this.props.isLoading) {
           return <CircularProgress />
       }
      const { chatId, messages, chats } = this.props;
       //const messageElements='';
       const messageElements = chats[chatId].messageList.map((messageId, index) => (
         <Message
             key={ index }
             mes={ messages[messageId].text }
             aut={ messages[messageId].sender }
         />
           ));

    return (
    <div className='textFiels-div'>
      <form onSubmit={this.handleSubmit}>
        <label>
          Message:
          <textarea value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKey}/>
        </label>
        <input type="submit" value="Envoyer" />
        <button onClick={this.resetAll} >reset all</button>
      </form>
      { messageElements }
    </div>
  );
  }
}



//{Object.values(this.props.chats[this.props.chatId].messageList).map(this.renderMessage)}

// {this.props.chatId!==undefined?
//   this.state.chats[this.props.chatId].messageList.map(this.renderMessage):
//   this.state.chats[1].messageList.map(this.renderMessage)}

const mapStateToProps = ({ chatReducer , messageReducer }) => ({
   chats: chatReducer.chats,
   isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ resetChat, resetMessage , loadChats}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
