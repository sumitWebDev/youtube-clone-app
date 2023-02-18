import React from 'react'

function ChatMessage({name,message}) {
    return (
        <div className='flex items-center overflow-y-scroll '>
        <img className = "h-8"  alt="menu" src= "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        </div>
    )
}

export default ChatMessage
