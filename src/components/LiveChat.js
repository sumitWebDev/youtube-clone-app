import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage'
import {generateRandomeName,generateString} from '../utils/helpers'

function LiveChat() {
const dispatch = useDispatch();
const chatMessages = useSelector((store) => store.chat.messages);
const [inputValue, setInputValue] = useState();

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomeName(),
                message : generateString(20)+"🚀"
            }))
        },2000)

        return () => clearInterval(i)
    },[])
    return (
        <div>
        <div className = ' h-[600px] p-2 border border-black bg-slate-100 rounded-lg flex-col-reverse'>
            Live Chat
        <div>
        {chatMessages.map((c,index) =>
            <ChatMessage name={c.name}  message={c.message}/>

            )}
            </div>


        </div>
        <form className='width-full p-2 m-2 ' onSubmit={(e)=>{
            e.preventDefault();
            setInputValue('')
        }}>
            <input type="text" className='border border-black' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=>dispatch(addMessage({
                name: "Sumit",
                message : inputValue
            })) }>Submit</button>
        </form>
        </div>
    )
}

export default LiveChat
