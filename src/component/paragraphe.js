import React from 'react'

const Paragraphe =(props)=>{
    return(
        <div className="bloc-introduction">
        {props.Description.map((el)=>
        <p className='presentation'>{el.Paragraphe}</p>
        )}
        </div>
    )
}
export default Paragraphe