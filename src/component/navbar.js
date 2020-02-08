import React from 'react';

const Navbar=(props)=>{
    return(
        <div>
         <ul className='menu'>  
          {props.menu.map ((el, i)=> <div key={i}>
            <li className='list'>
            <a className="list-color" href="#">{el.title}</a>
            </li>
          {el.SousMenu?(
              <ul className="sous-menu">
                  {el.SousMenu.map((element, j)=>
                    <li key={j}>
                         <a className="menu-color" href="#">{element}</a>
                    </li>
                    )}
              </ul>
          ):null}  

       </div>
)}
          </ul> 
        </div>
    )
}
export default Navbar