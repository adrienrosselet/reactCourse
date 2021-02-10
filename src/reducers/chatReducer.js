import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";
import { DELETE_CHAT } from "../actions/chatActions";
import { RESET_CHAT } from "../actions/chatActions";
//import { SUCCESS_MESSAGES_LOADING } from "../actions/messageActions";
import { SUCCESS_CHATS_LOADING } from "../actions/chatActions";

const initialStore = {
   chats: {
     1: {title: 'Чат 1', messageList: []},
     2: {title: 'Чат 2', messageList: []},
     3: {title: 'Чат 3', messageList: []},
    },
   isLoading: true,
};


export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
     // case SUCCESS_MESSAGES_LOADING: {
     //     const chats = {...store.chats};
     //     action.payload.forEach(msg => {
     //         const { id, chatId } = msg;
     //         chats[chatId].messageList.push(id);
     //     });
     //     return update(store, {
     //         chats: { $set: chats },
     //         isLoading: { $set: false },
     //     });
     //  }
      case SUCCESS_CHATS_LOADING: {
       return update(store, {
         chats: { $set: action.payload.entities.chats },
         isLoading: { $set: false },
       });
      }
      case SEND_MESSAGE: {
          return update(store, {
              chats: { $merge: { [action.chatId]: {
                  title: store.chats[action.chatId].title,
                  messageList: [...store.chats[action.chatId].messageList, action.messageId]
              } } },
          });
      }
      case ADD_CHAT: {
          const chatId = Object.keys(store.chats).length + 1;
          return update(store, {
             chats: { $merge: {
                 [chatId]: {
                     title: action.title, messageList: []
             } } },
          });
      }
      case DELETE_CHAT: {
          const chatId = Object.keys(store.chats).length + 1;
          return update(store, {
             chats: { $merge: {
                 [action.chatId]: {
                     title: '', messageList: []
             } } },
          });
      }
      case RESET_CHAT: {
        return update(store, {
           chats: { $set: {
             1: {title: 'Чат 1', messageList: []},
             2: {title: 'Чат 2', messageList: []},
             3: {title: 'Чат 3', messageList: []},
           } },
        });
      }
      default:
          return store;
  }
}
