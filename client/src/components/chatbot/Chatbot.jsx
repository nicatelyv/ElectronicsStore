import React from 'react'
import { Chatbot } from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import './style.scss'


export default function ChatbotComponents() {
    return (
        <div className='chatbot'>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
    )
}
