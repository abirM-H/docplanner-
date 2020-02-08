import React from 'react'

const CompanyList =(props)=>{
    return(
        <div>
            {props.ListCompany.map((el,i)=>
                 <a href={el.link}><svg className="culture"  xmlns={el.xmlns} xmlns="http://www.w3.org/2000/svg" width={el.width} height={el.height} viewBox={el.viewBox}><path d={el.path}></path></svg></a>
                
                )}
        </div>
    )
}
export default CompanyList