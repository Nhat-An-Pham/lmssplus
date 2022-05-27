import React from 'react'

import userData from '../assets/data/UserData'

const ChatBox = () => {


  return (
    <div className='chatBox'>
      <div className='chatBox__messageShow'>
        <div className='chatBox__messageShow__item chatBox__messageShow__item--imgText'>
          <div className='chatBox__messageShow__item--img'>
            <img src={userData.userImg} alt="" />
          </div>
          <div className="chatBox__messageShow__item--content">
            <div className='chatBox__messageShow__item__item--nameTime'>
              <p2>{userData.userName} - </p2>
              <p2>Now</p2>
            </div>
            <div className='chatBox__messageShow__item__item--msg'>
              <p>{userData.fakeMsg}</p>
            </div>
          </div>
        </div>

      </div>
      <div className='chatBox__inputMessage'>
        <input className='chatBox__inputMessage__item chatBox__inputMessage__item--input' placeholder='Input Message' />
        <button className='chatBox__inputMessage__item chatBox__inputMessage__item--btn'>SEND</button>
      </div>
    </div>
  )
}

export default ChatBox