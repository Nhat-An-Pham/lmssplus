import React from 'react'

const ChatBox = () => {
  return (
    <div className='chatBox'>
      <div className='chatBox__messageShow'>

      </div>
      <div className='chatBox__inputMessage'>
          <input className='chatBox__inputMessage__item chatBox__inputMessage__item--input' placeholder='Input Message'/>
          <button className='chatBox__inputMessage__item chatBox__inputMessage__item--btn'>SEND</button>
      </div>
    </div>
  )
}

export default ChatBox