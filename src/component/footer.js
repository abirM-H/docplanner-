import React from 'react'


const Footer = (props) =>{

    return(

        <div className='contryfooter'>
     {props.tabfooter.map((el) =>

       <p className='cont'> {el.firstcountrie}</p>
        )}

        </div>
    )
}
export default Footer