import React from 'react'
import styled from 'styled-components'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './ChatBot/ActionProvider'
import config from './ChatBot/config'
import MessageParser from './ChatBot/MessageParser'

const Window = styled.div`
// Position
        position: fixed;
        bottom: 36px;
        right: 34px;
        // Size
        /* width: 530px;
        height: 420px; */
        max-width: calc(100% - 48px);
        max-height: calc(100% - 48px);
        background-color: white;
        // Border
        border-radius: 12px;
        /* border: 2px solid #0f2648; */
        overflow: hidden;
        // Shadow
        box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.33);

        .react-chatbot-kit-chat-container {
            width: 530px ;
        height: 420px;
        justify-content: start;
        display: flex;

}

.react-chatbot-kit-chat-inner-container {
            width: 529px ;
        height: 419px;
    }
.react-chatbot-kit-chat-bot-message-container {
       width: fit-content;
       display: flex;
    align-items: center;
}

.react-chatbot-kit-user-chat-message{
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    height: fit-content;
    background-color: #0f2648;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    width: fit-content;
    max-width: 520px;
    border-bottom-right-radius: 0;
}

.react-chatbot-kit-chat-header{
    color: #0f2648;
    font-size: large;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 10px;
    margin: 10px;
}

.react-chatbot-kit-chat-message-container{
    max-height: 340px;
    overflow-x: hidden;
    
::-webkit-scrollbar{
    width: 5px;
    scroll-behavior: smooth;
}
::-webkit-scrollbar-thumb{
    background-clip: padding-box;
    border-right: 1px white solid;
    background-color: #cfd4da;
    border-radius: 6px;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
}

.react-chatbot-kit-chat-input-form{
    width: 90%;
    height: 2.2rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid grey;
}

.react-chatbot-kit-chat-input{
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    border-radius: 15px;
    padding-left: 10px;
}

.react-chatbot-kit-chat-btn-send{
width: 30px;
    height: 29px;
    border: none;
    border-radius: 20px;
    color: #fff;
    position: fixed;
    right: 6rem;
}

.react-chatbot-kit-chat-input-container{
    margin: 12px;
}

.react-chatbot-kit-user-chat-message-container{
align-items: center;
}

.react-chatbot-kit-user-chat-message-arrow{
    display: none;
}

.react-chatbot-kit-chat-bot-message{
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    height: fit-content;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    width: fit-content;
    border-bottom-left-radius: 0;
}

.react-chatbot-kit-chat-bot-message-arrow {
    display: none;
}

.react-chatbot-kit-chat-btn-send{
background: url(https://cutewallpaper.org/24/white-arrow-png/download-hd-right-arrow-white-png-right-arrow-png-white-transparent-png-image-nicepngcom.png);
background-repeat: no-repeat;
background-position: center;
background-size: 20px;
}

.react-chatbot-kit-chat-btn-send-icon{
    display: none;
}

&.transition-5 {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
}
`

const SupportWindow = (prop) => {
    return (
        <Window
            className='transition-5 '
            style={{
                ...{ display: prop.visible ? '' : 'none' }
            }}
        >
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
            />
        </Window>
    )
}

export default SupportWindow
