import React from 'react';
import './components.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import './chatList.css'
import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";

import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { addChat } from './actions/chatActions';

class ChatList extends React.Component{

  // state = {
  //   chats: [{name: 'chat noir', id: '1'},{name: 'chat botte', id: '2'},{name: 'chatiment', id: '3'}]
  // };


  // static propTypes = {
  //      chats: PropTypes.object.isRequired,
  //      addChat: PropTypes.func.isRequired,
  //  };

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
  renderList = (ele, index) => {
    return(
      <Link key={index} to={"/chat/"+(index+1)+"/"}>
        <ListItem button>
          <ListItemIcon >
            <SendIcon />
          </ListItemIcon>
          <ListItemText  primary={ele.title} />
        </ListItem>
      </Link>
    );
  }

  render(){
    return (
      <List className='chatlist-ul'>
          {Object.values(this.props.chats).map(this.renderList)}
          <ListItem>
          <form onSubmit={this.submitHandler}>
            <input type="text" value={this.state.newChatName} onChange={this.changeHandler} />
            <input type='submit' />
          </form>
          </ListItem>
      </List>
    );
  }
}

const mapStateToProps = ({ chatReducer }) => ({
   chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
