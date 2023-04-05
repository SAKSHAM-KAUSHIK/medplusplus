import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName:"MED++ chat",
    initialMessages: [createChatBotMessage(`Hi, How can I help you today?`)],
    customStyles: {
        botMessageBox: {
          backgroundColor: '#cfd4da',
        },
        chatButton: {
          backgroundColor: '#0f2648',
        },
      },
}

export default config