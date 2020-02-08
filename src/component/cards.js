import React from 'react'
import { tsPropertySignature } from '@babel/types'



const Cards =(Props)=>{
    return(
        <div className="listCountry">
            {Props.tabCards.map((el)=>
            <div className='listcard'> 
              <img className="imgCard" src={el.image} />
             <div className='desCard'>
             <a href="#" className='titre'>{el.country}</a>
              
              <button className='bouttonCard' type='button'>{el.button}</button>
              </div>
              

            </div>

                
                
                )}
        </div>
    )
}
export default Cards