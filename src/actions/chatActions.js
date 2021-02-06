export const ADD_CHAT = '@@chat/ADD_CHAT';
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
