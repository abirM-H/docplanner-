import React from 'react'

const BoxSearch = (props)=>{
    return(
       <div className='boxsearch'>
           {props.cardList.map((el,i)=>(
            <div  className={`position ${el.background}`}>    
            <p className='Type-box'>{el.type}</p>
            <p className='description-box'>{el.description}</p>
            <div>
            {el.country ? (
          <select className="select">{el.country.map((element,j)=>(
                <option value={element}>{element}</option>
            ))}
            
          </select>
          ): null}
          <img className="img-patient" src={el.image} />
          </div>
          </div>
        
      ))}
    </div>
  );
}
export default BoxSearch