import React from 'react' ;
import './Feature.css' ;



const Feature = ( {tittle , text } ) => {
  return (
    <div  className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-text'>
        <div>
         <div className='gpt3__features-container__feature-div' />
         <h1>{ tittle }</h1>
        </div>
         <p>{ text }</p>
      </div>
    </div>
  )
}

export default Feature