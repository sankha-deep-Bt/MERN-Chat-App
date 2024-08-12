import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";

const MessageInput = () => {
  return (
    <form className='px-2 my-3'>
        <div className="w-full flex items-center">
            <input type="text" 
            className='border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white'/>
            <button type='submit' className='p-3 rounded text-white ml-2 bg-black'>
                <LuSendHorizonal />
            </button>
        </div>
    </form>
  )
}

export default MessageInput



