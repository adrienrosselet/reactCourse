export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const RESET_MESSAGE = '@@chat/RESET_MESSAGE';
export const sendMessage = (messageId, text, sender, chatId) => ({
   type: SEND_MESSAGE,
   messageId,
   text,
   sender,
   chatId,
});
export const resetMessage = () => ({
  type: RESET_MESSAGE,
});
