// export const ADD_CHAT = '@@chat/ADD_CHAT';
// export const DELETE_CHAT = '@@chat/DELETE_CHAT';
// export const RESET_CHAT = '@@chat/RESET_CHAT';
//
// export const addChat = (title) => ({
//    type: ADD_CHAT,
//    title,
// });
// export const deleteChat = (title) => ({
//    type: DELETE_CHAT,
//    title,
// });
// export const resetChat = (title) => ({
//    type: RESET_CHAT,
//    title,
// });

import { RSAA, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chats } from '../utils/schemas';

export const ADD_CHAT = '@@chat/SEND_MESSAGE';
 export const DELETE_CHAT = '@@chat/DELETE_CHAT';
 export const RESET_CHAT = '@@chat/RESET_CHAT';

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});
export const deleteChat = (title) => ({
   type: DELETE_CHAT,
   title,
});
export const resetChat = (title) => ({
   type: RESET_CHAT,
   title,
});

export const START_CHATS_LOADING = '@@chat/START_CHATS_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING';
export const ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING';

export const loadChats = () => ({
   [RSAA]: {
       endpoint: '/api/chats.json',
       method: 'GET',
       types: [
           START_CHATS_LOADING,
           {
               type: SUCCESS_CHATS_LOADING,
               payload: (action, state, res) => getJSON(res).then(
                   json => normalize(json, [chats]),
               ),
           },
           ERROR_CHATS_LOADING,
       ],
   },
});
