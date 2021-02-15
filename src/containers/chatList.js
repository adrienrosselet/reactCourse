import React from 'react';
//import './components.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import './chatList.css'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import { push } from 'connected-react-router';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { addChat } from '../actions/chatActions';

class ChatList extends React.Component{

  // state = {
  //   chats: [{name: 'chat noir', id: '1'},{name: 'chat botte', id: '2'},{name: 'chatiment', id: '3'}]
  // };

  static propTypes = {
         chats: PropTypes.object.isRequired,
         addChat: PropTypes.func.isRequired,
         push: PropTypes.func.isRequired,
     };

   state = {
       newChatName: ''
   };
   changeHandler = (event) => {
     this.setState({ newChatName: event.target.value });
   }
   submitHandler = (event) => {
     this.props.addChat(this.state.newChatName);
     event.preventDefault();
   }

   handleNavigate = (link) => {
       this.props.push(link);
   };

  // renderList = (ele, index) => {
  //   return(
  //     <Link key={index} onClick={ () => this.handleNavigate("/chat/"+(index+1)+"/") } >
  //       <ListItem button >
  //         <ListItemIcon >
  //           <SendIcon />
  //         </ListItemIcon>
  //         <ListItemText  primary={ele.title} />
  //       </ListItem>
  //     </Link>
  //   );
  // }
  renderList = (chatId) => {
    return(
        <ListItem key={ chatId } onClick={ () => this.handleNavigate(`/chat/${chatId}/`)} className='chatList-item'>
          <ListItemIcon >
            <SendIcon />
          </ListItemIcon>
          <ListItemText  primary={this.props.chats[chatId].title} />
        </ListItem>
    );
  }

  render(){
    // const { chats } = this.props;
    // const chatElements = Object.keys(chats).map(chatId => (
    //               <ListItem
    //                   key={ chatId }
    //                   primaryText={ chats[chatId].title }
    //                   leftIcon={ <ContentSend /> }
    //                   onClick={ () => this.handleNavigate(`/chat/${chatId}`) }
    //               />));

    return (
      <List className='chatlist-ul'>
          {Object.keys(this.props.chats).map(this.renderList)}
          <ListItem>
          <form onSubmit={this.submitHandler}>
            <input type="text" value={this.state.newChatName} onChange={this.changeHandler} />
            <input type='submit' />
          </form>
          </ListItem>
      </List>

    )
  }
}

// const { chats } = this.props;
// const chatElements = Object.keys(chats).map(chatId => (
//            <ListItem
//                key={ chatId }
//                primaryText={ chats[chatId].title }
//                leftIcon={ <SendIcon /> }
//                onClick={ () => this.handleNavigate(`/chat/${chatId}`) }
//            />));

// <List className='chatlist-ul'>
//         { chatElements }
//         <ListItem
//           key="Add new chat"
//           leftIcon={ <SendIcon /> }
//           onClick={ this.handleAddChat }
//           style={ { height: '60px' } }
//           children= {<TextField
//             key="textField"
//             fullWidth
//             name="input"
//             hintText="Добавить новый чат"
//             onChange={ this.handleChange }
//             value={ this.state.input }
//             onKeyUp={ this.handleKeyUp }
//           />}
//         />
// </List>

//Object.values(this.props.chats).map(this.renderList)
const mapStateToProps = ({ chatReducer }) => ({
   chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
