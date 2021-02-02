import React from 'react';
import Header from './header';
import ChatList from './chatList';
import MessageField from './components';
import './layout.css';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { sendMessage } from "./actions/messageActions";

class Layout extends React.Component{

  // addChat = (title) => {
  //   const { chats } = this.state;
  //
  //   const chatId = Object.keys(chats).length + 1;
  //   this.setState({
  //       chats: {...chats,
  //           [chatId]: {title: title, messageList: []}},
  //   })
  // };
  static propTypes = {
       chatId: PropTypes.number,
       sendMessage: PropTypes.func.isRequired,
   };
  static defaultProps = {
       chatId: 1,
   };

   state = {
       messages: {
           1: { text: "Привет!", sender: 'bot' },
           2: { text: "Здравствуйте!", sender: 'bot' },
       },
   };

   componentDidUpdate(prevProps, prevState) {
       const { messages } = this.state;
       if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
           Object.values(messages)[Object.values(messages).length - 1].sender === 'adri') {
           setTimeout(() =>
               this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
             }
  }

   sendMessage = (message, sender) => {
     const { messages } = this.state;
     const { chatId } = this.props;

     const messageId = Object.keys(messages).length + 1;
     this.setState({
          messages: {...messages,
              [messageId]: {text: message, sender: sender}},
    });
    //console.log(message);
    this.props.sendMessage(messageId, message, sender, chatId);
  };

  render(){
    return (
    <div className='layout-div'>
      <Header chatId={ this.props.chatId } />
      <MessageField
                    chatId={ this.props.chatId }
                    messages={ this.props.messages }
                    sendMessage={ this.sendMessage }
      />
      <ChatList/>
    </div>
    );
  }
}
const mapStateToProps = ({ chatReducer }) => ({
   messages: chatReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
