import React from 'react';
import './components.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import './chatList.css'
import { Link } from 'react-router-dom';

export default class ChatList extends React.Component{
  state = {
    chats: [{name: 'chat noir', id: '1'},{name: 'chat botte', id: '2'},{name: 'chatiment', id: '3'}]
  };

  renderList = (ele, index) => {
    return(
      <Link to={"/chat/"+ele.id+"/"}>
        <ListItem key={index} button>
          <ListItemIcon >
            <SendIcon />
          </ListItemIcon>
          <ListItemText  primary={ele.name} />
        </ListItem>
      </Link>
    );
  }

  render(){
    return (

      <List className='chatlist-ul'>
          {this.state.chats.map(this.renderList)}
      </List>
    );
  }
}
// <ul className='chatlist-ul'>
//   <li>chat noir</li>
//   <li>chat botte</li>
//   <li>chatiment</li>
// </ul>
