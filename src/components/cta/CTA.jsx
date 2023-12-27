import React from 'react'
import './CTA.css'
const CTA = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-text'>
         <p>Request Early Access to Get Started</p>
         <h1>Register today & start exploring the endless possiblities.</h1>
      </div>

      <div className='gpt3__cta-button'>
        <a href='https://chat.openai.com/auth/login' target='_blank'><button type='button'>Get Started</button></a>
      </div>
    </div>
  )
}

export default CTA