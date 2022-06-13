import React, { useEffect } from 'react';
import {user} from "../Join/Join"
import socketIO from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png";

const ENDPOINT = "http://localhost:4500"; 




const Chat = () => {

    const socket = socketIO(ENDPOINT, {transports: ['websocket'] });

    useEffect(() => {
      socket.on('connect', ()=> {
        alert("Server Connected")
      })

      socket.emit('joined', {})
      return () => {
        
      }
    }, [socket])
    


  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'></div>
            <div className='chatBox'></div>
            <div className='inputBox'>
               <input type="text" id="chatInput" />
               <button className='sendBtn'><img src={sendLogo} alt="Send" /></button>
            </div>
        </div>       
    </div>
  )
}

export default Chat