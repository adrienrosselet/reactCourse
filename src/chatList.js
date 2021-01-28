import React from 'react';
import './components.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

export default class ChatList extends React.Component{
  render(){
    return (

      <List className='chatlist-ul'>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="chat noir" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="chat botte" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="chatiment" />
        </ListItem>
      </List>
    );
  }
}
// <ul className='chatlist-ul'>
//   <li>chat noir</li>
//   <li>chat botte</li>
//   <li>chatiment</li>
// </ul>
