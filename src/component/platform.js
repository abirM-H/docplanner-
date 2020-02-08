import React from 'react'



const PlatForm = (props)=>{
    return(
       <div className='listCountries'>
          {props.listPalatform.map((el)=>
          <div className="countries">
              <img src={el.logo} />
              <h4 className='titre'>{el.titre}</h4>
              <p className="description-countries">{el.text}</p>
          </div>
          )}

       </div>
    )
}
export default PlatForm