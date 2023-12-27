import React from 'react' ;
import './Footer.css' ;

import logo from '../../assets/GPT-3.svg';



const Footer = () => {
  return (
    <div className='gpt3__footer'>

      <div className='gpt3__footer-header'>
            <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
             <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>

          <div className='gpt3__footer-links__logo'>
            <img src={ logo } alt='logo' />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

            <div className='gpt3__footer-links__div'>
                  <div>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                  </div>

                  <div>
                    <h4>Company</h4>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                  </div>

                  <div>
                    <h4>Get in Touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>0817-834-0961</p>
                    <p>bhupendrapal0994@gmail.com</p>
                  </div>


            </div>
          
                
          <div>

          </div>


      </div>


    </div>
  )
}

export default Footer