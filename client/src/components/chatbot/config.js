import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Buyrun nece komeklik ede bilerem ?`)],
  botName: "Electronics Store",

  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "green"
    },
    chatButton: {
      backgroundColor: "green"
    }
  },

  state: {
    productName: ['Apple Iphone 15 Pro']
  }
}

export default config